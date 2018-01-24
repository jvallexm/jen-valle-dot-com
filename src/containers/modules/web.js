import React from 'react';

export class WebDev extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
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
          <div className="col-md-4">
             <Project name="Anonymous Message Board" bg="anon" grayOut={()=>window.open("https://jvalle-message-board.herokuapp.com/")}/>
          </div>
          <div className="col-md-4">
             <Project name="Pinterest Clone" bg="pint" grayOut={()=>this.props.grayOut("https://jvalle-pinterest-clone.herokuapp.com/","Pinterest Clone","https://github.com/jvallexm/fcc-pinterest-clone")}/>
          </div>  
          <div className="col-md-4">
             <Project name="Book Trading Club" bg="book" grayOut={()=>this.props.grayOut("https://jvalle-book-swap.herokuapp.com/","Book Trading Club","https://github.com/jvallexm/fcc-book-trading-club")}/>
          </div>  
        </div>
        <div className="row">
          <div className="col">
            <h3 className="black-shadow">Front End Development Projects</h3>
          </div>  
        </div>  
        <div className="row other-proj-row">
          <div className="col-md-4">
             <Project name="Marvel Event Generator" grayOut={()=>this.props.grayOut("https://wheel-of-bendis.herokuapp.com/","Marvel Event Generator","https://github.com/jvallexm/all-new-wheel-of-bendis")}/>
          </div>
          <div className="col-md-4">
             <Project name="Night Life Tracker" grayOut={()=>this.props.grayOut("https://jen-valle-night-life.herokuapp.com/","Night Life Tracker","https://github.com/jvallexm/fcc-nightlife-tracker")}/>
          </div>  
          <div className="col-md-4">
             <Project name="Scientific Calculator" grayOut={()=>this.props.grayOut("Calculator","Calculator","https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/projects/calculator.js")}/>
          </div>  
        </div>
       <div className="row">
          <div className="col-md-4">
             <Project name="Conway's Game of Life" grayOut={()=>this.props.grayOut("Game of Life","Game of Life","https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/projects/gameoflife.js")}/>
          </div>
          <div className="col-md-4">
             <Project name="Dungeon Plumber" grayOut={()=>this.props.grayOut("https://codepen.io/phoenix-farce/full/awwzEy","Dungeon Plumber","https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/projects/dungeonplumber.js")}/>
          </div>  
          <div className="col-md-4">
             <Project name="Simon" grayOut={()=>this.props.grayOut("Simon","Simon","https://github.com/jvallexm/jen-valle-dot-com/blob/master/src/containers/projects/simon.js")}/>
          </div>  
        </div>
      </div>
      
    )
  }
}

const Project = (props) =>{
  return(
    <div className={"project middle-text " + props.bg} onClick={props.grayOut}>
      {props.name}
    </div>  
  );
}
