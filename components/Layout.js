import Link from "next/link"
import styles from './Layout.module.scss'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import Hamburger from "./hamburger"
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextLogo  from "./animatedLogo/TextLogo"


//bar de chargement
Router.onRouteChangeStart = url =>{
    console.log(url)
    nprogress.start()
}
Router.onRouteChangeComplete = () => nprogress.done()
Router.onRouteChangeError = () => nprogress.done()


const Layout=({children, title })=>(
    <div className={styles.rootLayout}>
        <Head>
            <title> Kintsugi </title>
        </Head>
        <FontAwesomeIcon className={styles.car} icon={faPaintBrush} />
        <TextLogo/>

        <header> 
            <Link href="/"><a> Accueil </a></Link>
            <Link href="/about"><a> Galerie </a></Link>
            <Link href="/contact"><a> Contact </a></Link> 
        </header>
            <Hamburger/>
            <h1> {title} </h1>
            {children}
        <footer> 
            &copy; Kintsugi X On.Air {new Date().getFullYear()}<br/>
        </footer>
    </div>
)


export default Layout