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
      label: "Tier 1 - The Intel Brief",
      image: "/Tier1sq.png",
      shortDescription: "Visual Audit & Strategic Clarity.",
      priceDisplay: "FREE",
      description: `The entry point. I’ll audit your current feed and identify the 'Visual Leaks' making you look cheap. You get a 1-page roadmap on exactly how to fix your aesthetic.`,
      bullets: [
        "1:1 Visual Audit (30–45 min)",
        "Custom Narrative Blueprint",
        "Personalized Content Roadmap",
        "Production Credit Applied to Future Tiers",
      ],
      color: "copper",
      link: "https://outlawsolutions.gumroad.com/l/theintelbrief",
      buttonText: "Get Your Free Audit",
    },
    {
      id: 2,
      label: "Tier 2 - The Loadout",
      image: "/Tier2sq.png",
      shortDescription: "Vertical Mastery & Capture Engine.",
      priceDisplay: "Flexible Deposit",
      isPopular: true,
      description: `The core engine for TikTok and IG. I show up with elite gear (Osmo 3, GoPro 12, iPhone 15 PM) to record your life and edit the narrative so you look like a category leader.`,
      bullets: [
        "Everything in Tier 1",
        "4-Hour Professional On-Site Production",
        "10 High-Status Vertical Edits",
        "Lavalier Audio & Studio Lighting Setup",
        "30-Day Deployment Content Calendar",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/crdhith",
      buttonText: "Build Your Loadout",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      image: "/Tier3sq.png",
      shortDescription: "Full-Scale Execution & Legacy.",
      priceDisplay: "Custom Quote / Travel Required",
      description: `Where creators evolve into elite operators. Full cinematic scale—Horizontal and Vertical coverage. I travel to your location to handle the architecture of your brand's biggest moments.`,
      bullets: [
        "Everything in Tier 2 (Weaponized)",
        "Horizontal + Vertical Full-Scale Production",
        "On-Location (Travel & Stay Covered by Client)",
        "4-Piece Cinematic Visual Asset Suite",
        "Quarterly Offer & Market Repositioning",
        "Priority Post-Production & Color Grading",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/npvheo",
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
    <div className="space-y-6 w-full max-w-2xl mx-auto overscroll-contain touch-pan-y">
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
              <p className="text-sm md:text-base text-white/90 leading-relaxed italic">{tier.shortDescription}</p>
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
                className={`bg-gradient-to-r ${buttonColor[tier.color]} text-white text-md font-mono tracking-wider px-6 py-2 rounded-lg hover:brightness-110 transition-all transform hover:-translate-y-1 w-full md:w-auto shadow-2xl`}
              >
                <a href={tier.link} target="_blank" rel="noopener noreferrer">
                  {tier.buttonText}
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
