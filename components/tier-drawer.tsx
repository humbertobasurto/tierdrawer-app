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
      description: "The entry point. I’ll audit your current feed and identify the 'Visual Leaks' making you look cheap. You get a 1-page roadmap on exactly how to fix your aesthetic.",
      bullets: [
        "Personalized Feed Aesthetic Audit",
        "Algorithm Gap Analysis",
        "3 Custom Content Hooks for your niche",
        "Direct Roadmap to 'Expensive' Status",
      ],
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
      description: "High-impact vertical content for TikTok and Instagram. Whether you need recording, editing, or full production—this is the path for creators who need to stay sharp.",
      bullets: [
        "Vertical-Only (TikTok, Reels, Shorts)",
        "Recording Only, Editing Only, or Full-Service",
        "High-Retention 'Outlaw' Editing Style",
        "Rates adjusted to project scale & location",
      ],
      link: "https://outlawsolutions.gumroad.com/l/theoutlaw",
      buttonText: "Build Your Short-Form",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      image: "/Tier3sq.png",
      shortDescription: "Elite Production & Visual Legacy.",
      priceDisplay: "Travel Required / Custom Quote",
      description: "Elite tier for large events and expensive shoots. Combines cinematic horizontal production with high-status vertical clips. Travel and accommodation covered by client.",
      bullets: [
        "Horizontal + Vertical Production",
        "Extended Narrative & Long-Form Style Videos",
        "Large Event & High-Budget Shoot Coverage",
        "Full Visual Architecture & Legacy Branding",
      ],
      link: "https://outlawsolutions.gumroad.com/l/thesyndicate",
      buttonText: "Apply For The Syndicate",
    },
  ]

  const toggleTier = (id: number) => {
    setOpenTier(openTier === id ? null : id)
  }

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 text-white rounded-2xl transition-all duration-300 relative overflow-hidden ${
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
            className="cursor-pointer flex items-center justify-between p-4 md:p-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={tier.image || "/placeholder.svg"}
                alt={tier.label}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-white/10"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">{tier.label}</h3>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{tier.priceDisplay}</p>
              </div>
            </div>
            <div className="text-zinc-500">
              {openTier === tier.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openTier === tier.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="p-4 md:p-6 pt-0 space-y-4">
              <div className="h-px bg-zinc-700 w-full" />
              <p className="text-zinc-300 text-sm leading-relaxed">{tier.description}</p>
              <ul className="space-y-2">
                {tier.bullets.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-3 text-zinc-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-zinc-200 font-bold uppercase py-6 rounded-xl transition-transform active:scale-95"
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
