import React, { useEffect, useState } from 'react';
import {
    FaHome,FaBars,FaSearch,FaMusic,FaCloudDownloadAlt,FaRegStar,FaCloudUploadAlt
}from "react-icons/fa";
import {CiStreamOn} from 'react-icons/ci'
import { Link } from 'react-router-dom';
import './sidebar.css';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        }
        ,
        {
            path:'/search',
            name:'Search',
            icon:<FaSearch/>
        },
        
        {
            path:"/myplaylist",
            name:"My Trove",
            icon:<FaMusic/>
        },
        {
            path:"/stream",
            name:"Stream",
            icon:<CiStreamOn/>
        },
        {
            path:"/top100",
            name:"Top 100",
            icon:<FaRegStar/>
        },
        {
            path:"/upload",
            name:"Upload Music",
            icon:<FaCloudUploadAlt/>
        }

        
    ]

    const [showLogo, setShowLogo] = React.useState(window.innerWidth>480);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setShowLogo(window.innerWidth>=1100);
        })
    },[])

    
    return (
        <div className="trove__sb-container">
           <div className="trove__sidebar">
               <div className="trove__sb-top_section">
                    {showLogo ?  
                    <img src="./trove/trovelogo.png" width='100%' alt="" /> :<img src="./trove/troveIcon.png" width='100%' alt="" />}

               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} style={{ textDecoration: 'none' }} className="trove__sb-link" >
                           <div className="trove__sb-icon">{item.icon}</div>
                           <div className="trove__sb-link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;