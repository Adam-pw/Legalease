import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

export const askMeRealTimeData = (
  vectorstore: PineconeStore,
  temperature: any,
  basePrompt: any
) => {
  const QA_PROMPT = `
${basePrompt}
  {context}

  Question: {question}
  Compassionate response in markdown:`;
  const model = new OpenAI({
    temperature: parseFloat(temperature), // increase temepreature to get more creative answers
    modelName: process.env.OPENAI_GPT_MODEL, //change this to gpt-4 if you have access
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    }
  );
  return chain;
};
