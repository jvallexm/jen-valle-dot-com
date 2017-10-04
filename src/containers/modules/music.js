import React from 'react';

export default class Music extends React.Component
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