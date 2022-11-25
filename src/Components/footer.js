import React from "react"
import zomatoLogo from "../Images/ZomatoLogo.png"
import fbLogo from "../Images/Facebook_Icon.png"
import twitterLogo from "../Images/Twitter_Icon.png"
import instaLogo from "../Images/Instagram_Icon.png"
import appStoreLogo from "../Images/app-store.png"
import googlePlayLogo from "../Images/google-play.png"
import logo from "../Images/logo.png"

export default function Footer(){
    return (
        <div className="footer">
            <img src={logo} alt="logo" className="footer--logo" />
            <div className="footer--section">
                <div className="footer--content">
                    <h4>COMPANY</h4>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Report Fraud</p>
                    <p>Contact</p>
                </div>
                <div className="footer--content">
                    <h4>FOR FARMERS</h4>
                    <p>Code of Conduct</p>
                    <p>Community</p>
                    <p>Blogger</p>
                    <p>Mobile Apps</p>
                </div>                
                <div className="footer--content">
                    <h4>FOR FARMS</h4>
                    <p>Add Farms</p>
                    <br/>
                    <h4>FOR ENTERPRISES</h4>
                    <p>Farm Way-Out for Work</p>
                </div>                
                <div className="footer--content">
                    <h4>FOR YOU</h4>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Security</p>
                    <p>Sitemap</p>
                </div>
                <div className="footer--content">
                    <h4>SOCIAL LINKS</h4>
                    <div className="socialMediaLogo">
                        <img src={fbLogo} alt="social media handles" />
                        <img src={twitterLogo} alt="social media handles" />
                        <img src={instaLogo} alt="social media handles" />
                    </div>
                    <img src={appStoreLogo} alt="App Store" className="storeLogo" />
                    <img src={googlePlayLogo} alt="Google Play" className="storeLogo" />
                </div>
            </div>
            <hr/>
            <p>Copyright © 2022 Farm Way-out Inc. All rights reserved.</p>
        </div>
    )
}