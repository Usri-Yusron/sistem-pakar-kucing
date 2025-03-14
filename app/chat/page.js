"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import ChatBubble from '../components/ChatBubble';
import { BackgroundLines } from '../components/ui/background-lines';
import { rules } from '@/data/rules';

const Home = () => {
    const [chat, setChat] = useState([{ text: rules.start.question, isUser: false }]);
    const [currentStep, setCurrentStep] = useState('start');
    const [isTyping, setIsTyping] = useState(false);

    const handleUserResponse = (option) => {
        const nextStep = option.next;
        const userMessage = { text: option.text, isUser: true };
        const newChat = [...chat, userMessage];
        setChat(newChat);
        setIsTyping(true);

        setTimeout(() => {
            if (rules[nextStep].result) {
                newChat.push({ text: rules[nextStep].result, isUser: false });
            } else {
                newChat.push({ text: rules[nextStep].question, isUser: false });
            }
            setChat(newChat);
            setCurrentStep(nextStep);
            setIsTyping(false);
        }, 5000);
    };

    return (
        <div className="bg-black h-svh">
            <BackgroundLines className="bg-black p-4 flex flex-col items-center">
            <div className="pt-25 px-5 md:p-25 md:w-5/6">
                {chat.map((message, index) => (
                    <ChatBubble key={index} text={message.text} isUser={message.isUser} />
                ))}
                {isTyping && (
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="Tailwind CSS chat bubble component"
                                    src="/ikon.webp"
                                    width={15}
                                    height={15}
                                />
                            </div>
                        </div>
                        <div className="chat-header text-white">MeowMed</div>
                        <div className="chat-bubble">Mikir dulu sebentar...</div>
                    </div>
                )}
            </div>
            <div className="w-full md:w-5/6 p-4 flex items-center md:px-6 z-10">
                <div className="flex justify-center items-center w-full p-3 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500">
                    {rules[currentStep].options && !isTyping && (
                        <div className="space-x-6 flex md:w-3/4">
                            {rules[currentStep].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`${option === 'ya' ? 'hover:bg-red-500' : 'hover:bg-yellow-500'} w-3/4 bg-blue-500 text-white px-8 py-2 rounded-[1vw] shadow hover:bg-blue-600`}
                                    onClick={() => handleUserResponse(option)}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </BackgroundLines>
        </div>
    );
};

export default Home;
