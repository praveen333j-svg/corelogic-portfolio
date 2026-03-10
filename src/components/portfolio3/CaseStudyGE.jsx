import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";

const responsibilities = [
    "Coordinating Transitional Service Agreement (TSA) exits",
    "Managing platform and data separation activities",
    "Stabilising systems during organisational transition",
    "Supporting continuity of financial operations during ownership change",
];

export default function CaseStudyGE() {
    return (
        <section className="bg-slate-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-10 bg-slate-400" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Case Study 02</span>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-3 order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-semibold mb-4">
                            Technology Separation Lead
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                            GE Capital Divestment
                            <span className="block text-slate-400">Technology Separation & TSA Exit</span>
                        </h2>
                        <p className="text-lg font-semibold text-slate-700 mb-5">
                            Enterprise Platform Separation During Corporate Divestment
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-8 text-[16px]">
                            Led multiple technology initiatives supporting the separation of GE Capital financial systems
                            as part of a major divestment program. The work involved disentangling shared platforms, data
                            assets, and operational dependencies across GE Finance and Fleet portfolios, ensuring operational
                            stability while enabling the business to transition to new ownership structures.
                        </p>

                        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Responsibilities</h4>
                        <div className="space-y-3">
                            {responsibilities.map((r, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600 text-[15px]">{r}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="lg:col-span-2 order-1 lg:order-2"
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
                                <Building2 className="w-6 h-6 text-slate-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Complexity Factors</h4>
                            <div className="space-y-4">
                                {[
                                    { label: "Shared Platform Disentanglement", desc: "Separating tightly coupled financial platforms while maintaining service continuity." },
                                    { label: "TSA Exit Management", desc: "Governing the exit from Transitional Service Agreements on schedule." },
                                    { label: "Data Separation", desc: "Cleanly separating data assets across GE Finance and Fleet portfolios." },
                                    { label: "Ownership Transition", desc: "Maintaining financial operations stability during corporate ownership change." },
                                ].map((item, i) => (
                                    <div key={i} className="border-l-2 border-slate-200 pl-4">
                                        <div className="text-sm font-semibold text-slate-800 mb-0.5">{item.label}</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}