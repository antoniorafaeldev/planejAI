import { Divider } from '@/components/shared/Divider';
import { MessageCircle } from 'lucide-react';

interface UserQuestionProps {
  question: string;
}

export function UserQuestion({ question }: UserQuestionProps) {
  return (
    <div className="bg-card mt-6 rounded-2xl p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
      <Divider orientation="horizontal" spacing={16} />
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-full">
          <MessageCircle size={18} />
        </div>
        <span className="text-foreground text-sm font-semibold">Você</span>
      </div>
      <div className="bg-muted-primary/10 text-foreground dark:bg-muted-primary dark:text-foreground mt-4 rounded-2xl p-4 text-sm">
        {question}
      </div>
    </div>
  );
}
