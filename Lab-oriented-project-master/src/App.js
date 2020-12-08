import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import EpicMenu from './EpicMenu';
import cimage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });

    }


    render() {
        const { data, country } = this.state;

        let links = [
            { logo: { cimage }},
{ label: 'Guidelines', link: 'https://pedantic-meitner-8d8ab9.netlify.app/' },


        ];

        return (

            <div className={styles.container}>
            <EpicMenu links={links}/>
                       
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>
        );
    }
}

export default App;
