import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'
import img1 from "../../Images/footerall.png";
import "./footer.css"
export const Footer =()=> {
  return (
      <>
    <div className='main'>
            <div className='submain1'>
                <div className='inermain1'>
                    <div style={{border:"none"}} className='email'>
                        <p style={{color:"white"}}> Get Email Deals & Earn Cashback</p>
                        
                            <input type="text" className='inu' placeholder='enter email address...' />
                            <button className='battu'>sign up</button>
                             <p className='frnd'>Link to this page and tell all of your friends!</p>
                      
                   </div>
                  
                   
                </div>
                <div className='inermain2'>
                    <div className="abouti">
                    <p className='about'>
                        AboutUs | Help | Accessibility Statement | Contact Us | Partner With Us | Services | Country/Region | ConnectOwn Your Own SHOP Site</p>
                    </div>
                    <div className='logis'>
                    <span className='logos1'><AiOutlineMail/></span>
                    <span className='logos2'><FiFacebook/></span>
                    <span className='logos3'><FiTwitter/></span>
                    <span className='logos4'><FaPinterestP/></span>
                    </div>
                </div>
            </div>
                <div className='submain2'>
                    <span className='descri1'>© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</span><br />
                    <span className='descri2'>Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.</span>
                <span className='descri3'>Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy | Shipping Information</span> 
                </div>
                <div className='submain3'>
                    <img src={img1} alt=""/>
                </div>
      {/* <div className='submain4'></div> */}
    </div>
    </>
  )
}