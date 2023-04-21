import Layout from "./Layout";
import Vector from '../../assets/Vector.png'
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Dashbalance() {
    const location = useLocation();
    const init_status = location.state?location.state.status:0;
    const [status, setStatus] = useState(init_status);

    const submitCashout = () => {
        setStatus(1);
    }

    return (
        <Layout title="your balance details" sub="" code="00001">
            <div className="bg-yellow w-933 h-784 m-auto mt-5 p-5">
                <div className="card-bg-black border-radio-20 h-full-per p-0">
                    {
                        status === 0 ? (<div>
                            <div className="balance-top space-between  p-90">
                                <div className="balance-left">
                                    <div className="mb-3">
                                        <label className="font-15">
                                            Total Earned with Gateway
                                        </label>
                                    </div>
                                    <div>
                                        <label className="font-28">
                                            $7,126.00
                                        </label>
                                    </div>
                                </div>
                                <div className="balance-right color-grey-balance">
                                    <div>
                                        <label className="font-13-hel">
                                            Last Payout: $2306.00
                                        </label>
                                    </div>
                                    <div>
                                        <label className="font-13-hel">
                                            Date: January 15, 2023
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="balance-middle m-auto"></div>
                            <div className="balance-bottom p-90">
                                <div className="mb-3">
                                    <label className="font-22">Redeemable Amount</label>
                                </div>
                                <div className="mb-5">
                                    <label className="font-34">$4820.00</label>
                                </div>
                                <div className="mb-5">
                                    <label className="font-13-hel">Earned from February 1 - February 28, 2023</label>
                                </div>
                                <div>
                                    <button className="btn-cashout" onClick={() => submitCashout()}>
                                        submit cashout request
                                    </button>
                                </div>
                            </div>
                        </div>) : (<div className="reponse-balance display-c-center h-full-per">
                            <div className="mb-55">
                                <img src={Vector} alt="balance check" />
                            </div>
                            <div className="mb-3">
                                <label className="font-15-bold">YOUR REQUEST HAS BEEN SUBMITED</label>
                            </div>
                            <div>
                                <label className="font-13-hel">
                                    A request has been successfully sent to
                                </label>
                            </div>
                            <div>
                                <label className="font-15-hel">email@gatewayagency.co</label>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Dashbalance;