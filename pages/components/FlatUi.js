import React from "react";

const FlatUi = (p) => {


	return(
		<>
			<div style={{background : `rgb(${p.r}, ${p.g}, ${p.b})`}} className="flat-icons w-1/5 relative justify-center items-center" >
				<h1 className="absolute bottom-0 left-0 ml-2">{p.name}</h1>
			</div>
		</>
	);
}
export default FlatUi;