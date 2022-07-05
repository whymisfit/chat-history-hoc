import {GroupedMessages, GroupMessage, Messages} from "../components/chat/types";

export const messagesToGroupedMessages = async (messages: Messages): Promise<GroupedMessages> => {

    const groupedMessages: GroupedMessages = [];

    let group: GroupMessage = {
        messages: [],
        date: new Date(messages[0].ts),
    };

    groupedMessages.push(group);

    messages.forEach((message) => {
        const currentDate = new Date(message.ts);

        if (currentDate.getDay() === group.date.getDay()) {
            group.messages.push(message)
        } else {
            group = {
                messages: [message],
                date: new Date(message.ts),
            }
            groupedMessages.push(group);
        }
    })

    return groupedMessages;
}

export const parseDate = (date: Date): string => {
    const month = date.toLocaleDateString("en-US", {
        month: "long",
    })

    return [date.getDate(), month, date.getFullYear()].join(" ");
}

export const getLabelDate = (date: Date): string => {

    let labelDate: string;

    const today = new Date();

    const isToday = today.getDate() === date.getDate();
    const isYesterday = today.getDate() - 1 === date.getDate();

    if (isToday) {
        labelDate = "Today";
    } else if (isYesterday) {
        labelDate = "Yesterday";
    } else {
        labelDate = parseDate(date);
    }

    return labelDate;
}

export const getLabelTimeFromTimestamp = (timestamp: number): string => {

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
    }

    return new Date(timestamp).toLocaleTimeString("en-US", options);
}

export const generateId = (length: number = 24) => {
    let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}