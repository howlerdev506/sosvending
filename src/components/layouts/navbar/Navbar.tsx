import Links from "./links/Links"
import Image from "next/image";
import Link from "next/link";

import CustomButton from "@/components/customElements/CustomButton";

const Navbar = () => {
    return(
        <header className="sm:w-full absolute z-10">
            <nav className="sm:max-w-[1440] mx-auto flex justify-between items-center">
                <Link href="/" className="flex justify-center items-center pl-7 sm:pl-11">
                    <Image             
                    src="/images/sosvending-logo.png"
                    alt="Next.js Logo"
                    width={250}
                    height={36}
                    className="object-contain"/>
                </Link>
                <ul className="flex justify-between items-center gap-6 sm:mr-[200px]">
                    <Links/>
                    <CustomButton
                        title="Login"
                        btnType="button"
                        containerStyles="bg-primary-blue text-white rounded-full sm:rounded-full min-w[130px] max-"
                    />
                </ul>

            </nav>
        </header>

    )
}

export default Navbar