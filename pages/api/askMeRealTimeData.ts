import { PINECONE_INDEX_NAME } from "@/config/pinecone";
import { askMeRealTimeData } from "@/utils/apiHelper";
import { pinecone } from "@/utils/pinecone-client";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { question, history, nameSpace, temperature, basePrompt } = req.body;

  console.log("question", question);

  //only accept post requests
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!question) {
    return res.status(400).json({ message: "No question in the request" });
  }
  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  try {
    const index = await pinecone.Index(PINECONE_INDEX_NAME);

    /* create vectorstore*/
    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: "text",
        namespace: nameSpace,
      }
    );

    //create chain
    console.log(temperature, basePrompt);
    const chain = askMeRealTimeData(vectorStore, temperature, basePrompt);
    //Ask a question using chat history
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    console.log("response", response);
    res.status(200).json(response);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
