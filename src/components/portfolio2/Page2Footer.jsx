import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { portfolioPages } from "@/components/portfolio/portfolioPages";

export default function Page2Footer() {
    return (
        <footer className="bg-slate-900 py-8 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center lg:text-left">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RJ</span>
                    </div>
                    <span className="text-slate-500 text-sm">
                        Ranga Jayasinghe — Head of IT Delivery, Payments & Cards Platforms
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {portfolioPages.map((item) => (
                        <Link
                            key={item.page}
                            to={createPageUrl(item.page)}
                            className="text-slate-500 hover:text-white text-sm transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="text-slate-700 text-sm">© {new Date().getFullYear()} All rights reserved</div>
            </div>
        </footer>
    );
}
