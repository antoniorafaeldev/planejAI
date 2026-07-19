import { useCallback, useEffect, useRef, useState } from 'react';

import { buildAIQuestionPrompt } from '@/data/aiPrompt';
import type { QuestionAndAnswer, SimulationRecord } from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import {
  getAIResponse,
  type AIConversationResponse,
} from '@/services/aiService';

export const useAIConversation = (simulationId: string) => {
  const isRequestPending = useRef(false);
  const { getFormData, updateSimulation } = useSimulationStorage();

  const [response, setResponse] = useState<AIConversationResponse | null>(null);
  const [conversationHistory, setConversationHistory] = useState<
    QuestionAndAnswer[]
  >(() => {
    const simulation = getFormData(simulationId);
    return simulation?.['question-and-answers'] ?? [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askQuestion = useCallback(
    async (userQuestion: string) => {
      const trimmedQuestion = userQuestion.trim();

      if (!trimmedQuestion) {
        setError('Digite uma pergunta antes de enviar.');
        return null;
      }

      if (isRequestPending.current) {
        return null;
      }

      const simulation = getFormData(simulationId);

      if (!simulation) {
        setError('Simulação não encontrada.');
        return null;
      }

      isRequestPending.current = true;
      setIsLoading(true);
      setError(null);

      try {
        const prompt = buildAIQuestionPrompt(simulationId, trimmedQuestion);
        const data = await getAIResponse<AIConversationResponse>(prompt);
        const questionAndAnswer: QuestionAndAnswer = {
          'user-input': trimmedQuestion,
          'ai-output': data.aiResponse,
        };

        setResponse(data);
        setConversationHistory((current) => [...current, questionAndAnswer]);

        updateSimulation(simulationId, {
          ...simulation,
          'question-and-answers': [
            ...(simulation['question-and-answers'] ?? []),
            questionAndAnswer,
          ],
        } as SimulationRecord);

        return questionAndAnswer;
      } catch {
        setError('Não foi possível enviar sua pergunta. Tente novamente.');
        return null;
      } finally {
        isRequestPending.current = false;
        setIsLoading(false);
      }
    },
    [getFormData, simulationId, updateSimulation]
  );

  useEffect(() => {
    return () => {
      isRequestPending.current = false;
    };
  }, []);

  return { response, conversationHistory, isLoading, error, askQuestion };
};
