import React from 'react';

export default class WebDev extends React.Component
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
                                       <Project name={"Marvel Event Generator"}
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
                                          Web Development Projects
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
                                                <div className="front"
                                                     onClick={()=>this.props.show("Dungeon Plumber",
                                                                           "https://jen-valle-night-life.herokuapp.com/",
                                                                           "https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/dungeonplumber.js")}>
                                                      Dungeon Plumber
                                                </div>
                                            </div>
                                            <div className="col-sm-6 right">
                                                <div className="front"
                                                     onClick={()=>this.props.show("Game of Life",
                                                                           "https://jen-valle-night-life.herokuapp.com/",
                                                                           "https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/gameoflife.js")}>
                                                      Game of Life
                                                </div>
                                            </div>  
                                        </div>  
                                        <div className="row">
                                            <div className="col-sm-6 left">
                                                <div className="front"
                                                     onClick={()=>this.props.show("Calculator",
                                                                           "https://jen-valle-night-life.herokuapp.com/",
                                                                           "https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/calculator.js")}>
                                                      Calculator
                                                </div>
                                            </div>
                                            <div className="col-sm-6 right">
                                                <div className="front">
                                                      ?????
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