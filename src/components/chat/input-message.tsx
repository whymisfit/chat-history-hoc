import React, {useState} from 'react';
import {useChatContext} from "../../hooks";

export const InputMessage: React.FC = () => {

    const [message, setMessage] = useState<string>("");
    const {sendMessage} = useChatContext();

    const onMessageChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value);
    }

    const onMessageSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendMessage(message);

        setMessage("");
    }

    const disabled = message.length === 0 || message.replaceAll(" ", "").length === 0;

    return (
        <form onSubmit={onMessageSubmit} className="input-message">
            <input value={message}
                   placeholder={"Write a message ..."}
                   onChange={onMessageChange}/>
            <button disabled={disabled}>send</button>
        </form>
    );
};