import React from 'react'

import Au from '../../hoc/Au';
import './Layout.css';

const layout = (props) => (
    <Au>
        <div>Toolbar,SideDrawer,backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Au>
)

export default layout