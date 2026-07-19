import { Button } from '@/components/shared/Button';
import { Divider } from '@/components/shared/Divider';
import { Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

interface QuestionInputProps {
  onSubmitQuestion: (question: string) => void;
  isLoading: boolean;
}

export function QuestionInput({
  onSubmitQuestion,
  isLoading,
}: QuestionInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuestion = inputValue.trim();
    if (!trimmedQuestion) return;

    onSubmitQuestion(trimmedQuestion);
    setInputValue('');
  };

  return (
    <div className="bg-card mt-6 rounded-2xl p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
      <Divider orientation="horizontal" spacing={16} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="ai-question-input">
          Faça sua pergunta para a IA
        </label>
        <input
          id="ai-question-input"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Faça sua pergunta sobre esta simulação"
          className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 dark:border-border dark:text-foreground w-full rounded-2xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none dark:bg-slate-950"
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="primary"
          icon={Send}
          className="flex items-center justify-center rounded-2xl px-4 py-3 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
