import { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiClock,
  FiArrowLeft,
  FiX,
  FiList,
  FiGrid,
  FiUser,
  FiBox,
  FiInfo,
  FiShoppingCart,
  FiAtSign,
} from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [searchVal, setsearchVal] = useState("");

  const toggleSearchBox = () => {
    setOpen(!open);
  };
  const toggleSidenav = () => {
    setShow(!show);
  };

  // onchange handler
  const changeHandler = (e) => {
    setsearchVal(e.target.value);
    console.log(searchVal);
  };

  const resetInput = () => {
    setsearchVal("");
  };

  return (
    <header id="fav-nav" className="bg-background shadow-sm">
      <div className="container">
        <div className="nav-bar d-flex justify-content-between align-items-center">
          {/* <!-- icon and brand name  --> */}
          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- icon --> */}
            <div className="mr-md-5 mr-4" onClick={toggleSidenav}>
              <i className="nav-icon text-dark paragraph-text-lg">
                <FiList />
              </i>
            </div>
            {/* <!-- brand name  --> */}
            <Link href="/">
              <a className="text-decoration-none">
                <div className="py-2">
                  <h1 className="logo h3 mb-0 text-dark paragraph-text-lg">
                    Brand Name
                  </h1>
                </div>
              </a>
            </Link>
          </div>
          <div className="p-2 py-3 d-flex justify-content-between align-items-center nav-icon-box">
            {/* <!-- search icon --> */}
            <div
              id="search-icon"
              className="mr-4 mr-md-0"
              onClick={toggleSearchBox}
            >
              <i className="nav-icon ml-md-5 text-dark paragraph-text-lg">
                <FiSearch />
              </i>
            </div>
            {/* <!-- Catagories icons --> */}
            <Link href="#">
              <a href="#" className="text-decoration-none d-none d-md-block">
                <i className="nav-icon ml-md-5 text-dark paragraph-text-lg">
                  <FiGrid />
                </i>
              </a>
            </Link>
            {/* profile */}
            <Link href="/profile">
              <a href="#" className="text-decoration-none d-none d-md-block">
                <i className="nav-icon ml-md-5 text-dark paragraph-text-lg">
                  <FiUser />
                </i>
              </a>
            </Link>
            {/* <!-- cart icon --> */}
            <Link href="/my-cart">
              <a className="text-decoration-none">
                <i className="nav-icon ml-md-5 text-primary paragraph-text-lg">
                  <FiShoppingCart />
                </i>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- ===== Sidebar component ====== --> */}
      <div
        className={`side-nav ${show ? "show" : ""}`}
        id="side-nav"
        onClick={toggleSidenav}
      ></div>
      <div className="side-drawer p-3 p-md-4">
        <div className="py-3 mb-3 profile d-flex justify-content-between align-items-center">
          {/* <!-- profile image --> */}
          <div className="image-box border rounded-circle overflow-hidden">
            <img src="./imgs/face1.jpg" alt="Profile Image" className="w-100" />
          </div>
          {/* <!-- details --> */}
          <div className="detail-box ml-3 mr-auto">
            <h2 className="paragraph-text-lg mb-1 font-weight-bold">
              Supratim Mondal
            </h2>
            <p className="text-muted paragraph-text-lg mb-1">
              matildabrown@mail.com
            </p>
            <Link href="/profile">
              <a className="text-decoration-none text-primary paragraph-text-lg mb-0">
                View Profile
              </a>
            </Link>
          </div>
        </div>
        <div className="py-2">
          {/* catagories */}
          <Link href="/my-order">
            <a className="text-decoration-none">
              <div className="py-3 d-flex justify-content-start align-items-center">
                <i className="nav-icon text-dark paragraph-text-lg mr-3">
                  <FiGrid />
                </i>
                <p className="text-dark paragraph-text-lg mb-0">Catagories</p>
              </div>
            </a>
          </Link>
          {/* my order */}
          <Link href="/my-order">
            <a className="text-decoration-none">
              <div className="py-3 d-flex justify-content-start align-items-center">
                <i className="nav-icon text-dark paragraph-text-lg mr-3">
                  <FiBox />
                </i>
                <p className="text-dark paragraph-text-lg mb-0">My Order</p>
              </div>
            </a>
          </Link>
          <hr />
          {/* about us */}
          <Link href="/about-us">
            <a className="text-decoration-none">
              <div className="py-3 d-flex justify-content-start align-items-center">
                <i className="nav-icon text-dark paragraph-text-lg mr-3">
                  <FiInfo />
                </i>
                <p className="text-dark paragraph-text-lg mb-0">About</p>
              </div>
            </a>
          </Link>
          {/* contact us */}
          <Link href="#">
            <a className="text-decoration-none">
              <div className="py-3 d-flex justify-content-start align-items-center">
                <i className="nav-icon text-dark paragraph-text-lg mr-3">
                  <FiAtSign />
                </i>
                <p className="text-dark paragraph-text-lg mb-0">Contact Us</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {/* <!-- ===== Sidebar component end ====== --> */}

      {/* <!-- ==== Search Components ==== --> */}
      <div
        className={`search-component ${open ? "open" : ""}`}
        id="search-component"
      >
        <div className="search-component-box px-3 px-md-4 py-4 py-md-5">
          {/* <!--===== search box ======--> */}
          <div className="search-box p-1 px-2 rounded-lg px-md-4 mb-4 d-flex justify-content-center align-items-center shadow-sm">
            {/* back icon box */}
            <div className="back-btn-box px-2 px-md-3" id="back-btn">
              <i
                className="text-dark btn p-0 paragraph-text-lg"
                onClick={toggleSearchBox}
              >
                <FiArrowLeft />
              </i>
            </div>
            {/* input box */}
            <div className="py-2 flex-fill">
              <form method="get">
                <input
                  type="text"
                  placeholder="Search Items"
                  className="search-bar w-100 py-2 px-2 py-md-3 paragraph-text-lg border-0"
                  value={searchVal}
                  onChange={changeHandler}
                />
              </form>
            </div>
            {/* reset form box  */}
            <div
              className="back-btn-box px-2 px-md-3 mr-2 mr-md-3"
              id="back-btn"
              onClick={resetInput}
            >
              <i className="text-dark btn p-0 paragraph-text-lg">
                <FiX />
              </i>
            </div>
          </div>

          {/* <!--==== search history ====--> */}
          <div className="py-2 px-md-4 px-2 d-flex justify-content-start align-items-center">
            <div className="px-2 px-md-3">
              <i className="text-dark paragraph-text-lg ">
                <FiClock />
              </i>
            </div>
            <div className="py-2 px-2 flex-fill">
              <p className="paragraph-text-lg text-dark mb-0">Hello</p>
            </div>
          </div>
          <div className="py-2 px-md-4 px-2 d-flex justify-content-start align-items-center">
            <div className="px-2 px-md-3">
              <i className="text-dark paragraph-text-lg ">
                <FiClock />
              </i>
            </div>
            <div className="py-2 px-2 flex-fill">
              <p className="paragraph-text-lg text-dark mb-0">Hello</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #fav-nav {
          width: 100%;
          -webkit-box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.1);
          box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.1);
          z-index: 9999 !important;
        }

        #fav-nav .logo {
          font-size: 24px;
        }

        #fav-nav .nav-icon {
          font-size: 22px;
          cursor: pointer;
          -webkit-transition: 0.5s;
          transition: 0.5s;
        }

        #fav-nav .nav-icon:hover {
          color: #ee2d4f !important;
        }

        @media screen and (max-width: 767px) {
          #fav-nav .nav-icon {
            font-size: 16px;
          }
        }

        .side-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: 0.5s;
          transition: 0.5s;
        }

        .side-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 35%;
          height: 100vh;
          background-color: #fff;
          /* border-radius: 0 15px 15px 0; */
          -webkit-transition: 0.5s;
          transition: 0.8s;
          transform: translateX(-100%) !important;
          opacity: 0;
          visibility: hidden;
          z-index: 10000;
        }

        @media screen and (max-width: 1023px) {
          .side-drawer {
            width: 85vw;
          }
        }

        .side-drawer .image-box {
          width: 80px !important;
          height: 80px !important;
        }

        /* @media screen and (max-width: 576px) {
          .side-drawer .image-box {
            width: 60px !important;
            height: 60px !important;
          }
        } */

        .show {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .show + .side-drawer {
          transform: translateX(0) !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* search component */
        .search-component {
          width: 100%;
          height: 100vh;
          position: fixed !important;
          top: 0;
          left: 0;
          background-color: #e5e5e5;
          -webkit-transform: translateX(-90%) !important;
          transform: translateX(-90%) !important;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          z-index: 10000 !important;
        }

        .search-box {
          background-color: #fff !important;
        }

        .search-bar:focus {
          outline: none;
        }

        .open {
          opacity: 1;
          visibility: visible;
          -webkit-transform: translateX(0) !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
