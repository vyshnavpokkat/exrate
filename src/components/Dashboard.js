
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import './grstyle.css'
import moment from 'moment'
import axios from 'axios'

export default function Dashboard() {

    const [StoreExchange, setStoreExchange] = useState([])
    const [time,setTime]=useState("")
    const timenow=new Date()

    useEffect(() => {
        api();
      }, []);
    
        const api = async () => {
        axios.get("https://open.er-api.com/v6/latest/USD")
        .then(result => {
            const tm=new Date()
            console.log(result)
            setStoreExchange(result.data.rates)
            setTime(tm)


         console.log(StoreExchange);
        })
        .catch(error => {
            console.log('error', error)
            alert("API not get")
        }
            );
          
        };
    
    
    
   
    console.log("Time====>",time);
    const {INR,AED,ALL,KWD,GBP}=StoreExchange
    console.log("indDAta===>",INR);
    const data = [
        {
            type: 'USD-INR',
            sales: INR,
        },
        {
            type: 'USD-AED',
            sales: AED,
        },
        {
            type: 'USD-ALL',
            sales: ALL,
        },
        {
            type: 'USD-KWD',
            sales:KWD,
        },
        {
            type: 'USD-GBP',
            sales: GBP,
        },

    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',


        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        color: '#3282B8'

    };

    return (

        <>

            <div id='grDiv'>
                <h1 id='headText'>Exchange Dash Board</h1>
                <Column {...config} />
                <h3><small>Last Fetch:{moment().startOf(time).fromNow()}</small></h3>
            </div>
            

        </>
    )
}
