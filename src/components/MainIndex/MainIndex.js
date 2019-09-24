import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './mainIndex.module.css'

class MainIndex extends Component {
    render() {
        return (
            <main className={styles.background}>
                <div className={styles.sectionContainer}>
                    <section className={styles.meliLogoBig}>
                        <img src={'https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0'} alt={'mercado-libre-logo'}></img>
                    </section>
                    <section>
                        <ul className={styles.countryList}>
                            <Link to={'/carousel/MLA'} className={styles.country}><span><img className={styles.flag} src='https://flagpedia.net/data/flags/w1160/ar.png' alt={'argentinian-flag'}/></span>Argentina</Link>
                            <Link to={'/carousel/MBO'} className={styles.country}><span><img className={styles.flag} src='https://flagpedia.net/data/flags/w1160/bo.png' alt={'bolivian-flag'}/></span>Bolivia</Link>
                            <Link to={'/carousel/MLB'} className={styles.country}><span><img className={styles.flag} src='https://flagpedia.net/data/flags/w1160/br.png' alt={'brazilian-flag'}/></span>Brasil</Link>
                            <Link to={'/carousel/MCO'} className={styles.country}><span><img className={styles.flag} src='https://flagpedia.net/data/flags/w1160/co.png' alt={'colombian-flag'}/></span>Colombia</Link>
                        </ul>
                    </section>
                </div>
            </main>
        )
    }
}

export default MainIndex;