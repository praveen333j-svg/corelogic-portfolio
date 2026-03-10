import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-[#0a0e1a] text-gray-100">
            <style>{`
                :root {
                    --accent-gold: #c9a84c;
                    --accent-gold-light: #e4c96a;
                    --bg-primary: #0a0e1a;
                    --bg-card: #111827;
                    --bg-card-hover: #1a2236;
                    --text-primary: #f1f5f9;
                    --text-secondary: #94a3b8;
                    --border-subtle: #1e293b;
                }
                body {
                    background-color: var(--bg-primary);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
                ::selection {
                    background-color: rgba(201, 168, 76, 0.3);
                    color: #fff;
                }
            `}</style>
            {children}
        </div>
    );
}