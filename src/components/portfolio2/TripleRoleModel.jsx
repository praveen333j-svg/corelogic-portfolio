import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code2, ShieldCheck } from "lucide-react";

const roles = [
    {
        icon: Lightbulb,
        label: "The Vision",
        subtitle: "Business Analysis / Requirements",
        color: "bg-violet-50 border-violet-100",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        accent: "bg-violet-600",
    },
    {
        icon: Code2,
        label: "The Engineering",
        subtitle: "Platform Development / Core Logic",
        color: "bg-blue-50 border-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        accent: "bg-blue-600",
    },
    {
        icon: ShieldCheck,
        label: "The Assurance",
        subtitle: "Testing & Scheme Certification",
        color: "bg-emerald-50 border-emerald-100",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        accent: "bg-emerald-600",
    },
];

export default function TripleRoleModel() {
    return (
        <section className="bg-slate-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        The Triple Role Model
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        A rare delivery capability — one leader owning all three dimensions of product launch.
                    </p>
                </motion.div>

                <div className="relative flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <React.Fragment key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className={`flex-1 flex flex-col items-center text-center p-10 border ${role.color} rounded-none first:rounded-l-2xl last:rounded-r-2xl md:first:rounded-l-2xl md:last:rounded-r-2xl first:rounded-t-2xl last:rounded-b-2xl md:first:rounded-t-none md:last:rounded-b-none`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${role.iconBg} flex items-center justify-center mb-5`}>
                                        <Icon className={`w-7 h-7 ${role.iconColor}`} />
                                    </div>
                                    <div className={`w-8 h-1 rounded-full ${role.accent} mb-4`} />
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{role.label}</h3>
                                    <p className="text-sm text-slate-500 font-medium">{role.subtitle}</p>
                                </motion.div>
                                {index < roles.length - 1 && (
                                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0 self-center z-10">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                                            <div className="w-1 h-1 rounded-full bg-slate-400" />
                                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto leading-relaxed"
                >
                    This "Triple Role Model" allowed Ranga to accelerate delivery cycles while ensuring accuracy in financial processing systems.
                </motion.p>
            </div>
        </section>
    );
}