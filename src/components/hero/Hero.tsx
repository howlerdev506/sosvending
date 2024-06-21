
import Image from "next/image";


const Hero = () => {
    return(
        <section>                
            <div>
                <h1 >Welcome to Our Company</h1>
                <p>Discover our amazing products and services.</p>
            </div>
            <Image
            src="/images/bg-hero-min.jpg"
            alt="Next.js Logo"
            width={350}
            height={400}
            />
            <div className="bg1"></div>
            <div className="bg2"></div>
        </section>
    )
}

export default Hero