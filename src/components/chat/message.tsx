import React from 'react';
import {AvailableUser, IMessageProps} from "./types";
import {getLabelTimeFromTimestamp} from "../../helpers";
import {MOCK_USER_IMAGES} from "../../constants";

export const Message: React.FC<IMessageProps> = (
    {
        message,
        isMyMessage,
    }
) => {

    const {
        text,
        ts,
        username,
    } = message;
    
    const messageClasses = ["message", isMyMessage ? "message_my" : null].join(" ");
    const textClasses = ["message__text", isMyMessage ? "message_bg-light" : null].join(" ");

    return (
        <div className={messageClasses}>

            <img src={MOCK_USER_IMAGES[username as AvailableUser]}
                 className="message__avatar"
                 alt={""}/>

            <div className={textClasses}>
                <p>{text}</p>
                <span className="message__time">
                    {getLabelTimeFromTimestamp(ts)}
                </span>
            </div>
        </div>
    );
};