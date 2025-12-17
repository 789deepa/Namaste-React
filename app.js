import React from "react";
import ReactDOM from "react-dom/client";


/* 
* Header 
* -logo
* -Nav items
* Body
* -Search
* -RestaurantContainer
*   - Restaurant cards
*     -img -name - rating 
* Footer
* -copyright
* -contact 
*/

const Header = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img alt="Logo" className="logo" src="/img/logo.png" />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestoCard = (_props) => {
    return (
        <div className="res-cards">
            <img className="res-card" alt="Puran Poli" src="/img/food.jpg" />
            <h3>{_props.resName}</h3>  // Dynamic Data from Props
            <h4> Puran Poli, Maharashtrian Food </h4>
            <h4>4.5 Stars</h4>
            <h4>38 Min </h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* resto cards */}
                <RestoCard resName="MOONLIGHT" />
                <RestoCard resName="KFC" />               
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div> 
               
    );    
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
