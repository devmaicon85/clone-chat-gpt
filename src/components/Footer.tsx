import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
    disabled: boolean;
    onSendMessage: (message:string) => void;
};

export function Footer({ onSendMessage, disabled }: Props) {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput disabled={disabled} onSend={onSendMessage} />

                <div className="text-xs w-full text-center py-2">
                    Free Research Preview. ChatGPT may produce inaccurate
                    information about people, places, or facts.
                </div>
            </div>
        </footer>
    );
}
