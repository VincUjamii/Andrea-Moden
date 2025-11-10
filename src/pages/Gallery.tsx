const collections = [
    {
        url: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        title: 'Frühjahr',
        description: 'Leichte Stoffe in sanften Farben'
    },
    {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        title: 'Sommer',
        description: 'Elegante Sommerkleider'
    },
    {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        title: 'Abendmode',
        description: 'Zeitlose Eleganz für besondere Anlässe'
    },
    {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        title: 'Casual',
        description: 'Komfortable Mode für jeden Tag'
    }
];

function Gallery() {
    return (
        <div className="pt-20">
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-light text-[#3A3A3A] mb-16 text-center">Unsere Kollektionen</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {collections.map((collection, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                                        style={{backgroundImage: `url(${collection.url})`}}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-light mb-2">{collection.title}</h3>
                                        <p className="text-sm text-white/90">{collection.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="bg-[#3A3A3A] text-[#F5F1E8] py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-lg mb-2">Andrea Moden</p>
                    <p className="text-sm opacity-80">Dresdner Straße 4, 01458 Ottendorf-Okrilla</p>
                </div>
            </footer>
        </div>
    );
}

export default Gallery;
