import React from "react";
import { motion } from "framer-motion";
import { Shield, GitBranch, Layers, SearchCheck } from "lucide-react";

const methodologies = [
    {
        icon: Shield,
        title: "FMEA Framework",
        description: "Failure Mode & Effects Analysis applied to every code change — systematically identifying potential failure points before they reach production."
    },
    {
        icon: GitBranch,
        title: "Deep-Tier Impact Analysis",
        description: "Tracing every modification through the full dependency chain of 100,000+ line modules to ensure no downstream regression."
    },
    {
        icon: Layers,
        title: "Legacy Engine Expertise",
        description: "Safely modifying financial engines that have evolved over decades — understanding the business context behind every line of code."
    },
    {
        icon: SearchCheck,
        title: "Regulatory Compliance",
        description: "Every change validated against scheme rules, regulatory requirements, and financial audit standards before deployment."
    }
];

export default function RiskEngineeringSection() {
    return (
        <section className="py-24 px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-12 bg-[#c9a84c]/50" />
                        <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                            Methodology
                        </span>
                        <div className="h-px w-12 bg-[#c9a84c]/50" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Risk Engineering & Safe-Change Methodology
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A disciplined approach to modifying mission-critical financial engines where a single error can impact millions of accounts.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {methodologies.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex gap-5 p-6 rounded-2xl border border-[#1e293b] bg-[#111827] hover:border-[#c9a84c]/20 hover:bg-[#1a2236] transition-all duration-500"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/15 transition-colors duration-500">
                                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-[15px]">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}