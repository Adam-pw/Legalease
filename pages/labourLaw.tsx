import { useRef, useState, useEffect } from "react";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import LoadingDots from "@/components/ui/LoadingDots";
import { Document } from "langchain/document";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FormGeneration from "@/components/FormGeneration";

export type Message = {
  type: "apiMessage" | "userMessage";
  message: string;
  isStreaming?: boolean;
  sourceDocs?: Document[];
};

const appName = `⚖️ LegalEase (Labour Law AI)`;

export default function IncomeTax() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messageState, setMessageState] = useState<{
    messages: Message[];
    pending?: string;
    history: [string, string][];
    pendingSourceDocs?: Document[];
  }>({
    messages: [
      {
        message: `Hey !! feel free to ask me anything`,
        type: "apiMessage",
      },
    ],
    history: [],
  });

  const { messages, history } = messageState;

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault();

    setError(null);

    if (!query) {
      alert("Please input a question");
      return;
    }

    const question = query.trim();

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: "userMessage",
          message: question,
        },
      ],
    }));

    setLoading(true);
    setQuery("");

    try {
      const response = await fetch("api/askMeRealTimeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          history,
          nameSpace: "LabourLaw",
          temperature: "0.4",
          basePrompt: `Your name is legalEase, you are a legal expert on Labour laws. The user seeks legal advice from you. The name of the user is ${data.name}, the age is ${data.age} and e-mail address is ${data.email}. The user might have a criminal record that is ${data.criminalHistory} so keep that in consideration. The user has provided you with a short description or summary is the situation, which is ${data.summary}. The user’s problem is ${data.description}. It mentions how the problem started; it also mentions how it is affecting the life of the user. Understand the situation of the user in a humane way. The user might have taken some steps to remedy the problem, take those steps into consideration too.`,
        }),
      });
      const responseData = await response.json();
      console.log("data", responseData);

      if (responseData.error) {
        setError(responseData.error);
        console.log(responseData.error);
      } else {
        setMessageState((state: any) => ({
          ...state,
          messages: [
            ...state.messages,
            {
              type: "apiMessage",
              message: responseData.text,
              sourceDocs: responseData.sourceDocuments,
            },
          ],
          history: [...state.history, [question, responseData.text]],
        }));
      }
      console.log("messageState", messageState);

      setLoading(false);

      //scroll to bottom
      messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight);
    } catch (error) {
      setLoading(false);
      setError("An error occurred while fetching the data. Please try again.");
      console.log("error", error);
    }
  }

  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && query) {
      handleSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  const getLocalStorageItem = (key: any) => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  };

  const [data, setData] = useState<any>();

  useEffect(() => {
    const response = getLocalStorageItem("input");
    setData(response);
  }, []);

  return (
    <Layout>
      <div className="mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-bold flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-0 leading-[1.1] tracking-wide mt-6">
          <span className="text-[#280036] text-center">Chat With </span>
          <span className="text-[#ff0041]">{`${appName}`}</span>
        </h1>
        <main className={`${styles.main}` + " mt-2"}>
          <div className={styles.cloud}>
            <div ref={messageListRef} className={styles.messagelist}>
              {messages.map((message, index) => {
                let icon;
                let className;
                if (message.type === "apiMessage") {
                  icon = (
                    <Image
                      key={index}
                      src="/bot-image.png"
                      alt="AI"
                      width="40"
                      height="40"
                      className={styles.boticon}
                      priority
                    />
                  );
                  className = styles.apimessage;
                } else {
                  icon = (
                    <Image
                      key={index}
                      src="/usericon.png"
                      alt="Me"
                      width="30"
                      height="30"
                      className={styles.usericon}
                      priority
                    />
                  );
                  // The latest message sent by the user will be animated while waiting for a response
                  className =
                    loading && index === messages.length - 1
                      ? styles.usermessagewaiting
                      : styles.usermessage;
                }
                return (
                  <div key={`chatMessage-${index}`}>
                    <div key={`chatMessage-${index}`} className={className}>
                      {icon}
                      <div className={styles.markdownanswer}>
                        <ReactMarkdown>{message.message}</ReactMarkdown>
                      </div>
                    </div>
                    {/* enable source */}
                    {message.sourceDocs && (
                      <div className="p-5" key={`sourceDocsAccordion-${index}`}>
                        <Accordion
                          type="single"
                          collapsible
                          className="flex-col"
                        >
                          {message.sourceDocs.map((doc, index) => (
                            <div key={`messageSourceDocs-${index}`}>
                              <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>
                                  <h3>Source {index + 1}</h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ReactMarkdown>
                                    {doc.pageContent}
                                  </ReactMarkdown>
                                  <p className="mt-2">
                                    <b>Source:</b>{" "}
                                    {doc.metadata.source.substring(56)}
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </div>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.cloudform}>
              <form onSubmit={handleSubmit} className="flex">
                {/* <Editor
                  apiKey="fh5cc648hfjct1ywqu671g53k2qwl09jbczln4x9zxw0ibit"
                  init={{
                    selector: 'textarea',  // change this value according to your HTML
                    plugins: 'a_tinymce_plugin',
                    a_plugin_option: true,
                    a_configuration_option: 400
                  }};
                  onChange={(e) => setQuery(e.target.value)}
                /> */}
                <textarea
                  disabled={loading}
                  onKeyDown={handleEnter}
                  ref={textAreaRef}
                  autoFocus={false}
                  rows={1}
                  maxLength={512}
                  id="userInput"
                  name="userInput"
                  placeholder={
                    loading ? "Waiting for response..." : "Ask us anything?"
                  }
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={styles.textarea}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.generatebutton}
                >
                  {loading ? (
                    <div className={styles.loadingwheel}>
                      <LoadingDots color="#000" />
                    </div>
                  ) : (
                    // Send icon SVG in input field
                    <svg
                      viewBox="0 0 20 20"
                      className={styles.svgicon}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
          {error && (
            <div className="border border-red-400 rounded-md p-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </main>
      </div>
      <FormGeneration data={data} />
    </Layout>
  );
}
