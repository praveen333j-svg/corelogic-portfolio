import React from "react";
import { motion } from "framer-motion";
import { Server, ArrowUpCircle } from "lucide-react";

const infraItems = [
    {
        icon: Server,
        title: "India FirstVision Hub — Data Centre",
        context: "Infrastructure & Platform Resilience",
        description: "Led the program establishing primary and disaster recovery data centres supporting the FirstVision card processing platform. The program required coordination across vendors, infrastructure teams, and global delivery groups.",
        outcomes: ["Improved system resilience", "Enhanced disaster recovery capability", "Improved operational availability for large card portfolios"],
    },
    {
        icon: ArrowUpCircle,
        title: "Enterprise Platform Upgrade — CA Endeavor",
        context: "V17 to V19 Migration",
        description: "Directed the upgrade of the enterprise source management platform from Version 17 to Version 19. The upgrade involved migrating across multiple software releases while maintaining delivery stability across development teams.",
        outcomes: ["Improved platform governance", "Enhanced compliance posture", "Increased development productivity across delivery teams"],
    },
];

export default function CaseStudyInfra() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-10 bg-slate-900" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Case Study 03</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        Infrastructure & Platform Resilience
                    </h2>
                    <p className="text-slate-500 max-w-xl mb-14 text-[16px]">
                        Building the technical foundations for large-scale card processing operations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {infraItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{item.context}</div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">{item.description}</p>
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Key Outcomes</div>
                                    <div className="space-y-2">
                                        {item.outcomes.map((o, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                                {o}
                                            </div>
                                        ))}
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