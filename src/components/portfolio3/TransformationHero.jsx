import React from "react";
import { motion } from "framer-motion";

export default function TransformationHero() {
    return (
        <section className="bg-slate-950 pt-20 pb-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center gap-3 mb-7">
                        <div className="h-px w-10 bg-white/30" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                            Portfolio — Page 3
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
                        Enterprise<br />
                        <span className="text-slate-400">Transformation & Scale</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-blue-400 mb-6 max-w-3xl">
                        Delivering high-stakes financial platform transformations across global banking and payments ecosystems.
                    </p>
                    <p className="text-[16px] text-slate-400 max-w-3xl leading-relaxed">
                        Across more than two decades in banking and payments technology, Ranga Jayasinghe has led complex
                        transformation initiatives involving large-scale card portfolio migrations, platform modernisation
                        programs, and global delivery organisations supporting millions of customers.
                        His leadership combines strong governance, proactive risk management, and deep technical understanding
                        of core card processing systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "19.2M", label: "Accounts Migrated" },
                        { value: "350+", label: "Staff Managed" },
                        { value: "20+", label: "Client Engagements" },
                        { value: "$14M", label: "Annual Revenue Achieved" },
                    ].map((stat, i) => (
                        <div key={i} className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}