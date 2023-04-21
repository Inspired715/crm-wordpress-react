import logo from '../../assets/logo.png'
import me from '../../assets/avatar/1.png'
import home from '../../assets/home-1.png'
import home_1 from '../../assets/home-2.png'
import check from '../../assets/check-1.png'
import check_1 from '../../assets/check-2.png'
import desk from '../../assets/com-1.png'
import desk_1 from '../../assets/com-2.png'
import card from '../../assets/book-1.png'
import card_1 from '../../assets/book-2.png'
import acct from '../../assets/person-1.png'
import acct_1 from '../../assets/person-2.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Sidebar({code}) {
    let navigate = useNavigate();

    const [navStatus, setNavStatus] = useState(code);

    const gotoPage = (path, item) => {
        switch(item){
            case 0:
                setNavStatus('10000');
                break;
            case 1:
                setNavStatus('01000');
                break;
            case 2:
                setNavStatus('00100');
                break;
            case 3:
                setNavStatus('00010');
                break;
            case 4:
                setNavStatus('00001');
                break;
            default:
                setNavStatus('10000');
        }
        navigate(path);
    }

    return(
        <div className='w-258'>
            <div className=''>
                <div className="nav-logo">
                    <img className="w-logo" src={logo} alt="gateway logo" onClick={() => gotoPage('/')}/>
                </div>
                <div className="nav-sidebar">
                    <button className="nav-item" onClick={() => gotoPage("/dashboard/home", 0)}><img className="nav-icon" src={parseInt(navStatus.charAt(0))?home_1:home} alt='nav icon Home'/>Home</button>
                    <button className="nav-item" onClick={() => gotoPage("/dashboard/sales", 1)}><img className="nav-icon"  src={parseInt(navStatus.charAt(1))?check_1:check} alt='nav icon Sales'/>Sales</button>
                    <button className="nav-item" onClick={() => gotoPage("/dashboard/res", 2)}><img  className="nav-icon" src={parseInt(navStatus.charAt(2))?desk_1:desk} alt='nav icon Resources'/>Resources</button>
                    <button className="nav-item" onClick={() => gotoPage("/dashboard/acct", 3)}><img  className="nav-icon" src={parseInt(navStatus.charAt(3))?acct_1:acct} alt='nav icon Account'/>Account</button>
                    <button className="nav-item" onClick={() => gotoPage("/dashboard/balance", 4)}><img  className="nav-icon" src={parseInt(navStatus.charAt(4))?card_1:card} alt='nav icon Balance'/>Balance</button>
                </div>
            </div>
            <div className="text-center h-320">
                <div className="w-avatar m-auto">
                    <img src={me} className='p-20 w-full' alt="gateway ower"/>
                </div>
                <label className='avatar-name'>john smith</label>
            </div>
        </div>
    );
}

export default Sidebar;