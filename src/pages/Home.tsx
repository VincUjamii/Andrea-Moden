import { Clock, MapPin, Phone } from 'lucide-react';
import storefront from '../assets/images/Ladenfront.jpeg';

function Home() {
    return (
        <div>
            {/* Hero-Section */}
            <div
                className="h-screen bg-white relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${storefront})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A477]/5 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="items-center text-center">
                        <div className="w-24 h-[1px] bg-[#C9A477] mx-auto mb-8 mt-4"></div>
                        <p className="text-xl md:text-2xl font-bold text-[#FAFAFA] max-w-2xl mx-auto">
                            Zeitlose Eleganz und individuelle Beratung in Ottendorf-Okrilla
                        </p>
                    </div>
                </div>
            </div>

            {/* Willkommen-Section */}
            <div className="py-24 px-6 md:px-16 bg-[#FAFAFA]">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4">WILLKOMMEN</div>
                    <h2 className="text-3xl md:text-4xl font-extralight mb-8 text-[#2D2D2D]">
                        Wo Mode auf Persönlichkeit trifft
                    </h2>
                    <p className="text-lg text-[#666666] leading-relaxed">
                        Seit Jahren bieten wir unseren Kundinnen eine exquisite Auswahl an hochwertiger Mode.
                        Jedes Stück wird mit Bedacht ausgewählt, um Ihren individuellen Stil zu unterstreichen.
                        Besuchen Sie uns und erleben Sie Mode mit persönlicher Note.
                    </p>
                </div>
            </div>

            {/* Kontakt-Section */}
            <div className="py-24 px-6 md:px-16 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4 text-center">KONTAKT</div>
                    <h2 className="text-3xl font-extralight mb-16 text-center text-[#2D2D2D]">Besuchen Sie uns</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <Clock className="w-10 h-10 mx-auto mb-6 text-[#C9A477]" />
                            <h3 className="text-xl font-medium mb-4 text-[#2D2D2D]">Öffnungszeiten</h3>
                            <div className="text-[#666666] space-y-2">
                                <p>
                                    <span className="font-medium">Mo - Fr:</span> 9:30 - 12:30 Uhr
                                    <br />
                                    14:30 - 17:00 Uhr
                                </p>
                                <p>
                                    <span className="font-medium">Sa:</span> 9:30 - 11:30 Uhr
                                </p>
                                <p>
                                    <span className="font-medium">So:</span> Geschlossen
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <MapPin className="w-10 h-10 mx-auto mb-6 text-[#C9A477]" />
                            <h3 className="text-xl font-medium mb-4 text-[#2D2D2D]">Adresse</h3>
                            <p className="text-[#666666]">
                                Dresdner Straße 4
                                <br />
                                01458 Ottendorf-Okrilla
                            </p>
                        </div>

                        <div className="text-center">
                            <Phone className="w-10 h-10 mx-auto mb-6 text-[#C9A477]" />
                            <h3 className="text-xl font-medium mb-4 text-[#2D2D2D]">Telefon</h3>
                            <p className="text-[#666666]">
                                <a href="tel:03520553500" className="hover:text-[#C9A477] transition-colors">
                                    035205 53500
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="bg-white">
                <div style={{ width: '100%', height: '500px' }}>
                    <iframe
                        title="Karte Dresdner Straße 4, 01458 Ottendorf-Okrilla"
                        src="https://www.google.com/maps?q=Dresdner%20Stra%C3%9Fe%204%2C%2001458%20Ottendorf-Okrilla&output=embed"
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#2D2D2D] text-[#F8F6F3] py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-lg mb-2">Andrea Moden</p>
                    <p className="text-sm opacity-80">Dresdner Straße 4, 01458 Ottendorf-Okrilla</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
