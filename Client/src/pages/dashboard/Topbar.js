function Topbar({title, sub}) {
    return (
        <>
         <div className="top-bar space-between">
            <div className="left-top">
                <label className="bread">{sub}</label>
                <label className="bread-name">{title}</label>
            </div>
            <div className="right-top">
                <label className="btn-text">SIGN OUT</label>
            </div>
         </div>
        </>
    );
}

export default Topbar