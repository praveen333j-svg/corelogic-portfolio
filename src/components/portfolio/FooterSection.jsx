import React from "react";
import { createPageUrl } from "@/utils";

const pages = [
    { label: "Core Platform Expertise", page: "Home" },
    { label: "Product Launch Gallery", page: "ProductLaunchGallery" },
    { label: "Enterprise Transformation", page: "EnterpriseTransformation" },
];

export default function FooterSection() {
    return (
        <footer className="border-t border-[#1e293b] bg-[#070911]">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a08030] flex items-center justify-center">
                                <span className="text-white font-bold text-sm">RJ</span>
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">Ranga Jayasinghe</div>
                                <div className="text-slate-600 text-xs">Head of IT Delivery — Payments & Cards</div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm max-w-xs leading-relaxed mt-4">
                            Senior banking technology transformation leader with 25+ years in credit card and payments platforms.
                        </p>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Portfolio</div>
                        <div className="space-y-2">
                            {pages.map((p) => (
                                <a
                                    key={p.page}
                                    href={createPageUrl(p.page)}
                                    className="block text-sm text-slate-500 hover:text-[#c9a84c] transition-colors duration-200"
                                >
                                    {p.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Education</div>
                        <div className="space-y-2">
                            {[
                                "MBA — University of Melbourne",
                                "MIT — Monash University",
                                "BSc — Edith Cowan University",
                            ].map((e, i) => (
                                <div key={i} className="text-sm text-slate-500">{e}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#1e293b] flex items-center justify-between">
                    <span className="text-slate-700 text-sm">© {new Date().getFullYear()} Ranga Jayasinghe. All rights reserved.</span>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-slate-700 text-xs">Portfolio Active</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}