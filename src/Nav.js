import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
export default function Nav() {
    const [log,setLog]=useState(false);
    
    // const logo=()=>{

    //     setLog(!log)
    //     console.log(log);
    // }
    
    return (
        <div>
            <header>
                <span className="span" onClick={()=>{setLog(!log); console.log(log);}}>///</span>
                <nav>
                    <div className="logo">
                        <p >swapan ki dukaan</p>
                        <span></span>
                    </div>
                    <div className={log? "Navlinks" : "log"}>
                        <ul>
                            <li><NavLink to="/home"> home</NavLink></li>
                            <li><NavLink to="/services"> service</NavLink></li>
                            <li><NavLink to="/contact"> contact</NavLink></li>
                            <li><NavLink to="/portfolio"> portfolio</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>

            
        </div>
    )
}
