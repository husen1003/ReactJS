import React,{useState} from "react";
import Link from 'next/link';
import Head from './components/Head';
import InnerSidebar from './components/InnerSidebar';
import Fluent from './components/Fluent';
import Data from '../fluent-colors.json';

const htmlcolors = () => {
	return(
		<>
      		<Head /> 
      		<div className="flex flex-wrap">
      			{
      				Data.map((item) => {
      					return(
      						<Fluent 
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