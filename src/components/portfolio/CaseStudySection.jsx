import React from "react";
import { motion } from "framer-motion";
import { Target, Code2, ShieldCheck } from "lucide-react";

const highlights = [
    {
        icon: Target,
        label: "Role",
        title: "Technical Lead",
        description: "Technical Lead for the platform's most complex modules — owning the financial core that powers all transaction processing and account lifecycle management."
    },
    {
        icon: Code2,
        label: "Impact",
        title: "100,000+ Lines Per Module",
        description: "Single-handedly executed all modifications to Interest Posting, Fee Structures, and MMP logic in a codebase exceeding 100,000 lines per module."
    },
    {
        icon: ShieldCheck,
        label: "Result",
        title: "Zero Regression",
        description: "100% financial accuracy across 700,000 accounts with zero regression — delivered under stringent regulatory compliance timelines."
    }
];

export default function CaseStudySection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-12 bg-[#c9a84c]/50" />
                        <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                            Project Spotlight
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        GE Hungary Platform Upgrade
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mb-16">
                        A mission-critical upgrade to the core financial posting engine serving one of Europe's largest consumer credit portfolios.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group relative"
                            >
                                <div className="relative h-full rounded-2xl border border-[#1e293b] bg-[#111827] p-8 transition-all duration-500 hover:border-[#c9a84c]/20 hover:bg-[#1a2236]">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#c9a84c]/0 to-[#c9a84c]/0 group-hover:from-[#c9a84c]/[0.02] group-hover:to-transparent transition-all duration-500" />
                                    
                                    <div className="relative z-10">
                                        <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-6">
                                            <Icon className="w-5 h-5 text-[#c9a84c]" />
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]/70 mb-2 block">
                                            {item.label}
                                        </span>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed text-[15px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}