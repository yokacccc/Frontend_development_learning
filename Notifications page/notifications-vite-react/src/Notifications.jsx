// import React from "react";

import MarkAvatar from "./assets/images/avatar-mark-webber.webp";
import AngelaAvatar from "./assets/images/avatar-angela-gray.webp";
import JacobAvatar from "./assets/images/avatar-jacob-thompson.webp";

export default function Notifications({ notice }) {
    return (
        <div className="grid gap-2">
            <div
                className={`flex flex-row gap-4 px-4 py-4 rounded-lg ${notice ? null : "bg-navy-50"}`}
            >
                <div className="w-9.75 h-9.75 shrink-0">
                    <img src={MarkAvatar} alt="mark avatar" />
                </div>
                <div className="grid gap-2">
                    <p className="text-4-s font-extrabold leading-normal space-x-2">
                        <span className="cursor-pointer hover:text-blue-950">Mark Webber</span>
                        <span className="font-medium text-gray-600">
                            reacted to your recent post
                        </span>
                        <span className="font-extrabold text-gray-600 hover:text-blue-950 cursor-pointer">
                            My first tournament today!
                        </span>
                        {notice ? null : (
                            <span className="inline-block h-2 w-2 bg-red-500 rounded-[50%] transform -translate-y-0.5"></span>
                        )}
                    </p>
                    <p className="text-4-s text-gray-500">1m ago</p>
                </div>
            </div>
            <div
                className={`flex flex-row gap-4 px-4 py-4 rounded-lg ${notice ? null : "bg-navy-50"}`}
            >
                <div className="w-9.75 h-9.75 shrink-0">
                    <img src={AngelaAvatar} alt="angela avatar" />
                </div>
                <div className="grid gap-2">
                    <p className="text-4-s font-extrabold leading-normal space-x-2">
                        <span className="cursor-pointer hover:text-blue-950">Angela Gray</span>
                        <span className="font-medium text-gray-600">followed you</span>
                        {notice ? null : (
                            <span className="inline-block h-2 w-2 bg-red-500 rounded-[50%] transform -translate-y-0.5"></span>
                        )}
                    </p>
                    <p className="text-4-s text-gray-500">5m ago</p>
                </div>
            </div>
            <div
                className={`flex flex-row gap-4 px-4 py-4 rounded-lg ${notice ? null : "bg-navy-50"}`}
            >
                <div className="w-9.75 h-9.75 shrink-0">
                    <img src={JacobAvatar} alt="angela avatar" />
                </div>
                <div className="grid gap-2">
                    <p className="text-4-s font-extrabold leading-normal space-x-2">
                        <span className="cursor-pointer hover:text-blue-950">Jacob Thompson</span>
                        <span className="font-medium text-gray-600">has joined your group</span>

                        <span className="font-extrabold text-blue-950 cursor-pointer">
                            Chess Club
                        </span>
                        {notice ? null : (
                            <span className="inline-block h-2 w-2 bg-red-500 rounded-[50%] transform -translate-y-0.5"></span>
                        )}
                    </p>
                    <p className="text-4-s text-gray-500">5m ago</p>
                </div>
            </div>
        </div>
    );
}
