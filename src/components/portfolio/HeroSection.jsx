import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

const credentials = [
    "25+ Years in Banking & Payments",
    "MBA — University of Melbourne",
    "MIT — Monash University",
    "VisionPLUS Core Platform Specialist",
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
            {/* Dark background with subtle texture */}
            <div className="absolute inset-0 bg-[#070911]" />
            <div className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
                    backgroundSize: '72px 72px'
                }}
            />
            {/* Accent glows */}
            <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[#c9a84c]/[0.04] blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/[0.07] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
                    {/* Left — identity */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/[0.07] mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
                                Senior Technology Executive
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-3">
                            Ranga
                        </h1>
                        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 bg-gradient-to-r from-[#c9a84c] via-[#e4c96a] to-[#c9a84c] bg-clip-text text-transparent">
                            Jayasinghe
                        </h1>

                        <p className="text-slate-300 text-lg font-medium mb-2">
                            Head of IT Delivery &middot; Payments &amp; Cards Platforms
                        </p>
                        <p className="text-slate-500 text-[15px] leading-relaxed mb-10 max-w-lg">
                            A senior banking technology transformation leader specialising in core financial platform engineering,
                            large-scale card portfolio migrations, and global delivery leadership across tier-1 institutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={createPageUrl("EnterpriseTransformation")}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c] text-slate-900 font-semibold text-sm hover:bg-[#e4c96a] transition-colors duration-200"
                            >
                                View Transformation Work
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href={createPageUrl("ProductLaunchGallery")}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors duration-200"
                            >
                                Product Launches
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — credential card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:block"
                    >
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm">
                            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
                                Executive Credentials
                            </div>
                            <div className="space-y-5 mb-8">
                                {credentials.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                                        </div>
                                        <span className="text-slate-300 text-sm">{c}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px bg-white/[0.06] mb-8" />

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "19.2M", label: "Accounts Migrated" },
                                    { value: "350+", label: "Staff Led" },
                                    { value: "$14M", label: "Revenue Achieved" },
                                    { value: "18+", label: "Zero-Defect Releases" },
                                ].map((stat, i) => (
                                    <div key={i} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                                        <div className="text-2xl font-bold text-[#c9a84c] mb-1">{stat.value}</div>
                                        <div className="text-xs text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Specialisations strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-t border-white/[0.06] pt-8 pb-4 flex flex-wrap gap-x-8 gap-y-3"
                >
                    {[
                        "Interest Posting Engines",
                        "Fee & MMP Logic",
                        "Card Portfolio Migration",
                        "Scheme Certification",
                        "TSA Exit Management",
                        "Global Delivery Governance",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                            <div className="w-1 h-1 rounded-full bg-[#c9a84c]/50" />
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-5 h-5 text-slate-700 animate-bounce" />
            </div>
        </section>
    );
}