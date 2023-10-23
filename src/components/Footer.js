import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Navigations</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 1122 SW 32nd St Palm City, Florida(FL), 34990</li>
                        <li>Phone Number: <br/> (772) 287-3808</li>
                        <li>Email: <br/> littlelemon@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};

export default Footer;