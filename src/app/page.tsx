"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        <video className="bg-video" playsInline={true}  autoPlay={true} muted={true} loop={true}><source src="assets/mp4/bg.mp4" type="video/mp4" /></video>
        <div className="masthead">
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <h1 className="fst-italic lh-1 mb-4">Sosvending</h1>

                </div>
            </div>
        </div>
        <div className="social-icons">
            <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a className="btn btn-dark m-3" href="https://wa.me/50640100203"><Image      
                        src="/svgs/whatsap.svg"
                        width={40}
                        height={40}
                        alt="whatsapp link"/></a>
                <a className="btn btn-dark m-3" href="https://www.facebook.com/sosdigital.io"><Image      
                        src="/svgs/facebook.svg"
                        width={45}
                        height={45}
                        alt="facebook link"/></a>
                <a className="btn btn-dark m-3" href="https://www.instagram.com/sosvending/"><Image      
                        src="/svgs/instagram.svg"
                        color="white"
                        width={40}
                        height={40}
                        alt="instagram link"/></a>
            </div>
        </div>
</>
  );
}
