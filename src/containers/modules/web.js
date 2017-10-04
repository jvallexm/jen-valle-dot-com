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
          <div className="col">
             <Project name="Anonymous Message Board" bg="anon" grayOut={()=>window.open("https://jvalle-message-board.herokuapp.com/")}/>
          </div>
          <div className="col">
             <Project name="Pinterest Clone" bg="pint" grayOut={()=>this.props.grayOut("https://jvalle-pinterest-clone.herokuapp.com/","Pinterest Clone")}/>
          </div>  
          <div className="col">
             <Project name="Book Trading Club" bg="book" grayOut={()=>this.props.grayOut("https://jvalle-book-swap.herokuapp.com/","Book Trading Club")}/>
          </div>  
        </div>
        <div className="row">
          <div className="col">
            <h3 className="black-shadow">Other Projects</h3>
          </div>  
        </div>  
        <div className="row other-proj-row">
          <div className="col">
             <Project name="Marvel Event Generator" grayOut={()=>this.props.grayOut("https://wheel-of-bendis.herokuapp.com/","Marvel Event Generator")}/>
          </div>
          <div className="col">
             <Project name="Night Life Tracker" grayOut={()=>this.props.grayOut("https://jen-valle-night-life.herokuapp.com/","Night Life Tracker")}/>
          </div>  
          <div className="col">
             <Project name="Scientific Calculator" grayOut={()=>this.props.grayOut("Calculator","Calculator")}/>
          </div>  
        </div>
       <div className="row">
          <div className="col">
             <Project name="Conway's Game of Life" grayOut={()=>this.props.grayOut("Game of Life","Game of Life")}/>
          </div>
          <div className="col">
             <Project name="Dungeon Plumber" grayOut={()=>this.props.grayOut("https://codepen.io/phoenix-farce/full/awwzEy","Dungeon Plumber")}/>
          </div>  
          <div className="col">
             <Project name="Simon" grayOut={()=>this.props.grayOut("Simon","Simon")}/>
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
