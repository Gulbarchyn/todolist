import React from "react";

const Home = () =>{
    return (
        <div>
            <header className="header">
               <div className= "title">
                   <p>Git Browser</p>
               </div>
            </header>
            <div className= "input-container">
                <input type="text" className="name-input" placeholder="Enter github username"/>
            </div>
          <div className="container">
              <button type={"button"}>
                  Search
              </button>
          </div>
        </div>
    )
}

Home.propTypes ={}
export default Home