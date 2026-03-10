import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles, Linkedin } from "lucide-react";

const education = [
    { degree: "Master of Business Administration (MBA)", institution: "University of Melbourne" },
    { degree: "Master of Information Technology", institution: "Monash University" },
    { degree: "Bachelor of Science (Communication & IT)", institution: "Edith Cowan University" },
];

const recognitions = [
    {
        icon: Award,
        title: "CEO Best Performer Award (2019)",
        description: "For engineered contingency designs that prevented a national system failure during a 19.2M account migration."
    },
    {
        icon: Sparkles,
        title: "Innovation Leader",
        description: "Spearheaded Australia's first contactless payment implementation."
    }
];

export default function AboutSidebar() {
    return (
        <section className="py-24 px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Main about content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-px w-12 bg-[#c9a84c]/50" />
                            <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                                About
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ranga Jayasinghe
                        </h2>

                        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-8">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="text-[#c9a84c]">⬡</span> Executive Profile
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                A Senior Technology Leader and MBA-qualified executive with{" "}
                                <span className="text-white font-medium">25+ years</span> of exclusive focus on the
                                Credit Card and Payments industry. Recognized for an elite technical mastery of core
                                financial engines and a{" "}
                                <span className="text-[#c9a84c] font-medium">"triple-threat" leadership model</span>{" "}
                                that spans from functional requirements to scheme certification.
                            </p>

                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-[#c9a84c]" />
                                Education
                            </h3>
                            <div className="space-y-4 mb-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                                        <div>
                                            <div className="text-white font-medium text-sm">{edu.degree}</div>
                                            <div className="text-slate-500 text-sm">{edu.institution}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#c9a84c]" />
                                Industry Recognition
                            </h3>
                            <div className="space-y-5">
                                {recognitions.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Icon className="w-4 h-4 text-[#c9a84c]" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">{item.title}</div>
                                                <div className="text-slate-400 text-sm leading-relaxed mt-0.5">{item.description}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {[
                            { value: "25+", label: "Years in Payments" },
                            { value: "100K+", label: "Lines of Code Per Module" },
                            { value: "700K", label: "Accounts — Zero Regression" },
                            { value: "19.2M", label: "Account Migration Safeguarded" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6 hover:border-[#c9a84c]/20 transition-colors duration-500"
                            >
                                <div className="text-3xl font-bold text-[#c9a84c] mb-1">{stat.value}</div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}