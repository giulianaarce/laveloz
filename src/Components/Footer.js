import React from 'react'  
import { AiOutlineInstagram } from "react-icons/ai"; 
import { FaFacebookSquare, FaTwitter } from "react-icons/fa"; 
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                    <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram size='5rem' style={{paddingRight:'20px'}}/>
                    </a>
                    <a href="https://www.facebook.com/La-Veloz-Carpinter%C3%ADa-476578962393306" target="_blank">
                        <FaFacebookSquare size='4rem'style={{paddingRight:'20px'}}/>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <FaTwitter size='4rem'/>
                    </a>
            </div>
        )
    }
}