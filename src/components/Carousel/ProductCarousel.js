import React, { Component } from 'react';
import ProductCard from './ProductCard';
import styles from './productCarousel.module.css'

class ProductCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      productsArray : [],
      loading : true
    } 
  }

  async componentDidMount() {
    try {
      const countryId = this.props.match.params.site
      const data = await fetch(`https://api.mercadolibre.com/sites/${countryId}/search?q=tv&limit=5`);
      const result = await data.json()
      this.setState({
        productsArray : result.results,
        loading : false
      })
    }catch(err) {
      console.log(err)
    }
  }
  render() {
    const products = this.state.productsArray.map((prod, prodKey, newProdArr) => {
      return (
        <ProductCard 
          key={prodKey}
          imgSrc={prod.thumbnail}
          imgAlt={prod.title}
          title={prod.title}
          price={prod.price}
          currency={prod.currency_id}
          // nCuotas={prod.installments.quantity}
          // montoCuotas={prod.installments.amount}
        />
      )
    })
    return (
      <ul className={styles.carouselContainer}>
        {this.state.loading ? (
          <span>cargando</span>
        ) : (
          <React.Fragment>
            {products}
          </React.Fragment>
        )
        }
      </ul>
    );
  }
}

export default ProductCarousel;