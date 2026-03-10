import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const metrics = [
    { from: "3", to: "20+", label: "Client Engagements", desc: "Expanded global VisionPLUS delivery portfolio" },
    { from: "$3.5M", to: "$14M", label: "Annual Revenue", desc: "4x revenue growth through delivery excellence" },
    { from: null, to: "350+", label: "Staff Managed", desc: "Across multiple countries and delivery teams" },
    { from: null, to: "20+", label: "Programs Supported", desc: "Concurrent global client engagements" },
];

export default function GlobalDelivery() {
    return (
        <section className="bg-slate-950 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-10 bg-white/30" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">Scale</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Global Delivery Leadership at Scale
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-[16px] leading-relaxed">
                        Led the global VisionPLUS delivery organization, growing client engagements and revenue
                        through strong governance frameworks, delivery standardisation, and strategic client
                        relationship management.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {metrics.map((m, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                        >
                            {m.from && (
                                <div className="text-sm text-slate-600 line-through mb-1">{m.from}</div>
                            )}
                            <div className="text-3xl font-bold text-white mb-1">{m.to}</div>
                            <div className="text-sm font-semibold text-slate-300 mb-2">{m.label}</div>
                            <div className="text-xs text-slate-500 leading-relaxed">{m.desc}</div>
                            {m.from && (
                                <div className="flex items-center gap-1 mt-3">
                                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-xs text-emerald-400 font-medium">Growth trajectory</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Revenue bar visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
                >
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Revenue Growth</div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                                <span>Starting Position</span>
                                <span>USD $3.5M</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "25%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full rounded-full bg-slate-600"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                                <span className="font-medium">Achieved</span>
                                <span className="font-bold text-emerald-400">USD $14M</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                    className="h-full rounded-full bg-emerald-500"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}