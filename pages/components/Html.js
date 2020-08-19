import React from "react";

const Html = (p) => {

let l = p.data.length;

	return(
		<>
			<div className="flex flex-row w-full mt-1">
				{
					p.data.map((v, i) => {
						return(
							<div title={v.name} style={{background : `rgb(${v.r}, ${v.g}, ${v.b})`}} className="h-12 w-full relative">
								<span className="absolute bottom-0 text-xs text-white ml-1">{v.hex}</span>
							</div>
						);
					})
				}
			</div>
		</>
	);
}
export default Html;