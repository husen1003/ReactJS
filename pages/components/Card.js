import React from "react";



const Card = (p) => {


	return(
		<>
			<div className="card">
				<img src={p.img} alt="Card Images" />
				<span className="chip"> {p.chip} </span>
				<h1>{p.heading}</h1>
				<p>{p.disc}</p>
			</div>
		</>
	);
}




const data = [
				{
					id : 1,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/11/White-Mechanical-Keyboards-768x284.jpg",
					heading : "Best White Mechanical Keyboards in 2020 – Reviews & FAQs",
					disc : "The mechanical keyboards are still significant even after the advent of innovative keyboards. It not only gives a unique experience of relishing the old-fashioned keyboards but guarantees typing efficiency. The […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 2,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/10/White-Gaming-Monitor-768x284.png",
					heading : "Best White Gaming Monitor of 2020 – Reviews & FAQs",
					disc : "Are you a Game Freak? Worried about purchasing the best white gaming monitor? All the Gaming enthusiasts will buy Gaming Monitors, which would promise them a fun-filled and immersive gaming […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 3,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/10/BLUETOOTH-SPEAKERS-WITH-LIGHTS-768x284.png",
					heading : "Best Bluetooth Speakers with Lights in 2020 – Reviews & FAQs",
					disc : "Audio speakers have become one of the essential needs of our generation because of the convenience it provides to us by helping us in multi-tasking. With the help of audio […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 4,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/10/The-best-solar-powered-Bluetooth-speakers-768x284.jpg",
					heading : "10 Best Solar Powered Bluetooth Speakers – Reviews & FAQs",
					disc : "Climate change is real. It’s happening now and fast. There has been a surge in the use of the electronic device with the advancement in technology. This has put a […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 5,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/10/Streaming-PC-768x284.jpg",
					heading : "Building Streaming PC in 2020 – Guide & FAQs",
					disc : "Computer game streaming is more popular than at any time in recent memory. The advent of TwitchTV and Hitbox has enabled live communication while playing computer games. It has additionally […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 6,
					img : "https://www.materialui.co/blog/wp-content/uploads/2019/10/Mechanical-Gaming-Keyboards-768x284.png",
					heading : "Best Mechanical Gaming Keyboards in 2020 – Reviews & FAQs",
					disc : "Ever stop and consider how your normal, ordinary PC console’s keyboard doesn’t have the similar satisfying “click” that it used to? All things considered, a few makers still manufacture mechanical […]",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 7,
					img : "https://www.materialui.co/img/material-colors-thumb.png",
					heading : "Material Design Colors",
					disc : "Click-To-Copy color palette of Material Design Guidelines developed by Google.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 8,
					img : "https://www.materialui.co/img/flat-colors-thumb.png",
					heading : "Flat UI Colors",
					disc : "Click-To-Copy color palette of very popular Flat UI Colors.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 9,
					img : "https://www.materialui.co/img/fluent_colors_thumb.png",
					heading : "Fluent Design Colors",
					disc : "Click-To-Copy color palette of very popular Microsoft's Fluent Design Colors.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 10,
					img : "https://www.materialui.co/img/fluent_colors_thumb.png",
					heading : "Material Design Colors",
					disc : "Click-To-Copy color palette of Material Design Guidelines developed by Google.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 11,
					img : "https://www.materialui.co/img/social-colors-thumb.png",
					heading : "Social Colors",
					disc : "Click-To-Copy color palette of famous Social Media sites.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 12,
					img : "https://www.materialui.co/img/metro-colors-thumb.png",
					heading : "Metro Colors",
					disc : "Click-To-Copy color palette of Metro Colors given by Microsoft Windows.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 13,
					img : "https://www.materialui.co/img/html-colors-thumb.png",
					heading : "HTML Colors",
					disc : "Click-To-Copy palette of 140 named colors which are supported by modern browsers.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 14,
					img : "https://www.materialui.co/img/color-picker-thumb.png",
					heading : "Color Picker",
					disc : "Simple & minimal full screen color picker to quickly choose the colors.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 15,
					img : "https://www.materialui.co/img/material-icons-thumb.png",
					heading : "Material Icons",
					disc : "Set of Material Design Icons with quick option of downloading in various formats.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 16,
					img : "https://www.materialui.co/img/unicode-characters-thumb.png",
					heading : "Unicode Characters",
					disc : "Unicode Characters supported by modern browsers which can be used as icons.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 17,
					img : "https://www.materialui.co/img/mui-blog-thumb.png",
					heading : "Material UI Blog",
					disc : "Checkout our blog for latest updates related to graphics, colors, tools & web.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
				{
					id : 18,
					img : "https://www.materialui.co/img/fluent_colors_thumb.png",
					heading : "Fluent Design Colors",
					disc : "Click-To-Copy color palette of very popular Microsoft's Fluent Design Colors.",
					link : "https://www.materialui.co/htmlcolors",
					chip : "blog"
				},
			 ];

export default Card;
export {data};