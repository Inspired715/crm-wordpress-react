import photo from 'assets/img/layout/photo.png'
import CustomInputField from "components/fields/CustomInputField";

const Account = () => {
  return (
    <div className="w-60p p-5 rounded-[20px] mx-auto bg-yellow" style={{maxWidth:'640px'}}>
      <div className="rounded-[20px] bg-black w-full">
        <div className="p-[30px]">
          <div className="mb-[30px]">
              <label htmlFor="avatar_img">
                  <img src={photo} alt="gateway account avatar" />
                  <input id="avatar_img" name="avatar-img" type="file" hidden/>
              </label>
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
            <CustomInputField
              extra="mb-3"
              label="first name"
              placeholder="Smith"
              id="first_name"
              name="first_name"
              type="text"
              className="col-span-1"
            />
            <CustomInputField
              extra="mb-3"
              label="last name"
              placeholder="John"
              id="last_name"
              name="last_name"
              type="text"
              className="col-span-1"
            />
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
            <CustomInputField
              extra="mb-3"
              label="email"
              placeholder="test@test.com"
              id="email"
              name="email"
              type="text"
              className="col-span-1"
            />
            <CustomInputField
              extra="mb-3"
              label="phone number"
              placeholder=""
              id="p_number"
              name="p_numberemail"
              type="text"
              className="col-span-1"
            />
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
            <CustomInputField
              extra="mb-3"
              label="change password"
              placeholder=""
              id="password"
              className="col-span-1"
              name="password"
              type="password"
            />
            <CustomInputField
              extra="mb-3"
              label="confirm new password"
              placeholder=""
              id="confirm_password"
              name="confirm_passwordemail"
              className="col-span-1"
              type="password"
            />
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2'>
            <button className="col-span-1 linear mt-2 w-full rounded-full bg-transparent py-[12px] text-base font-medium text-white transition" style={{border:'1px solid white'}}>
              CANCEL
            </button>
            <button className="col-span-1 linear mt-2 w-full rounded-full bg-yellow py-[12px] text-base font-medium text-white transition">
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Account;
