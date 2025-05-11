import TierDrawer from "@/components/tier-drawer"

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 bg-black text-white flex flex-col items-center justify-center space-y-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent pb-2">
        Choose Your Loadout
      </h1>
      <p className="text-center text-gray-400 max-w-2xl">
        Select the tier that best fits your needs and level up your strategy.
      </p>
      <TierDrawer />
    </main>
  )
}
