import Layout from "./Layout";
import photo from '../../assets/photo.png'

function Dashacct() {
    return (
        <Layout title="your account information" sub="" code="00010">
            <div className="bg-yellow w-1080 h-865 p-0 p-account-form">
                <div className="card-bg-black border-radio-20 h-full-per">
                    <div className="row w-735 pt-20 mt-5 m-auto">
                        <label htmlFor="avatar_img">
                            <img src={photo} alt="gateway account avatar" />
                            <input id="avatar_img" name="avatar-img" type="file" hidden/>
                        </label>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">FIRST NAME</label>
                            <input className="input-account font-13-hel" placeholder="smith"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">LAST NAME</label>
                            <input className="input-account font-13-hel" placeholder="smith"/>
                        </div>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">EMAIL</label>
                            <input className="input-account font-13-hel" placeholder="smith"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">PHONE NUMBER</label>
                            <input className="input-account font-13-hel" placeholder="(__ - ________)"/>
                        </div>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">CHANGE PASSWORD</label>
                            <input className="input-account font-13-hel" placeholder="smith"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">CONFIRM NEW PASSWORD</label>
                            <input className="input-account font-13-hel" placeholder="smith"/>
                        </div>
                    </div>
                    <div className="row w-693 space-between mt-4 m-auto">
                        <button className="btn-transparent-account">CANCEL</button>
                        <button className="btn-sign w-350 height-63">SAVE CHANGES</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashacct;