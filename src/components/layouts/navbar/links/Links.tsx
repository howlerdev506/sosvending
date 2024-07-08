import Link from "next/link"
import { FlyoutLink } from "@/components";

const Links = () => {

    const links =[
        {
            title: "Servicios",
            path: '#Servicios'
        }, {
            title: "Productos",
            path: '/productos'
        },{
            title: "Conocenos",
            path: '/about'
        }
    ]

    return(
        <>
            {links.map( link => (
                <li key={link.title}><Link href={link.path}>{link.title}</Link></li>
            ))}
        </>
    )
}

export default Links