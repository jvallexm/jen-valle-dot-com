import React from 'react';

export default class Contact extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      email: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e)
  {
    let email = this.state.email;
    email[e.target.name] = e.target.value;
    this.setState({email: email});
  }
  handleSubmit()
  {
    if(!/(\w+\.?\w+)@(\w+\.?\w+)\.((net)|(com)|(org)|(co\.uk)|(biz)|(edu)|(egg)|(io))/.test(this.state.email.email))
       this.setState({message: "Please enter a valid email address"})
    
  }
  render()
  {
    return(
     <div id={"contact"} className="text-center container-fluid">
        <div className="section">
            <h1>Contact</h1>
            Jennifer can be reached at {this.props.myEmail}.
        </div>   
    </div>  
    );
  }
}

/*            <h3>{this.state.message}</h3>
            <input className={this.state.email.name =="" && 
                                 this.state.message!=""
                                 ? "width-100p error-border" : "width-100p"}
                   name={"name"}
                   placeholder={"Your Name"}
                   value={this.state.email.name}
                   onChange={this.handleChange}/>
            <input className={(this.state.email.email =="" 
                               || !/(\w+\.?\w+)@(\w+\.?\w+)\.((net)|(com)|(org)|(co\.uk)|(biz)|(edu)|(egg)|(io))/.test(this.state.email.email))&&
                                 this.state.message!=""
                                 ? "width-100p error-border" : "width-100p"}
                   name={"email"}
                   placeholder={"Your Email Address"}
                   value={this.state.email.address}
                   onChange={this.handleChange}/>
            <input className={this.state.email.subject =="" &&
                                 this.state.message!=""
                                 ? "width-100p error-border" : "width-100p"}
                   name={"subject"}
                   placeholder={"Subject"}
                   value={this.state.email.subject}
                   onChange={this.handleChange}/>
            <textarea className={this.state.email.message =="" &&
                                 this.state.message!=""
                                 ? "width-100p error-border" : "width-100p"}
                   name={"message"}
                   placeholder={"Your Message"}
                   value={this.state.email.message}
                   onChange={this.handleChange}/>
            <button className="btn btn-primary"
                    onClick={this.handleSubmit}>
                Submit
            </button>  */