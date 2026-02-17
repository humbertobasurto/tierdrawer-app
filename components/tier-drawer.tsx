"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Star, Zap, Camera, Crown } from "lucide-react"

export default function TierDrawer() {
  const [openTier, setOpenTier] = useState<number | null>(null)

  const tiers = [
    {
      id: 1,
      label: "Tier 1 - The Blueprint",
      icon: <Zap className="w-5 h-5 text-orange-400" />,
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
      icon: <Camera className="w-5 h-5 text-gray-300" />,
      shortDescription: "Short-Form Vertical Content.",
      priceDisplay: "Most Popular / Flexible Rates",
      isPopular: true,
      description: `The core engine. High-impact vertical videos for TikTok and Instagram. Whether you need me to record, edit, or handle the full production, this is the 'Most Popular' path for creators who need to stay consistent and sharp.`,
      bullets: [
        "Vertical-Only (TikTok, Reels, Shorts)",
        "Recording Only, Editing Only, or Full-Service",
        "Optimized for High Retention & Reach",
        "Fast 'Outlaw' Turnaround",
        "Rates adjusted to project scale & location",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/theoutlaw",
      buttonText: "Build Your Short-Form",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      icon: <Crown className="w-5 h-5 text-yellow-400" />,
      shortDescription: "Elite Production & Visual Legacy.",
      priceDisplay: "Travel Required / Custom Quote",
      description: `The elite tier for large events, expensive shoots, and long-form storytelling. This combines cinematic horizontal production with high-status vertical clips. Travel and accommodation are covered by the client.`,
      bullets: [
        "Horizontal + Vertical Production",
        "Extended Narrative & Longer Style Videos",
        "Large Event & High-Budget Shoot Coverage",
        "Travel-Ready (Domestic & International)",
        "Full Visual Architecture & Legacy Branding",
        "Direct Access for Strategic Creative Direction",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/thesyndicate",
      buttonText: "Apply For The Syndicate",
    },
  ]

  const colorClasses = {
    copper: "from-zinc-900 to-zinc-800 border-zinc-700 hover:shadow-[0_0_15px_2px_rgba(184,115,51,0.2)]",
    silver: "from-zinc-900 to-zinc-800 border-white/10 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.05)]",
    gold: "from-zinc-900 to-zinc-800 border-yellow-900/40 hover:shadow-[0_0_15px_2px_rgba(255,215,0,0.15)]",
  }

  const toggleTier = (id: number) => {
