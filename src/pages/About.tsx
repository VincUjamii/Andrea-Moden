import {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        {id: 1, label: 'Foto 1'},
        {id: 2, label: 'Foto 2'},
        {id: 3, label: 'Foto 3'},
        {id: 4, label: 'Foto 4'},
        {id: 5, label: 'Foto 5'},
        {id: 6, label: 'Foto 6'}
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="pt-20 md:pt-20">
            <div className="bg-white py-20 md:py-28 px-6 mt-12 md:mt-0">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4">ÜBER UNS</div>
                    <h1 className="text-4xl md:text-5xl font-extralight text-[#2D2D2D] mb-12">Andrea Moden</h1>
                    <div className="w-24 h-[1px] bg-[#C9A477] mx-auto mb-12"></div>
                    <p className="text-lg font-light text-[#666666] leading-relaxed mb-8">
                        Willkommen in unserem Fachgeschäft für elegante Damenmode im Herzen von Ottendorf-Okrilla.
                    </p>
                    <p className="text-base text-[#666666] leading-relaxed">
                        Seit vielen Jahren bieten wir eine sorgfältig kuratierte Kollektion hochwertiger Mode für jeden
                        Anlass.
                        Von festlicher Garderobe über Business-Outfits bis hin zu Freizeitmode – bei uns finden Sie
                        stilvolle Kleidung,
                        die Ihre Persönlichkeit unterstreicht. Persönliche Beratung, individuelle Betreuung und
                        ein Einkaufserlebnis, bei dem Sie sich wohlfühlen, sind unser Anspruch.
                    </p>
                </div>
            </div>

            <div className="py-20 px-6 md:px-16 bg-[#FAFAFA]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-sm tracking-[0.3em] text-[#C9A477] mb-4 text-center">GALERIE</div>
                    <h2 className="text-3xl font-extralight text-[#2D2D2D] mb-16 text-center">Unser Geschäft</h2>

                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {images.map((img) => (
                            <div key={img.id}
                                 className="aspect-[3/4] bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8] overflow-hidden group">
                                <div
                                    className="w-full h-full flex items-center justify-center text-[#C9A477] text-2xl font-light opacity-30 group-hover:opacity-50 transition-opacity">{img.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden relative">
                        <div
                            className="aspect-[3/4] bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8] flex items-center justify-center relative overflow-hidden">
                            <div
                                className="text-[#C9A477] text-2xl font-light opacity-30">{images[currentSlide].label}</div>

                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 shadow-md transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5 text-[#2D2D2D]"/>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 shadow-md transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5 text-[#2D2D2D]"/>
                            </button>
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        currentSlide === index ? 'bg-[#2D2D2D] w-8' : 'bg-[#2D2D2D]/30'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

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
