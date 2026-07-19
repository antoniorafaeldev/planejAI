import { AIResponse } from '@/components/features/AIConversation/AIResponse';
import { QuestionInput } from '@/components/features/AIConversation/QuestionInput';
import { UserQuestion } from '@/components/features/AIConversation/UserQuestion';
import { AIInsightsCard } from '@/components/features/SimulationResults/AIInsightCard';
import type { QuestionAndAnswer } from '@/data/simulation';

interface ConversationSectionProps {
  simulationId: string;
  conversationHistory: QuestionAndAnswer[];
  isLoading: boolean;
  pendingQuestion: string | null;
  onSubmitQuestion: (question: string) => void;
}

export function ConversationSection({
  simulationId,
  conversationHistory,
  isLoading,
  pendingQuestion,
  onSubmitQuestion,
}: ConversationSectionProps) {
  return (
    <section className="bg-card dark:bg-card border-border max-h-110 overflow-y-auto rounded-3xl border p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:scrollbar-thin lg:[scrollbar-color:var(--border)_transparent] lg:pr-2">
      <AIInsightsCard simulationId={simulationId} />

      <div className="mt-6 flex flex-col gap-4">
        {conversationHistory.map((item, index) => (
          <div key={`${item['user-input']}-${index}`}>
            <UserQuestion question={item['user-input']} />
            <AIResponse response={item['ai-output']} isLoading={false} />
          </div>
        ))}

        {pendingQuestion && (
          <div>
            <UserQuestion question={pendingQuestion} />
            <AIResponse response={null} isLoading={isLoading} />
          </div>
        )}
      </div>

      <QuestionInput
        onSubmitQuestion={onSubmitQuestion}
        isLoading={isLoading}
      />
    </section>
  );
}
