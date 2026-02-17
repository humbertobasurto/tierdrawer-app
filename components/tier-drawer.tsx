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
      description: `The entry point. I’ll audit your current feed and identify the 'Visual Leaks' making you look cheap. You get a 1-page roadmap on exactly how to fix your aesthetic.`,
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
      priceDisplay: "Flexible Rates",
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
      priceDisplay: "Custom Quote",
      description: `Elite tier for large events and expensive shoots. Combines cinematic horizontal production with high-status vertical clips. Travel and accommodation are required.`,
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

  const colorClasses: Record<string, string> = {
    copper: "from-orange-900 to-yellow-700 hover:shadow-[0_0_15px_2px_rgba(184,115,51,0.7)]",
    silver: "from-zinc-700 to-gray-400 hover:shadow-[0_0_15px_2px_rgba(192,192,192,0.7)]",
    gold: "from-yellow-600 to-yellow-400 hover:shadow-[0_0_15px_2px_rgba(255,215,0,0.7)]",
  }

  const buttonColor: Record<string, string> = {
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
          className={`bg-gradient-to-br ${colorClasses[tier.color]} border border-white/20 text-white rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-[1.02] ${
            openTier === tier.id ? "shadow-[0_0_20px_4px_rgba(255,255,255,0.4)]" : ""
          }`}
        >
          {tier.isPopular && (
            <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest z-10">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>
          )}
          
          <div
            onClick={() => toggleTier(tier.id)}
            className="cursor-pointer flex items-center justify-between p-4 md:p-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={tier.image || "/placeholder.svg"}
                alt={tier.label}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-white/30 transition-transform duration-300"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">{tier.label}</h3>
                <p className="text-sm font-bold text-white/80 uppercase tracking-widest">{tier.priceDisplay}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              {openTier === tier.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openTier === tier.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="p-4 md:p-6 pt-0 space-y-4 animate-fade-in">
              <div className="h-px bg-white/20 w-full mb-4" />
              <p className="text-sm md:text-base text-white/90 leading-relaxed">{tier.description}</p>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                {tier.bullets.map((point, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`bg-gradient-to-r ${buttonColor[tier.color]} text-white text-md font-mono tracking-wider px-6 py-2 rounded-lg hover:brightness-110 transition-all transform hover:-translate-y-1 w-full md:w-auto`}
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
