import React from 'react';

export default class Simon extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      strict: false,
      playerSeq: [],
      compSeq: [],
      colors:{
        blue: false,
        green: false,
        red: false,
        yellow: false
      },
      playerColor: undefined,
      playerTurn: false,
      gameOn: false,
      whoops: false,
      winner: false
    };
    this.addColor = this.addColor.bind(this);
    this.colorOn = this.colorOn.bind(this);
    this.colorOff = this.colorOff.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
    this.hitButton = this.hitButton.bind(this);
    this.playerTurn = this.playerTurn.bind(this);
    this.playerOff = this.playerOff.bind(this);
    this.playSound = this.playSound.bind(this);
    this.reset = this.reset.bind(this);
    this.startGame = this.startGame.bind(this);
    this.whoops = this.whoops.bind(this);
    this.youWin = this.youWin.bind(this);
  }
  componentWillMount()
  {
    document.addEventListener('mouseup', this.playerTurn);
  }
  colorOn(color)
  {
    let colors = this.state.colors;
    colors[color] = true;
    this.setState({colors: colors});
  }
  colorOff()
  {
    let colorsOff = {
      green: false,
      blue: false,
      red: false,
      yellow: false
    };
    this.setState({colors: colorsOff});
  }
  addColor()
  {
    let colors = ["green","red","yellow","blue"];
    let compSeq = this.state.compSeq;
    compSeq.push(colors[Math.floor(Math.random()*4)]);
    this.setState({compSeq: compSeq, gameOn: true, playerTurn: false});
    this.computerTurn();
  }
  computerTurn()
  {
     let count = 0;
     let seq = this.state.compSeq;
     console.log(seq);
     let turn = setInterval(()=>{
       if(!this.state.gameOn)
       {
          clearInterval(turn);
          return false;
       }
       this.playSound(seq[count]);
       this.colorOn(seq[count]);
       count++;
       setTimeout(()=>{
          this.colorOff();
       },500);
       if(count >= seq.length)
       {
         clearInterval(turn);
         this.setState({playerTurn:true, computerTurn: false});
       }
     },750);
  }
  hitButton(color)
  {
    if(this.state.playerTurn){
      this.playSound(color);
      this.colorOn(color);
      this.setState({playerColor: color});
    }
  }
  playerOff()
  {
    this.setState({playerTurn: false, playerSeq: [],whoops: false,playerColor:undefined});
  }
  playerTurn()
  {
    if(!this.state.playerTurn || this.state.playerColor == undefined)
      return false;
    else
    {           
        this.colorOff();
        this.setState({playerTurn: false});
        let compSeq = this.state.compSeq;
        //console.log("comp: " + compSeq);
        //console.log("player: " + this.state.playerSeq);
        if(compSeq[this.state.playerSeq.length] == this.state.playerColor)
        {
           let playerSeq = this.state.playerSeq;
           playerSeq.push(this.state.playerColor);
           if(playerSeq.length == compSeq.length)
           {
              if(compSeq.length == 20)
              {
                this.youWin();
              }
              else
              {
                this.playerOff();
                this.addColor();
              }  
           }
           else
           {
             this.setState({
               playerSeq: playerSeq, 
               playerTurn: true,
               playerColor: undefined
             });
           }
        }
        else
        {  
           if(this.state.strict)
           {
             this.whoops(()=>{
                 this.playerOff();
                 this.setState({compSeq: []});
                 this.addColor();
             }); 
           } 
           else
             this.whoops(()=>{
                  this.playerOff();
                  this.computerTurn();
             });
        }  

    }  
  }
  playSound(color)
  {  
     let whichSound = "";
     if(color=="green")
       whichSound="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
     if(color=="red")
       whichSound="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
     if(color=="yellow")
       whichSound="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
     if(color=="blue")
       whichSound="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";     
     var tone=new Audio(whichSound);
     tone.volume=.35;
     tone.play();
  }
  reset()
  {
    this.playerOff();
    this.setState({compSeq: [], gameOn: false});
  }
  startGame()
  {
    this.addColor();
  }
  whoops(func)
  {
    this.setState({whoops: true});
    setTimeout(()=>{
        func();
    },750);
  }
  youWin()
  {
    this.setState({winner: true});
    this.setState({compSeq: []});
    setTimeout(()=>{
      this.setState({winner: false});
      this.startGame();
    },1000);
  }
  render()
  {
    return(
      <div className="simon-middle cal-body">
         <div className="text-center container-fluid simon-width">
             <div className="si-middle-but">
                <div className="text-center container-fluid si-max">
                <h4>It's Simon!</h4>
                <h6>(Now in React)</h6>
                  <div className="row">
                      <div className="col-sm-8 si-left">
                          <div className="count-box middle-text">
                             { this.state.whoops ? ":(" : 
                               this.state.winner ? "You Won!" :
                               this.state.compSeq.length == 0
                              ? "--"
                              : this.state.compSeq.length}
                          </div>  
                      </div>  
                      <div className="col-sm-4 middle-text text-center">
                          Turns
                      </div>  
                  </div>  
                  <div className="row">
                      <div className="col-sm-4 si-left">
                          <button className={
                                  !this.state.gameOn?
                                  "btn si-btn si-btn-off"  
                                  :"btn si-btn start"}
                                  onClick={!this.state.gameOn
                                           ? this.startGame
                                           : ""}/>
                          Start
                      </div>
                      <div className="col-sm-4 si-left si-right">
                          <button className={  this.state.strict
                                             ? "btn si-btn strict"
                                             : "btn si-btn si-btn-off"}
                                  onClick={!this.state.gameOn ?
                                           ()=> this.setState({strict: !this.state.strict})
                                           : ""}/>
                          Strict
                      </div>  
                      <div className="col-sm-4 si-right">
                          <button className="btn si-btn reset"
                                  onClick={this.state.gameOn ? this.reset : ""}/>
                          Reset
                      </div>  
                  </div>
                </div>
             </div>  
             <div className="row">
                <div className="col-sm-6 si-left">
                    <div id="green" 
                         className={this.state.colors.green?"":"off"}
                         onMouseDown={()=>this.hitButton("green")}/>
                </div>
                <div className="col-sm-6 si-right">
                    <div id="red" 
                         className={this.state.colors.red?"":"off"}
                         onMouseDown={()=>this.hitButton("red")}/>
                </div>  
             </div>
             <div className="row">
                <div className="col-sm-6 si-left">
                    <div id="yellow" 
                         className={this.state.colors.yellow?"":"off"}
                         onMouseDown={()=>this.hitButton("yellow")}/>
                </div>
                <div className="col-sm-6 si-right">
                    <div id="blue" 
                         className={this.state.colors.blue?"":"off"}
                         onMouseDown={()=>this.hitButton("blue")}/>
                </div>  
              </div> 
          </div> 
      </div>  
    );
  }
}
