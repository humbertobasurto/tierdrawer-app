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
      label: "Tier 1 - The Blueprint",
      image: "/Tier1sq.png",
      shortDescription: "Digital asset & strategy clarity.",
      basePrice: 250,
      description: `A high-speed digital injection. We fix your first impression, optimize your 'Visual Leak,' and set the groundwork for your visual legacy.`,
      bullets: [
        "Custom $ODS$ Carrd Template Setup",
        "Digital Face-Lift (Bio & Link Optimization)",
        "30-Minute High-Status Strategy Call",
        "Visual Audit & Content Roadmap",
      ],
      color: "copper",
      link: "https://outlawsolutions.gumroad.com/l/theintelbrief",
      buttonText: "Secure The Blueprint",
    },
    {
      id: 2,
      label: "Tier 2 - The Shadow",
      image: "/Tier2sq.png",
      shortDescription: "Cinematic production & narrative capture.",
      basePrice: 1500,
      description: `I shadow your life for one afternoon to capture the high-status narrative you're already living. 4K POV capture and elite editing to make you look as expensive as you are.`,
      bullets: [
        "Includes Everything in Tier 1",
        "4-Hour In-Person 'Shadow' Production",
        "Cinematic GoPro 12 & iPhone 16 Pro Max Capture",
        "10 High-Status Edited Reels/TikToks",
        "Color Grading & Sound Design (Outlaw Style)",
      ],
      color: "silver",
      link: "https://outlawsolutions.gumroad.com/l/bnqbv",
      buttonText: "Book A Shadow Session",
    },
    {
      id: 3,
      label: "Tier 3 - The Syndicate",
      image: "/Tier3sq.png",
      shortDescription: "Full identity reconstruction & visual empire.",
      basePrice: "5000 (starting price)",
      description: `The total aesthetic takeover. We rebuild your visual world from the ground up, from studio setup to a complete 6-month content blueprint.`,
      bullets: [
        "Includes Everything in Tier 2",
        "5-Day Intensive Brand Reconstruction",
        "Professional Home/Studio Lighting & Setup",
        "Full Visual Identity & Branding Overhaul",
        "30 Days of Content Captured & Scheduled",
        "Direct Access for Ongoing Creative Direction",
      ],
      color: "gold",
      link: "https://outlawsolutions.gumroad.com/l/xhoxh",
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
    <div className="space-y-6 w-full">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`bg-gradient-to-br ${colorClasses[tier.color]} border border-white/20 text-white rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-[1.01] ${
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
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-white/30 transition-transform duration-300"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">{tier.label}</h3>
                <p className="text-sm md:text-base text-white/80 font-medium italic">{tier.shortDescription}</p>
                <p className="text-sm md:text-base font-bold text-white mt-1">
                  {typeof tier.basePrice === "number" ? `$${tier.basePrice}` : tier.basePrice}
                </p>
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
            <CardContent className="p-4 md:p-6 pt-0 space-y-4">
              <p className="text-sm md:text-base text-white/95 leading-relaxed">{tier.description}</p>
              <ul className="space-y-2 text-white/90">
                {tier.bullets.map((point, idx) => (
                  <li key={idx} className="text-sm md:text-base flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`bg-gradient-to-r ${buttonColor[tier.color]} text-white text-md font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:brightness-110 transition-all transform hover:-translate-y-1 w-full md:w-auto shadow-2xl`}
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
