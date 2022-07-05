import React from 'react';
import {Chat} from "./chat";
import {useChatContext} from "../../hooks";
import Loader from "../loader/loader";

export const ChatContainer = () => {

    const {
        messages,
        status,
    } = useChatContext();

    if (status === "loading") return <Loader/>

    return <Chat messages={messages}/>
};