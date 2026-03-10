import React from "react";
import { motion } from "framer-motion";

export default function ProductLaunchHero() {
    return (
        <section className="bg-white pt-20 pb-16 px-6 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-10 bg-slate-900" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                            Portfolio — Page 2
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
                        New Product<br />
                        <span className="text-slate-400">Launch Gallery</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-slate-600 mb-6 max-w-2xl">
                        End-to-End Product Leadership Across Requirements, Engineering and Scheme Certification.
                    </p>
                    <p className="text-[16px] text-slate-500 max-w-3xl leading-relaxed">
                        Ranga Jayasinghe led multiple card product launches on the VisionPLUS platform, uniquely operating
                        across business analysis, engineering delivery, and scheme certification. This cross-functional
                        leadership model ensured strong alignment between business requirements and technical implementation
                        while delivering high-quality product launches.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}