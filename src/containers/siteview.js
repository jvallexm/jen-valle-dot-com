import React from 'react';
import Game from './gameoflife.js';
import Dungeon from './dungeonplumber.js';

export default class SiteView extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount()
  {
    if(this.props.title == "Game of Life" || this.props.title == "Dungeon Plumber")
      this.setState({loaded: true});
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
          : ""}
          { this.props.title != "Game of Life" && this.props.title != "Dungeon Plumber"
            ? <iframe src={this.props.url}
                  className="web-view"
                  onLoad={()=>this.setState({loaded: true})}/>
            : this.props.title == "Game of Life"
            ? <div className="web-view">
                 <div className="game-that">
                  <Game />
                 </div>  
              </div>      
            : <div className="web-view">
                 <div className="dun-body">
                  <Dungeon />
                 </div>  
              </div>     
          }        
        </div>
      </div>
     </div>   
    );
  }
}