import React, {Component} from 'react';
import styles from './App.module.css';
import Charts from './components/charts/Charts';
import Cards from './components/cards/Cards'
import Country from './components/country/Country'
import {fetch} from './api/api'
import coronaImage from './images/image.png'


class App extends React.Component {
 
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetch();
    
    this.setState({ data : fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetch(country)
    this.setState({ data : fetchedData, country : country})
  }

  render() {
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='covid-19'/>
       <Cards data={data}/>
       <Country handleCountryChange={this.handleCountryChange}/>
       <Charts country={country} data={data}  />
       
       
      </div>
    )
  }
}

export default App;