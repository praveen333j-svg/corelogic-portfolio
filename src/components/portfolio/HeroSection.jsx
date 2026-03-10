import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[100px]" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                        <span className="text-[#c9a84c] text-sm font-medium tracking-wide uppercase">
                            Top 10% Global Specialist
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
                >
                    <span className="text-white">Core Platform Mastery:</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#c9a84c] via-[#e4c96a] to-[#c9a84c] bg-clip-text text-transparent">
                        The Financial Heart &amp; Posting Logic Specialist
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    One of the top 10% of global specialists trusted to engineer the{" "}
                    <span className="text-white font-medium">Heart of Credit Card Platforms</span>—the{" "}
                    <span className="text-[#c9a84c] font-medium">100,000-line financial posting engines</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500"
                >
                    {["Interest Posting", "Fee Structures", "MMP Logic", "Scheme Certification"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#c9a84c]/60" />
                            <span>{item}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="w-5 h-5 text-slate-600 animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
}