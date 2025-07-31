import React from 'react';

interface AlertNotificationProps {
    message: string;
    onClose: () => void;
}

const AlertNotification: React.FC<AlertNotificationProps> = ({ message, onClose }) => {
    return (
        <div className="relative w-full max-w-64 flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-full text-base font-medium transition-all duration-500 ease border-solid border border-white text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)] hover:bg-red hover:text-[#f85149] hover:border-indigo-700">
            <button
                type="button"
                aria-label="close-error"
                className="absolute right-4 p-1 rounded-full hover:rounded-full transition-opacity text-[#f85149] border border-[#f85149] opacity-40 hover:opacity-100 hover:border-indigo-700"
                onClick={onClose}
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                    className="sizer h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
            <p className="flex flex-row items-center mr-auto gap-x-2">
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="30"
                    width="28"
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                </svg>
                {message}
            </p>
        </div>
    );
};

export default AlertNotification;