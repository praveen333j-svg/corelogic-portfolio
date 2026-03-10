import React from "react";
import NavBar from "@/components/portfolio/NavBar";
import ProductLaunchHero from "@/components/portfolio2/ProductLaunchHero";
import TripleRoleModel from "@/components/portfolio2/TripleRoleModel";
import ProductGrid from "@/components/portfolio2/ProductGrid";
import ClosingStatement from "@/components/portfolio2/ClosingStatement";
import Page2Footer from "@/components/portfolio2/Page2Footer";

export default function ProductLaunchGallery() {
    return (
        <div className="bg-white min-h-screen">
            <NavBar currentPage="ProductLaunchGallery" />
            <ProductLaunchHero />
            <TripleRoleModel />
            <ProductGrid />
            <ClosingStatement />
            <Page2Footer />
        </div>
    );
}
