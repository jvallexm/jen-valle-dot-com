import React from 'react';
import Calc from '../projects/calculator.js';
import Simon from '../projects/simon.js';
//import Dungeon from '../projects/dungeonplumber.js';
import Game from '../projects/gameoflife.js';

export class SiteView extends React.Component{ 
  constructor(props)
  {
      super(props);
      this.state={
        loaded: false  
      };
  }
  componentWillMount()
  {
      if(this.props.view.indexOf("://") == -1)
        this.setState({loaded: true});
  }
  render()
  {
    return(
      <div className="site-wrapper text-center container-fluid">  
        <div id="x-box">
               <i className="fa fa-close"
                  onClick={this.props.close}/>
        </div>    
        
        {   this.props.name == "Pinterest Clone"
          ? <Pintr />
          : this.props.name == "Book Trading Club"
          ? <Book />
          : this.props.name == "Marvel Event Generator"
          ? <Marvl />
          : this.props.name == "Voting App"
          ? <Vote />
          : this.props.name == "Night Life Tracker"
          ? <Night />
          : this.props.name == "Dungeon Plumber"
          ? <DungeonAbout />
          : this.props.name == "Game of Life"
          ? <GameAbout />
          : this.props.name == "Calculator"
          ? <CalcAbout />
          : this.props.name == "Simon"
          ? <SimonAbout />
          : "Whoops, you broke it"
        }
        
        {this.state.loaded ? "" : <span>Loading... <i className="fa fa-spinner fa-spin" /></span> }
        { this.props.view.indexOf("://") > -1 
        ? <iframe className="site-view"
                src={this.props.view}
                onLoad={()=>this.setState({loaded: true})}    />
        : this.props.view=="Calculator"
        ? <Calc />
        : this.props.view=="Simon"
        ? <Simon />
        : this.props.view=="Dungeon Plumber"
        ? <Dungeon/> 
        : this.props.view=="Game of Life"
        ? <Game/>
        : "Whoops, you broke it"}
        
      </div>   
    );
  }
}

const Pintr = () =>{
  return(
            <div className="pad-less">
            <div>
            Part of FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-pinterest-clone")} title="Open in New Window">Pinterest Clone <i className="fa fa-external-link"/></strong>.<br/> In addition to all of the requirements for that project, React-terest includes quite a few options:</div>
            <div className="smol">
                ★ Users can click on the image of a post to see a larger version (if the image is larger than 250px wide)<br/>
                ★ When authenticated users create a post, they can add up to three tags.<br/> 
                ★ Users can click on post tags to view all posts with that tag. <i>(I recommend the Wayne’s World tag, it’s excellent.)</i><br/>
                ★ Users can search by tag, title, or username and see a board made up of the results.<br/>
                ★ Authenticated users can Favorite <i className="fa fa-heart"/> , Reblog <i className="fa fa-exchange"/> , and view the other user interactions <i className="fa fa-comments"/> .<br/>
                ★ React-terest also utilizes web sockets to provide live updates when new posts are added, reblogged, updated, or deleted.</div>
          </div> 
  );
};

const Book = () =>{
  return(
     <div className="pad-less">
            <div>
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/manage-a-book-trading-club")} title="Open in New Window">Book Trading Club <i className="fa fa-external-link"/></strong>. Book Stop N’ Swap has some additional exciting features:
                <div className="smol">
                    ★ Authenticated users can view their pending trades, and cancel them if they decide they don’t want to trade anymore.<br/>
                    ★ Users get live updates when they have a new pending trade <br/>
                    ★ Users collections will be updated live when they exchange books<br/>
                    ★ All collections will receive live updates when a new book is added
                </div>    
            </div>
      </div>     
  );
};

const Marvl= () =>{
  return(
     <div className="pad-less">
            <div>
		A project I made for fun, this Marvel Event Generator uses a custom database of characters I created with the help of the Marvel API to generate random events. 
            <div className="smol">
                ★ Has 9 different event templates<br/>
                ★ Pulls from a database of over 300 characters<br/>
                ★ Keeps a live count of how many times users have generated a random event
            </div>    
        </div>
      </div>     
  );
};

const Vote = () =>{
  return(
            <div className="pad-less">
            Part of FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-voting-app")} title="Open in New Window">Voting App <i className="fa fa-external-link"/></strong>.
            <div className="smol">
		            This full stack app allows users to create and vote on polls, as well as share links to specific polls with their friends. It also shows charts of the voting results!
		        </div>    
		  </div>
  );
};

const Night = () =>{
  return(
     <div className="pad-less">
            <div>
 
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app")} title="Open in New Window">Nightlife Coordination App <i className="fa fa-external-link"/></strong>. 
                  <div className="smol">
	     Using the Yelp API users can search for bars in their area and mark themselves as “going” or remove themselves from bars if they no longer want to go.
	                  </div>
            </div>
      </div>     
  );
};

const DungeonAbout = () =>{
  return(
     <div className="pad-less">
            <div>
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-the-game-of-life")} title="Open in New Window">Roguelike Dungeon Crawler Game <i className="fa fa-external-link"/></strong>. I made one that does some pretty exciting stuff:
                <div className="smol">
                    ★ The rooms on each floor are generated randomly.<br/>
                    ★ The user wins the game after beating floor 4, but can choose to continue playing until the map is full<br/>
       	            ★  The user can turn the lights on or off, depending on how they want to play the game
                </div>    
            </div>
      </div>     
  );
};

const GameAbout= () =>{
  return(
     <div className="pad-less">
            <div>

                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-roguelike-dungeon-crawler-game")} title="Open in New Window">Game of Life <i className="fa fa-external-link"/></strong>. 
                 <div className="smol">
                    Users can adjust the speed of the generations, stop, reset, or randomize the board.
                 </div>
            </div>
      </div>     
  );
};

const CalcAbout= () =>{
  return(
     <div className="pad-less">
            <div>
                 One of r/dailyprogrammer's challenges was a <strong onClick={()=>window.open("https://www.reddit.com/r/dailyprogrammer/comments/7096nu/20170915_challenge_331_hard_interactive/")}title="Open in New Window" >Interactive Interpreter <i className="fa fa-external-link"/></strong>. After using the <strong onClick={()=>window.open("https://en.wikipedia.org/wiki/Shunting-yard_algorithm")}>Shunting-Yard Algorithm <i className="fa fa-external-link"/></strong> to complete the challenge, I used it to make a scientific calculator.
                <div className="smol">
                    ★ Users enter in equations and receive an answer that follows order of operations.<br/>
                    ★ Users can store variables to be used later (Shift)<br/>
	                ★ Users will recieve an error if they enter an invalid equation.
                </div>    
            </div>
      </div>     
  );
};

const SimonAbout= () =>{
  return(
     <div className="pad-less">
             <div>
                 Another early FreeCodeCamp project is is to build a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-simon-game")} title="Open in New Window">Simon Game<i className="fa fa-external-link"/></strong>.
                <div className="smol">
                    Play with this retro 80's toy right here in your browser!
                </div>    
            </div>
      </div>     
  );
};