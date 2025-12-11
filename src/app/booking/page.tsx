import BusCard from "@/components/BusCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function BookingPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    // Mock Data - In real app, fetch based on searchParams (from, to, date)
    const buses = [
        { id: "1", operator: "SkyBus Premium", type: "Volvo Multi-Axle A/C Sleeper", departureTime: "21:00", arrivalTime: "06:00", duration: "09h 00m", price: 1250, seatsAvailable: 12, rating: 4.8 },
        { id: "2", operator: "Royal Travels", type: "Scania A/C Seater/Sleeper", departureTime: "22:30", arrivalTime: "07:15", duration: "08h 45m", price: 999, seatsAvailable: 24, rating: 4.5 },
        { id: "3", operator: "InterCity Express", type: "Non-A/C Sleeper (2+1)", departureTime: "20:00", arrivalTime: "05:30", duration: "09h 30m", price: 750, seatsAvailable: 8, rating: 4.2 },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Select Your Bus</h1>
                        <p className="text-gray-400">Showing {buses.length} buses for your route</p>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <SlidersHorizontal className="mr-2 w-4 h-4" /> Filters
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters (Hidden on mobile for now) */}
                    <aside className="hidden lg:block w-72 h-fit bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
                        <h3 className="font-semibold text-lg mb-6">Filters</h3>
                        {/* Placeholder for filters */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-medium text-gray-400 mb-3">Bus Type</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm text-gray-300"><input type="checkbox" className="rounded bg-white/10 border-white/20" /> AC Sleeper</label>
                                    <label className="flex items-center gap-2 text-sm text-gray-300"><input type="checkbox" className="rounded bg-white/10 border-white/20" /> AC Seater</label>
                                    <label className="flex items-center gap-2 text-sm text-gray-300"><input type="checkbox" className="rounded bg-white/10 border-white/20" /> Non-AC</label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results */}
                    <div className="flex-1 space-y-6">
                        {buses.map(bus => (
                            <BusCard key={bus.id} {...bus} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
