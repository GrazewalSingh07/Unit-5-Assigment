import { Layout } from "antd";
import { Navbar } from "../SimpleNavbar/SimpleNavbar";
import { SimpleFooter } from "../SimpleFooter/SimpleFooter";
import "./AddressDetails.css";
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"


export const AddressDetails = () => {
  const [address,setaddress]=useState([])
  async function deleteAddress(props){
    console.log(props)
 
    try {
      let Authtoken = JSON.parse(localStorage.getItem("Authtoken"));
      console.log(Authtoken);

      let data = await fetch(`https://shop-clone-api.herokuapp.com/addresses/:${props}`, {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${Authtoken}`,
          "Content-Type": "application/json",
        },
      });
      data = await data.json();
      
      getData()
    } catch (error) {
      console.log(error);
    }

  }

async function getData(){
  try {
         let Authtoken = JSON.parse(localStorage.getItem("Authtoken"));
         
          
         let data= await fetch("https://shop-clone-api.herokuapp.com/addresses", {
            method: "GET",
      
            headers: {
              Authorization: `Bearer ${Authtoken}`,
              "Content-Type": "application/json",
            },
          });
          data=await data.json()
          console.log(data)
          setaddress([...data])

        } catch (error) {
          console.log(error);
        }
       
     
    
}
 console.log(address,"murli");
  useEffect(()=>{
    getData()
  },[])
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <div className="container">
            <div className="header">
              <h1>Checkout</h1>
              <p>Order total: $25.99</p>
            </div>
            <br />
            <br />
            <div>
              {/* <ul class="checkout-progress__list">
                <li class="checkout-progress__list-item">
                  <h2 class="checkout-progress__list-text checkout-progress__list-text--active">
                    Address
                  </h2>
                </li>
                <li class="checkout-progress__list-item">
                  <span class="checkout-progress__list-text">Shipping</span>
                </li>
                <li class="checkout-progress__list-item">
                  <span class="checkout-progress__list-text">Payment</span>
                </li>
              </ul> */}
              <button id="address">Address</button>
              <button>Shipping</button>
              <button>Payment</button>
            </div>
            <br />
            <hr />
            {/* container 2 starts here */}

            <div className="container2">
              <div className="left">
                <div className="innerflex">
                  <div>
                    <h3>Shipping Address</h3>
                  </div>
                  <p>
                    <Link to="/" >add address</Link>
                  </p>
                </div>
                <br />
                <div>Choose Address</div>
                <br />
                <div className="adresscontainer">
                

                   {address.map((e)=>{
                     return (
                       <div id="card">
                         <span>{e.firstName}</span> <span>{e.lastName}</span>
                         <p>{e.address1}</p>
                         <p>{e.address2}</p>
                         <span>{e.city}</span>, <span>{e.postal}</span>
                         <p> phone : {e.phone}</p>
                         <br />
                         <Link to="/" val={address} >edit</Link>  <button  onClick={()=>{deleteAddress(e._id)}} >Delete</button>
                       </div>
                     );
                     
                   })}
                  {/* {address.map((a)=>{
                    return (
                      <div id="card">
                        {a.address1}
                      </div>
                    );
                  })} */}
                  {/* <div id="card">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda ut deserunt esse inventore, non, sequi vel neque
                    quisquam explicabo officia, doloribus debitis atque nemo ad
                    dolorem laboriosam porro natus temporibus.
                  </div>
                  <div id="card">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda ut deserunt esse inventore, non, sequi vel neque
                    quisquam explicabo officia, doloribus debitis atque nemo ad
                    dolorem laboriosam porro natus temporibus.
                  </div> */}
                </div>
              </div>

              <div className="right">
                <h2>Order Summary</h2>
                <br />
                <hr />
                <br />
                <div className="innerflex">
                  <div>
                    <h4>Order Total</h4>
                  </div>
                  <div>
                    <h4>$25.99</h4>
                  </div>
                </div>
                <br />
                <div className="innerflex">
                  <div>Cashback earned on this order:</div>
                  <div>$1.56</div>
                </div>
                <div className="green"></div>
                <br />
                <div>
                  <button id="submit">Continue Checkout</button>
                </div>
                <br />
                <div className="font">
                  By clicking continue, you agree to the SHOP.COM
                  <a href="#"> Terms of Use</a> and
                  <a href="#"> Privacy Policy</a>.
                </div>
                <br />
                <div>
                  <div className="font" id="step0">
                    Let us know how we are doing <a href="#">Send Feedback</a>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </Content>
        <Footer>
          <SimpleFooter />
        </Footer>
      </Layout>
    </div>
  );
};