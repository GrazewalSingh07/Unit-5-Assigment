import { Layout } from "antd";
import "./SimpleNavbar.css";

export const Navbar = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <div className="nav">
        <div class="displayflex">
          <div class="logo">
            <a class="shop" href="#">
              <img
                class="shop-logo-img"
                src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
                alt="SHOP.COM"
              />
            </a>
          </div>
          <div>
            <a class="continue" href="#">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};