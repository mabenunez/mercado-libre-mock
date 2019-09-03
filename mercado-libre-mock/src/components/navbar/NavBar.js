import React, { Component } from 'react';
import styles from './navbar.module.css';
class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

        <div className={`${styles.navbar1} ${styles.flexColumn}`}>
          <div className={`${styles.flexRow} ${styles.navbar2}`}>
            <div className={styles.navbarLogo}>
              <img src='https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png' alt={'mercado-libre-logo-home'}></img>
            </div>


            <input className={styles.navbarInput} type='text' placeholder='Buscar productos, marcas y más...'/>


            <div className={styles.navbarMsgtext}>
              <img src='https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-86b2b844-4c2d-4b7c-8649-4fef867e0b9d.png' alt={'buy-12-fees'}></img>
            </div>
          </div>
        </div>

    )
  }
}

export default NavBar;