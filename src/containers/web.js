import React from 'react';
import SiteView from './siteview.js';
import WebDev from './webdev.js';

export default class Web extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
       full: true,
       defaultView: true,
       viewUrl: "",
       viewTitle: "",
       githubUrl: ""
    };
    this.webDevView = this.webDevView.bind(this);
  }
  webDevView(title,url,gh)
  {
     if(url!= "")
      this.setState({defaultView: false, viewUrl: url, viewTitle: title,githubUrl:gh});       
     else
       this.setState({defaultView: true, frontEndView:false, viewUrl: "", viewTitle: "",githubUrl:""});
  }
  render()
  {
    return(<div>
          {this.state.defaultView
          ? <WebDev show={this.webDevView}
                    more={()=>this.webDevView("","more","")}/>
          : <SiteView url={this.state.viewUrl}
                      gh={this.state.githubUrl}
                      title={this.state.viewTitle}
                      back={()=>this.webDevView("","","")}/> }
        </div>
    );  
  }
}