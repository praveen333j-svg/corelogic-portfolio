import React from "react";

export default function FooterSection() {
    return (
        <footer className="py-12 px-6 border-t border-[#1e293b]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#a08030] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RJ</span>
                    </div>
                    <span className="text-slate-400 text-sm">
                        Ranga Jayasinghe — Core Payments &amp; Financial Logic Expert
                    </span>
                </div>
                <div className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} All rights reserved
                </div>
            </div>
        </footer>
    );
}