import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, AlertTriangle } from "lucide-react";

const responsibilities = [
    "Migration strategy and execution planning",
    "Coordination of multi-country delivery teams",
    "Governance and steering committee reporting",
    "Design of dress rehearsals and parallel run migration strategy",
];

export default function CaseStudySBI() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-10 bg-slate-900" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Case Study 01</span>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
                            Program Manager
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                            SBI Cards Migration
                            <span className="block text-slate-400">19.2 Million Accounts</span>
                        </h2>
                        <p className="text-lg font-semibold text-blue-600 mb-5">
                            One of the Largest Credit Card Migrations in APAC
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-8 text-[16px]">
                            Served as Program Manager for the migration of 19.2 million credit card accounts to the
                            FirstVision processing platform. The program required coordination of international engineering
                            teams, large-scale data migration, and deployment of new processing infrastructure.
                        </p>

                        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Key Responsibilities</h4>
                        <div className="space-y-3 mb-10">
                            {responsibilities.map((r, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
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
                        className="lg:col-span-2 space-y-5"
                    >
                        {/* Risk mitigation callout */}
                        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-7">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-4 h-4 text-amber-600" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                                    Strategic Risk Mitigation
                                </span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                During go-live preparation, a critical technical issue threatened to delay the migration
                                and potentially cause a multi-day service disruption impacting millions of cardholders.
                                Ranga led a rapid recovery effort coordinating engineering teams and implementing
                                contingency plans that successfully stabilised the platform, protecting the migration
                                timeline and preventing a major outage.
                            </p>
                        </div>

                        {/* Award callout */}
                        <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 p-7">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-yellow-600" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">CEO Best Performer Award</span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                This intervention was formally recognised with the CEO Best Performer Award for preventing
                                a national system failure during the 19.2M account migration.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex items-center gap-4">
                            <div className="text-4xl font-bold text-slate-900">19.2M</div>
                            <div className="text-sm text-slate-500 leading-snug">Accounts migrated to<br />FirstVision platform</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}