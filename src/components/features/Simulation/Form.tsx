import { PiggyBank } from 'lucide-react';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';

export function SimulationForm() {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={6} />
      <FormStep
        icon={PiggyBank}
        title="Qual o seu nome"
        question="Qual o seu nome"
        inputProps={{
          type: 'text',
          placeholder: '5000',
          prefix: 'R$',
        }}
      />
    </>
  );
}
