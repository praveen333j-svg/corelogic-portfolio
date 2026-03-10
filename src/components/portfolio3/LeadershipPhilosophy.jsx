import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, ShieldCheck, Rocket } from "lucide-react";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const principles = [
    {
        icon: LayoutGrid,
        title: "Operational Discipline",
        description: "Strong governance and delivery frameworks ensure predictable outcomes in complex environments. Every program is anchored in clear accountability, structured reporting, and proactive risk identification.",
        color: "bg-blue-50 border-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: ShieldCheck,
        title: "Risk Engineering",
        description: "Structured risk mitigation approaches such as Failure Mode and Effects Analysis (FMEA) are used to identify and manage critical failure points before deployment — protecting platform stability and customer trust.",
        color: "bg-violet-50 border-violet-100",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
    },
    {
        icon: Rocket,
        title: "Delivery at Scale",
        description: "By aligning business strategy with engineering execution, Ranga has consistently delivered large transformation initiatives while maintaining platform stability and customer trust across global deployments.",
        color: "bg-emerald-50 border-emerald-100",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
    },
];

export default function LeadershipPhilosophy() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-10 bg-slate-900" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Principles</span>
                        <div className="h-px w-10 bg-slate-900" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Leadership Philosophy
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-[16px]">
                        Three core principles that underpin every large-scale transformation program.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {principles.map((p, index) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className={`rounded-2xl border ${p.color} p-8`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-6`}>
                                    <Icon className={`w-6 h-6 ${p.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-[15px]">{p.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl bg-slate-950 p-10 text-center"
                >
                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-8">
                        Ranga Jayasinghe has successfully delivered large-scale financial technology transformations
                        across global banking platforms while leading large international delivery organizations —
                        combining the strategic vision of a consulting leader with the technical depth of a
                        hands-on platform engineer.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={createPageUrl("Home")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
                        >
                            Core Platform Expertise <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href={createPageUrl("ProductLaunchGallery")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            Product Launch Gallery <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}