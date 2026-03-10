import React from "react";
import ProductLaunchHero from "@/components/portfolio2/ProductLaunchHero";
import TripleRoleModel from "@/components/portfolio2/TripleRoleModel";
import ProductGrid from "@/components/portfolio2/ProductGrid";
import ClosingStatement from "@/components/portfolio2/ClosingStatement";
import Page2Footer from "@/components/portfolio2/Page2Footer";

export default function ProductLaunchGallery() {
    return (
        <div className="bg-white min-h-screen">
            <ProductLaunchHero />
            <TripleRoleModel />
            <ProductGrid />
            <ClosingStatement />
            <Page2Footer />
        </div>
    );
}