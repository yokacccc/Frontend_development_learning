import { useState } from "react";
import Header from "./Header";
import Notifications from "./notifications";

import RizkyAvatar from "./assets/images/avatar-rizky-hasanuddin.webp";
import NathanAvatar from "./assets/images/avatar-nathan-peterson.webp";
import AnnaAvatar from "./assets/images/avatar-anna-kim.webp";
import KimberlyAvatar from "./assets/images/avatar-kimberly-smith.webp";
import Chess from "./assets/images/image-chess.webp";

export default function App() {
    const [number, setNumber] = useState(3);
    const [isRead, setIsRead] = useState(false);

    function handleRead() {
        setIsRead(true);
        setNumber(0);
    }

    return (
        <div className="flex flex-col gap-6 mx-5 md:my-6 md:max-w-182.5 md:mx-auto">
            <Header num={number} changeNotice={handleRead} />
            <main className="grid gap-8">
                <Notifications notice={isRead} />
                <div className="grid gap-10 ml-2.5">
                    <div className="flex flex-row gap-4 pl-4 rounded-lg">
                        <div className="w-9.75 h-9.75 shrink-0">
                            <img src={RizkyAvatar} alt="mark avatar" />
                        </div>
                        <div className="grid gap-2">
                            <div className="grid gap-2">
                                <p className="text-4-s font-extrabold leading-normal space-x-2">
                                    <span className="cursor-pointer hover:text-blue-950">
                                        Rizky Hasanuddin
                                    </span>
                                    <span className="font-medium text-gray-600">
                                        sent you a private message
                                    </span>
                                </p>
                                <p className="text-4-s text-gray-500">5 days ago</p>
                            </div>
                            <div className="border border-navy-100 font-medium rounded-[5px] hover:bg-blue-100 cursor-pointer">
                                <p className="text-gray-600 text-4-s p-4">
                                    Hello, thanks for setting up the Chess Club. I’ve been a member
                                    for a few weeks now and I’m already having lots of fun and
                                    improving my game.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 pl-4 rounded-lg">
                        <div className="w-9.75 h-9.75 shrink-0">
                            <img src={KimberlyAvatar} alt="mark avatar" />
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <div className="grid gap-2">
                                <p className="text-4-s font-extrabold leading-normal space-x-2">
                                    <span className="cursor-pointer hover:text-blue-950">
                                        Kimberly Smith
                                    </span>
                                    <span className="font-medium text-gray-600">
                                        commented on your picture
                                    </span>
                                </p>
                                <p className="text-4-s text-gray-500">2 weeks ago</p>
                            </div>
                            <div className="w-9.75 h-9.75 shrink-0">
                                <img src={Chess} alt="chess" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 pl-4 rounded-lg">
                        <div className="w-9.75 h-9.75 shrink-0">
                            <img src={NathanAvatar} alt="mark avatar" />
                        </div>
                        <div className="grid gap-2">
                            <p className="text-4-s font-extrabold leading-normal space-x-2">
                                <span className="cursor-pointer hover:text-blue-950">
                                    Nathan Peterson
                                </span>
                                <span className="font-medium text-gray-600">
                                    reacted to your recent post
                                </span>
                                <span className="font-extrabold text-gray-600 hover:text-blue-950 cursor-pointer">
                                    5 end-game strategies to increase your win rate
                                </span>
                            </p>
                            <p className="text-4-s text-gray-500">2 weeks ago</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 pl-4 rounded-lg">
                        <div className="w-9.75 h-9.75 shrink-0">
                            <img src={AnnaAvatar} alt="mark avatar" />
                        </div>
                        <div className="grid gap-2">
                            <p className="text-4-s font-extrabold leading-normal space-x-2">
                                <span className="cursor-pointer hover:text-blue-950">Anna Kim</span>
                                <span className="font-medium text-gray-600">left the group</span>
                                <span className="font-extrabold text-blue-950 cursor-pointer">
                                    Chess Club
                                </span>
                            </p>
                            <p className="text-4-s text-gray-500">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
