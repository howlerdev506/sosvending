import Link from "next/link"

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
                <li key={link.title}><Link href={link.path} className="font-extralight hover:underline">{link.title}</Link></li>
            ))}
        </>
    )
}

export default Links