import React from 'react';

export default class SiteView extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loaded: false
    };
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
          :""}
          <iframe src={this.props.url}
                  className="web-view"
                  onLoad={()=>this.setState({loaded: true})}/>
        </div>
      </div>
     </div>   
    )
  }
}