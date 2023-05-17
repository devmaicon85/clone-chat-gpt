import { KeyboardEvent, useEffect, useRef, useState } from "react";
import IconSend from "./icons/IconSend";

type Props = {
    onSend: (message: string) => void;
    disabled: boolean;
};

export function ChatMessageInput({ disabled, onSend }: Props) {
    const [text, setText] = useState("");

    const textElement = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textElement.current) {
            textElement.current.style.height = "0px";
            const scrollHeight = textElement.current.scrollHeight;
            textElement.current.style.height = scrollHeight + "px";
        }
    }, [text, textElement]);

    function handleSendMessage() {
        if (!disabled && text.trim() !== "") {
            onSend(text);
        }
    }

    function handleTextKeyUp(event: KeyboardEvent<HTMLTextAreaElement>) {
        if (event.code.toLowerCase() === "enter" && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
            setText("");
        }
    }

    return (
        <div
            className={`flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md
            ${disabled && "opacity-50"}
        `}
        >
            <textarea
                ref={textElement}
                className="flex-1 w-full border-0 bg-transparent resize-none outline-none h-6 max-h-48 overflow-y-auto"
                placeholder="digite uma mensagem..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleTextKeyUp}
                disabled={disabled}
            ></textarea>
            <div
                className={`"self-end p-1 cursor-pointer rounded"
                ${
                    text.length
                        ? "opacity-100 hover:bg-black/20"
                        : "opacity-20 cursor-not-allowed"
                }
            
            `}
                onClick={handleSendMessage}
            >
                <IconSend width={20} height={20} />
            </div>
        </div>
    );
}
