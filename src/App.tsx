import React from 'react';
import "./styles/main.scss";
import {ChatProvider} from "./context/chat-context";
import {ChatContainer} from "./components/chat";

function App() {

    return (
        <div className="container">

            <ChatProvider>
                <ChatContainer/>
            </ChatProvider>

        </div>
    );
}

export default App;
