
import "./SimpleFooter.css";

export const SimpleFooter = () => {

  return (
    <div className="footer">
      <hr />
      <div className="policy" >
        © 1997-2022 Market America, Inc. or its affiliates. All other designated
        trademarks, copyrights, and brands are the property of their respective
        owners. (famos-p17)
      </div>
  
      <div className="policy">
        {" "}
        <a href="/info/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/info/terms-of-use">Terms of Use</a> |{" "}
        <a href="/info/advertising-disclosure">Advertising Disclosure</a> |{" "}
        <a href="/info/terms-of-use#return-policy">Return Policy</a> |{" "}
        <a href="/info/shipping-info">Shipping Information</a>{" "}
      </div>
       
    
    </div>
  );
};