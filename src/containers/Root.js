import React from 'react'

export default class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      buttons: [
        {
          name: "github",
          link: "https://github.com/jvallexm"
        },
        {
          name: "codepen",
          link: "https://codepen.io/phoenix-farce/"
        }
      ]
    };
  }
  render()
  {
    return(
      <div id="app">
     
             <Header buttons={this.state.buttons} />
             <About />
             <div id="the-middle" className="text-center container-fluid">
                  <Web />
                  <GeekCraftExpo />
                  <Music />
                  <Comix />
             </div>  
             <Contact />

      </div>  
    );
  }
}

class Web extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
       full: true,
       defaultView: true,
       viewUrl: "",
       viewTitle: "",
       githubUrl: ""
    };
    this.webDevView = this.webDevView.bind(this);
  }
  webDevView(title,url,gh)
  {
     if(url!= "")
      this.setState({defaultView: false, viewUrl: url, viewTitle: title,githubUrl:gh});       
     else
       this.setState({defaultView: true, frontEndView:false, viewUrl: "", viewTitle: "",githubUrl:""});
  }
  render()
  {
    return(<div>
          {this.state.defaultView
          ? <WebDev show={this.webDevView}
                    more={()=>this.webDevView("","more","")}/>
          : <SiteView url={this.state.viewUrl}
                      gh={this.state.githubUrl}
                      title={this.state.viewTitle}
                      back={()=>this.webDevView("","","")}/> }
        </div>
    );  
  }
}

class SiteView extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render()
  {
    return(
      <div className="row">
      <div className="col-md-12">
              <div className="web middle-text max-h">                     
                <div className="pop-out row">
                <div className="col-md-4">    
                  <button className="btn btn-nav"
                          onClick={this.props.back}>
                      <i className="fa fa-arrow-left"/> Back
                  </button>
                </div>
                <div className="col-md-4">  
                  <button className="btn btn-nav">
                    About This Project
                  </button>  
                </div>
                <div className="col-md-4">  
                  <button className="btn btn-nav"
                          onClick={()=>window.open(this.props.gh)}>
                    Veiw on Github <i className="fa fa-github" />
                  </button> 
                </div>
            </div>                 
        </div>
      
        <div className="section">
          {!this.state.loaded ? 
          <h1>Loading... <i className="fa fa-spinner fa-spin" /></h1>
          :""}
          <iframe src={this.props.url}
                  className="web-view"
                  onLoad={()=>this.setState({loaded: true})}/>
        </div>
      </div>
     </div>   
    )
  }
}

class Music extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      ggr: false,
      aed: false
    }
  }
  render()
  {
    return(
      <div className="row">
       <div className="col-md-12">
               
               <div className="bottom-text">
                 Photo{this.state.ggr?" and Video ": " "}by Riley Dehority
               </div>
               <div className="picture ggr">
                       <div className="sec-head">
                         <h1 className="pop-out">Music</h1>
                       </div>
                       <div className="middle-text">
                             <div className="row">
                                  <div className="col-md-6">
                                    {!this.state.ggr
                                     ? <div className="transparent-section grid-left-2 middle-text">
                                        <h2 className="pop-out">
                                           Gamma Gamma Ray
                                        </h2>  
                                        <div>
                                            <button className="btn btn-music"
                                                    onClick={()=>this.setState({ggr:true})} >
                                                Watch <i className="fa fa-youtube-play" />
                                            </button>
                                        </div>  
                                     </div>
                                     : <iframe className="grid-left-2" height="310" src="https://www.youtube.com/embed/416N-wtfWcI" frameborder="0" allowfullscreen/>
                                        }
                                  </div>
                                  <div className="col-md-6">
                                    {this.state.aed
                                     ? <iframe height="319" src="https://bandcamp.com/EmbeddedPlayer/album=4210021228/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1049768388/transparent=true/" seamless><a href="http://avocadoeatindogs.bandcamp.com/album/second-chance-ii">Second Chance II by Avocado Eatin&#39; Dogs</a></iframe>
                                     : <div className="transparent-section grid-right-2 middle-text">
                                        <h2 className="pop-out">
                                           Solo
                                        </h2> 
                                        <div>
                                        <button className="btn btn-music"
                                                onClick={()=>this.setState({aed: true})}>
                                                Listen <i className="fa fa-play-circle" />
                                        </button>
                                        </div>  
                                      </div>}
                                  </div>
                             </div>
                       </div>
                  </div>
                 </div>  
              </div> 
    );
  }
}

