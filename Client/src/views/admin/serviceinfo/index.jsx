const ServiceInfo = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
        <div className="w-full">
          <div className="bg-black rounded-[20px] p-5 grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 text-white">
            <div className="flex justify-center flex-col col-span-3">
              <label className="text-[12px] text-grey">CLIENT'S NAME</label>
              <label className="">BRADO'BRIEN</label> 
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 col-span-2">
              <div className="flex justify-center flex-col col-span-1">
                  <label className="text-[12px] text-grey">EMAIL</label>
                  <label  className="text-[10px] text-grey">bradobren@gmail.com</label> 
              </div>
              <div className="flex justify-center flex-col col-span-1">
                  <label className="text-[12px] text-grey">PHONE NUMBER</label>
                  <label  className="text-[10px] text-grey">+1 (123) 456-7890</label> 
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="mt-5">
              <h1>Service</h1>
              <select className="w-full h-[55px] mt-5 rounded-[10px] bg-transparent px-[20px]" style={{border:'1px solid white'}}>
                  <option>Social Media Management</option>
                  <option>Social Media Management</option>
                  <option>Social Media Management</option>
                  <option>Social Media Management</option>
                  <option>Social Media Management</option>
              </select>
            </div>
            <div className="mt-5">
              <h1>Service</h1>
              <select className="w-full h-[55px] mt-5 rounded-[10px] bg-transparent px-[20px]" style={{border:'1px solid white'}}>
                  <option>Instagram Management</option>
                  <option>Instagram Management</option>
                  <option>Instagram Management</option>
                  <option>Instagram Management</option>
                  <option>Instagram Management</option>
              </select>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
              <div className="bg-black h-[300px] rounded-[30px] col-span-1"></div>
              <div className="bg-black h-[300px] rounded-[30px] col-span-1"></div>
              <div className="bg-black h-[300px] rounded-[30px] col-span-1"></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
