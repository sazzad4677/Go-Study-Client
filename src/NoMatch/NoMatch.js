import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import "./NoMatch.css";
const NoMatch = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
            <section className="main-div">
                <div className="text-center">
                    <div>
                        <h1 className="text-danger">404</h1>
                        <h2 className="text-danger">Error - Sorry Something Went Wrong !</h2>
                    </div>
                    <p className="text-danger">For Some Reason The Page You Requested Could Not Be Found On Our Server</p>
                </div>
                <Link to="/home"> <p className="text-center brand-text"> Go Home</p> </Link>
            </section>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default NoMatch;