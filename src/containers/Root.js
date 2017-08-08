import React from 'react'
import Web from './web.js';
import Music from './music.js';
import Contact from './contact.js';

export default class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      buttons: [
        {
          name: "github",
          link: "https://github.com/jvallexm"
        },
        {
          name: "codepen",
          link: "https://codepen.io/phoenix-farce/"
        },
        {
          name: "free-code-camp",
          link: "https://www.freecodecamp.org/jvallexm"
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
             </div>  
             <Contact myEmail="jvallexm (at) gmail (dot) com" />

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