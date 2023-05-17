"use client";

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";
import { ChatMessage } from "@/types/ChatMessage";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);

    const [chatActive, setChatActive] = useState<Chat>();
    const [chatList, setChatList] = useState<Chat[]>([]);
    const [chatActiveId, setChatActiveId] = useState("");

    const openSidebar = () => setSidebarOpened(true);
    const closeSidebar = () => setSidebarOpened(false);

    useEffect(() => {
        setChatActive(chatList.find((item) => item.id === chatActiveId));
    }, [chatActiveId, chatList]);

    useEffect(() => {
        if (aiLoading) getAiResponse();
    }, [aiLoading]);

    function getAiResponse() {
        setTimeout(() => {
            let chatListClone = [...chatList];
            let chatIndex = chatListClone.findIndex(
                (item) => item.id === chatActiveId
            );
            if (chatIndex > -1) {
                chatListClone[chatIndex].messages.push({
                    id: uuid(),
                    author: "ai",
                    body: "Aqui está a resposta da AI =)",
                });

                setChatList(chatListClone);
                setAiLoading(false);
            }
        }, 2000);
    }

    function handleNewChat() {
        if (aiLoading) return;

        setChatActiveId("");
        closeSidebar();
    }

    function handleClearConversations() {
        if (aiLoading) return;
        setChatActiveId("");
        setChatList([]);
    }

    function handleSendMessage(message: string) {
        if (!chatActiveId) {
            //CREATE NEW CHAT

            const newChatId = uuid();

            const newMessage: ChatMessage = {
                id: uuid(),
                author: "me",
                body: message,
            };

            setChatList([
                {
                    id: newChatId,
                    title: message,
                    messages: [newMessage],
                },
                ...chatList,
            ]);

            setChatActiveId(newChatId);
        } else {
            //UPDATE EXISTING CHAT

            let chatListClone = [...chatList];
            let chatIndex = chatListClone.findIndex(
                (item) => item.id === chatActiveId
            );
            chatListClone[chatIndex].messages.push({
                id: uuid(),
                author: "me",
                body: message,
            });

            setChatList(chatListClone);
        }

        setAiLoading(true);
    }

    function handleSelectChat(chatId: string) {
        setChatActiveId(chatId);
    }

    function handleDeleteChat(chatId: string) {
        const chatListClone = chatList.filter((item) => item.id !== chatId);
        setChatList(chatListClone);
    }

    function handleEditChat(chatId: string, newTitle: string) {
        if (newTitle.trim() === "") return;

        const chatListClone = [...chatList];
        const chatIndex = chatListClone.findIndex((item) => item.id === chatId);

        chatListClone[chatIndex].title = newTitle;

        setChatList(chatListClone);
    }

    return (
        <main className="flex min-h-screen bg-gpt-gray text-gray-50">
            <Sidebar
                open={sidebarOpened}
                onClose={closeSidebar}
                onNewChat={handleNewChat}
                onClear={handleClearConversations}
            >
                {chatList.map((chat) => (
                    <SidebarChatButton
                        key={chat.id}
                        active={chat.id === chatActiveId}
                        onClick={() => handleSelectChat(chat.id)}
                        onDelete={handleDeleteChat}
                        onEdit={handleEditChat}
                        chatItem={chat}
                    />
                ))}
            </Sidebar>
            <section className="flex flex-col w-full">
                <Header
                    openSidebarClick={openSidebar}
                    title={chatActive?.title ?? ""}
                    newChatClick={handleNewChat}
                />

                <ChatArea loading={aiLoading} chat={chatActive} />

                <Footer
                    onSendMessage={handleSendMessage}
                    disabled={aiLoading}
                />
            </section>
        </main>
    );
}
