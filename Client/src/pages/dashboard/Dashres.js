import Layout from "./Layout";
import poster from '../../assets/poster.png'

function Dashres() {
    return (
        <Layout title="resources" sub="" code="00100">
            <div>
                <div className="resource">
                    <div className="res-title">
                        <div className="row"><label className="font-22 mb-3 text-left">LESSION1</label></div>
                        <div className="row">
                            <p className="font-13-hel col-sm-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                        
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resource mt-55">
                    <div className="res-title">
                        <div className="row"><label className="font-22 mb-3 text-left">LESSION2</label></div>
                        <div className="row">
                            <p className="font-13-hel col-sm-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                        
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-3">
                                <div className="bg-yellow p-video">
                                    <video className="border-radio-20" width="100%" height="100%" controls poster={poster}>
                                    </video>
                                </div>
                                <div className="mt-2">
                                    <label className="font-15 p-2">VIDEO DESCRIPTION</label>
                                    <p className="p-2 font-13-hel mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashres;