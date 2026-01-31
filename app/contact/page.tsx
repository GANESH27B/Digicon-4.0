import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <main className="pt-32 pb-16 px-4">
                <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-cyan-500" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-400">info@digicon.ec</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-cyan-500" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-cyan-500" />
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
