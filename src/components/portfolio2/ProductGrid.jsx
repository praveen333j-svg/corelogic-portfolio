import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
    {
        name: "28 Degrees MasterCard",
        category: "Global Travel Credit Card",
        tagline: "Fee-free international transactions with strong global adoption potential.",
        vision: "Led business workshops to design a travel credit card offering fee-free international transactions and strong global adoption potential.",
        engineering: "Directed development teams implementing billing configuration, interest logic and foreign transaction processing within the VisionPLUS card platform.",
        assurance: "Led MasterCard certification testing validating authorisation, settlement and billing behaviour before launch.",
    },
    {
        name: "Wizard MasterCard",
        category: "Promotional Balance Transfer Product",
        tagline: "Flexible promotional balance transfer with structured interest products.",
        vision: "Defined requirements for a card product supporting promotional balance transfers and flexible interest structures.",
        engineering: "Implemented promotional interest logic and balance transfer functionality within VisionPLUS processing modules.",
        assurance: "Directed scheme certification testing validating promotional billing scenarios and network compliance.",
    },
    {
        name: "Low Rate MasterCard",
        category: "Simplified Interest Credit Card",
        tagline: "Streamlined low-interest product with simplified fee structures.",
        vision: "Designed a simplified card product offering low interest rates and streamlined fee structures.",
        engineering: "Updated platform interest calculation modules and fee application logic within the card processing system.",
        assurance: "Developed test strategies validating billing cycles, interest calculations and financial reconciliation.",
    },
    {
        name: "GE Source MasterCard",
        category: "Full MasterCard Certification Implementation",
        tagline: "New MasterCard product within the GE card portfolio — full certification lifecycle.",
        vision: "Defined product requirements for introducing a new MasterCard product within the GE card portfolio.",
        engineering: "Configured VisionPLUS modules and implemented interfaces connecting GE systems with MasterCard network endpoints.",
        assurance: "Led full MasterCard certification lifecycle including network transaction testing and compliance validation.",
    },
    {
        name: "NZ Close-End Loans",
        category: "VisionPLUS Lending Product Extension",
        tagline: "New Zealand lending product extension across TRAMS, merchant and CMS modules.",
        vision: "Defined requirements for introducing New Zealand close-end lending products within the VisionPLUS platform.",
        engineering: "Implemented loan plan configuration across TRAMS, merchant and CMS modules.",
        assurance: "Executed testing validating repayment processing, loan balance tracking and system stability.",
    },
];

export default function ProductGrid() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 bg-slate-900" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                            Case Studies
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Product Launch Case Studies
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl text-[16px]">
                        Five flagship card products delivered end-to-end on the VisionPLUS platform.
                        Expand each card to explore the full delivery story.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.name} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}