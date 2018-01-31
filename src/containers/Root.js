import React from 'react';

export default class App extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    /* JSX */
    return(
      <div id="whole-thing">
        
          {/* Floating to top Header*/}
       
        
          {/* Header */}
          <Header />
          {/* About */}
          <About />
          {/* Full Stack Header */}
          <FullStackHeader />
          {/* Full Stack Projects */}
          <Project  bg     = {"message"}
                    isLeft = {true}
                    title  = {"Anonymous Message Board"}
                    text   = {aboutMessageBoard}
                    site   = {"https://jvalle-message-board.herokuapp.com/"}
                    gh     = {"https://github.com/jvallexm/message-board"}
                    img    = {"assets/images/message.png"}/>
          <Project  isLeft = {false}
                    bg     = {"pins"}
                    title  = {"React-trest"}
                    text   = {aboutPinterestClone}
                    site   = {"https://jvalle-pinterest-clone.herokuapp.com/"}
                    gh     = {"https://github.com/jvallexm/fcc-pinterest-clone"}
                    img    = {"assets/images/pins.png"}/>
          <Project  isLeft = {true}
                    bg     = {"books"}
                    title  = {"Book Stop n' Swap"}
                    text   = {aboutBookSwap}
                    gh     = {"https://github.com/jvallexm/fcc-book-trading-club"}
                    site   = {"https://jvalle-book-swap.herokuapp.com/"}
                    img    = {"assets/images/books.png"}/>
          
          {/* Front End Header 
          <FrontEndHeader /> */}
          {/* Front End Projects 
          <FrontEndProjectPanel /> */}     
          {/* Social Media */}
          <SocialMedia />
          {/* Music */}
          <Music />
          {/* Contact */}
          <Contact />
        
      </div>
    );
    /* JSX */
  }
}

const Header = () => {
  return(
    <header className = "text-center container-fluid">
             <div id="head-content" className="text-center container-fluid">
              <div className = "row">
                
                  {/* My Face  */}
                  <div className = "col-sm-6">
                      <img id="my-face" src="assets/images/myface.jpg"/>
                  </div>
                  
                 {/* Title and Quick Links */}
                  <div id="title" className = "col-sm-6 middle-text">
                        <h1 id="my-name">Jennifer Valle</h1>
                        <h2 id="subtitle">Web Developer</h2>
                    
                        {/* Link Buttons */}
                        <div id="head-buttons">
                             <button className="btn btn-header" 
                                     onClick={()=>window.open(`https://www.linkedin.com/in/jennifer-valle/`)}
                                     title={"Connect on LinkedIn"}>
                                 <i className="fa fa-github"/>
                             </button>
                             <button className="btn btn-header" 
                                     onClick={()=>window.open(`https://github.com/jvallexm`)}
                                     title={"Fork me on GitHub"}>
                                 <i className="fa fa-linkedin"/>
                             </button>
                             <button className="btn btn-header">
                                 <i className="fa fa-envelope" onClick={()=>window.open("mailto:jvallexm@gmail.com")}/>
                             </button>
                        </div>
                        
                  </div>
              </div>
            </div>
        </header>
  )
}

const About = () =>{
    return (
      <section id="about" className="text-center container-fluid">
              <h2>About</h2>
        <p className="about-text">
        Jennifer Valle is a web developer living in Durham, North Carolina. She works as the Social Media Director for #GeekCraftExpo. In her free time, she's a musician, amateur board game designer, and a comic book enthusiast. 
        </p>
      </section>
    )
}


const aboutPinterestClone=`Back end created with Node.js and Express and a MongoDB database to post and User Data. Utilizes a React.js front and and Masonry.js to create a dynamic grid. Socket.io provides users with live updates of new posts, likes, and reblogs`;

const aboutBookSwap=`Uses a Node.js and Express back end with items stored in a MongoDB database. Users can sign in with Facebook in the React.js front end. Utilizes the Google Books API to search for books. Provides users with live trading updates using Socket.io`;

