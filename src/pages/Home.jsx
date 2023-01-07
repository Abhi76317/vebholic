import React, { useState } from 'react';
import CustomButton from '../component/Button';
import Section from '../component/Section';

const Home = () => {

    const [buy, setBuy] = useState([])
    const [sell, setSell] = useState([])

    function randomRateAndQuantity(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleBuy = (type) => {
        const obj = {
            quantity: randomRateAndQuantity(1, 10),
            rate: randomRateAndQuantity(35000, 36000),
        }
        setBuy([...buy, obj])
    }

    const handleSell = (type) => {
        const obj = {
            quantity: randomRateAndQuantity(1, 10),
            rate: randomRateAndQuantity(35000, 36000),
        }
        setSell([...sell, obj])
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <CustomButton label={"Buy"} onClick={handleBuy} color={'red'} />
                <CustomButton label={"sell"} onClick={handleSell} color={'green'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Section data={buy} color={'red'} />
                <div style={{marginTop:'20px'}}>
                    <Section data={sell} color={'green'} />
                </div>
            </div>
        </div>
    );
}

export default Home;
