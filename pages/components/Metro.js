import React from "react";

const Metro = (p) => {


	return(
		<>
			<div style={{background : `rgb(${p.r}, ${p.g}, ${p.b})`}} className="fluent-icons h-1/6 w-1/6 relative justify-center items-center" >
				<h1 className="absolute bottom-0 left-0 ml-2">{p.name}</h1>
			</div>
		</>
	);
}
export default Metro;