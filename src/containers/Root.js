import React from 'react';

export default class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      gray: false,
      view: undefined,
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
    this.closeOut = this.closeOut.bind(this);
  }
  closeOut()
  {
    this.setState({gray: false, view: undefined});
  }
  render()
  {
    return(
      <div id="whole-thing">
        {this.state.gray?
        <div id="gray-out">
          <div className="site-wrapper text-center container-fluid">          
             <div id="x-box">
               <i className="fa fa-close"
                  onClick={this.closeOut}/>
             </div>    
            <SiteView view={this.state.view}/>
          </div>  
        </div>  
        :""}  
        <div id="head" className="section middle-text">
          <Header buttons={this.state.buttons}/> 
        </div>  
        <div className="about">
          <About />
        </div>  
        <div className="section web middle-text">
          <WebDev />
        </div>  
        <Break />
        <div className="section gce middle-text">
          <div className="gce-layer middle-text">
            <GeekCraftExpo />
          </div>  
        </div>  
        <Break />
        <div className="section ggr middle-text">
          <Music />
        </div>
        <div className="bottom-text">
               Photo by Riley Dehority
        </div>
        <Break />
        <div className="about">
          <Contact />
        </div>  
        <div className="text-center container-fluid"
             onClick={()=>window.scroll(0,0)}>
         Back to Top <i className="fa fa-arrow-up"/>
        </div>
        <Break />
      </div>
    );
  }
}

class SiteView extends React.Component{
  render()
  {
    return(
      <div>
      <Pintr />
      <iframe className="site-view"
                  src="https://jen-valle-night-life.herokuapp.com/"/>

      </div>   
    )
  }
}

const Break = () =>{
  return(
    <div className="break"/>
  );
}

const Project = (props) =>{
  return(
    <div className={"project middle-text " + props.bg}>
      {props.name}
    </div>  
  );
}

class WebDev extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      views: [
        {
         name: "Anonymous Message Board",
         link: "open",
         func: ()=>{window.open("https://jvalle-message-board.herokuapp.com/")}
        }
      ]
    };
  }
  render()
  {
    return(
      <div className="text-center container-fluid sec-squeeze">
        <h1 className="sec-head">Web Development</h1>
        <div className="row">
          <div className="col">
            <h3 className="black-shadow">Full Stack Projects</h3>
          </div>  
        </div>  
        <div className="row proj-row">
          <div className="col">
             <Project name="Anonymous Message Board" bg="anon"/>
          </div>
          <div className="col">
             <Project name="Pinterest Clone" bg="pint"/>
          </div>  
          <div className="col">
             <Project name="Book Trading Club" bg="book"/>
          </div>  
        </div>
        <div className="row">
          <div className="col">
            <h3 className="black-shadow">Other Projects</h3>
          </div>  
        </div>  
        <div className="row other-proj-row">
          <div className="col">
             <Project name="Marvel Event Generator"/>
          </div>
          <div className="col">
             <Project name="Nightlife Tracker"/>
          </div>  
          <div className="col">
             <Project name="Scientific Calculator"/>
          </div>  
        </div>
       <div className="row">
          <div className="col">
             <Project name="Conway's Game of Life"/>
          </div>
          <div className="col">
             <Project name="Dungeon Plumber"/>
          </div>  
          <div className="col">
             <Project name="Simon"/>
          </div>  
        </div>
      </div>
      
    )
  }
}

const About = ()=>{
  return(
    <div id={"about"} className="text-center container-fluid sec-squeeze">
      <div>
        <h3>About</h3>
        Jennifer Valle is a web developer living in Durham, North Carolina. She works as the Social Media Director for #GeekCraftExpo. In her free time, she's a musician, amateur board game designer, and a comic book enthusiast. 
      </div>
    </div>  
  );
}

