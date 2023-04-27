const SalesItem = () => {
  return (
    <div className="flex w-full flex-col rounded-[22px] p-5 bg-yellow">
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
    <div className="pt-5">
      <table className="w-full mx-[10px]">
          <thead>
            <tr>
              <th className="pb-[10px] text-start">
                DATE
              </th>
              <th className="pb-[10px] text-start">
                services
              </th>
              <th className="pb-[10px] text-center">
                commission
              </th>
              <th className="pb-[10px] text-center">
                amount earned
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                January 1, 2023
              </td>
              <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                Social Media Management - Instagram Management<br/>@sarahschwartz
              </td>
              <td className="text-[12px] text-center border-b border-black pt-[14px] pb-[20px]">
                $1000.00
              </td>
              <td className="text-[12px]">
                
              </td>
            </tr>
            <tr>
              <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                
              </td>
              <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                Instagram Growth - Bronze<br/>@bradsbakeshop
              </td>
              <td className="text-[12px] text-center border-b border-black pt-[14px] pb-[20px]">
                $1000.00
              </td>
              <td className="text-[12px]">
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesItem;
