import { Divider } from '@/components/shared/Divider';
import { MessageCircle } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';

interface AIResponseProps {
  response: string | null;
  isLoading: boolean;
}

export function AIResponse({ response, isLoading }: AIResponseProps) {
  return (
    <div className="bg-card mt-6 rounded-2xl p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
      <Divider orientation="horizontal" spacing={16} />
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-full">
          <MessageCircle size={18} />
        </div>
        <span className="text-foreground text-sm font-semibold">
          Resposta da IA
        </span>
      </div>
      <div className="bg-muted-primary/10 text-foreground dark:bg-muted-primary dark:text-foreground mt-4 rounded-2xl p-4 text-sm">
        <p className="leading-relaxed">
          {isLoading ? <Skeleton count={7} /> : response}
        </p>
      </div>
    </div>
  );
}
