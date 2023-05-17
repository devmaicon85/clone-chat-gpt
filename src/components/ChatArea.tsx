import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoading } from "./ChatMessageLoading";

type Props = {
    chat: Chat | undefined;
    loading:boolean
};

export function ChatArea({ chat, loading }: Props) {
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder />}

            {chat &&
                chat.messages.map((message) => (
                    <ChatMessageItem key={message.id} item={message} />
                ))}

                {loading && <ChatMessageLoading/>}
        </section>
    );
}