const Comix = () =>
{
  return(
               <div className="row">
       <div className="col-md-12">
               
               <div className="picture comix">
                       <div className="sec-head">
                         <h1 className="pop-out">Comics</h1>
                       </div>
                       <div className="middle-text">
                             <div className="row">
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-left-2 middle-text">
                                        <h2 className="pop-out">
                                           Gamma Gamma Ray
                                        </h2>  
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-right-2 middle-text">
                                        <h2 className="pop-out">
                                           Solo
                                        </h2>  
                                      </div>
                                  </div>
                             </div>
                       </div>
                  </div>
                 </div>  
              </div> 
  );  
}

const GeekCraftExpo = () =>{
  return(
    <div className="row">
       <div className="col-md-12">
               
               <div className="picture gce">
                       <div className="sec-head">
                         <h1 className="pop-out">GeekCraft Expo</h1>
                       </div>
                       <div className="middle-text">
                             <div className="row">
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-left-2 middle-text">
                                        <h2 className="pop-out">
                                          Social Media Director
                                        </h2>
                                        <h4 className="inside-text">
                                          As the #GeekCraftExpo Social Media Director I maintain our Facebook, Instagram, and Twitter Accounts. Check it out!
                                        </h4>
                                        <div>
                                            <button className="btn btn-head"
                                                    onClick={()=>window.open('http://www.facebook.com/geekcraftexpo')}>
                                                   <i className="fa fa-facebook"/>
                                            </button>
                                            <button className="btn btn-head"
                                                    onClick={()=>window.open('http://www.instagram.com/geekcraftexpo')}>
                                                   <i className="fa fa-instagram"/>
                                            </button>
                                            <button className="btn btn-head"
                                                    onClick={()=>window.open('http://www.twitter.com/geekcraftexpo')}>
                                                   <i className="fa fa-twitter"/>
                                            </button>
                                        </div>  
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-right-2 middle-text">
                                        <h2 className="pop-out">
                                          RDU Event Coordinator
                                        </h2>  
                                      </div>
                                  </div>
                             </div>
                       </div>
                  </div>
                 </div>  
              </div> 
  );
}


class Contact extends React.Component
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
            <h3>{this.state.message}</h3>
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
            </button>  
        </div>   
    </div>  
    );
  }
}

const Project = (props) =>{
  return(
    <div className={props.projClass}>
        <div className="row">    
           <div className="col-sm-6 middle-text left">
               {props.name}
           </div>
           <div className="col-sm-2 left right">
                <button title={"View on This Page"}
                         onClick={props.show}
                         className={"btn " + props.btnClass}>
                          <i className="fa fa-eye" />
               </button>
           </div>
           <div className="col-sm-2 left right">
                <button title={"Open in New Window"}
                        className={"btn " + props.btnClass}
                        onClick={()=>window.open(props.open)}>
                              <i className="fa fa-external-link"/>
                        </button>
           </div>
           <div className="col-sm-2 right">
                 <button className={"btn " + props.btnClass} 
                         onClick={()=>window.open(props.gh)}                 
                         title={"View on Github"}>
                              <i className="fa fa-github" />
                 </button>
           </div>   
       </div>  
   </div>
  );
}

