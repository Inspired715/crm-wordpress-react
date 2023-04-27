export default function Signup() {
  return (
    <div className="w-90p p-[20px] h-91p sm:h-91p sm:p-[70px] rounded-[50px] m-auto bg-white" style={{maxWidth:'860px', overflow:'auto'}}>
      <div className="text-center mb-[10px] sm:mb-[50px]">
      <label className="font-bold text-[21px] sm:text-[30px]">
          CREATE YOUR GATEWAY ACCOUNT
        </label>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="rounded-[30px] border bg-white/0 p-3 text-[18px] h-[50px] sm:h-[60px]"/>
        </div>
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            CREATE PASSWORD
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-[30px] border bg-white/0 p-3 text-[18px] h-[50px] sm:h-[60px]"/>
        </div>
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            name="con_password"
            placeholder="Password"
            className="rounded-[30px] border bg-white/0 p-3 text-[18px] h-[50px] sm:h-[60px]"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[10px]">
          <button className="col-span-1 rounded-full h-[50px] sm:h-[60px]" style={{border:'1px solid black'}}>
            BACK
          </button>
          <button className="col-span-1 rounded-full text-white h-[50px] sm:h-[60px] font-bold bg-yellow">
            CONTINUE
          </button>
        </div>
      </div>
    </div>      
  );
}