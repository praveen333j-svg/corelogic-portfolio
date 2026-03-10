import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function ClosingStatement() {
    return (
        <section className="bg-slate-900 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-12 bg-white/20" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                            Capability Summary
                        </span>
                        <div className="h-px w-12 bg-white/20" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                        A Rare End-to-End Delivery Capability<br />
                        <span className="text-slate-400">in the Payments Industry</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                        Ranga Jayasinghe uniquely delivered card product launches across business analysis,
                        engineering leadership, and scheme certification — owning every dimension of complex
                        financial product delivery from first requirement to live certification.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={createPageUrl("Home")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors duration-200"
                        >
                            View Core Platform Expertise
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                            <div className="flex gap-2">
                                {["bg-violet-400", "bg-blue-400", "bg-emerald-400"].map((c, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                                ))}
                            </div>
                            <span>Vision · Engineering · Assurance</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}