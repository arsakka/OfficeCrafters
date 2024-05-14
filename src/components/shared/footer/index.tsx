import React from "react";

function Footer() {
    const date = new Date();

    return (
        <React.Fragment>
            <footer className="bg-main-gray py-4 px-8">
                <p className="text-main-white text-center text-sm">Copyright &copy; {date.getFullYear()}, All rights reserved.</p>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
