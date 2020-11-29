import Layout from "../components/Layout"
import styles from "./pages.module.scss"

const Index = () =>(
    <Layout title="Kintsugi">
        <div className={styles.mainArticle}>
            <h2 > Histoire </h2>
            <p className={styles.article}> Le kintsugi serait apparu lorsque,
                à la fin du xve siècle, le shogun Ashikaga Yoshimasa a renvoyé en Chine un bol de thé chinois endommagé pour le faire réparer.
                Le bol étant revenu réparé avec de vilaines agrafes métalliques,
                les artisans japonais auraient cherché un moyen de réparation plus esthétique.
                Cela relève d'une philosophie qui prend en compte le passé de l'objet,
                son histoire et donc les accidents éventuels qu'il a pu connaître.
                La casse d'une céramique ne signifie plus sa fin ou sa mise au rebut,
                mais un renouveau, le début d'un autre cycle et une continuité dans son utilisation.
                Il ne s'agit donc pas de cacher les réparations, mais de mettre celles-ci en avant.
                Les collectionneurs se sont épris de cet art nouveau au point que certains ont été accusés d'avoir délibérément cassé de précieuses poteries afin qu'elles puissent être réparées avec les coutures d'or du kintsugi1. Le kintsugi est étroitement associé aux ustensiles en céramique employés pour la cérémonie japonaise du thé2.
            </p><br/><br/>
            <h2 > la pensée japonaise du Wabi-Sabi </h2>
            <p className={styles.articleZen}>
                Le wabi-sabi relie deux principes : wabi (solitude, simplicité, mélancolie, nature, tristesse, dissymétrie…)
                et sabi (l'altération par le temps, la décrépitude des choses vieillissantes,
                la patine des objets, le goût pour les choses vieillies, pour la salissure, etc.).
                Le wabi fait référence à la plénitude et la modestie que l'on peut éprouver face aux phénomènes naturels,
                et le sabi, la sensation face aux choses dans lesquelles on peut déceler le travail du temps ou des hommes1.
                Le caractère sabi (寂?) est ainsi gravé sur la tombe de l'écrivain Junichirō Tanizaki (1886-1965),
                dans le temple Hōnen-in (dédié au moine Hōnen), à Kyoto.
                Les principes de wabi et de sabi sont anciens. On les rencontre dès le xve siècle dans la littérature japonaise,
                joints à un troisième principe, celui de yojō, « écho sentimental »2.
                Une illustration du wabi-sabi : le culte esthétique pour les pierres (jardin sec), ou le travail des bonsaï. Cette éthique apparaît au xiie siècle ;
                elle prône le retour à une simplicité, une sobriété paisible pouvant influencer positivement l'existence,
                où l'on peut reconnaître et ressentir la beauté des choses imparfaites, éphémères et modestes.
                L'art du kintsugi, qui consiste à souligner d'or les failles d'un objet cassé au lieu de les masquer,
                s'inscrit dans le courant du wabi-sabi en invitant à admirer l'imperfection des fêlures de l'objet3.
                Les bols (chawan) anciens, abîmés et réparés selon la technique du kintsugi, sont particulièrement prisés avec leurs cicatrices recouvertes d'or où l'imperfection est mise en valeur.
            </p>

        </div>


    </Layout>
)

export default Index