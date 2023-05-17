import { ReactNode } from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import { SidebarButton } from "./SidebarButton";
import IconTrash from "./icons/IconTrash";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    onClear: () => void;
    onNewChat: () => void;
};
export function Sidebar({
    children,
    open,
    onClose,
    onClear,
    onNewChat,
}: Props) {
    return (
        <section
            className={`z-10 fixed scrollbarsidebar left-0 top-0 bottom-0 text-white md:w-64 md:static
                ${open ? "w-full bg-gray-600/75" : "w-0"}
            `}
        >
            <div
                className={`flex h-screen transition-all duration-200 
                ${open ? "ml-0" : "-ml-96"} md:ml-0
            `}
            >
                <div className="flex flex-col w-64 p-2 bg-gray-900">
                    <div
                        onClick={onNewChat}
                        className="flex items-center p-3 my-2 rounded-md text-sm cursor-pointer border border-white/20 hover:bg-gray-500/20 transition-all"
                    >
                        <IconAdd width={16} height={16} className="mr-3" />
                        Nova Conversa
                    </div>
                    <nav className="flex-1 pt-2 overflow-y-auto">
                        {children}
                    </nav>
                    <div className="border-t border-gray-700 pt-2">
                        <SidebarButton
                            icon={<IconTrash />}
                            label="Limpar todas as conversas"
                            onClick={onClear}
                        />
                    </div>
                </div>
                <div className="flex-1" onClick={onClose}>
                    <div className="md:hidden flex justify-center items-center w-10 h-10 cursor-pointer opacity-60 hover:opacity-100">
                        <IconClose width={24} height={24} />
                    </div>
                </div>
            </div>
        </section>
    );
}
