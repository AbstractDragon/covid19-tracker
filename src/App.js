import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/';
class App extends React.Component {
  state = {
    data: {},
  }

  //use componentdidmount when making api requests
  async componentDidMount(){
    //use await when collecting data from an asynchrous function, inorder to use await it must be in an async function
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>App</h1>
        <Cards data={data}/>
        <Charts/>
        <CountryPicker/>
      </div>
    )
  }
}

export default App;
