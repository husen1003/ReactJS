import React from "react";

const Material = (p) => {

let keys = Object.keys(p.data);
let val = Object.values(p.data);

	return(
		<>
			<div className="flex flex-col w-full">
				{
					val.map((v, i) => {
						return(
							<div style={{background : `rgb(${v.r}, ${v.g}, ${v.b})`}} className="h-10 relative">
								<span className="absolute bottom-0 text-xs text-white">{keys[i]}</span>
							</div>
						);
					})
				}
			</div>
		</>
	);
}
export default Material;