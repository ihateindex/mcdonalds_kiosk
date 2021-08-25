import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
// import Main from './Main';

function Intro() {
    return (
        <div className="intro">
            <div className="nav-country">
                <button type="button" className="btn-change-country usa"></button>
            </div>
            <div className="intro-title-block">
                <img className="intro-logo" src="./assets/mcdonalds_logo.svg" alt="" />
                <h2 className="intro-title">
                    Where will you be
                    <br />
                    eating today?
                </h2>
            </div>
            <div className="btn-block">
                <Link
                    to={{
                        pathname: `/page/Main`,
                        state: {
                            title: 'Eat In',
                        },
                    }}
                >
                    <img src="./assets/eat_in_icon.png" alt="" />
                    <p>Eat In</p>
                </Link>
                <Link
                    to={{
                        pathname: `/page/Main`,
                        state: {
                            title: 'Take Out',
                        },
                    }}
                >
                    <img src="./assets/take_out_icon.png" alt="" />
                    <p>Take Out</p>
                </Link>
            </div>
        </div>
    );
}

export default Intro;