class WebDev extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
    <div className="row">
       <div className="col-md-12">
               
               <div className="picture web">
                       <div className="sec-head">
                         <h1 className="pop-out">Web Development Projects</h1>
                       </div>
                       <div className="middle-text">
                             <div className="row">
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-left-2 middle-text web-sec">
                                        <h2 className="pop-out">
                                          Full Stack Projects
                                        </h2>
                                        <Project name={"Pinterest Clone"}
                                                 projClass={"pintr"}
                                                 btnClass={"reverse-pintr"} 
                                                 gh={"https://github.com/jvallexm/fcc-pinterest-clone"}
                                                 open={"https://jvalle-pinterest-clone.herokuapp.com/"}
                                                 show={()=>this.props.show("Pinterest Clone",
                                                                           "https://jvalle-pinterest-clone.herokuapp.com/",
                                                                           "https://github.com/jvallexm/fcc-pinterest-clone")}/>
                                        <Project name={"Book Trading Club"}
                                                 projClass={"book"}
                                                 btnClass={"reverse-book"} 
                                                 gh={"https://github.com/jvallexm/fcc-book-trading-club"}
                                                 open={"https://jvalle-book-swap.herokuapp.com/"}
                                                 show={()=>this.props.show("Book Trading Club",
                                                                           "https://jvalle-book-swap.herokuapp.com/",
                                                                           "https://github.com/jvallexm/fcc-book-trading-club")}/>
                                       <Project name={"MARVEL Event Generator"}
                                                 projClass={"marvl"}
                                                 btnClass={"reverse-marvl"} 
                                                 gh={"https://github.com/jvallexm/all-new-wheel-of-bendis"}
                                                 open={"https://wheel-of-bendis.herokuapp.com/"}
                                                 show={()=>this.props.show("Marvel Event Generator",
                                                                           "https://wheel-of-bendis.herokuapp.com/",
                                                                           "https://github.com/jvallexm/all-new-wheel-of-bendis")}/>
                                      </div> 
                                  </div>
                                  <div className="col-md-6">
                                      <div className="transparent-section grid-right-2 middle-text web-sec">
                                        <h2 className="pop-out">
                                          Front End & Data Visualiztion
                                        </h2>
                                        <div className="row">
                                            <div className="col-sm-6 left">
                                                <div className="front"
                                                     onClick={()=>this.props.show("Voting App",
                                                                           "https://blooming-mesa-17406.herokuapp.com/",
                                                                           "https://github.com/jvallexm/fcc-voting-app")}>
                                                      Voting App
                                                </div>
                                            </div>
                                            <div className="col-sm-6 right">
                                                <div className="front"
                                                     onClick={()=>this.props.show("Night Life Tracker",
                                                                           "https://jen-valle-night-life.herokuapp.com/",
                                                                           "https://github.com/jvallexm/fcc-nightlife-tracker")}>
                                                      Night Life Tracker
                                                </div>
                                            </div>  
                                        </div>
                                       <div className="row">
                                            <div className="col-sm-6 left">
                                                <div className="front">
                                                      Dungeon Plumber
                                                </div>
                                            </div>
                                            <div className="col-sm-6 right">
                                                <div className="front">
                                                      Game of Life
                                                </div>
                                            </div>  
                                        </div>  
                                        <div className="row">
                                            <div className="col-sm-6 left">
                                                <div className="front">
                                                      Calculator
                                                </div>
                                            </div>
                                            <div className="col-sm-6 right">
                                                <div className="front">
                                                      Something Else
                                                </div>
                                            </div>  
                                        </div>  
                                      </div>
                                  </div>
                             </div>
                       </div>
                  </div>
                 </div>  
              
       </div>  
    );
  }
}

const About = ()=>{
  return(
    <div id={"about"} className="text-center container-fluid">
      <div className="section">
        <h3>Aboot</h3>
        Jennifer Valle is a web developer living in Durham, North Carolina. She works as the Social Media Director for #GeekCraftExpo. In her free time, she's a musician, amateur board game designer, and a comic book enthusiast. 
      </div>
    </div>  
  );
}

const Header = (props) =>{
  return(
    <div id='head' className="text-center container-fluid">
      <div className="row">
                  <div className="col-md-6 col-left">
              <img 
                title={"Art by Christine Viverka"}
                className="my-face"
                src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/14332959_10200785530306119_8045203739980004545_n.jpg?oh=cae33aa3a527ec59d4bbe765efc5588e&oe=59F9A5B6" />
          </div> 
          <div className="col-md-6 middle-text col-right">
             <div>
                <h1>Jennifer Valle</h1>
                <h3>Web Developer</h3>
                <h3>Social Media Director</h3>
                <h3>Musician</h3>
               <div className="buttons">
                 {props.buttons.map((d,i)=>
                   <button key={d.name}
                           className="btn btn-head"
                           onClick={()=>window.open(d.link)}>
                      <i className={"see-thru fa fa-" + d.name} />                 
                   </button>                        
                 )}
               </div>
             </div>  
          </div>

      </div> 
    </div>  
  );
}