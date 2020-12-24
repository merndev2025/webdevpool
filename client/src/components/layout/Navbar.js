import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../CSS/Navbar1.css'
import { IconContext } from 'react-icons';
import * as IoIcons from "react-icons/io";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {


  const Navbar1 = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
      <>
      <div className="navbar1">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
      </div>
       <IconContext.Provider value={{color: '#787878'}} > 
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar} style={{display:'flex', flexDirection:'column'}}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="cross" style={{color:'white'}}/>
              </Link>
            </li>
              <h2 className="top-header" style={{marginTop:'-60px', color:'white'}}>WebDevPool</h2>
              <h5 className="top-header" style={{letterSpacing:'0px'}}>Welcome {user && user.name}</h5>
              <div className="border"></div>
              <div className="nav-text">
                <li>
                  <Link to="/dashboard" className='arrow' style={{color:'white',textDecoration:'none'}}>Dashboard
                    <IoIcons.IoIosArrowForward style={{color:'white'}}/> 
                  </Link>
                </li>
                <li>
                  <Link to="/profiles" className='arrow' style={{color:'white',textDecoration:'none'}}>Profiles
                  <IoIcons.IoIosArrowForward style={{color:'white'}} />
                  </Link>
                </li>
                <li>
                  <Link to="/posts" className='arrow' style={{color:'white',textDecoration:'none'}}>Posts Feed
                  <IoIcons.IoIosArrowForward style={{color:'white'}}/>
                  </Link>
                </li>
                {/* <li className='arrow'>
                  <Link to="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
                  <IoIcons.IoIosArrowForward style={{color:'white'}}/>
                </li> */}
              </div>
          </ul>
        </nav>
        </IconContext.Provider>
      </>
    );
  }

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard" style={{textDecoration:'none'}}>Dashboard</Link>
      </li>
      <li>
        <Link to="/profiles" style={{textDecoration:'none'}}>Profiles</Link>
      </li>
      <li>
        <Link to="/posts" style={{textDecoration:'none'}}>Posts Feed</Link>
      </li>
      <li>
        <a onClick={logout} href="#!" style={{textDecoration:'none'}}>
          <i className="fas fa-power-off" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      {/* <li>
        <a onClick={logout} href="#!" style={{textDecoration:'none'}}>
          <i className="fas fa-power-off" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li> */}
    </ul>
  );

  // guest links
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register" style={{textDecoration:'none'}}>Join Now</Link>
      </li>
      <li>
        <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
      </li>
    </ul>
  );
  // const leftNavBar = () => {
  //   if(!loading && isAuthenticated){
  //     return(
  //       <Fragment>
  //         {Navbar1()}
  //       </Fragment>
  //     )
  //   }
  // }
  return (
    <div>
      <nav className="navbar" style={{height:'55px'}}>
        <p style={{display:'flex',flexDirection:'row'}}>
          {/* {leftNavBar()} */}
          {/* {Navbar1()} */}
          <Link to="/" style={{textDecoration:'none'}}>
            <i className="fas fa-users" /> WebDevPool
          </Link>
        </p>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);




