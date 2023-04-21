import { useNavigate } from "react-router-dom";
function Topbar({title, sub}) {
    let navigate = useNavigate();
    const signout = () => {
        localStorage.removeItem('gateway_user_info');
        navigate('/');
    }

    return (
        <>
         <div className="top-bar space-between">
            <div className="left-top">
                <label className="bread">{sub}</label>
                <label className="bread-name">{title}</label>
            </div>
            <div className="right-top">
                <label className="btn-text" onClick={signout}>SIGN OUT</label>
            </div>
         </div>
        </>
    );
}

export default Topbar