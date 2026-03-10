import React, { useState, useEffect } from "react";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioPages } from "@/components/portfolio/portfolioPages";

const navLinks = portfolioPages;

export default function NavBar({ currentPage = "Home" }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#07091199] backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
        }`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#a08030] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">RJ</span>
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors hidden sm:block">
                        Ranga Jayasinghe
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.page}
                            to={createPageUrl(link.page)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                currentPage === link.page
                                    ? "text-[#c9a84c] bg-[#c9a84c]/10"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-slate-400 hover:text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#070911]/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.page}
                            to={createPageUrl(link.page)}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                currentPage === link.page
                                    ? "text-[#c9a84c] bg-[#c9a84c]/10"
                                    : "text-slate-400 hover:text-white"
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
