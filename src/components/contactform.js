import React from "react";
import emailjs from "emailjs-com";
import "./contactform.css";

class Contactform extends React.Component{
   
    render(){
        function sendEmail(e) {
            e.preventDefault();
    
            emailjs.sendForm('gmail', 'template_sz2n9eq', e.target, 'user_c9pw2lXeXv1OSdhZlyG4i')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="name">
                        <input type="text" placeholder="Name" name="name"/>
                    </div>
                    <div className="email">
                        <input type="text" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="subject">
                        <input type="text" placeholder="Subject" name="subject"/>
                    </div>
                    <div>
                        <textarea placeholder="Enter text here...." name="message"></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Contactform;