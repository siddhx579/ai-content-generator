"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Edit, LayoutTemplate } from "lucide-react";

const features = [
    {
        title: "AI-Powered Content",
        desc: "Generate high-quality, engaging content effortlessly.",
        icon: <Brain size={40} />,
    },
    {
        title: "Customizable Templates",
        desc: "Choose from a variety of templates tailored for your needs.",
        icon: <LayoutTemplate size={40} />,
    },
    {
        title: "Real-Time Editing",
        desc: "Edit and refine your content with live AI suggestions.",
        icon: <Edit size={40} />,
    }
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-20">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to <span className="text-yellow-300">WriteFlow</span>
                </motion.h1>
                <motion.p
                    className="text-lg mt-4 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    AI-powered content generation, crafted for creators and businesses. Generate high-quality text in seconds!
                </motion.p>
                <motion.div
                    className="mt-6 flex gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/dashboard">
                        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-black">
                            Sign-up
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 text-center bg-white text-black rounded-t-3xl shadow-xl">
                <h2 className="text-3xl font-semibold mb-6">Why Choose WriteFlow?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-lg border bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 shadow-md hover:shadow-lg flex flex-col items-center hover:scale-105 hover:border-cyan-300 transition-all duration-300 ease-in-out group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Render Lucide Icons Directly */}
                            <div className="mb-3 text-primary">{feature.icon}</div>
                            <h3 className="text-xl font-medium">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}