import React from 'react';
import '../CSS/footer.css';
import {Link} from 'react-router-dom';
function footer(){
	return(
			<div className="footer_main">
				<div className="footer_topbutton">
					<h4><a href="/dashboard">Back to Top</a></h4>
				</div>
				<div className="footer_body">
					 <div className='footer_body12'>
					 	<i className="fab fa-facebook fa-2x" />
						<i className="fab fa-instagram fa-2x" />
						<i className="fab fa-twitter fa-2x" />
						<i className="fab fa-youtube fa-2x" />
						<i className="fab fa-linkedin fa-2x" />
					</div>
					{/* <div className='footer_body1'>
						<Link to="/dashboard">Help</Link>
						<Link to="/dashboard">site index</Link>
						<Link to="/dashboard">Covide-19 and WebDevPool</Link>
						<Link to="/dasboard">Your Account</Link>
						<Link to="/dashboard">Return Center</Link>
						<Link to="/dashboard">WebDevPool Developer</Link>
					</div> */}
					<div className='footer_body1'>
						<Link to="/dashboard">Press Room</Link>
						<Link to="/dashboard">Advertising
							{/* <i className="fas fa-link" /> */}
						</Link>
						<Link to="/dashboard">Jobs</Link>
						<Link to="/dashboard">Conditions of Use</Link>
						<Link href="/About">Privacy Policy</Link>
						<Link href="/About">Interest-Based Ads</Link>
					</div>
					{/* <div className='footer_body1'>
						<Link to="/dashboard">an WebDevPool Website</Link>
					</div> */}
					<div className='footer_bottom'>
						<Link to="/dashboard">© 2019-2020 by WebDevPool, Inc.</Link>
					</div>
				</div>
				{/* <div className="footer_bottom">
					<Link className="footer_bottom_link" to='/dashboard'>Condition Of Use</Link>
					<Link className="footer_bottom_link" to='/dashboard'>Privacy Notice</Link>
					<Link className="footer_bottom_link" to='/dashboard'>Interest-Based Ads</Link>
					<Link className="footer_bottom_link" to='/'><i class="fas fa-copyright" /> 2019-2020, WebDevPool. or its afflicate</Link>
				</div> */}
				</div>
			// </div>
		);
}

export default footer;