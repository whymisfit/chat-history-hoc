import React, {useEffect, useState} from "react";
import {GroupedMessages, GroupMessage, Message} from "../components/chat/types";
import {getChatHistory} from "../service/chat-history";
import {generateId, messagesToGroupedMessages} from "../helpers";

export interface IChatProviderProps {
    children: React.ReactNode,
}

export interface IChatContext {
    messages: GroupedMessages,
    status: Status,
    sendMessage: (textMessage: string) => void,
}

export type Status = "idle" | "success" | "error" | "loading";

const defaultValues: IChatContext = {} as IChatContext;

export const ChatContext = React.createContext<IChatContext>(defaultValues);

export const ChatProvider: React.FC<IChatProviderProps> = ({children}) => {

    const [messages, setMessages] = useState<GroupedMessages>([]);
    const [status, setStatus] = useState<Status>("idle");

    const sendMessage = (textMessage: string) => {
        const lastGroupMessage = messages[0];

        const message: Message = {
            text: textMessage,
            ts: new Date().getTime(),
            username: "User_2", // mock
            id: generateId(),
        }

        if (lastGroupMessage.date.getDate() === new Date(message.ts).getDate()) {
            lastGroupMessage.messages.unshift(message);

            setMessages((messages) => [...messages]);
        } else {
            const newGroupMessages: GroupMessage = {
                date: new Date(message.ts),
                messages: [message],
            }

            setMessages((messages) => [newGroupMessages, ...messages,]);
        }
    }

    useEffect(() => {
        setStatus("loading");

        getChatHistory()
            .then((messages) => messagesToGroupedMessages(messages))
            .then((groupedMessages) => {
                setMessages(groupedMessages);

                setStatus("success");
            })
            .catch(() => setStatus("error"));
    }, []);

    const value: IChatContext = {
        messages,
        status,
        sendMessage,
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}