const FullStackHeader = () =>{
     /* JSX */
        
      return (
        <section id="full-stack" className="text-center container-fluid">
              <h1>Full Stack Projects</h1>
        </section>
      )
        /*JSX */
}

const ProjectImage = (props) =>{
    return(
        <div className="col-sm-6 proj-col">
             <img src={props.img} title={props.title} className="project"/>
        </div>
    )
}

const ProjectAbout = (props) =>{
    return(
           <div className="col-sm-6 proj-col">
                <div className="project project-text middle-text">
                  
                    {/* Project Title */}
                    <div className={props.isLeft ? "project-title-left" : "project-title-right"}>
                         <h3>{props.title}</h3>
                    </div>
                   
                    {/* Project Text */}
                    <p className={props.isLeft ? "text-left" : "text-right"}>{props.text}</p>
                  
                    {/* Project Links */}
                    <div className="project-links text-center">
                         <div className="row">
                              <div className="col-sm-6 pointer" onClick={()=>window.open(props.site)}>
                                   Visit Site <i className="fa fa-external-link"/>
                              </div>
                              <div className="col-sm-6 pointer" onClick={()=>window.open(props.gh)}>
                                   View on GitHub <i className="fa fa-github" />
                              </div>
                         </div>
                   </div>
              </div>                           
       </div>
    );
}

const Project = (props) =>{
  return(
     <section id={"project-" + props.bg} className="text-center container-fluid project-main">         
               <div className="gray"/>
               <div className="text-center container-fluid project-content">
                    {props.isLeft ?
                    <div className="row">
                        {/* Image on the Left */}
                        <ProjectImage img   = {props.img}
                                      alt   = {props.title}/>
                        <ProjectAbout isLeft = {props.isLeft}
                                      title = {props.title}
                                      text  = {props.text}
                                      site  = {props.site}
                                      gh    = {props.gh}/>       
                    </div>
                    :
                    <div className="row">
                      {/* Image on the Right*/}
                      <ProjectAbout isLeft = {props.isLeft}
                                      title = {props.title}
                                      text  = {props.text}
                                      site  = {props.site}
                                      gh    = {props.gh}/>  
                        <ProjectImage img   = {props.img}
                                      alt   = {props.title}/>     
                    </div>}
                 
               </div>
   </section> 
  )
}

const FrontEndProject = (props) =>{
  return(
      
       <div className="col-md-4">
            <div className="project">
                <div className="obi">
                    <h4>{props.title}</h4>

                    <div className="row">
                              <div className="col-sm-6 pointer" onClick={()=>window.open(props.site)}>
                                   Visit Site <i className="fa fa-external-link"/>
                              </div>
                              <div className="col-sm-6 pointer" onClick={()=>window.open(props.gh)}>
                                   View on GitHub <i className="fa fa-github" />
                              </div>
                     </div>
                </div>
            </div>
       </div>
    
  );
}

const FrontEndHeader = () =>{
     /* JSX */
        
      return (
        <section id="front-end-header" className="text-center container-fluid">
            <div className="front-gray" />
            <h1 id="front-pop">Front End Projects</h1>
        </section>
      )
        /*JSX */
}

const FrontEndProjectPanel = () =>{
  return(
            <section id="front-end" className="text-center container-fluid">
                <div className="gray" />
                <div className="text-center container-fluid" id="front-end-content">
                   <div className="row">
                       <FrontEndProject title={"Bandcram"}
                                        site={"https://jvallexm.github.io/bandcram"}
                                        gh={"https://github.com/jvallexm/bandcram"}/>
                       <FrontEndProject title={"Hot Poppers"}
                                        site={""}
                                        gh={""}/>
                       <FrontEndProject title={"Hot Poppers"}
                                        site={""}
                                        gh={""}/>
                   </div>
                </div> 
             </section>
  )
}

class SocialMedia extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          loadVideo: false
      };
  }
  render(){
      return(
              <section id="gce" className="text-center container-fluid">
                  <div id="gce-filter" className="filter">
                     <div id="gce-content" className="sec-content text-center container-fluid">
                       <h1 className="sec-title">Social Media</h1>
                       <div className="row">
                          <div className="col-md-6">
                             <div id="gce-text" className="text-right middle-text">
                                <h2>GeekCraft Expo</h2>
                                <p className="gce-p">GeekCraft Expo puts on pop-up handmade markets that exclusively showcase handmade geek goods crafted by local artisans across the country!</p> 
                                <p className="gce-p">As the Social Media Director of GeekCraft Expo, Jennifer is responsible for maintaining the Facebook, Twitter, and Instagram accounts. She also works to create engaging Social Media Ads, like this one!</p>
                               <div id="gce-buttons">
                                  
                                 <button className="btn btn-header"
                                         onClick={()=>window.open("http://www.facebook.com/geekcraftexpo")}
                                         title={"GeekCraft Expo on Facebook"}>
                                     <i className="fa fa-facebook"/>
                                 </button>
                                 <button className="btn btn-header"
                                         onClick={()=>window.open('https://www.instagram.com/geekcraftexpo/')}
                                         title={"GeekCraft Expo on Instagram"}>
                                     <i className="fa fa-instagram"/>
                                 </button>
                                 <button className="btn btn-header"
                                         onClick={()=>window.open('https://twitter.com/geekcraftexpo')}
                                         title={"GeekCraft Expo on Twitter"}>
                                     <i className="fa fa-twitter"/>
                                 </button>
                               </div>
                             </div>
                          </div>
                          <div className="col-md-6">
                             <div id="gce-video">
                             { this.state.loadVideo
                             ? <iframe src="assets/videos/gce.mp4" />
                             : <img src="assets/images/videoph.png" 
                                    className="squish"
                                    onClick={()=>this.setState({loadVideo: true})}/> }
                             </div>
                          </div>
                       </div>
                     </div>
                  </div>
                
              </section>
      )
  }
}

class Music extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          src: null
      };
  }
  render(){
      return(
              <section id="music" className="text-center container-fluid">
                  <div className="filter">
                     <div id="music-content" className="sec-content text-center container-fluid">
                      <h1 className="sec-title">Music</h1>
                       <div className="row">
                          <div className="col-md-6 min-300">
                             {   this.state.src === null
                               ? ""
                               : <iframe src={this.state.src}/> }
                          </div>
                          <div className="col-md-6">
                             <div id="music-text" className="text-left middle-text">
                                <div>
                                <h3>Gamma Gamma Ray</h3>
                                
                                    <button className="btn btn-header btn-music" 
                                            onClick={()=>this.setState({src: "https://www.youtube.com/embed/416N-wtfWcI"})}>
                                        Watch <i className="fa fa-youtube-play"/>
                                    </button>
                                
                                <h3>Solo</h3>
                                
                                    <button className="btn btn-header btn-music" 
                                            onClick={()=>this.setState({src: "https://bandcamp.com/EmbeddedPlayer/album=4210021228/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1049768388/transparent=true/"})}>
                                        Listen <i className="fa fa-play-circle-o"/>
                                    </button>
                                </div>
                             </div>
                          </div>
                          
                       </div>
                     </div>
                     <div id="photo-by">
                         Photo by Riley Dehority
                     </div>
                  </div>
                
              </section>
      )
  }
}

const Contact = () =>{
  return(
           <section id="contact" className="text-center container-fluid">
             <h2>Contact</h2>
             <p id="contact-text" className="about-text">
                Jennifer can be reached at jvallexm@gmail.com
             </p>
             <h4 onClick={()=>window.scroll(0,0)} className="pointer">Back to Top <i className="fa fa-arrow-up"/></h4>
          </section>
   )
}