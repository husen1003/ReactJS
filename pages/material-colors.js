import React,{useState} from "react";
import Link from 'next/link';
import Head from './components/Head';
import InnerSidebar from './components/InnerSidebar';
import Material from './components/Material';
import Data from '../material-colors.json';

const materialcolors = () => {

let keys = Object.keys(Data);
let val = Object.values(Data);

	return(
		<>
      		<Head /> 
                  <div className="flex border-black bg-green-300">
                  {
                        val.map((v, i) => {
                                    return(
                                          <h1 className="w-full text-white text-xs" style={{
                                                background : `#${v.hex}`
                                          }} >{v.name}</h1>
                                    );                           
                        })
                  }
                  </div>
                  <div className="flex">
                        {
                              val.map((v, i) => {
                                    return(
                                          <Material
                                          data = {v.code}
                                          />
                                    );
                              })                        
                        }
                  </div>
		</>
	);
}

export default materialcolors;