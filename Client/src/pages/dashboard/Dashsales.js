import Layout from "./Layout";

function Dashsales() {
    return (
        <Layout title="sales" sub="" code="01000">
            <div className="bg-yellow p-33 mb-3">
                <div className="card-bg-black border-radio-20 h-158 space-between">
                    <div className="left-top">
                        <label className="btn-text text-left color-grey">CLIENT'S NAME</label>
                        <label className="font-22 text-left">BRADO'BRIEN</label> 
                    </div>
                    <div className="space-between w-529">
                        <div className="color-grey">
                            <label className="w-317 btn-text text-left mb-3">EMAIL</label>
                            <label  className="w-317 font-13-hel text-left">bradobren@gmail.com</label> 
                        </div>
                        <div className="color-grey">
                            <label className="w-317 btn-text text-left  mb-3">PHONE NUMBER</label>
                            <label  className="w-317 font-13-hel text-left">+1 (123) 456-7890</label> 
                        </div>

                    </div>
                </div>
                <div className="p-40">
                    <table className="w-full">
                        <thead className="font-15">
                            <tr>
                                <th className="w-20-per">DATE</th>
                                <th>SERVICES</th>
                                <th className="w-20-per text-center">COMMISSION</th>
                                <th className="w-20-per text-center">AMOUNT EARNED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-90 font-13-hel">
                                <td>
                                    January 1, 2023
                                </td>
                                <td>
                                    Social Media Management - Instagram Management
                                    @sarahschwartz
                                </td>
                                <td className="text-center">
                                    $1000.00
                                </td>
                                <td></td>
                            </tr>
                            <tr className="h-90 font-13-hel">
                                <td>
                                    January 1, 2023
                                </td>
                                <td>
                                    Social Media Management - Instagram Management
                                    @sarahschwartz
                                </td>
                                <td className="text-center">
                                    $1000.00
                                </td>
                                <td></td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-yellow p-33 mb-3">
                <div className="card-bg-black border-radio-20 h-158 space-between">
                    <div className="left-top">
                        <label className="btn-text text-left color-grey">CLIENT'S NAME</label>
                        <label className="font-22 text-left">BRADO'BRIEN</label> 
                    </div>
                    <div className="space-between w-529">
                        <div className="color-grey">
                            <label className="w-317 btn-text text-left mb-3">EMAIL</label>
                            <label  className="w-317 font-13-hel text-left">bradobren@gmail.com</label> 
                        </div>
                        <div className="color-grey">
                            <label className="w-317 btn-text text-left  mb-3">PHONE NUMBER</label>
                            <label  className="w-317 font-13-hel text-left">+1 (123) 456-7890</label> 
                        </div>

                    </div>
                </div>
                <div className="p-40">
                    <table className="w-full">
                        <thead className="font-15">
                            <tr>
                                <th className="w-20-per">DATE</th>
                                <th>SERVICES</th>
                                <th className="w-20-per text-center">COMMISSION</th>
                                <th className="w-20-per text-center">AMOUNT EARNED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-90 font-13-hel">
                                <td>
                                    January 1, 2023
                                </td>
                                <td>
                                    Social Media Management - Instagram Management
                                    @sarahschwartz
                                </td>
                                <td className="text-center">
                                    $1000.00
                                </td>
                                <td></td>
                            </tr>                      
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Dashsales;