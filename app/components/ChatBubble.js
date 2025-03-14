import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ChatBubble = ({ text, isUser }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 80; // Kecepatan mengetik (ms per karakter)

  useEffect(() => {
    if (!text) return; // Jika text tidak ada, hentikan proses

    setDisplayedText(""); // Reset displayedText setiap kali text berubah

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index)); // Menambahkan satu karakter tiap kali
        index++;
      } else {
        clearInterval(typingInterval); // Hentikan interval jika teks sudah selesai ditampilkan
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Bersihkan interval ketika komponen di-unmount atau text berubah
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}
    >
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
            <div className="chat-bubble">{displayedText}</div>
        </div>
    </motion.div>
  );
};

export default ChatBubble;
