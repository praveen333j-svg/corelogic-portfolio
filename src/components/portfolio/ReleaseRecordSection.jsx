import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const releases = [
    { client: "NAB", region: "Australia", releases: 5, period: "2017–2019", status: "Zero Defect" },
    { client: "DBS", region: "Singapore", releases: 4, period: "2015–2017", status: "Zero Defect" },
    { client: "SBI Cards", region: "India", releases: 5, period: "2012–2015", status: "Zero Defect" },
    { client: "GE Capital", region: "Hungary", releases: 4, period: "2010–2012", status: "Zero Defect" },
];

const totalReleases = releases.reduce((sum, r) => sum + r.releases, 0);

export default function ReleaseRecordSection() {
    return (
        <section className="py-24 px-6 relative">
            {/* Subtle divider gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-px w-12 bg-[#c9a84c]/50" />
                            <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                                Track Record
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Zero-Defect Release Record
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl">
                            A consecutive streak of flawless deployments across tier-1 financial institutions.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-3">
                        <div className="text-right">
                            <div className="text-4xl font-bold text-[#c9a84c]">{totalReleases}+</div>
                            <div className="text-sm text-slate-500">Consecutive Releases</div>
                        </div>
                        <div className="w-px h-12 bg-[#1e293b]" />
                        <div className="text-right">
                            <div className="text-4xl font-bold text-emerald-400">0</div>
                            <div className="text-sm text-slate-500">Production Defects</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-2xl border border-[#1e293b] bg-[#111827] overflow-hidden"
                >
                    {/* Table header */}
                    <div className="grid grid-cols-5 gap-4 px-8 py-4 bg-[#0d1220] border-b border-[#1e293b] text-xs font-semibold tracking-widest uppercase text-slate-500">
                        <div>Client</div>
                        <div>Region</div>
                        <div className="text-center">Releases</div>
                        <div>Period</div>
                        <div className="text-center">Status</div>
                    </div>

                    {/* Table rows */}
                    {releases.map((release, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="grid grid-cols-5 gap-4 px-8 py-5 border-b border-[#1e293b]/50 hover:bg-[#1a2236]/50 transition-colors duration-300 last:border-b-0"
                        >
                            <div className="font-semibold text-white">{release.client}</div>
                            <div className="text-slate-400">{release.region}</div>
                            <div className="text-center">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] font-semibold text-sm">
                                    {release.releases}
                                </span>
                            </div>
                            <div className="text-slate-400">{release.period}</div>
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-400 text-sm font-medium">{release.status}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}