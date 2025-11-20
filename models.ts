export type TurnId = string;

export type Heading = {
  id: string;
  level: number;
  text: string;
  domNode: HTMLElement;
};

export type Turn = {
  id: TurnId;
  role: 'user' | 'assistant';
  promptText: string;
  answerText?: string;
  headings: Heading[];
  promptNode: HTMLElement | null;
  answerNode?: HTMLElement | null;
};

export type Provider = 'claude' | 'chatgpt' | 'gemini';

export type Conversation = {
  id: string;
  provider: Provider;
  turns: Turn[];
};

export type ConversationParser = () => Conversation | null;
