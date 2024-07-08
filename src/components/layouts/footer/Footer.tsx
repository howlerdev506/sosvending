import { footerSocialLinks , footerinfo , footerInnerHtml} from "@/constants"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer id="Contactenos" className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>

      <div className="footer__links">
        {footerSocialLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500 flex between items-center gap-5"
                  >
                    <Image             
                    src={link.image}
                    alt="Next.js Logo"
                    width={33}
                    height={33}
                    className="object-contain"/>
                    {link.title}
                  </Link> 
              ))}
            </div>
          </div>
        ))}
        {footerinfo.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col">
              {item.info.map((info) => (
                <div key={info.key} className="flex gap-1">
                   <span className="font-semibold">{info.title}<span className="font-normal"> {info.text2}</span></span>
                   <span className="font-normal">{info.text1}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex flex-wrap justify-between items-center mt-10 border-t border-gray-100 px-6 py-10'>
      <p className="flex between items-center sm:pl-11 sm:translate-x-20 " > 
        <Image src='/images/sosvending-logo.png' alt='logo' width={150} height={18} className='object-contain' />
      &copy; 
      {footerInnerHtml.year}
      </p>
      <div className="footer__copyrights-link sm:-translate-x-20">
        {footerInnerHtml.links.map((link)=>(
          <Link key={link.tittle} href={link.url} className="text-gray-500">
            {link.tittle}
          </Link>
        ))}
        
      </div>
    </div>
  </footer>
  )
};

export default Footer
