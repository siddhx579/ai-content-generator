"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600">
            <motion.div 
                className="p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <SignUp />
                </motion.div>
            </motion.div>
        </div>
    );
}