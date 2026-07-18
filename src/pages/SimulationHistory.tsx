import { SimulationCard } from '@/components/features/History/Simulation';
import { PageHero } from '@/components/shared/PageHero';
import type { SimulationRecord } from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'simulation-data';

export function SimulationHistory() {
  const [simulations, setSimulations] = useState<SimulationRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { deleteSimulation } = useSimulationStorage();

  useEffect(() => {
    const loadSimulations = () => {
      try {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
        const savedData = storage
          ? (JSON.parse(storage) as SimulationRecord[])
          : [];

        const sorted = [...savedData].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setSimulations(sorted);
      } catch (error) {
        console.error('Error loading simulations:', error);
        setSimulations([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadSimulations();
  }, []);

  const handleDeleteSimulation = (id: string) => {
    deleteSimulation(id);
    setSimulations((current) =>
      current.filter((simulation) => simulation.id !== id)
    );
  };

  return (
    <main className="max-1w-xl mx-auto px-4 py-10 sm:px-14 sm:py-14">
      <PageHero
        title="Histórico de Simulações"
        subtitle="Visualize todas as suas simulações anteriores e seus resultados"
      />

      <section className="mt-8 flex flex-col gap-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Carregando simulações...</p>
          </div>
        ) : simulations.length > 0 ? (
          simulations.map((simulation) => (
            <SimulationCard
              key={simulation.id}
              simulation={simulation}
              onDelete={handleDeleteSimulation}
            />
          ))
        ) : (
          <div className="bg-card flex flex-col items-center justify-center gap-4 rounded-2xl px-4 py-12">
            <p className="text-foreground text-center font-medium">
              Nenhuma simulação encontrada
            </p>
            <p className="text-muted-foreground text-center text-sm">
              Crie sua primeira simulação para começar a planejar seus objetivos
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
