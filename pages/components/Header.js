import React,{useState} from "react";
import Link from 'next/link';
import { connect } from 'react-redux';


const Header = (props) => {


	const [t, changet] = useState("translateX(0px)");

	const change = () => {
		if(props.margin == "20%"){
			changet("translateX(-100%)");
			props.dec();
		}
		else{
			changet("translateX(0px)");
			props.inc();
		}
	}

	return(
		<>
			<div style={{marginLeft : props.margin}} className="nav"> 

				<h1>Header</h1>
				<input type="checkbox" id="btnhide" />
				<label for="btnhide" className="sidebar-btn" onClick={change} >☰</label>
				
			</div>

			<div style={{transform : t}} id="sidebar">
				<ul>
					<li>Home</li>
					<li>Contact</li>
				</ul>
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return{
		margin : state.margin
	}
}

const mapDispatchToProps = dispatch => {
	return{
		inc: () => dispatch({type: 'INC'}),
		dec: () => dispatch({type: 'DEC'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 