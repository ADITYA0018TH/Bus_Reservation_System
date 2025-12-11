import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Wifi, Coffee } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background - Gradient fallback since video might not be available */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black z-0"></div>

        {/* Animated Shapes/Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Travel with <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the safest and most comfortable bus journeys. Real-time tracking, premium amenities, and 24/7 support.
          </p>

          {/* Search Form Widget */}
          <div className="w-full">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose SkyBus?</h2>
            <p className="text-gray-400">Redefining bus travel with premium standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "Advanced safety protocols and vetted drivers." },
              { icon: Clock, title: "On-Time Service", desc: "Punctual departures and arrivals guaranteed." },
              { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected throughout your journey." },
              { icon: Coffee, title: "Premium Snacks", desc: "Complimentary refreshments on board." },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                <feature.icon className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