const Contact = ()=>{
  return(
    <div id={"contact"} className="text-center container-fluid sec-squeeze">
      <div>
        <h3>Contact</h3>
        Jennifer Valle can be reached at jvallexm (at) gmail (dot) com
      </div>
    </div>  
  );
}

const GeekCraftExpo = () =>{
  return(
    <div className="text-center container-fluid sec-squeeze">
      <h1 className="black-shadow sec-head">GeekCraft Expo</h1>
      <div className="row gce-row">
          <div className="col black-shadow middle-text">
                                        <h2>
                                          Social Media Director
                                        </h2>
                                        <h4>
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
         <div className="col black-shadow middle-text">
                                        <h2>
                                          RDU Event Coordinator
                                        </h2> 
                                        <h4>
                                         GeekCraft Expo RDU is a twice yearly craft market that exclusively showcases handmade geek goods made by local artists.</h4>
                                         <h4>
                                          Exhibitor space for our holiday show is SOLD OUT but you can fill out a waitlist application on our website!
                                        </h4>  
                                        <div>
                                            <button className="btn btn-head"
                                                    onClick={()=>window.open("http://www.geekcraftexpo.com/exhibitor-app-gce-rdu-2017")}>
                                                    <i className="fa fa-external-link"/>
                                            </button>
                                            <button className="btn btn-head"
                                                    onClick={()=>window.open('https://www.facebook.com/events/191565734706576/')}>
                                                    <i className="fa fa-facebook"/>
                                            </button>
                                        </div>
                                      </div>
         </div> 
      </div>  
      
     
  );
}


const Header = (props) =>{
  return(
    <div className="text-center container-fluid middle-text sec-squeeze">
      <div className="row">
          <div className="col middle-text col-head">
              <img 
                title={"Art by Christine Viverka"}
                className="my-face"
                src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/14332959_10200785530306119_8045203739980004545_n.jpg?oh=cae33aa3a527ec59d4bbe765efc5588e&oe=59F9A5B6" />
          </div> 
          <div className="col middle-text col-head">
                <h1>Jennifer Valle</h1>
                <h3>Web Developer</h3>
                <h3>Social Media Director</h3>
                <h3>Musician</h3>
                <div>
                   {props.buttons.map((d,i)=>
                     <button key={d.name}
                             className="btn btn-head"
                             onClick={()=>window.open(d.link)}>
                        <i className={"fa fa-" + d.name} />                 
                     </button>                        
                   )}
                </div>
          </div>

      </div> 
    </div>  
  );
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
      <div className="text-center container-fluid">
        <div>
          <h1 className="black-shadow">Music</h1>
        </div>
        <div className="row mus-row">
          {this.state.ggr ? 
          <div className="col middle-text">
            <iframe className="mus-iframe" height="400" src="https://www.youtube.com/embed/416N-wtfWcI" frameborder="0" allowfullscreen/>  
          </div>    
          :  
          <div className="col mus-col mus-iframe middle-text">
            <h2 className="black-shadow">Gamma Gamma Ray</h2>
            <div className="btn-mus">
            <button className="btn btn-head"
                    onClick={()=>this.setState({ggr: true})}>Watch <i className="fa fa-youtube-play"/></button>
            </div>  
          </div>}  
          {this.state.aed            
           ? <div className="col middle-text">
            <iframe className="mus-iframe" height="400" src="https://bandcamp.com/EmbeddedPlayer/album=4210021228/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1049768388/transparent=true/" seamless><a href="http://avocadoeatindogs.bandcamp.com/album/second-chance-ii">Second Chance II by Avocado Eatin&#39; Dogs</a></iframe>
            </div>  
           : <div className="col mus-col mus-iframe middle-text">

                <h2 className="black-shadow">Solo</h2>
                <div className="btn-mus">
                <button className="btn btn-head"
                        onClick={()=>this.setState({aed:true})}>Listen <i className="fa fa-play-circle"/></button>
                </div>  
          </div>}  
        </div>  
      </div>  
    );
  }
}
