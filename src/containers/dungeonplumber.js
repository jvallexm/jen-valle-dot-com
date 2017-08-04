import React from 'react';

const BoardLength = 49;
const BoardWidth = 49;
const Initialize = () =>
{
    
    var arr = [];
    for(var lat=0;lat<BoardLength;lat++)
    {
      var row=[];
      for(var lon=0;lon<BoardWidth;lon++)
      {
          row.push({room: false, special: 'none', visible:false, leakNumber:0});
      }
      arr.push(row);
    }
    return arr;
}

export default class Dungeon extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      board: Initialize(),
      rooms: [],
      roomsOnly:[],
      roomCount: 0,
      floors: 1,
      player: 
      {
        level: 1,
        xp: 0,
        healthCurrent: 100,
        healthMax: 100,
        weapon: 1,
        location: []
      },
      leakLocation: [],
      bossLocation: [],
      message: "Fix the leaks!",
      winner: false,
      seeMap: false,
      gameOver: false,
      bottom: false,
      goalFloor: 4
    };
    this.generateRoom = this.generateRoom.bind(this);
   // this.makeNextRoom = this.makeNextRoom.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.makeManyRooms  = this.makeManyRooms.bind(this);
    this.moveIt = this.moveIt.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.doOver = this.doOver.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.lightsOn = this.lightsOn.bind(this);
    this.keepGoing = this.keepGoing.bind(this);
    this.winnerOff = this.winnerOff.bind(this);
  }
  componentWillMount()
  {
    this.makeManyRooms(5);
  }
  componentDidMount()
  {
    document.addEventListener('keydown',this.moveIt);
  }
  doOver()
  {
    //console.log("do over initiated");
    this.state.board=Initialize();
    this.state.rooms=[];
    this.state.roomsOnly=[];
    this.state.roomCount= 0;
    this.state.floors= 1;
    this.state.player=
      {
        level: 1,
        xp: 0,
        healthCurrent: 100,
        healthMax: 100,
        weapon: 1,
        location: []
      };
    this.state.leakLocation=[];
    this.state.bossLocation=[];
    this.state.message= "Fix the leaks!";
    this.state.winner= false;
    this.state.seeMap= false;
    this.state.gameOver= false;
    this.makeManyRooms(5);
  }  
  nextLevel()
  {
    this.clearBoard();
    this.makeManyRooms(5+this.state.floors-1);
    this.setState({floors: this.state.floors + 1});
  }
  clearBoard()
  {
    this.setState({
      board: Initialize(), 
      rooms: [],
      roomCount:0,
      roomsOnly:[],
      leakLocation:[],
      bossLocation:[],
      //gameOver: false, 
      //winner: false
    });
  }
  winnerOff()
  {
    this.setState({winner: false,gameOver:false,goalFloor:31});
  }
  makeManyRooms(howMany)
  {
    if(howMany>35)
    {
      this.setState({
        message: "You reached the bottom!",
        gameOver: true,
        winner: true,
        bottom: true
      });
      return false;
    }
    this.generateRoom();
    var count=0;
    while(this.state.roomCount<howMany)
    {
      if(this.state.rooms[count]!=undefined)
        this.makeNextRoom(this.state.rooms[count]);
      count++;
    }
   //console.log("Done made all the rooms");
   var playerStart = Math.floor(Math.random() * this.state.roomsOnly.length);
   var temp = Initialize();
   for(var aaa=0;aaa<BoardLength;aaa++)
    {
      for(var bbb=0;bbb<BoardWidth;bbb++)
      {
        temp[aaa][bbb].visible = this.state.seeMap;
      }
    }
   let player = this.state.player;
   for(var b=0;b<this.state.roomsOnly.length;b++)
   {
     if(b == playerStart)
     {  
       temp[this.state.roomsOnly[b][0]][this.state.roomsOnly[b][1]].special = "player";
       player.location = [this.state.roomsOnly[b][0],this.state.roomsOnly[b][1]]; 
     }
     temp[this.state.roomsOnly[b][0]][this.state.roomsOnly[b][1]].room = true;
     temp[this.state.roomsOnly[b][0]][this.state.roomsOnly[b][1]].visible = this.state.seeMap;
   }
   //console.log("Player position started");
   var leakCount = 0; 
   let leakLocation = [];
   while(leakCount < howMany)
   {
     var leakTemp = Math.floor(Math.random() * this.state.roomsOnly.length);
     if(temp[this.state.roomsOnly[leakTemp][0]][this.state.roomsOnly[leakTemp][1]].special =='none')
     {
       temp[this.state.roomsOnly[leakTemp][0]][this.state.roomsOnly[leakTemp][1]].special="leak";
       leakLocation.push(
       {
        location: [this.state.roomsOnly[leakTemp][0],
        this.state.roomsOnly[leakTemp][1]],       
        reward: 25*this.state.floors,
        healthCurrent: 25*this.state.floors,
        healthMax: 25*this.state.floors,
        weapon: Math.floor(2*this.state.floors),
        isBoss: false
       });
       temp[this.state.roomsOnly[leakTemp][0]][this.state.roomsOnly[leakTemp][1]].leakNumber = leakLocation.length - 1;
       leakCount++;
     }
   }
   // console.log("Leaks created");
   //console.log("How many: " + howMany);
   //console.log("HEY!!!!");
   //console.log(leakCount);
   //console.log(this.state.leakLocation);
   var itemCount = 0; 
   var items = [];
   while(itemCount < howMany)
   {
     var itemTemp = Math.floor(Math.random() * this.state.roomsOnly.length);
     if(temp[this.state.roomsOnly[itemTemp][0]][this.state.roomsOnly[itemTemp][1]].special =='none')
     {
       temp[this.state.roomsOnly[itemTemp][0]][this.state.roomsOnly[itemTemp][1]].special="item";
       itemCount++;
     }
   }
   //console.log("Items created");
   //console.log("items");
   var weaponCount = 0; 
   var weapons = [];
   var howManyWeapons = Math.floor(this.state.floors/4)+1;
  
   while(weaponCount < howManyWeapons)
   {
     var weaponTemp = Math.floor(Math.random() * this.state.roomsOnly.length);
     if(temp[this.state.roomsOnly[weaponTemp][0]][this.state.roomsOnly[weaponTemp][1]].special =='none')
     {
       temp[this.state.roomsOnly[weaponTemp][0]][this.state.roomsOnly[weaponTemp][1]].special="weapon";
       weaponCount++;
     }
   }
   //console.log("Weapons created");
   //console.log(weapons);
   var bossCount = 0; 
   var boss = [];
   while(bossCount < 1)
   {
     var bossTemp = Math.floor(Math.random() * this.state.roomsOnly.length);
     if(temp[this.state.roomsOnly[bossTemp][0]][this.state.roomsOnly[bossTemp][1]].special =='none')
     {
       temp[this.state.roomsOnly[bossTemp][0]][this.state.roomsOnly[bossTemp][1]].special="boss";
       leakLocation.push(
         {
         location: [this.state.roomsOnly[bossTemp][0],
         this.state.roomsOnly[bossTemp][1]],         
         reward: 50*this.state.floors,
         healthCurrent: 50*this.state.floors,
         healthMax: 50*this.state.floors,
         weapon: Math.floor(3.2*this.state.floors),
         isBoss: true
         }
       );
       temp[this.state.roomsOnly[bossTemp][0]][this.state.roomsOnly[bossTemp][1]].leakNumber = leakLocation.length -1;
       bossCount++;
     }
   }
   for(var losA=0;losA<9;losA++)
   {
     for(var losB=0;losB<9;losB++)
     {
       if(
       this.state.player.location[0]-4+losA<BoardLength
       &&
       this.state.player.location[1]-4+losB<BoardWidth 
       &&
       this.state.player.location[1]-4+losB>=0
       &&  
       this.state.player.location[0]-4+losA>=0  
         )
       temp[this.state.player.location[0]-4+losA][this.state.player.location[1]-4+losB].visible = true;
     }
   }
   //console.log(this.state.leakLocation);*/
   this.setState({board: temp, leakLocation: leakLocation, player: player});
  }
  generateRoom()
  {
    var temp=Initialize();
    var size = 7;
    var lat = 0;                
    var long= 0;
    var isOccupied = true;
     lat= 8*Math.floor(Math.random()*6)+1; 
     long= 8*Math.floor(Math.random()*6)+1;
    let rooms = this.state.rooms;
    let roomsOnly = this.state.roomsOnly;
    let roomCount = this.state.roomCount;
    for(var a=0;a<size;a++)
    {
       for(var b=0;b<size;b++)
       {
         temp[lat+a][long+b].room = true;
         temp[lat+a][long+b].visible = this.state.seeMap;
         roomsOnly.push([lat+a,long+b]);
       }      
    }
    rooms.push([lat,long,size]);
    //console.log("First room: " + rooms[0]);
    this.setState({board:temp, roomsOnly: roomsOnly, rooms: rooms});    
  }
  
  makeNextRoom(lastRoom)
  {
    //console.log("Last room: " + lastRoom);
    //console.log("Making next room");
    var temp=Initialize();
    for(var x=0;x<this.state.roomsOnly.length;x++)
    {
      temp[this.state.roomsOnly[x][0]][this.state.roomsOnly[x][1]].room = true;
      temp[this.state.roomsOnly[x][0]][this.state.roomsOnly[x][1]].visible = this.state.seeMap;
    }
    var lastLat = lastRoom[0];
    var lastLon = lastRoom[1];
    var size = 7;
    var directions = [0,1,2,3];
    var makeRoom=false;
    var newLat = -1;
    var newLon = -1;
    var whichWay = 5;
    var roomRoll;
    var nesw=["N","E","S","W"];
    let rooms=this.state.rooms;
    let roomsOnly = this.state.roomsOnly;
    let roomCount = this.state.roomCount;
    while(directions.length>0 && !makeRoom)
    {  
      roomRoll = directions[Math.floor(Math.random()*(directions.length-1))];
      //console.log("Directions length: " +directions.length+ " Room roll: "+roomRoll);
      var index = directions.indexOf(roomRoll);
      var newDirections = [];
      for(var ax=0;ax<directions.length;ax++)
      {
        if(ax!=index)
          newDirections.push(directions[ax]);
      }
      directions = newDirections;
      var tempLat=-1;
      var tempLon=-1;
      
      //North
      if(roomRoll==0)
      {
        if(lastLon-8>=0)
        {
            //console.log("Going North!");
            tempLat = lastLat;
            tempLon = lastLon-8;
        }
       // else
       //  console.log("Can't go north, off the board");
      }
      
      //East
      if(roomRoll==1)
      {
        if(lastLat+15<BoardWidth)
        {
            //console.log("Going East!");
            tempLat = lastLat+8
            tempLon = lastLon;
        }
        //else
          //console.log("Can't go east, off the board");
      }  
      
      //South
      if(roomRoll==2)
      {
        if(lastLon+15<BoardLength)
        {
            //console.log("Going South!");
            tempLat = lastLat;
            tempLon = lastLon+8;
        }
        //else
          //console.log("Can't go south off the board");
      }  
      //West
      if(roomRoll==3)
      {
        if(lastLat-8>=0)
        {
            //console.log("Going West!");
            tempLat = lastLat-8;
            tempLon = lastLon;
        }
        //else
          //console.log("Can't go west off the board");
      } 
      var roomCheck = false;
      if(tempLat>-1)
      {
        for(var mno=0;mno<7;mno++)
        {
          for(var nop=0;nop<7;nop++)
          {
            if(temp[tempLat + mno][tempLon+nop].room)
              roomCheck=true;
          }  
        }
        if(!roomCheck)
        {
          newLat = tempLat;
          newLon = tempLon;
          whichWay = roomRoll;
          //console.log("Room available");
          makeRoom = true;
        }
        else
        {
          
          //console.log("Can't go " + nesw[roomRoll]);
        }
      } 
      
    }

    if(makeRoom && newLat>=0)
    {
      //console.log("Going " +nesw[roomRoll]+". "+"New room: [" + newLat + "," + newLon + "]");
      for(var mnra=0;mnra<7;mnra++)
      {
        for(var mnrb=0;mnrb<7;mnrb++)
        {
          temp[newLat + mnra][newLon + mnrb].room = true;
          temp[newLat + mnra][newLon + mnrb].visible = this.state.seeMap;
          roomsOnly.push([newLat+mnra,newLon+mnrb]);
        }
      }
      var bridgeRoll = Math.floor(Math.random()*7);
      var bridgeLat = 0;
      var bridgeLon = 0;
      if(roomRoll==0)
      {
        bridgeLat=lastLat+bridgeRoll;
        bridgeLon=lastLon-1;
      }
      if(roomRoll==1)
      {
        bridgeLat=lastLat+7;
        bridgeLon=lastLon+bridgeRoll;
      }
      if(roomRoll==2)
      {
        bridgeLat=lastLat+bridgeRoll;
        bridgeLon=lastLon+7;
      }
      if(roomRoll==3)
      {
        bridgeLat=lastLat-1;
        bridgeLon=lastLon+bridgeRoll;
      }
      roomsOnly.push([bridgeLat,bridgeLon]);
      temp[bridgeLat,bridgeLon].room=true;
      temp[bridgeLat,bridgeLon].visible = this.state.seeMap;
      rooms.push([newLat,newLon,7]);
      this.state.roomCount = this.state.roomCount+1;
      //console.log("Room count: " + this.state.roomCount);
     // console.log(this.state.rooms);
    }
    else
    {
      var whereLastRoom = this.state.rooms.indexOf(lastRoom);
      if(whereLastRoom>=0)
        rooms.push(this.state.rooms[whereLastRoom-1]);
      //console.log("DANGER, I can't go anywhere!");
    }
    this.setState({board:temp, rooms: rooms, roomsOnly: roomsOnly});
  }
