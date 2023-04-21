import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Layout({title, sub, code, children}) {
    return (
        <div>
            <div className='flex'>
                <Sidebar code={code}/>
                <main>
                    <Topbar title={title} sub={sub}/>
                    <div className='gate-container'>
                        {children}
                    </div>
                </main>
            </div>
      </div>
    );
}

export default Layout;