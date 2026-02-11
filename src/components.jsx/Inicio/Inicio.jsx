import imgInicial from "../../assets/imagemInicial.png"
import styles from "./Inicio.module.scss"


export default function Inicio(){
    return(
        <section className={styles.containerTelaInicial}>
            <div>
                <h1>Projetos Sociais que transformam</h1>
                <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
            </div>
            <img src={imgInicial} alt="Mãos segurando imagem que remete a projeto sicial" />
        </section>
    )

}