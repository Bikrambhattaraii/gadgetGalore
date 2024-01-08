import "./headestyle.css";
import Logo from "../../assest/logo.jpg";
import { FaUser, FaPeriscope, FaBusAlt } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="main">
        <div className="top_navbar">
          <p>Need help? call us: 9824339439</p>
          <ul className="track-order">
            <li>
              <a href="">
                <FaPeriscope /> OUR STORE{" "}
              </a>
            </li>
            <li>
              <a href="">
                <FaBusAlt />
                track my order
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-cart">
          <p>
            <img src={Logo} alt="logo" />
          </p>
          <form>
            <div className="form-field">
              <input
                type="text"
                name="q"
                placeholder="Search ypur product here..."
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <ul className="icons-style">
            <li>
              <a href="#">
                <FaUser size={15} color="black" />
                sign in
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineHeart /> Wishlist{" "}
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineShoppingCart />
                Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <ul>
            
            <li>Home</li>
            <li>blog</li>
            <li>about</li>
          </ul>
          <p>30 DAYS FREE RETURN</p>
        </div>
      </div>
    </>
  );
};

export default Header;
