import React,{useState} from "react";
import Link from 'next/link';
import Head from './components/Head';
import InnerSidebar from './components/InnerSidebar';
import Html from './components/Html';
import Data from '../html-colors.json';

const htmlcolors = () => {

let keys = Object.values(Data);

	return(
		<>
      		<Head /> 
                  <div className="html flex flex-wrap border-black">
                  {
                        keys.map((v, i) => {
                                    return(
                                          <Html
                                          data = {v}
                                          />
                                    );                           
                        })
                  }
                  </div>
		</>
	);
}

export default htmlcolors;