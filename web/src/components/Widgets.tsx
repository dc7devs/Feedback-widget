import { ChatsTeardrop } from "phosphor-react";

export function Widget() {
    return (
        <div className="fixed bottom-6 right-6">
            <button className="flex bg-brand-500 rounded-full px-3 h-12 text-white items-center group">
                <ChatsTeardrop className="w-6 h-12"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> 
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </button>
        </div>
    );
}