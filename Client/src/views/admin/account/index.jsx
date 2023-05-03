import AWS from 'aws-sdk';
import photo from 'assets/img/layout/photo.png'
import loading from 'assets/img/avatars/loading.gif'
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";
import { useState } from "react";

AWS.config.update({
  accessKeyId: 'AKIAQGJYDC6CKZVLBW6B',
  secretAccessKey: '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',
  region: 'us-east-2',
  signatureVersion: 'v4',
});

const Account = () => {
  const {token, email, phone, name, avatar} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newAvatar, setNewAvatar] = useState(avatar);
  const [isLoading, setIsLoading] = useState(false);

  const s3 = new AWS.S3();

  const handleInitial = () => {
    setPhoneNumber('');
  }

  const handleSaveAccount = () => {
    if(phoneNumber === '' || (password !== confirmPassword))
      return;
    const account = { 
      email: email,
      token: token,
      phone: phoneNumber,
      password: password,
      avatar: newAvatar
    };
    
    axios.post(`${api_url}/updateAccount`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);

        let session = {
          email: response.data.email,
          avatar: response.data.avatar,
          token: response.data.token,
          name: response.data.name,
          phone: response.data.phone
        };

        localStorage.setItem('gatewayagency', JSON.stringify(session));
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }

  const handleUploadImage = async (e) => {
    let file = e.target.files[0];
    if (!file) {
      return;
    }
    const params = { 
      Bucket: 'gatewayagency', 
      Key: `${Date.now()}.${file.name}`, 
      Body: file
    };

    setIsLoading(true);
    const { Location } = await s3.upload(params).promise();
    setNewAvatar(Location);
    setIsLoading(false);
  }

  return (
    <div className='w-full h-full flex justify-center flex-col'>
      <div className="w-60p p-5 rounded-[20px] mx-auto bg-yellow" style={{ maxWidth: '640px' }}>
        <div className="rounded-[20px] bg-black w-full">
          <div className="p-[30px]">
            <div className="mb-[30px]">
              <label htmlFor="avatar_img">
                {
                  isLoading?<img src={loading} alt="gateway loading" className='w-[115px] h-[115px] rounded-[25px]'/>:<img src={newAvatar?newAvatar:photo} alt="gateway account avatar" className='w-[115px] h-[115px] rounded-[25px]'/>
                }
                <input id="avatar_img" name="avatar-img" type="file" hidden onChange={(e) => {handleUploadImage(e)}} />
              </label>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>first name</label>
                <input
                  type="text"
                  value={name.split(' ')[0]}
                  placeholder="Smith"
                  readOnly
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>last name</label>
                <input
                  type="text"
                  value={name.split(' ')[1]}
                  placeholder="Jhon"
                  readOnly
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>EMAIL</label>
                <input
                  type="text"
                  value={email}
                  placeholder="test@test.com"
                  readOnly
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>Phone</label>
                <input
                  type="text"
                  value={phoneNumber?phoneNumber:''}
                  placeholder="(201)(345-2345)"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>Change Password</label>
                <input
                  type="password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
              <div className='mb-3'>
                <label className="text-white text-[18px]" style={{textTransform:'uppercase'}}>Confirm New Password</label>
                <input
                  type="password"
                  placeholder=""
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
              <button className="col-span-1 linear mt-2 w-full rounded-full bg-transparent py-[12px] text-base font-medium text-white transition" style={{ border: '1px solid white' }}
                onClick={() => {handleInitial()}}
              >
                CANCEL
              </button>
              <button className="col-span-1 linear mt-2 w-full rounded-full bg-yellow py-[12px] text-base font-medium text-white transition"
                onClick={() => {handleSaveAccount()}}
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
