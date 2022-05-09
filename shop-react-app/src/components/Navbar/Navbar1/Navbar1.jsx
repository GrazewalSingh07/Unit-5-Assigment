import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./Navbar1.css";
import {FaBars} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";


export const Navbar = () => {


  const alldepart=()=>{
    <Navigate to={"/"}/>
  }
    
  return (
    <div>
      <div className='Navbar1'>
        <div style={{display:"flex"}}>
            <Link to="/" >
            <div className='NavbarLogo'>
                <img 
                src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
                alt="logo"
                />
            </div>

            </Link>
            <div className='NavbarInput'>
            <div className='allDepartment'>
             <select style={{margin:" -5px 0px 10px 10px",width:"80%"}}>
               
                <option value="grapefruit" onClick={alldepart}>
                  All Departments
                </option>
                  <option value="lime">Auto</option>
                <option value="coconut">Baby</option>
                <option value="mango">Beauty</option>
              </select>

            </div>         
             <div className='navinputbardiv'>
                 <input type="text" placeholder='Search SHOP.COM..' className='inputbar'/>
             </div>
             <div className='searchIcons'>
               <BsSearch style={{width:"50%",margin:"10px",color:"white"}}/>
             </div>
         </div>
        </div>
       
       
        


         <div className='navbarright'>
           <Link to="/navbar" >
           <img className='navrightimg'
          src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg"
          alt=""
          />  
        </Link>  
              
      </div>
      </div>

      {/* .............................navbar2.................................. */}


     
    
    </div>
  )
}




 