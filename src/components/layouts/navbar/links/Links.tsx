import Link from "next/link"
import styles from "./Links.module.css";

const Links = () => {

    const links =[
        {
            title: "Informacion",
            path: '#Informacion'
        },        {
            title: "Maquinas",
            path: '#Maquinas'
        },        {
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
                <li className={styles.li} key={link.title}><Link href={link.path}>{link.title}</Link></li>
            ))}
        </>
    )
}

export default Links