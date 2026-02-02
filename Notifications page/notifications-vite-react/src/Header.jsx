import React from "react";

export default function Header({ num, onclick, changeNotice }) {
    return (
        <div className="flex flex-row justify-between items-center mt-5">
            <div className="flex flex-row gap-2 items-center">
                <h1 className="text-2-s font-extrabold">Notifications</h1>
                <button
                    className="h-6.25 w-8 bg-blue-950 text-white rounded-md cursor-pointer"
                    onClick={onclick}
                >
                    {num}
                </button>
            </div>
            <button className="text-4-s text-gray-600 cursor-pointer" onClick={changeNotice}>
                Mark all as read
            </button>
        </div>
    );
}
