import React from 'react';
import {IChatProps} from "./types";
import MessageContainer from "./message-container";
import {InputMessage} from "./input-message";

export const Chat: React.FC<IChatProps> = (
    {
        messages,
    }
) => {
    return (
        <div className="chat__wrapper">
            <div className="chat">
                {
                    messages.map((message, idx) => (
                        <MessageContainer groupMessage={message} key={idx}/>
                    ))
                }
            </div>
            <InputMessage/>
        </div>

    );
};