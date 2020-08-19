import React,{useState} from "react";
import Link from 'next/link';
import Head from './components/Head';
import InnerSidebar from './components/InnerSidebar';
import FlatUi from './components/FlatUi';
import Data from '../flatui-colors.json';

const htmlcolors = () => {
	return(
		<>
      		<Head /> 
      		<div className="flex flex-wrap">
      			{
      				Data.map((item) => {
      					return(
      						<FlatUi 
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