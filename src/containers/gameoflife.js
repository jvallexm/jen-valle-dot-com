import React from 'react';


const BoardLength = 40;
const BoardWidth = 40;

const Initialize = (num) =>
{
    
    var arr = [];
    for(var lat=0;lat<BoardLength;lat++)
    {
      var row=[];
      for(var lon=0;lon<BoardWidth;lon++)
      {
          row.push({live: false});
      }
      arr.push(row);
    }
    return arr;
};

const Initialize2 = (num) =>
{
    
    var arr = [];
    for(var lat=0;lat<BoardLength;lat++)
    {
      var row=[];
      for(var lon=0;lon<BoardWidth;lon++)
      {
        var flip=Math.random()>.49;
        if(flip)
          row.push({live: true});
        if(!flip)
          row.push({live: false});
      }
      arr.push(row);
    }
    return arr;
};

export default class Game extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      generation: 0,
      board: Initialize2(),
      running: true,
      interval: 200
    };
    this.toggle = this.toggle.bind(this)
    this.reset = this.reset.bind(this);
    this.playTheGame = this.playTheGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gameOn = this.gameOn.bind(this);
    this.timer = setInterval(this.gameOn,this.state.interval);
    this.hitIt = this.hitIt.bind(this);
    this.randomize = this.randomize.bind(this);
    this.alrightStop = this.alrightStop.bind(this);
  }
  playTheGame()
  {
    var temp = Initialize();
    for(var rw=0;rw<BoardLength;rw++)
    {
      for(var cl=0;cl<BoardWidth;cl++)
      {
          if(this.state.board[rw][cl].live)
            temp[rw][cl].live = true;
          else
            temp[rw][cl].live = false;
          var friends=0;
          if(rw-1>=0 && cl-1>=0)
          {
            if(this.state.board[rw-1][cl-1].live)
              friends++;
          }
          if(rw-1>=0)
          { 
            if(this.state.board[rw-1][cl].live)
              friends++;
          }
          if(rw-1>=0 && cl+1<BoardWidth)
          { 
            if(this.state.board[rw-1][cl+1].live)
              friends++;
          }
          if(rw+1<BoardLength && cl-1>=0)
          { 
            if(this.state.board[rw+1][cl-1].live)
              friends++;
          }
          if(rw+1<BoardLength)
          { 
            if(this.state.board[rw+1][cl].live)
              friends++;
          }
          if(rw+1<30 && cl+1<BoardWidth)
          { 
            if(this.state.board[rw+1][cl+1].live)
              friends++;
          }
          if(cl-1>=0)
          {
            if(this.state.board[rw][cl-1].live)
             friends++;
          }
          if(cl+1<BoardWidth)
          {
            if(this.state.board[rw][cl+1].live)
             friends++;
          }
          if(friends > 3 || friends < 2 && temp[rw][cl].live)
          { 
            temp[rw][cl].live = false;
          }
          else if(friends == 3)
          {
            temp[rw][cl].live = true;
          }       
       }
    }
    this.boardUpdate(temp);
    this.setState({generation: this.state.generation+1});
  }
  handleChange(num)
  {
    let newInterval = this.state.interval + num;
    if(newInterval < 100)
        newInterval = 100;
    if(newInterval > 800)
        newInterval = 800;
    if(this.state.running)
    {  
        clearInterval(this.timer);
        this.timer = setInterval(this.gameOn, newInterval);
    }
    this.setState({interval: newInterval})
  }
  gameOn()
  {    
     if(this.state.running==false)
     {
       clearInterval(this.timer);
     }
     else
        this.playTheGame();
  }
  hitIt()
  {
    this.timer = setInterval(this.gameOn,this.state.interval);
    this.setState({running: true});
  }
  alrightStop()
  {
    clearInterval(this.timer);
    this.setState({running: false});
  }
  toggle(val)
  {      
    var temp=this.state.board;
    temp[val[0]][val[1]].live = !temp[val[0]][val[1]].live;
    this.boardUpdate(temp);      
  }
  boardUpdate(brd)
  {
    this.setState({board: brd});
  }
  reset()
  {
     clearInterval(this.timer);
     this.setState({board: Initialize(), generation: 0, running: false});
  }
  randomize()
  {
    clearInterval(this.timer);
    this.setState({board: Initialize2(), generation: 0, running: true});
    this.hitIt();
  }
  render()
  {
    return(
        <div className="game-middle text-center">
        <div>
        <div className="game-space" />
            <h1 className="game-h1 text-shadow-white game-from-top">John Conway's Game Of Life!</h1>
            <div>
              <h4 className="game-h1">Generations: {this.state.generation}</h4> 
            </div>
        <div>
          <div>
              <button className="btn btn-game"
                      onClick={this.reset}>
                    Clear
              </button>
              <button className="btn btn-game"
                      onClick={()=>this.handleChange(75)}
                      disabled={this.state.interval >= 800 ? "disabled" : ""}>                      
                    <i className="fa fa-fast-backward"/>
              </button>
              <button className="btn btn-game"
                      onClick={()=>this.handleChange(25)}
                      disabled={this.state.interval >= 800 ? "disabled" : ""}>                      
                    <i className="fa fa-backward"/>
              </button>
              {this.state.running ?
              <button className="btn btn-game"
                      onClick={this.alrightStop}>
                    <i className="fa fa-stop"/>
              </button>
              : <button className="btn btn-game"
                        onClick={this.hitIt}>
                    <i className="fa fa-play"/>
              </button>}
              <button className="btn btn-game"
                      disabled={this.state.interval<=100 ? "disabled" : ""}
                      onClick={()=>this.handleChange(-25)}>
                    <i className="fa fa-forward"/>
              </button>
              <button className="btn btn-game"
                      disabled={this.state.interval<=100 ? "disabled" : ""}
                      onClick={()=>this.handleChange(-75)}>
                    <i className="fa fa-fast-forward"/>
              </button>
              <button className="btn btn-game"
                      onClick={this.randomize}>
                    Random
              </button>
          </div>  
          <center>
         {
          this.state.board.map((theRow,indexR) =>
             <tr className="gradient">
               {
                  theRow.map( (eachCell,indexC) =>  
                  <td className={'game-box ' + (this.state.board[indexR][indexC].live ? 'game-box-on' : 'game-box-off')} 
                    onClick = {()=>this.toggle([indexR,indexC])}></td>
               )}                  
             </tr>
          )
           
                               }</center></div>
      </div>
      <div className="game-space" />
      </div>
          );
  }
}
