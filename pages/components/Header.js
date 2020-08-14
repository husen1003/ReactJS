import React,{useState} from "react";
import Link from 'next/link';
import { connect } from 'react-redux';


const Header = () => {


	const [t, changet] = useState("translateX(-100%)");

	const change = () => {
		if(t == "translateX(0px)"){
			changet("translateX(-100%)");
		}
		else{
			changet("translateX(0px)");
		}
	}

	return(
		<>
			<div className="nav"> 
				<div className="nav-logo">
					<input type="checkbox" className="hidden" id="btnhide" />
					<label htmlFor="btnhide" onClick={change} className="sidebar-btn">☰</label>
					<img className="logo" src="logo.svg" />
				</div>	
				<div className="nav-link">
	                <Link href="/">
	                  <a>Home</a>
	                </Link>
	                <Link href="/blogs">
	                  <a>Blogs</a>
	                </Link>
					<a>About Us</a>
					<a>Contact Us</a>	
				</div>		
			</div>

			<div style={{transform : t}} id="sidebar">
				<a onClick={change} id="close"><label>✖</label></a>

				<div className="side-heading">
					<h1>Color Palettes</h1>
				</div>
				<ul>
					<li className="active">Material</li>
					<li>Flat UI</li>
					<li>Social</li>
					<li>Fluent</li>
					<li>Metro</li>
					<li>HTML</li>
				</ul>
				<div className="side-heading">
					<h1>More</h1>
				</div>
				<ul>
					<li>Material Icons</li>
					<li>Unicodes</li>
					<li>Color Picker</li>
					<li>Blog</li>
				</ul>								
			</div>
		</>
	);
}


export default Header; 