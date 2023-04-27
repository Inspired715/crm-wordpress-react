import refresh from 'assets/img/layout/refresh.png'

export default function Verifyemail() {
  return (
    <div className="w-90p p-[20px] h-90p sm:h-80p sm:p-[70px] rounded-[50px] m-auto bg-white" style={{maxWidth:'860px', overflow:'auto'}}>
      <div className="text-center mb-[10px] sm:mb-[50px]">
        <label className="font-bold text-[30px]">
          VERIFY EMAIL
        </label>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-[18px] mb-3">
          ENTER CODE
        </label>
        <div className="sm:px-[30px]">
          <div className="flex gap-1">
            <input
              type="text"
              placeholder=""
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
          </div>
          <label className="text-[18px] flex items-center h-[80px] font-hel">
            You should receive an email from us with a verification code
          </label>
          <div className="flex">
              <img className="w-[50px] h-[50px]" src={refresh} alt="gateway verifyemail"/>
              <div className="grid px-[15px]">
                <label className="font-hel">Not seeing your verification code? </label>
                <label className="font-hel">Send new code</label>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[10px] sm:mt-[50px]">
          <button className="col-span-1 rounded-full h-[50px] sm:h-[60px]" style={{border:'1px solid black'}}>
            BACK
          </button>
          <button className="col-span-1 rounded-full text-white h-[50px] sm:h-[60px] font-bold bg-yellow">
            VERIFY
          </button>
        </div>
      </div> 
    </div>
  );
}