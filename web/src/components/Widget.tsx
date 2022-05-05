import { ChatsTeardrop, ToggleLeft } from "phosphor-react";
import { useState } from "react";

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="fixed bottom-6 right-6">
            { isWidgetOpen && <p>Hello Word</p> }

            <button onClick={toggleWidgetVisibility} className="flex bg-brand-500 rounded-full px-3 h-12 text-white items-center group">
                <ChatsTeardrop className="w-6 h-12"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> 
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </button>
        </div>
    );
}