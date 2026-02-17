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
      description: `The entry point. I audit your current digital presence and provide a 1-page roadmap identifying your 'Visual Leaks.' No commitment, just clarity on how to look expensive.`,
      bullets: [
        "Feed Aesthetic Audit",
        "Algorithm Gap Analysis",
        "3 Custom Content Hooks",
        "Visual Identity Suggestions",
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
      priceDisplay: "Most Popular / Flexible Pricing",
      isPopular: true,
      description: `The bread and butter. High-impact vertical content for TikTok, Reels, and Shorts. Whether you need me to record, edit, or handle the full production, this path is built for speed and status.`,
      bullets: [
        "Vertical-Only (TikTok/IG/Shorts)",
        "Recording, Editing, or Full-Service",
        "Fast-Paced 'Outlaw' Editing Style",
        "Optimized for High Retention",
        "Location-Adjusted Rates",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/theoutlaw",
      buttonText: "Build Your Short-Form",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      image: "/Tier3sq.png",
      shortDescription: "Elite Full-Scale Production.",
      priceDisplay: "Custom Quote / Travel Required",
      description: `The elite tier for large events, luxury brands, and cinematic legacies. This includes full horizontal and vertical coverage. I travel to your location and handle every aspect of the visual architecture.`,
      bullets: [
        "Horizontal + Vertical Production",
        "On-Location Travel & Accommodation",
        "High-End Event & Expensive Shoot Coverage",
        "Deep Cinematic Color Grading",
        "Full Brand Storytelling Architecture",
        "Priority Post-Production",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/thesyndicate",
      buttonText: "Apply For The Syndicate",
    },
  ]

  const colorClasses = {
    copper: "from-zinc-900 to-zinc-800 border-zinc-700 hover:shadow-[0_0_15px_2px_rgba(184,115,51,0.3)]",
    silver: "from-zinc-900 to-zinc-800 border-white/20 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.1)]",
    gold: "from-zinc-900 to-zinc-800 border-yellow-900/50 hover:shadow-[0_0_15px_2px_rgba(255,215,0,0.2)]",
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
            openTier === tier.id ? "ring-2 ring-white/20" : ""
          }`}
        >
          {tier.isPopular && (
            <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>
          )}
          
          <div
            onClick={() => toggleTier(tier.id)}
            className="cursor-pointer flex items-center justify-between p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <img
                  src={tier.image || "/placeholder.svg"}
                  alt={tier.label}
                  className="w-full h-full object-cover rounded-2xl border border-white/10"
                />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">{tier.label}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{tier.priceDisplay}</p>
              </div>
            </div>
            <div className="text-gray-500">
              {openTier === tier.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openTier === tier.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="px-6 pb-8 space-y-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
              <p className="text-gray-300 text-sm leading-relaxed font-medium">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.bullets.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-3 text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
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
