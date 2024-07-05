import Links from "./links/Links"
import Image from "next/image";
import Link from "next/link";

import CustomButton from "@/components/customElements/CustomButton";

const Navbar = () => {
    return(
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image             
                    src="/images/sosvending-logo.png"
                    alt="Next.js Logo"
                    width={300}
                    height={40}
                    className="object-contain"/>
                </Link>
                <ul className="flex justify-between items-center gap-6">
                    <Links/>
                    <CustomButton
                        title="Sign in"
                        btnType="button"
                        containerStyles="bg-primary-blue text-white rounded-full min-w[130px] mr-[130px] sm:mr-[210px]"
                    />
                </ul>

            </nav>
        </header>

    )
}

export default Navbar