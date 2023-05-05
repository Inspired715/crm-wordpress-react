import Modal from 'react-modal';
import "./modal.css"
import { useState } from 'react';
Modal.setAppElement('#root');

const MailModal = ({ isOpen, setIsOpen, sendMail }) => {
    const [phone, setPhone] = useState('');
    const [meeting, setMeeting] = useState('');
    const [description, setDescription] = useState('');
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="content w-[90%] sm:w-[500px]"
        >
            <div className='bg-yellow rounded-[10px] h-[500px] w-[90%] sm:w-[500px] p-3 m-auto'>
                <div className='bg-black w-full h-full rounded-[10px]'>
                    <h1 className='text-white text-center pt-[30px]'>Mail Description</h1>
                    <div className='w-full p-3'>
                        <textarea rows={5} 
                            onChange={(e) => setDescription(e.target.value)}
                            className='font-hel w-full bg-transparent rounded-[10px] text-white p-3' style={{border:'1px solid white'}}></textarea>
                    </div>
                    <div className='p-3'>
                        <div className='mb-3'>
                            <label className="text-white text-[13px]" style={{textTransform:'uppercase'}}>Phone</label>
                            <input
                                type="text"
                                placeholder="Phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
                        </div>
                        <div className='mb-3'>
                        <label className="text-white text-[13px]" style={{textTransform:'uppercase'}}>meeting Url</label>
                            <input
                                type="text"
                                placeholder="meet.google.com/#rF43f#F-url"
                                onChange={(e) => setMeeting(e.target.value)}
                                className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className="w-[200px] h-[40px] rounded-full bg-yellow text-white" style={{ border: '1px solid white' }}
                            onClick={() => {sendMail(phone, meeting, description)}}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default MailModal;