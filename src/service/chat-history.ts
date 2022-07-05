import {Messages} from "../components/chat/types";

export const getChatHistory = async (): Promise<Messages> => {
    const response = await fetch("http://localhost:3000/data.json");
    return await response.json();
}