keepGoing()
{
  
}
moveIt(event)
  {
    //W = 87
    //D = 68
    //S = 83
    //A = 65
    //dkconsole.log(event.keyCode);
    var goingDown = false;
    let player = this.state.player;
    let message = this.state.message;
    if(this.state.gameOver)
       return false;
    if(event.keyCode == 109)
    {
      player.level = 50;
      player.weapon = 50;
      player.xp = 49*(49*50);
      this.nextLevel();
      this.setState({floors: 25, goalFloor: 30, player: player})
    }
    if(event.keyCode == 8)
    {
      player.weapon = 9001;
      player.healthCurrent = 500;
      this.setState({goalFloor: 31, player: player});
    }
    var temp = Initialize();
    for(var a=0;a<BoardLength;a++)
    {
      for(var b=0;b<BoardWidth;b++)
      {
        temp[a][b] = this.state.board[a][b];
        temp[a][b].visible = this.state.seeMap;
      }
    }
    var tempLeaks = [];
    for(var c=0;c<this.state.leakLocation.length;c++)
    {
      tempLeaks.push(this.state.leakLocation[c]);
    }
    //W = 87
    //D = 68
    //S = 83
    //A = 65
    var attemptLat=this.state.player.location[0];
    var attemptLon=this.state.player.location[1];
    if(event.keyCode==87)
    {
      //North
      //console.log("North");
      attemptLat--;
    }
    if(event.keyCode==68)
    {
      //East
      attemptLon++;
    }
    if(event.keyCode==83)
    {
      //South
      attemptLat++;
    }
    if(event.keyCode==65)
    {
      //West
      attemptLon--;
    }
    var canMove = true;
    if(!temp[attemptLat][attemptLon].room)
      return false;
    if(temp[attemptLat][attemptLon].special=='leak' 
    || temp[attemptLat][attemptLon].special=='boss')
    {
      canMove = false;
      var thisLeak = this.state.board[attemptLat][attemptLon].leakNumber;
      var playerDamage = Math.floor(
         Math.random()*(6+this.state.player.level) + Math.floor(1.5*this.state.player.weapon)) 
        + 4*this.state.player.level;
      var monsterDie = Math.floor(
         Math.random()*(Math.floor(this.state.floors/2)))
         +2-Math.floor(this.state.player.level/1.5)-Math.floor(this.state.floors/2);
      tempLeaks[thisLeak].healthCurrent = tempLeaks[thisLeak].healthCurrent - playerDamage;
       if(tempLeaks[thisLeak].healthCurrent > 0)
       {
         message = Math.floor((playerDamage/tempLeaks[thisLeak].healthMax)*100)+"% Fixed!";
         player.healthCurrent = player.healthCurrent-tempLeaks[thisLeak].weapon-monsterDie;
         message = message + " Fatigue Taken: " +(tempLeaks[thisLeak].weapon+monsterDie);
       }
          
       if(player.healthCurrent > 0 && tempLeaks[thisLeak].healthCurrent<=0)
       {
         message = this.state.message + " Leak fixed!";
         message = "Leak fixed! Reward: " +tempLeaks[thisLeak].reward + "XP.";
         player.xp = this.state.player.xp + tempLeaks[thisLeak].reward;
         if(player.xp >= player.level*(player.level*50))
         {
           message = message + " Level up!";
           player.healthCurrent = 100;
           player.level = player.level + 1;         
         }
         if(tempLeaks[thisLeak].isBoss)
         {
           message = message + " Next floor unlocked!";
           temp[attemptLat][attemptLon].special='stairs'; 
         }
         else  
          canMove = true;
       }
    }
    if(player.healthCurrent<=0)
    {
      this.setState({board:temp, leakLocation: tempLeaks, message: "Game Over, Man!", gameOver: true});
    }
    if(temp[attemptLat][attemptLon].special=='item')
    {
      message = "Snack Get!";
      if(player.healthCurrent +20>player.healthMax)
         player.healthCurrent = player.healthMax;
      else
        player.healthCurrent = player.healthCurrent+20;
    }
    
    if(temp[attemptLat][attemptLon].special=='weapon')
    {
      message = "Tool upgrade!";
      player.weapon = player.weapon + 1;
    }
    
    if(canMove)
    { 
      if(temp[attemptLat][attemptLon].special=='stairs')
      {
        //console.log("You're gonna get some stairs.");
        goingDown = true;
      }
      temp[this.state.player.location[0]][this.state.player.location[1]].special='none';
      player.location=[attemptLat,attemptLon];
      temp[attemptLat][attemptLon].special="player";
    }
    for(var losA=0;losA<9;losA++)
    {
     for(var losB=0;losB<9;losB++)
     {
       if(
       this.state.player.location[0]-4+losA<BoardLength
       &&
       this.state.player.location[1]-4+losB<BoardWidth 
       &&
       this.state.player.location[1]-4+losB>=0
       &&  
       this.state.player.location[0]-4+losA>=0  
         )
       temp[this.state.player.location[0]-4+losA][this.state.player.location[1]-4+losB].visible = true;
     }
   }
   if(!goingDown) 
    this.setState({board:temp, leakLocation: tempLeaks, player: player, message: message});
   else if(goingDown && this.state.goalFloor<this.state.floors+1)
   {
     this.nextLevel();
     this.setState({message: "You Won!", gameOver: true, winner: true, player: player});
   }
   else
   {
    this.nextLevel();
    this.setState({message: "Going Down...", player: player});
   }
   
  } 
  lightsOn()
  {
    var temp=Initialize();
    let seeMap = !this.state.seeMap;
    for(var a=0;a<BoardLength;a++)
    {
      for(var b=0;b<BoardWidth;b++)
      {
        temp[a][b]=this.state.board[a][b];
        temp[a][b].visible = seeMap;
      }
    }
    for(var losA=0;losA<9;losA++)
    {
     for(var losB=0;losB<9;losB++)
     {
       if(
       this.state.player.location[0]-4+losA<BoardLength
       &&
       this.state.player.location[1]-4+losB<BoardWidth 
       &&
       this.state.player.location[1]-4+losB>=0
       &&  
       this.state.player.location[0]-4+losA>=0  
         )
       temp[this.state.player.location[0]-4+losA][this.state.player.location[1]-4+losB].visible = true;
     }
    }
    this.setState({board: temp, seeMap: seeMap});
  }
  render()
  {
    //console.log(this.state.board[1][1]);
    return(<div className="middle text-center">
        <div className="game-space"/>
        <h1 className="dun-h1">Dungeon Plumber REDUX!!</h1>
        <div className="text-center container-fluid dun-message"><h3>{this.state.message}</h3>
        <h4 className="dun-h4">Level: {this.state.player.level} Pumbing Skill: {this.state.player.weapon} Fatigue: {100 - this.state.player.healthCurrent}% 
          XP: {this.state.player.xp<1000?
               this.state.player.xp :
               Math.floor((this.state.player.xp*10)/1000)/10 + "K"
              }/
          {(
            this.state.player.level*(this.state.player.level*50))<1000 ?            
            (this.state.player.level*(this.state.player.level*50)) :
          
            Math.floor((((this.state.player.level*(this.state.player.level*50))*10)/1000))/10 + "K"
            
            } Floor: {this.state.floors}/{this.state.goalFloor}</h4>
        </div>
        <div className="text-center container-fluid row">
        <div className="col-lg-6 dun-col container-fluid text-center">  <button className="btn dun-btn">W</button>
          <button className="btn dun-black-out"><i className="fa fa-arrow-up"></i></button>
          <button className="btn dun-btn">A</button>
            <button className="btn dun-black-out"><i className="fa fa-arrow-left"></i></button>
          <button className="btn dun-btn">S</button>
              <button className="btn dun-black-out"><i className="fa fa-arrow-down"></i></button>
          <button className="btn dun-btn">D</button>
                <button className="btn dun-black-out"><i className="fa fa-arrow-up"></i></button>
          <button className="dun-btn btn" onClick={this.lightsOn}>{this.state.seeMap ? "Lights Off" : "Lights On"}</button>
          <center>
          <tr className="buffer">
          <td className='dun-box start'></td> Player
          <td className='dun-box leak'></td> Leak
          <td className='dun-box boss'></td> Burst Pipe
          <td className='dun-box item'></td> Snack
          <td className='dun-box weapon'></td> Tool Upgrade! 
          </tr>
          </center>
        </div>  
        </div>
        <div><center>
         {!this.state.gameOver ? 
          this.state.board.map(
            (theRow,indexR) =>
             <table key={"t" + indexR} className="dun-gradient">
               <tr key = {indexR}>
               {
                  theRow.map(
                    (eachCell,indexC) =>  
                    <td className={'dun-box ' + (!this.state.board[indexR][indexC].visible?'dun-black-out' : this.state.board[indexR][indexC].special=="player" ? 'start': this.state.board[indexR][indexC].special=="leak" ? 'leak' : this.state.board[indexR][indexC].special=="weapon" ? 'weapon' : this.state.board[indexR][indexC].special=="boss" ? 'boss' : this.state.board[indexR][indexC].special=="item" ? 'item' : this.state.board[indexR][indexC].special=="stairs" ? 'stairs' :this.state.board[indexR][indexC].room ? 'dun-box-on' : 'dun-box-off')}
                        key={indexR + indexC}
                        ></td>
                  )  
               }                  
             </tr></table>
          ) : <div className="game-over text-center container-fluid">{this.state.bottom ? <h1> You Reached the Bottom!</h1> : this.state.winner ? <h1>A Winner is You!</h1>: <h1>Game Over!</h1>}
{this.state.winner && !this.state.bottom ? <button className="btn dun-black-out" onClick={this.winnerOff}>See How Deep the Dungeon Goes..</button>  : ""}
<button className="btn dun-black-out" onClick={this.doOver}>Play Again?</button></div>         
          }</center><div className="game-space"/></div></div>);
  }
}