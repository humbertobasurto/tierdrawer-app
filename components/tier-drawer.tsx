"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function TierDrawer() {
  const [openTier, setOpenTier] = useState<number | null>(null)

  const tiers = [
    {
      id: 1,
      label: "Tier 1 - The Intel Brief",
      image: "/Tier1sq.png",
      shortDescription: "Strategic clarity for creators ready to execute.",
      basePrice: 250,
      description: `A one-time strategy and systems clarity session for creators ready to take control. Includes a 1:1 support, custom tool stack, and upgrade credits toward future tiers.`,
      bullets: [
        "1:1 Strategy Call (30–45 min)",
        "Custom Brand Clarity Blueprint",
        "Personalized Tool Stack Setup",
        "Credit Applied to Future Tier Upgrade",
      ],
      color: "copper",
      link: "https://outlawsolutions.gumroad.com/l/ynramt",
      buttonText: "Explore This Tier",
    },
    {
      id: 2,
      label: "Tier 2 - The Loadout",
      image: "/Tier2sq.png",
      shortDescription: "DFY branding, visuals, and a portfolio system.",
      basePrice: 1000,
      description: `Done-for-you visuals, portfolio page, and content systems. A full creative service ideal for creators ready to scale influence and client acquisition.`,
      bullets: [
        "Includes Everything in Tier 1",
        "Conversion-Optimized Landing Page or Portfolio Build",
        "Monthly Strategy Call (30–45 min)",
        "2 Branded Visual Assets for Key Campaigns",
        "Branded Social Kit (2 Graphics + Captions)",
        "Brand Voice System + Content Calendar",
        "Monthly Audit & Review",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/bnqbv",
      buttonText: "Explore This Tier",
    },
    {
      id: 3,
      label: "Tier 3 - The Arsenal",
      image: "/Tier3sq.png",
      shortDescription: "Full creative system with automation & vision.",
      basePrice: "2000 (starting price)",
      description: `Full-stack creative support with strategy, automation, visuals, and more. For brands ready to scale and dominate.`,
      bullets: [
        "Includes Everything in Tier 2",
        "Automation System Buildout (Email + DM Flows)",
        "4-Piece Visual Asset Suite (Monthly)",
        "Quarterly Offer Rebuild + Market Repositioning",
        "2 Custom Short-Form Video Templates (Repurpose-Ready)",
        "Monthly Optimization Cycle + Growth Plan",
        "Unlock Premium Add-Ons: Funnels, Dashboards, Retainers",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/xhoxh",
      buttonText: "Explore This Tier",
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
    <div className="space-y-6 w-full">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`bg-gradient-to-br ${colorClasses[tier.color]} border border-white/20 text-white rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-[1.02] ${
            openTier === tier.id ? "shadow-[0_0_20px_4px_rgba(255,255,255,0.4)]" : ""
          }`}
        >
          <div
            onClick={() => toggleTier(tier.id)}
            className="cursor-pointer flex items-center justify-between p-4 md:p-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={tier.image || "/placeholder.svg"}
                alt={tier.label}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-white/30 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">{tier.label}</h3>
                <p className="text-sm md:text-base text-white/80">{tier.shortDescription}</p>
                <p className="text-sm md:text-base font-semibold text-white mt-1">${tier.basePrice}</p>
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
              <p className="text-sm md:text-base text-white/90">{tier.description}</p>
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
