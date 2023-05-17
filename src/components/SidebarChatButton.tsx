import { Chat } from "@/types/Chat";
import IconMessageOutline from "./icons/IconMessageOutline";
import { useEffect, useState } from "react";
import IconTrash from "./icons/IconTrash";
import IconEdit3 from "./icons/IconEdit";
import IconCheck2 from "./icons/IconCheck";
import IconClose from "./icons/IconClose";

type Props = {
    active: boolean;
    chatItem: Chat;
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
};

export function SidebarChatButton({
    onClick,
    active,
    chatItem,
    onDelete,
    onEdit,
}: Props) {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [titleInput, setTitleInput] = useState(chatItem.title);

    useEffect(() => {
        setDeleting(false);
        setEditing(false);
    }, [chatItem, active]);

    function handleCancelButton() {
        setEditing(false);
        setDeleting(false);
    }

    function handleClickButton() {
        if (!deleting || !editing) {
            onClick(chatItem.id);
        }
    }

    function handleConfirmButton() {
        if (deleting) {
            onDelete(chatItem.id);
        }

        if (editing && titleInput.trim() !== "") {
            onEdit(chatItem.id, titleInput);
        }

        setEditing(false);
        setDeleting(false);
    }

    return (
        <div
            onClick={() => onClick(chatItem.id)}
            className={`flex items-center rounded-md p-3 text-sm cursor-pointer  transition-all
                
                ${
                    active
                        ? "bg-gray-500/40"
                        : "transparent hover:bg-gray-500/20 "
                }

            `}
        >
            <div className="mr-3 mt-1">
                {deleting && (
                    <IconTrash
                        onClick={() => {
                            onDelete(chatItem.id);
                            setDeleting(false);
                        }}
                        width={18}
                        height={18}
                    />
                )}
                {!deleting && <IconMessageOutline width={18} height={18} />}
            </div>
            <div className="flex-1 text-sm overflow-x-hidden">
                {editing && (
                    <input
                        className="w-full bg-transparent text-sm outline-none border border-blue-500"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                    />
                )}

                {!editing && (
                    <div className="border border-transparent flex-1 truncate">
                        {!deleting && chatItem.title}
                        {deleting && `Delete ${chatItem.title}`}
                    </div>
                )}
            </div>

            <div className="flex gap-2 ml-2">
                {!deleting && !editing && active && (
                    <div className="flex gap-2">
                        <IconEdit3
                            width={18}
                            height={18}
                            className="opacity-60 hover:opacity-100"
                            onClick={() => setEditing(true)}
                        />
                        <IconTrash
                            width={18}
                            height={18}
                            className="opacity-60 hover:opacity-100"
                            onClick={() => setDeleting(true)}
                        />
                    </div>
                )}

                {(editing || deleting) && (
                    <div className="flex gap-2">
                        <IconCheck2
                            width={18}
                            height={18}
                            className="opacity-60 hover:opacity-100"
                            onClick={handleConfirmButton}
                        />

                        <IconClose
                            width={18}
                            height={18}
                            className="opacity-60 hover:opacity-100"
                            onClick={handleCancelButton}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
