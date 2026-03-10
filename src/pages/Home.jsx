import React from "react";
import NavBar from "@/components/portfolio/NavBar";
import HeroSection from "@/components/portfolio/HeroSection";
import CaseStudySection from "@/components/portfolio/CaseStudySection";
import ReleaseRecordSection from "@/components/portfolio/ReleaseRecordSection";
import RiskEngineeringSection from "@/components/portfolio/RiskEngineeringSection";
import AboutSidebar from "@/components/portfolio/AboutSidebar";
import FooterSection from "@/components/portfolio/FooterSection";

export default function Home() {
    return (
        <div className="overflow-hidden bg-[#070911]">
            <NavBar currentPage="Home" />
            <HeroSection />
            <CaseStudySection />
            <ReleaseRecordSection />
            <RiskEngineeringSection />
            <AboutSidebar />
            <FooterSection />
        </div>
    );
}