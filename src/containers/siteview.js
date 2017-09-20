import React from 'react';
import Game from './gameoflife.js';
import Dungeon from './dungeonplumber.js';
import Calc from './calculator.js';
import Simon from './simon.js';

export default class SiteView extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loaded: false,
      about: false
    };
  }
  componentWillMount()
  {
    if(this.props.title == "Game of Life" || this.props.title == "Dungeon Plumber" || this.props.title == "Calculator" || this.props.title == "Simon")
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
                  <button className="btn btn-nav"
                          onClick={()=>this.setState({about: !this.state.about})}>
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
        {!this.state.about ? "" :
            this.props.title == "Pinterest Clone"
          ? <Pintr />
          : this.props.title == "Book Trading Club"
          ? <Book />
          : this.props.title == "Marvel Event Generator"
          ? <Marvl />
          : this.props.title == "Voting App"
          ? <Vote />
          : this.props.title == "Night Life Tracker"
          ? <Night />
          : this.props.title == "Dungeon Plumber"
          ? <DungeonAbout />
          : this.props.title == "Game of Life"
          ? <GameAbout />
          : this.props.title == "Calculator"
          ? <CalcAbout />
          : this.props.title == "Simon"
          ? <SimonAbout />
          : ""
        }
        <div className="section">
          {!this.state.loaded ? 
          <h1>Loading... <i className="fa fa-spinner fa-spin" /></h1>
          : ""}
          { this.props.title != "Game of Life" && this.props.title != "Dungeon Plumber" && this.props.title != "Calculator" && this.props.title != "Simon"
            ? <iframe src={this.props.url}
                  className="web-view"
                  onLoad={()=>this.setState({loaded: true})}/>
            : this.props.title == "Game of Life"
            ? <div className="web-view">
                 <div className="game-that">
                  <Game />
                 </div>  
              </div>      
            : this.props.title == "Dungeon Plumber" 
            ? <div className="web-view">
                 <div className="dun-body">
                  <Dungeon />
                 </div>  
              </div>     
            : this.props.title == "Simon"
            ? <div>
                 <div className="cal-body min-800">
                    <Simon />
                  </div>
              </div>
            : <div>
                 <div className="cal-body">
                    <Calc />
                  </div>
              </div>
          }        
        </div>
      </div>
     </div>   
    );
  }
}

const Pintr = () =>{
  return(
            <div className="section">
            <div className="pintr margin-0">React-terest</div>
            <div>
            <div className="proj-head">  
            Part of FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-pinterest-clone")} title="Open in New Window">Pinterest Clone <i className="fa fa-external-link"/></strong>.<br/> In addition to all of the requirements for that project, React-terest includes quite a few options:</div>
            <div className="beige">
                ★ Users can click on the image of a post to see a larger version (if the image is larger than 250px wide)<br/>
                ★ When authenticated users create a post, they can add up to three tags.<br/> 
                ★ Users can click on post tags to view all posts with that tag. <i>(I recommend the Wayne’s World tag, it’s excellent.)</i><br/>
                ★ Users can search by tag, title, or username and see a board made up of the results.<br/>
                ★ Authenticated users can Favorite <i className="fa fa-heart"/> , Reblog <i className="fa fa-exchange"/> , and view the other user interactions <i className="fa fa-comments"/> .<br/>
                ★ React-terest also utilizes web sockets to provide live updates when new posts are added, reblogged, updated, or deleted.</div>
              </div>
          </div> 
  );
};

const Book = () =>{
  return(
     <div className="section">
            <div className="book margin-0">
                Book Stop N' Swap
            </div>
            <div>
                <div className="proj-head">  
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/manage-a-book-trading-club")} title="Open in New Window">Book Trading Club <i className="fa fa-external-link"/></strong>. Book Stop N’ Swap has some additional exciting features:
                </div>
                <div className="beige">
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
     <div className="section">
            <div className="marvl margin-0">Marvel Event Generator</div>
            <div>
            <div className="proj-head">  
		A project I made for fun, this Marvel Event Generator uses a custom database of characters I created with the help of the Marvel API to generate random events. 
            </div>
            <div className="beige">
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
            <div className="section">
            <div className="front margin-0">
                Voting App
            </div>
            <div>
            <div className="proj-head">  
            Part of FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-voting-app")} title="Open in New Window">Voting App <i className="fa fa-external-link"/></strong>.
            <div className="beige">
		            This full stack app allows users to create and vote on polls, as well as share links to specific polls with their friends. It also shows charts of the voting results!
		        </div>    
		  </div>
    </div>
  </div> 
  );
};

const Night = () =>{
  return(
     <div className="section">
            <div className="front margin-0">
                Nightlife Coordination
            </div>
            <div>
                <div className="proj-head">  
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app")} title="Open in New Window">Nightlife Coordination App <i className="fa fa-external-link"/></strong>. 
                  <div className="beige">
	     Using the Yelp API users can search for bars in their area and mark themselves as “going” or remove themselves from bars if they no longer want to go.
	                  </div>
                </div>
            </div>
      </div>     
  );
};

const DungeonAbout = () =>{
  return(
     <div className="section">
            <div className="front margin-0">
                Dungeon Plumber
            </div>
            <div>
                <div className="proj-head">  
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-the-game-of-life")} title="Open in New Window">Roguelike Dungeon Crawler Game <i className="fa fa-external-link"/></strong>. I made one that does some pretty exciting stuff:
                </div>
                <div className="beige">
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
     <div className="section">
            <div className="front margin-0">
                Game of Life
            </div>
            <div>
                <div className="proj-head">  
                 FreeCodeCamp’s curriculum included a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-roguelike-dungeon-crawler-game")} title="Open in New Window">Game of Life <i className="fa fa-external-link"/></strong>. 
                 <div className="beige">
                    Users can adjust the speed of the generations, stop, reset, or randomize the board.
                 </div>
                </div>
            </div>
      </div>     
  );
};

const CalcAbout= () =>{
  return(
     <div className="section">
            <div className="front margin-0">
                Calculator
            </div>
            <div>
                <div className="proj-head">  
                 One of r/dailyprogrammer's challenges was a <strong onClick={()=>window.open("https://www.reddit.com/r/dailyprogrammer/comments/7096nu/20170915_challenge_331_hard_interactive/")}title="Open in New Window" >Interactive Interpreter <i className="fa fa-external-link"/></strong>. After using the <strong onClick={()=>window.open("https://en.wikipedia.org/wiki/Shunting-yard_algorithm")}>Shunting-Yard Algorithm <i className="fa fa-external-link"/></strong> to complete the challenge, I used it to make a scientific calculator.
                </div>
                <div className="beige">
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
     <div className="section">
            <div className="front margin-0">
                Simon
            </div>
            <div>
                <div className="proj-head">  
                 Another early FreeCodeCamp project is is to build a <strong onClick={()=>window.open("https://www.freecodecamp.org/challenges/build-a-simon-game")} title="Open in New Window">Simon Game<i className="fa fa-external-link"/></strong>.
                </div>
                <div className="beige">
                    Play with this retro 80's toy right here in your browser!
                </div>    
            </div>
      </div>     
  );
};

