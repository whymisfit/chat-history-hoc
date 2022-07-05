import React, {useCallback} from 'react';
import {IDateMessageGroupProps, IMessageContainerProps} from "./types";
import {Message} from "./message";
import {getLabelDate} from "../../helpers";
import {MY_USER} from "../../constants";

const DateMessageGroup: React.FC<IDateMessageGroupProps> = ({date}) => {
    return (
        <p className="message-container__date">
            <span>{getLabelDate(date)}</span>
        </p>
    )
}

const MessageContainer: React.FC<IMessageContainerProps> = ({groupMessage,}) => {

    const {messages, date} = groupMessage;

    const isMyMessage = useCallback((username: string): boolean => username === MY_USER, []);

    return (
        <div className="message-container">
            <DateMessageGroup date={date}/>

            <div className="message-container__items">
                {messages.map((message) => (
                    <Message message={message}
                             isMyMessage={isMyMessage(message.username)}
                             key={message.id}/>

                ))}
            </div>

        </div>
    );
};

export default MessageContainer;