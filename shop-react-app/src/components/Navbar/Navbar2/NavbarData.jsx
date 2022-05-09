import {AiFillHome} from "react-icons/ai";
import {FaCartPlus} from 'react-icons/fa';
import {FaPaperPlane} from 'react-icons/fa';
import {MdArrowForwardIos} from "react-icons/md";
import {RiTruckFill} from 'react-icons/ri';
import {GiArrowDunk} from 'react-icons/gi';
import {BiHelpCircle} from "react-icons/bi";
import {AiOutlineUnorderedList} from "react-icons/ai";

import {FiGift} from "react-icons/fi"
import {AiTwotoneGift} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs";
import {MdShoppingBasket} from "react-icons/md";

import {RiMapPin2Fill} from "react-icons/ri";

import {GrRestroomMen} from "react-icons/gr";
import {MdOutlineHealthAndSafety} from "react-icons/md";
import {FaShoppingBag} from "react-icons/fa";




import {FaCar} from "react-icons/fa";
import {BsTagFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";


import {MdAccountCircle} from "react-icons/md";
import {HiCurrencyDollar} from "react-icons/hi";
import {MdManageAccounts} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {GiHealthPotion} from "react-icons/gi"



export const NavbarData=[
    {
        title:"Home",
        path:"/",
        icon: <AiFillHome/>,
        className:"nav-text",
    },
    {
        title:"Product",
        path:"/product",
        icon: <FaCartPlus/>,
        className:"nav-text",
    },
    {
        title:"Image",
        path:"/image",
        icon: <FaPaperPlane/>,
        className:"nav-text",
    }
]



export const navData1 =[
    {
        title:"Mother's Day Gift Idea",
        path:"/motherday",
        // icon: <AiFillHome/>,
        className:"nav1-text",
    },
    {
        title:"Gift Center",
        path:"/Gift Center",
        // icon: <FaCartPlus/>,
        className:"nav1-text",
    },
    {
        title:"SHOP.COM Home Warranties",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"nav1-text",
    },
    {
        title:"Onecart Exclusive Deals",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"nav1-text",
    }
]



export const navData2 =[
    {
        title:"Clothes",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setclothes",
        pr:"cloth"
    },
    {
        title:"Shoes",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setShoes",
        pr:"sho"
    },
    {
        title:"Beauty",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setBeauty",
        pr:"beu"
    },
    {
        title:"Home",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setHome",
        pr:"hom"
    },
    {
        title:"Kids",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setKids",
        pr:"kid"
    },
    {
        title:"Electronics",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setElectronics",
        pr:"electr"
    },
    {
        title:"Health & Nutrition",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setclothes",
        pr:"heal"
    },
    {
        title:"Jewelry",
        openDetail:"/motherday",
        icon: <MdArrowForwardIos/>,
        className:"nav2-text",
        details:"setJewelry",
        pr:"jew"
    },
]

export const navData3=[
    {
        title:"Track",
        path:"/",
        icon: <RiTruckFill/>,
        className:"nav-text3",
    },
    {
        title:"Recorder items-updated",
        path:"/product",
        icon: <GiArrowDunk/>,
        className:"nav-text3",
    },
    {
        title:"help",
        path:"/image",
        icon: <BiHelpCircle/>,
        className:"nav-text3",
    }
]

export const navData4=[
    {
        title:"List Manager",
        path:"/",
        icon: <AiOutlineUnorderedList/>,
        className:"nav-text4",
    },
    {
        title:"Gift Register",
        path:"/product",
        icon: <FiGift/>,
        className:"nav-text4",
    },
    {
        title:"eGifts",
        path:"/image",
        icon: <AiTwotoneGift/>,
        className:"nav-text4",
    },
    {
        title:"Price Alerts",
        path:"/",
        icon: <BsCurrencyDollar/>,
        className:"nav-text4",
    },
    {
        title:"Shop Services",
        path:"/",
        icon: <MdShoppingBasket/>,
        className:"nav-text4",
    },
    {
        title:"Shop Local",
        path:"/",
        icon: <RiMapPin2Fill/>,
        className:"nav-text4",
    },
    {
        title:"Shopbuddy",
        path:"/",
        icon: <GrRestroomMen/>,
        className:"nav-text4",
    },
    {
        title:"Trends",
        path:"/",
        icon: <FaShoppingBag/>,
        className:"nav-text4",
    },
    {
        title:"Deals",
        path:"/",
        icon: <BsTagFill/>,
        className:"nav-text4",
    },
    {
        title:"Carsaver",
        path:"/",
        icon: <FaCar/>,
        className:"nav-text4",
    },
    {
        title:"Best of Web",
        path:"/",
        icon: <AiFillStar/>,
        className:"nav-text4",
    },
    {
        title:"Nutri-Physical",
        path:"/",
        icon: <MdOutlineHealthAndSafety/>,
        className:"nav-text4",
    },
]



// ....................navDataright.................................

export const navrightdata1=[
    {
        title:"Sign in",
        path:"/signin",
        icon: <CgProfile/>,
        className:"nav-text4",
    },
    {
        title:"Track Orders",
        path:"/product",
        icon: <RiTruckFill/>,
        className:"nav-text4",
    },
    {
        title:"Reorder items",
        path:"/image",
        icon: <GiArrowDunk/>,
        className:"nav-text4",
    },
    {
        title:"Cashback Program",
        path:"/",
        icon: <HiCurrencyDollar/>,
        className:"nav-text4",
    },
    {
        title:"Help",
        path:"/",
        icon: <BiHelpCircle/>,
        className:"nav-text4",
    },
    {
        title:"Create Account",
        path:"/signup",
        icon: <MdManageAccounts/>,
        className:"nav-text4",
    },
    {
        title:"My Account",
        path:"/",
        icon: <MdAccountCircle/>,
        className:"nav-text4",
    },
   
    
]

export const navrightdata2=[
    {
        title:"List Manager",
        path:"/",
        icon: <AiOutlineUnorderedList/>,
        className:"nav-text4",
    },
    {
        title:"Gift Register",
        path:"/product",
        icon: <FiGift/>,
        className:"nav-text4",
    },
    {
        title:"eGifts",
        path:"/image",
        icon: <AiTwotoneGift/>,
        className:"nav-text4",
    },
    {
        title:"Wellness Manager",
        path:"/",
        icon: <GiHealthPotion/>,
        className:"nav-text4",
    },
]

export const navDataClothes3=[
    {
        title:"Activewear",
        path:"/motherday",
        // icon: <AiFillHome/>,
        className:"navdatashow3-text",
    },
    {
        title:"Bras",
        path:"/Gift Center",
        // icon: <FaCartPlus/>,
        className:"navdatashow3-text",
    },
    {
        title:"Dresses",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"navdatashow3-text",
    },
    {
        title:"Jackets",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"navdatashow3-text",
    },

    {
        title:"Jumpsuits",
        path:"/motherday",
        // icon: <AiFillHome/>,
        className:"navdatashow3-text",
    },
    {
        title:"Leggings",
        path:"/Gift Center",
        // icon: <FaCartPlus/>,
        className:"navdatashow3-text",
    },
    {
        title:"Lingerie & Shapewear",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"navdatashow3-text",
    },
    {
        title:"pants",
        path:"/waranties",
        // icon: <FaPaperPlane/>,
        className:"navdatashow3-text",
    }
]