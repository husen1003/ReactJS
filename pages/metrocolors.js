import React,{useState} from "react";
import Link from 'next/link';
import Head from './components/Head';
import InnerSidebar from './components/InnerSidebar';
import Metro from './components/Metro';
import Data from '../metro-colors.json';

const htmlcolors = () => {
	return(
		<>
      		<Head /> 
      		<div className="flex flex-wrap">
      			{
      				Data.map((item) => {
      					return(
      						<Metro 
      						name = {item.name}
      						hex = {item.hex}
      						r = {item.r}
      						g = {item.g}
      						b = {item.b}
      						/>
      					);
      				})
      			}
      		</div>
		</>
	);
}

export default htmlcolors;