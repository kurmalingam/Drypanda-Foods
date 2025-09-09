import './HeroSection.css'
const HeroSection = () =>{
    const bannerImages = [
            { src: "/images/1.png", alt: "Premium Dehydrated Products" },
            { src: "/images/2.png", alt: "Freshly Preserved Goodness" },
            { src: "/images/3.png", alt: "Best Quality Guaranteed" },
            { src: "/images/4.png", alt: "Farm Fresh to Table" },
            { src: "/images/5.png", alt: "Healthy & Natural" },
    ];
            const products = [
        { src: "/images/onion.png", name: "Dehydrated Onion" },
        { src: "/images/tomato.png", name: "Dehydrated Tomato" },
        { src: "/images/banana.png", name: "Dehydrated Banana" },
        { src: "/images/carrot.png", name: "Dehydrated Carrot" },
        { src: "/images/apple.png", name: "Dehydrated Apple" },
        { src: "/images/greenbeans.png", name: "Dehydrated Green Beans" },
        ];
    return(
        <div className='hero-section'>
            <div className="scroll-container">
                <div className="scroll-track">
                   {[...bannerImages,...bannerImages].map((item,index)=>(
                    <img key={index} src={item.src} alt={item.alt} />
                   ))}
                </div>
            </div>

     <section className="product-grid">
        <h1>Sample Products</h1>
        <div className="product-grid-container">
          {products.map((p, index) => (
            <div key={index} className="product-card">
              <img src={p.src} alt={p.name} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </section>
        </div>
    )
}
export default HeroSection;