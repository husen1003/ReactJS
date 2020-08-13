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
      <div className="flex justify-between flex-wrap">
          <Header />
          <div>
               <div className="row">
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
                <h1>Hello from the Next.js</h1>
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>

                <footer>Made with ❤ by Burhan</footer>

          </div>    
      </div>            

    </>
  );
};

export default Home;
