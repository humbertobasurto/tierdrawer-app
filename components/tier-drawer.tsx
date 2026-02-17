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

  const colorClasses:
