import Layout from "../components/Layout"
import MapDisplayer from "../components/Map/mapDisplayer"
import styles from './pages.module.scss'

const Contact =()=>(
  
  <Layout title="Nous contacter">
      <div className={styles.contactContainer}>
          <p>
            <a> Kintsugi</a>
            <a>Ile de la Cité,</a>
            <a> 75005 Paris</a>
          </p>
        <p> Vous pouvez nous contacter par mail 
          <a href="mailto:one.bentos@gmail.com" > <span className={styles.mail}>ICI</span> </a>
        </p>
          <p>
          </p>
        
      </div>
      <MapDisplayer/>
    </Layout>
)

export default Contact