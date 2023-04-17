import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          />
          <Link to="/home" className="link">
            Homepage
          </Link>
          <Link to="/home" className="link">
            Series
          </Link>
          <Link to="/home" className="link">
            Movies
          </Link>
          <Link to="/home" className="link">
            New and Popular
          </Link>
          <Link to="/home" className="link">
            My List
          </Link>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SearchIcon className="icon" onClick={() => setSearch("")} />
          <span>KIDS</span>
          <NotificationsIcon className="icon" />
          <img src="../img/ben.jpg" alt="" />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <Link to="/home" className="link">
                Settings
              </Link>
              <Link to="/" className="link">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
