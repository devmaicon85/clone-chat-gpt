import IconRobot from "./icons/IconRobot";

export function ChatMessageLoading() {
    return (
        <div className="py-5 bg-gray-600/50">
            <div className="max-w-4xl m-auto flex items-center">
                <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded bg-green-900/50">
                    <IconRobot height={24} width={24} />
                </div>
                <div className="flex-1 text-lg whitespace-pre-wrap">
                    <div className="w-2 h-4 bg-slate-300 animate-blink"></div>
                </div>
            </div>
        </div>
    );
}