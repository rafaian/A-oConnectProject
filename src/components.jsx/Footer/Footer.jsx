import LogoF from "../../assets/logo.png"
import Whatsapp from "../../assets/whatsapp.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"

import styles from "./Footer.module.scss"

export default function Footer(){
    return(
        <footer>
            <div>
                <img src={LogoF} alt="Logo Ações da Connect"/>
                <h2>Connect</h2>
            </div>            
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
            <nav className={styles.naveFooter}>
                <img src={Whatsapp} alt="Logo Whatsapp" />
                <img src={Linkedin} alt="Logo Instagram" />
                <img src={Instagram} alt="Logo Linkdin" />
            </nav>
        </footer>


    )

}