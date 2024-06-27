
"use client";

import Image from "next/image";
import bgimage from ".../public/images/bg-hero-min.jpg";

const Hero = () => {
    return(
    <section className="hero">
      <div className="">
        <div className="">
            <div className="">
                <div className="">
                    <h1 className="">
                        Sosvending <br/>
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepedicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernaturculpa.

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </p>
                </div>
            </div>
            <div className="">
                <div className="">
                    <Image
                      src="/images/bg-hero-min.jpg"
                      alt="bg"
                      width={500}
                      height={500}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
    )
}

export default Hero