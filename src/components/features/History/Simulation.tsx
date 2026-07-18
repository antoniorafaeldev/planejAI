import { Button } from '@/components/shared/Button';
import { Divider } from '@/components/shared/Divider';
import type { SimulationRecord } from '@/data/simulation';
import { formatCurrencyMask } from '@/utils/currency';
import { calcMonthlySavings } from '@/utils/simulation';
import { ExternalLink, Goal, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface SimulationCardProps {
  simulation: SimulationRecord;
  onDelete?: (id: string) => void;
}

export function SimulationCard({ simulation, onDelete }: SimulationCardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const monthlySavings = calcMonthlySavings(simulation);
  const formattedSavings = formatCurrencyMask(
    String(Math.abs(monthlySavings * 100))
  );

  const handleViewDetails = () => {
    navigate(`/resultado/${simulation.id}`);
  };

  const handleDeleteSimulation = () => {
    onDelete?.(simulation.id);
  };

  return (
    <div className="bg-card dark:bg-card flex flex-col gap-4 rounded-2xl p-4 lg:flex-row lg:items-center lg:gap-6 lg:p-6">
      {/* Goal Icon */}
      <div className="shrink-0 sm:mx-auto lg:mx-0">
        <div className="bg-muted-primary dark:bg-muted-primary flex h-12 w-12 items-center justify-center rounded-full">
          <Goal size={24} className="text-primary dark:text-primary" />
        </div>
      </div>

      {/* Goal Name and Date */}
      <div className="min-w-0 flex-1 sm:mx-auto lg:mx-0">
        <h3 className="text-foreground dark:text-foreground truncate font-bold">
          {simulation.goalName}
        </h3>
        <p className="text-muted-foreground dark:text-muted-foreground text-sm">
          {formatDate(simulation.createdAt)}
        </p>
      </div>

      {/* Information Grid for Mobile, Flex for Desktop */}
      <div className="grid grid-cols-3 gap-3 sm:mx-auto lg:mx-auto lg:flex lg:flex-1 lg:gap-6">
        {/* Goal Cost */}
        <div className="flex flex-col items-start gap-1">
          <p className="text-muted-foreground dark:text-muted-foreground text-xs font-semibold uppercase">
            Custo da Meta
          </p>
          <p className="text-foreground dark:text-foreground text-xs font-bold lg:text-sm">
            R$ {simulation.goalAmount}
          </p>
        </div>

        {/* Deadline */}
        <div className="flex flex-col items-start gap-1">
          <p className="text-muted-foreground dark:text-muted-foreground text-xs font-semibold uppercase">
            Prazo
          </p>
          <p className="text-foreground dark:text-foreground text-xs font-bold lg:text-sm">
            {simulation.goalDeadline} meses
          </p>
        </div>

        {/* Monthly Savings */}
        <div className="flex flex-col items-start gap-1">
          <p className="text-muted-foreground dark:text-muted-foreground text-xs font-semibold uppercase">
            Economia Mensal
          </p>
          <p className="text-foreground dark:text-foreground text-xs font-bold lg:text-sm">
            R$ {formattedSavings}
          </p>
        </div>
      </div>

      {/* Vertical Divider */}
      <Divider
        orientation="vertical"
        spacing={8}
        className="dark:bg-border hidden lg:block"
      />

      {/* Action Buttons Container */}
      <div className="flex shrink-0 items-center gap-2 sm:mx-auto lg:mx-auto lg:gap-3">
        {/* Delete Button */}
        <button
          onClick={handleDeleteSimulation}
          className="text-muted-foreground dark:text-muted-foreground focus:ring-primary dark:focus:ring-primary dark:focus:ring-offset-background rounded-lg p-2 transition-colors hover:text-red-500 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:text-red-500"
          aria-label="Delete simulation"
        >
          <Trash2 size={20} />
        </button>

        {/* View Details Button */}
        <Button
          variant="secondary"
          icon={ExternalLink}
          onClick={handleViewDetails}
          className="text-primary dark:text-primary"
        >
          <span className="hidden lg:inline">Ver detalhes</span>
        </Button>
      </div>
    </div>
  );
}
