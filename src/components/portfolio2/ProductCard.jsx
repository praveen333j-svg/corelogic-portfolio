import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb, Code2, ShieldCheck, CreditCard } from "lucide-react";

const roleConfig = {
    vision: { icon: Lightbulb, label: "The Vision", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
    engineering: { icon: Code2, label: "The Engineering", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    assurance: { icon: ShieldCheck, label: "The Assurance", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
};

export default function ProductCard({ product, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-400"
        >
            {/* Card header */}
            <div className="p-7 pb-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex gap-2">
                        {["violet", "blue", "emerald"].map((c, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${
                                c === "violet" ? "bg-violet-400" : c === "blue" ? "bg-blue-400" : "bg-emerald-400"
                            }`} />
                        ))}
                    </div>
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                    {product.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{product.tagline}</p>
            </div>

            {/* Expand toggle */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between px-7 py-4 border-t border-gray-100 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors duration-200"
            >
                <span>{expanded ? "Hide Case Study" : "View Case Study"}</span>
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                </motion.div>
            </button>

            {/* Expanded content */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-7 pb-7 pt-2 space-y-4 border-t border-gray-100">
                            {["vision", "engineering", "assurance"].map((roleKey) => {
                                const config = roleConfig[roleKey];
                                const Icon = config.icon;
                                return (
                                    <div key={roleKey} className={`rounded-xl border ${config.border} ${config.bg} p-4`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon className={`w-4 h-4 ${config.color}`} />
                                            <span className={`text-xs font-semibold uppercase tracking-wider ${config.color}`}>
                                                {config.label}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {product[roleKey]}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}