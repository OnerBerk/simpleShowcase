
import Layout from "../components/Layout"
import styles from "./pages.module.scss"

const About = () =>(
    <Layout title="Gallerie">
        <img className={styles.img} src=".././static/103311548_o_resultat.webp" alt="assiette kintsugi"/>
        <img className={styles.img} src=".././static/images_resultat.webp" alt="vase kintsugi"/>
        <img className={styles.img} src=".././static/kint_resultat.webp" alt="motif kintsugi"/>
    </Layout>
)
    export default About