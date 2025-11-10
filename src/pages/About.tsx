import {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import Platzhalter from '../assets/images/Platzhalter.png'

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        {id: 1, label: 'Foto 1', src: Platzhalter},
        {id: 2, label: 'Foto 2', src: Platzhalter},
        {id: 3, label: 'Foto 3', src: Platzhalter},
        {id: 4, label: 'Foto 4', src: Platzhalter},
        {id: 5, label: 'Foto 5', src: Platzhalter},
        {id: 6, label: 'Foto 6', src: Platzhalter},

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="pt-20 md:pt-20">
            {/* Intro */}
            <div className="bg-white py-20 md:py-28 px-6 mt-12 md:mt-0">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4">ÜBER UNS</div>
                    <h1 className="text-4xl md:text-5xl font-extralight text-[#2D2D2D] mb-12">Andrea Moden</h1>
                    <div className="w-24 h-[1px] bg-[#C9A477] mx-auto mb-12"></div>

                    <p className="text-lg font-light text-[#666666] leading-relaxed md:leading-8 mb-8 max-w-3xl mx-auto">
                        Willkommen in unserem Fachgeschäft für elegante Damenmode im Herzen von Ottendorf-Okrilla.
                    </p>
                    <p className="text-base text-[#666666] leading-relaxed max-w-3xl mx-auto">
                        Seit vielen Jahren bieten wir eine sorgfältig kuratierte Kollektion hochwertiger Mode für jeden Anlass.
                        Von festlicher Garderobe über Business-Outfits bis hin zu Freizeitmode – bei uns finden Sie stilvolle
                        Kleidung, die Ihre Persönlichkeit unterstreicht. Persönliche Beratung, individuelle Betreuung und ein
                        Einkaufserlebnis, bei dem Sie sich wohlfühlen, sind unser Anspruch.
                    </p>
                </div>
            </div>

            {/* Galerie */}
            <div className="py-20 px-6 md:px-16 bg-[#FAFAFA]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4 text-center">GALERIE</div>
                    <h2 className="text-3xl font-extralight text-[#2D2D2D] mb-16 text-center">Unser Geschäft</h2>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {images.map((img) => (
                            <div key={img.id} className="aspect-[3/4] overflow-hidden group rounded-sm bg-[#EDEDED]">
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Slider */}
                    <div
                        className="md:hidden relative"
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowLeft') prevSlide();
                            if (e.key === 'ArrowRight') nextSlide();
                        }}
                        tabIndex={0}
                        aria-roledescription="carousel"
                        aria-label="Bildergalerie Über uns"
                    >
                        <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-[#EDEDED]">
                            <img
                                src={images[currentSlide].src}
                                alt={images[currentSlide].label}
                                className="w-full h-full object-cover"
                            />

                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A477]"
                                aria-label="Vorheriges Bild"
                            >
                                <ChevronLeft className="w-5 h-5 text-[#2D2D2D]" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A477]"
                                aria-label="Nächstes Bild"
                            >
                                <ChevronRight className="w-5 h-5 text-[#2D2D2D]" />
                            </button>
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all ${
                                        currentSlide === index ? 'bg-[#2D2D2D] w-8' : 'bg-[#2D2D2D]/30 w-2'
                                    }`}
                                    aria-label={`Gehe zu Bild ${index + 1}`}
                                    aria-current={currentSlide === index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#2D2D2D] text-[#F8F6F3] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-lg mb-2">Andrea Moden</p>
                    <p className="text-sm opacity-80">Dresdner Straße 4, 01458 Ottendorf-Okrilla</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
