import Link from "next/link"
import styles from "./Links.module.css";

const Links = () => {

    const links =[
        {
            title: "Servicios",
            path: '#Servicios'
        }, {
            title: "Productos",
            path: '#productos'
        },        {
            title: "Contactenos",
            path: '#Contactenos'
        }
    ]

    return(
        <>
            {links.map( link => (
                <li key={link.title}><Link href={link.path} className="font-extralight hover:underline">{link.title}</Link></li>
            ))}
        </>
    )
}

export default Links