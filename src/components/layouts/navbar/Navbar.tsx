import styles from "./Navbar.module.css";
import Links from "./links/Links"
import Image from "next/image";


const Navbar = () => {
    return(
        <header>
            <nav className={styles.navbar}>
            <Image
            src="/images/sosvending-logo2.png"
            alt="Next.js Logo"
            width={440/1.50}
            height={132/1.50}
            />
                <ul>
                    <Links/>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar