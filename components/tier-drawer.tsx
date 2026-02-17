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
      description: `The entry point. I’ll audit your current feed and identify the 'Visual Leaks' holding your brand back. You get a 1-page roadmap on exactly how to fix your aesthetic. No commitment, just a plan to dominate.`,
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
      shortDescription: "Short-Form Vertical Mastery.",
      priceDisplay: "Most Popular / Flexible Rates",
      isPopular: true,
      description: `The core engine for TikTok and Instagram. Whether you need just editing, just recording, or full production—this is the 'Most Popular' path. High-impact vertical content optimized for status and reach.`,
      bullets: [
        "Vertical-Only (TikTok, Reels, Shorts)",
        "Recording, Editing, or Full-Service options",
        "High-Retention Editing Style",
        "Fast 'Outlaw' Turnaround",
        "Rates adjusted based on project & location",
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
      description: `The elite tier for large events, expensive shoots, and long-form storytelling. Includes full horizontal and vertical coverage. I travel to your location to handle the architecture of your brand's biggest moments.`,
      bullets: [
        "Full Scale Production (Horizontal + Vertical)",
        "Large Event & High-Budget Shoot Coverage",
        "Extended Narrative & Longer Style Videos",
        "On-Location (Travel/Stay Included in Quote)",
        "Full Visual Architecture & Legacy Branding",
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
    setOpenTier(openTier === id ? null : id)
  }

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`bg-gradient-to-br ${colorClasses[tier.color]} border text-white rounded-3xl transition-all duration-300 relative overflow-hidden ${
            openTier === tier.id ? "ring-2 ring-white/10" : ""
          }`}
        >
          {tier.isPopular && (
            <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest z-10">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>
          )}
          
          <div
            onClick={() => toggleTier(tier.id)}
            className="cursor-pointer flex items-center justify-between p-6"
          >
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {tier.icon}
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">{tier.label}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{tier.priceDisplay}</p>
              </div>
            </div>
            <div className="text-gray-600">
              {openTier === tier.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openTier === tier.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="px-6 pb-8 space-y-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent w-full" />
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.bullets.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-3 text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 font-black uppercase italic tracking-tighter py-6 rounded-2xl shadow-xl transition-transform active:scale-95"
              >
                <a href={tier.link}>{tier.buttonText}</a>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
