export type AvailableUser = "User_1" | "User_2";
export type AvatarUserType = {
    [user in AvailableUser]: string
}

export type Message = {
    id: string,
    text: string,
    ts: number,
    username: string,
}

export type Messages = Message[];

export type GroupMessage = {
    date: Date,
    messages: Messages,
}

export type GroupedMessages = GroupMessage[];

export interface IChatProps {
    messages: GroupedMessages,
}

export interface IMessageProps {
    message: Message,
    isMyMessage?: boolean,
}

export interface IMessageContainerProps {
    groupMessage: GroupMessage,
}

export interface IDateMessageGroupProps {
    date: Date,
}