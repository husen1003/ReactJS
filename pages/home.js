import React from 'react';
import Head from './components/Head';
import Link from 'next/link';
import Card, {data} from  "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { connect } from 'react-redux';


const Home = () => {
  return (
    <>
      <Head />    
      <div className="font-sans flex justify-between flex-wrap">
          <Header />
          <div>
          <div className="mt-32 text-center">
              <h1 className="text-4xl font-semibold">From the blog</h1>
              <p className="text-gray-500 w-1/3 mx-auto">Set of Material Design Icons with quick option of downloading in various formats.</p>
          </div>
               <div className="row mt-6">
                  {
                    data.map((val,i) => {
                      return(
                        <Card
                          key = {data[i].id}
                          id = {data[i].id}
                          img = {data[i].img}
                          heading = {data[i].heading}
                          disc = {data[i].disc}
                          chip = {data[i].chip}
                          link = {data[i].link}
                        />
                      );
                    })
                  }
               </div>  

                <footer>Made with ❤ by Burhan</footer>

          </div>    
      </div>            

    </>
  );
};

export default Home;
