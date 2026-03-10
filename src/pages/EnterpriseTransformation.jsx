import React from "react";
import TransformationHero from "@/components/portfolio3/TransformationHero";
import CaseStudySBI from "@/components/portfolio3/CaseStudySBI";
import CaseStudyGE from "@/components/portfolio3/CaseStudyGE";
import CaseStudyInfra from "@/components/portfolio3/CaseStudyInfra";
import GlobalDelivery from "@/components/portfolio3/GlobalDelivery";
import LeadershipPhilosophy from "@/components/portfolio3/LeadershipPhilosophy";

export default function EnterpriseTransformation() {
    return (
        <div className="min-h-screen">
            <TransformationHero />
            <CaseStudySBI />
            <CaseStudyGE />
            <CaseStudyInfra />
            <GlobalDelivery />
            <LeadershipPhilosophy />
        </div>
    );
}