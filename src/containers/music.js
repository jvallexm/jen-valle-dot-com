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