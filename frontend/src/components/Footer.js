import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center p-3 mt-5">
            <p>
                &copy; {new Date().getFullYear()} HopeLens
            </p>
        </footer>
    );
};

export default Footer;