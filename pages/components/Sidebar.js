import React,{useState} from "react";
import Link from 'next/link';


const Sidebar = () => {

	const [flex, changeflex] = useState(4);

	const change = () => {
		if(flex === 4){
			changeflex(1);			
		}
		else {			
			changeflex(4);
		}
	}


	return(
		<>
			<div className="sidebar2" style={{flex : flex}} >
				<div>
					<ul>
						<li style={{right : "10px", float : "right"}} onClick={change} id="toggle" >☰</li>
						<li htmlFor="btnhide">Home</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>
			
			</div>
		</>
	);
}

export default Sidebar; 