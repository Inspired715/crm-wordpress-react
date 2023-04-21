import Layout from "./Layout";
import {Row, Col} from 'react-bootstrap'
import fpng from '../../assets/avatar/4.png'
import gpng from '../../assets/avatar/7.png'
import { useEffect, useState } from "react";
import HistoryChart from "../../component/Historychart";

function Dashhome() {
    const user_info = JSON.parse(localStorage.getItem('gateway_user_info'));

    const [homeData, setHomeData] = useState(null);

    var seriesData = [["02/12", 2000], ["02/13",2500], ["02/14",3000],
                    ["02/15", 4000], ["02/16",8000], ["02/17",5000],
                    ["02/18", 7000], ["Today",10000], ["02/20",1500],
                    ["02/21", 3000], ["02/22",4500], ["02/23",5000]];

    const chartOptions = {
        title:'',
        xAxis: {
            tickInterval: 1,
            labels: {
                formatter () {
                  return `<span style="color:#FFFFFF;font-size:20px;">${seriesData[this.value][0]}</span>`
                }
            }
        },
        yAxis: {
            labels: {
                formatter () {
                  return `<span style="color:#FFFFFF;font-size:15px;">${this.value}</span>`
                }
            }
        },
        series: [{
            data: seriesData,
            cursor: "pointer",
            color: '#D4B65E',
            marker: {
                enabled: true,
                symbol: "circle",
                radius: 10}
        }]
    }

    const convertNumberToOrder = (i) => {
        var j = i % 10,
        k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }

    useEffect(() => {
        fetch('http://localhost:3001/get_home', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: user_info?.email
            })
        })
        .then((response) => response.json())
        .then(res => {            
            setHomeData(res);
        });
    }, []);

    return (
        <Layout title="john smith" sub="welcome," code="10000">
            <Row className="h-full-per" style={{ overflowY:'scroll'}}>
                <Col className="col-xl-8 mb-5 col-lg-12">
                    <Row className="bg-yellow">
                        <div className="card-title">
                            <label className="font-22 ">GENERAL</label>
                        </div>
                        <Col className="col-sm-6">
                            <div className="card-bg-black h-full-per">
                                <p className="font-13-hel">You are currently in</p>
                                <div className="font-28">
                                    {convertNumberToOrder(homeData?.place)} place
                                </div>
                                <p className="font-13-hel mt-3">
                                    amongst your peers for Gateway Agency Sales
                                </p>
                            </div>
                        </Col>
                        <Col className="col-sm-6">
                            <div className="card-bg-black">
                                <p className="font-13-hel">Redeemable Amount: <span className="font-28">${homeData?.amount}</span></p>
                                <p className="font-13-hel color-grey mt-3">Earned from {homeData?.s_date} - {homeData?.e_date}, {homeData?.year}</p>
                            </div>
                            <div className="card-btn mt-2 space-between">
                                <button className="btn-yellow font-14">SEE BALANCE DETAILS</button>
                                <button className="btn-transparent font-14">REQUEST CASH OUT</button>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className="bg-yellow mt-3 dash-history">
                        <div className="card-title">
                            <label className="font-22 ">HISTORY</label>
                        </div>
                        <Col className="dash-chat">
                            <div className="card-bg-black h-full-per force-transparent">
                                <div className="space-between history-filter">
                                    <div>
                                        <button className="history-filter-btn" style={{ marginRight:"10px"}}>TODAY</button>
                                        <button className="history-filter-btn">LAST WEEK</button>
                                    </div>
                                    <div>
                                        <button className="history-filter-btn">MONTH</button>
                                    </div>
                                </div>
                                <HistoryChart options={chartOptions}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-xl-4 col-lg-12">
                    <Row className="bg-yellow h-172-vh">
                        <div className="card-title">
                            <label className="font-22 ">LEADERBOARD</label>
                        </div>
                        <div className="card-bg-black">
                            <div className="fiex space-between base-line">
                                <p className="font-13-hel">{convertNumberToOrder(homeData?.ranking[0].place)}</p>
                                <label className="btn-text">{homeData?.ranking[0].f_name} {homeData?.ranking[0].l_name}</label>
                                <p className="font-13-hel">${homeData?.ranking[0].amount}</p>
                            </div>
                            <div className="text-center mt-3">
                                <img src={fpng} alt="gateway dashboard avatar" className="w-123" />
                            </div>                            
                        </div>  
                        <div className="p-0 user-list">
                            {homeData?.ranking?.map((item, key) => {
                                if(key > 0)
                                    return(
                                        <div key={item.f_name} className="card-bg-black space-between base-line mt-2 p-10">
                                            <p className="font-13-hel m-0">{convertNumberToOrder(item.place)}</p>
                                            <img src={gpng} alt="gateway dashboard avatar" className="w-46" />
                                            <label className="btn-text">{item.f_name} {item.l_name}</label>
                                            <p className="font-13-hel m-0">${parseFloat(item.amount).toFixed(2)}</p>
                                        </div>
                                    )
                                else
                                    return(<></>)
                            })}
                        </div>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default Dashhome;