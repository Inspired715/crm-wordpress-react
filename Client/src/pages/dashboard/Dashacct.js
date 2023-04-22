import Layout from "./Layout";
import photo from '../../assets/photo.png'
import InputMask from 'react-input-mask'
import { useState } from "react";

let user_info = JSON.parse(localStorage.getItem('gateway_user_info'));

const PhoneInput = ({ value, onChange }) => {
  return (
    <InputMask
      mask="(999)(999-9999)"
      value={value}
      onChange={onChange}
      className="input-account font-13-hel"
      placeholder="(___)(___-____)" 
    ></InputMask>
  )
}

function Dashacct() {
    const [password, setPassword] = useState('');
    const [confirmpwd, setConfirmpwd] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [avatar, setAvatar] = useState('');

    const onInit = () => {
        setPassword('');
        setConfirmpwd('');
        setAvatar('');
    }

    const validation = () => {
        if(pnumber === '')
            return true;
        if(password === '' || confirmpwd === '')
            return true;
        if( password !== confirmpwd)
            return true;
        
        return false;
    }

    const onChangeAccontInfo = () => {
        if(validation())
            return;
        
        fetch('https://3.141.36.138:4000/updateAccount', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: user_info?.email,
                avatar:avatar,
                first:user_info?.fname,
                last: user_info?.lname,
                phone:pnumber,
                password: password
            })
        })
        .then((response) => response.json())
        .then(res => {
            alert(res.message);
        });
    }

    return (
        <Layout title="your account information" sub="" code="00010">
            <div className="bg-yellow w-1080 h-865 p-0 p-account-form">
                <div className="card-bg-black border-radio-20 h-full-per">
                    <div className="row w-735 pt-20 mt-5 m-auto">
                        <label htmlFor="avatar_img">
                            <img src={photo} alt="gateway account avatar" />
                            <input id="avatar_img" name="avatar-img" type="file" hidden onChange={(e) => setAvatar(e.target.value)}/>
                        </label>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">FIRST NAME</label>
                            <input className="input-account font-13-hel" placeholder="Jhon" readOnly value={user_info?.first_name}/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">LAST NAME</label>
                            <input className="input-account font-13-hel" placeholder="Smith" readOnly value={user_info?.last_name}/>
                        </div>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">EMAIL</label>
                            <input className="input-account font-13-hel" readOnly value={user_info?.email}/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">PHONE NUMBER</label>
                            <PhoneInput value={pnumber} onChange={(e) => setPnumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row w-735 mt-4 m-auto">
                        <div className="col-sm-6">
                            <label className="font-15">CHANGE PASSWORD</label>
                            <input className="input-account font-13-hel" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-15">CONFIRM NEW PASSWORD</label>
                            <input className="input-account font-13-hel" type="password" onChange={(e) => setConfirmpwd(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row w-735 space-between mt-4 m-auto">
                        <button className="btn-transparent-account" style={{marginLeft:'14px'}} onClick={onInit}>CANCEL</button>
                        <button className="btn-sign w-350 height-63" style={{marginRight:'40px'}} onClick={onChangeAccontInfo}>SAVE CHANGES</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashacct;