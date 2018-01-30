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
          <Project  bg = {"message"}
                    isLeft = {true}
                    title = {"Anonymous Message Board"}
                    text  = {aboutMessageBoard}
                    site  = {"https://jvalle-message-board.herokuapp.com/"}
                    gh    = {"https://github.com/jvallexm/message-board"}
                    img   = {"https://78.media.tumblr.com/a998c2dae535dc45c8c2d51e6ff8fff6/tumblr_p3691wrOPj1wz4oalo1_500.png"}/>
          <Project  isLeft = {false}
                    bg = {"pins"}
                    title = {"React-trest"}
                    text  = {aboutPinterestClone}
                    site  = {"https://jvalle-message-board.herokuapp.com/"}
                    gh    = {"https://github.com/jvallexm/message-board"}
                    img   = {"https://78.media.tumblr.com/a998c2dae535dc45c8c2d51e6ff8fff6/tumblr_p3691wrOPj1wz4oalo1_500.png"}/>
          <Project  isLeft = {true}
                    bg = {"books"}
                    title = {"Book Stop n' Swap"}
                    text  = {aboutBookSwap}
                    site  = {"https://jvalle-message-board.herokuapp.com/"}
                    gh    = {"https://github.com/jvallexm/message-board"}
                    img   = {"https://78.media.tumblr.com/a998c2dae535dc45c8c2d51e6ff8fff6/tumblr_p3691wrOPj1wz4oalo1_500.png"}/>
          
          {/* Front End Header */}
          <FrontEndHeader />
          {/* Front End Projects */}
          <FrontEndProjectPanel />         
          {/* Social Media */}
          <SocialMedia />
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
                             <button className="btn btn-header" onClick={()=>window.open(`https://www.linkedin.com/in/jennifer-valle/`)}>
                                 <i className="fa fa-github"/>
                             </button>
                             <button className="btn btn-header" onClick={()=>window.open(`https://github.com/jvallexm`)}>
                                 <i className="fa fa-linkedin"/>
                             </button>
                             <button className="btn btn-header">
                                 <i className="fa fa-envelope"/>
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

const aboutMessageBoard='Built with a Node.js and Express.js back end, MongoDB, and a React.js front end, this Message board allows users to post and comment via the front end UI or by making custom API calls. Uses Socket.io to provide live updating.';

const aboutPinterestClone=`Back end created with Node.js and Express and a MongoDB database to post and User Data. Utilizes a React.js front and adnd Masonry.js to create a dynamic grid. Socket.io provides users with live updates of new posts, likes, and reblogs`;

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
                                      gh    = {props.site}/>       
                    </div>
                    :
                    <div className="row">
                      {/* Image on the Right*/}
                      <ProjectAbout isLeft = {props.isLeft}
                                      title = {props.title}
                                      text  = {props.text}
                                      site  = {props.site}
                                      gh    = {props.site}/>  
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
                    <h4>Hot Poppers</h4>

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
        <section id="full-stack" className="text-center container-fluid">
              <h1>Front End Projects</h1>
        </section>
      )
        /*JSX */
}

const FrontEndProjectPanel = () =>{
  return(
            <section id="front-end" className="text-center container-fluid">
                <div className="text-center container-fluid" id="front-end-content">
                   <div className="row">
                       <FrontEndProject />
                       <FrontEndProject />
                       <FrontEndProject />
                   </div>
                </div> 
             </section>
  )
}

const SocialMedia = () =>{
  return(
              <section id="gce" className="text-center container-fluid">
              <div id="gce-filter">
                 <div id="gce-content" className="text-center container-fluid">
                   <h1 id="gce-title">Social Media</h1>
                   <div className="row">
                      <div className="col-md-6">
                         <div id="gce-text" className="text-right middle-text">
                            <h2>GeekCraft Expo</h2>
                            <p className="gce-p">GeekCraft Expo puts on pop-up handmade markets that exclusively showcase handmade geek goods crafted by local artisans across the country!</p> 
                            <p className="gce-p">As the Social Meida Director of GeekCraft Expo, Jennifer is responsible for maintaining the Facebook, Twitter, and Instagram accounts. She also works to create engaging Social Media Ads, like this one!</p>
                           <div id="gce-buttons">
                              
                             <button className="btn btn-header"
                                     onClick={()=>window.open("http://www.facebook.com/geekcraftexpo")}>
                                 <i className="fa fa-facebook"/>
                             </button>
                             <button className="btn btn-header"
                                     onClick={()=>window.open('https://www.instagram.com/geekcraftexpo/')}>
                                 <i className="fa fa-instagram"/>
                             </button>
                             <button className="btn btn-header"
                                     onClick={()=>window.open('https://twitter.com/geekcraftexpo')}>
                                 <i className="fa fa-twitter"/>
                             </button>
                           </div>
                         </div>
                      </div>
                      <div className="col-md-6">
                         <iframe src="assets/videos/gce.mp4" frameborder="0"/>
                      </div>
                   </div>
                 </div>
              </div>
            
          </section>
  )
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