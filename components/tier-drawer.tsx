"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Star } from "lucide-react"

export default function TierDrawer() {
  const [openTier, setOpenTier] = useState<number | null>(null)

  const tiers = [
    {
      id: 1,
      label: "Tier 1 - The Blueprint",
      image: "/Tier1sq.png",
      shortDescription: "Visual Audit & Content Roadmap.",
      priceDisplay: "FREE",
      description: `The entry point. I’ll audit your current feed and identify the 'Visual Leaks' making you look cheap. You get a 1-page roadmap on exactly how to fix your aesthetic. No commitment, just a plan to dominate.`,
      bullets: [
        "Personalized Feed Aesthetic Audit",
        "Algorithm Gap Analysis",
        "3 Custom Content Hooks for your niche",
        "Direct Roadmap to 'Expensive' Status",
      ],
      color: "copper",
      link: "https://outlawsolutions.gumroad.com/l/theblueprint",
      buttonText: "Get Your Free Audit",
    },
    {
      id: 2,
      label: "Tier 2 - The Outlaw",
      image: "/Tier2sq.png",
      shortDescription: "Short-Form Vertical Mastery.",
      priceDisplay: "Most Popular / Flexible Rates",
      isPopular: true,
      description: `The core engine for TikTok and Instagram. Whether you need recording, editing, or full production—this is the path for creators who need to stay sharp and consistent.`,
      bullets: [
        "Vertical-Only (TikTok, Reels, Shorts)",
        "Recording Only, Editing Only, or Full-Service",
        "High-Retention 'Outlaw' Editing Style",
        "Rates adjusted to project scale & location",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/theoutlaw",
      buttonText: "Build Your Short-Form",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      image: "/Tier3sq.png",
      shortDescription: "Elite Production & Visual Legacy.",
      priceDisplay: "Travel Required / Custom Quote",
      description: `Elite tier for large events and expensive shoots. Combines cinematic horizontal production with high-status vertical clips. Travel and accommodation are required for all non-local sessions.`,
      bullets: [
        "Horizontal + Vertical Production",
        "Extended Narrative & Long-Form Style Videos",
        "Large Event & High-Budget Shoot Coverage",
        "On-Location (Travel/Stay Covered by Client)",
        "Full Visual Architecture & Legacy Branding",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/thesyndicate",
      buttonText: "Apply For The Syndicate",
    },
  ]

  const colorClasses = {
    copper: "from-orange-900 to-yellow-700 hover:shadow-[0_0_15px_2px_rgba(184,115,51,0.7)]",
    silver: "from-zinc-700 to-gray-400 hover:shadow-[0_0_15px_2px_rgba(192,192,192,0.7)]",
    gold: "from-yellow-600 to-yellow-400 hover:shadow-[0_0_15px_2px_rgba(255,215,0,0.7)]",
  }

  const buttonColor = {
    copper: "from-orange-600 to-yellow-400 shadow-lg hover:shadow-xl",
    silver: "from-gray-500 to-gray-300 shadow-lg hover:shadow-xl",
    gold: "from-yellow-700 to-yellow-400 shadow-lg hover:shadow-xl",
  }

  const toggleTier = (id: number) => {
    setOpenTier(openTier === id ? null : id)
  }

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`bg-gradient-to-br ${colorClasses[tier.color as keyof typeof colorClasses]} border border-white/20 text-white rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-[1.02] ${
            openTier === tier.id ? "shadow-[0_0_20px_4px_rgba(255,255,255,0.4)]" : ""
          }`}
        >
          {tier.isPopular && (
            <div className="absolute top-4 right-4 bg-white text-black text
