import React from 'react';
import CardComponent from '../components/CardComponent';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import {Row} from 'react-bootstrap'
import '../styles/home.css';


function Home () {
    const articules = [
        {
        images: 'th-853459506',
        title: 'Server Side Rendering with React and Redux',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur elit at nisi ullamcorper, sed facilisis ante pellentesque. Aenean et metus condimentum, euismod ligula at, tempus justo.',
        },{
        images: 'th-1516532338',
        title: 'React - The Complete Guide',
        body: 'Morbi massa felis, congue sit amet pulvinar quis, lobortis ut lectus. Nam libero lacus, facilisis quis magna vel, suscipit euismod felis.'
        },{
        images: 'th-2514499022',
        title: 'The Comple React Web Developer Course (with Redux)',
        body: 'Nunc vehicula magna eget dui ultrices, sed efficitur dui rhoncus. Fusce finibus dui nec purus porta, vel tincidunt ante imperdiet.'
        }]


    return(
        <>
        <Header></Header>
        <SearchComponent></SearchComponent>
        <Row xs={1} md={3} className="g-4 cards-positions">
            {articules.map(articule => (
                <CardComponent articule={articule}></CardComponent>
            ))}
        </Row>
        </>
    )
}

export default Home;