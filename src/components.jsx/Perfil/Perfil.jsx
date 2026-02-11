import perfilo from '../../assets/perfilO.png'
import styles from './Perfil.module.scss'

export default function Perfil(){
    return(
        <section className={styles.containerTelaPerfil}>
            <article>
                <img src={perfilo} alt="Foto redonda perfil Rafael" />

                <div className={styles.cardInf}>
                    <h2>Rafael Serafim</h2>
                    <h3>Voluntário Ativo</h3>
                    <p className={styles.paragrafoSobreMim}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

                <address>
                    <p>São Pualo - SP</p>
                    <p>rafaelserafimx@gmail.com</p>
                    <p>membro desde</p>

                </address>
                    <ul className={styles.listaInteresses}>
                        <li>Educação </li>
                        <li>Meio ambiente</li>
                        <li>Assistencia social</li>
                        <li>Design</li>
                    </ul>
                </div>
            </article>
        </section>
    )

}