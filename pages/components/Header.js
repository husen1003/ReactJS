import React,{useState} from "react";
import Link from 'next/link';
import { connect } from 'react-redux';


const Header = () => {


	const [t, changet] = useState("translateX(0px)");

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
				<input type="checkbox" id="btnhide" />
				<label htmlFor="btnhide" onClick={change} className="sidebar-btn">☰</label>
				<img className="logo" src="logo.svg" />
				<a>Home</a>
				<a>Blog</a>				
			</div>

			<div style={{transform : t}} id="sidebar">
				<a onClick={change} id="close"><label>✖</label></a>

				<div className="side-heading">
					<h1>Color Palettes</h1>
				</div>
				<ul>
					<li className="active">Home</li>
					<li>Contact</li>
				</ul>
				<div className="side-heading">
					<h1>Color Palettes</h1>
				</div>
				<ul>
					<li>Home</li>
					<li>Contact</li>
				</ul>
				<div className="side-heading">
					<h1>Color Palettes</h1>
				</div>
				<ul>
					<li>Home</li>
					<li>Contact</li>
				</ul>								
			</div>
		</>
	);
}


export default Header; 