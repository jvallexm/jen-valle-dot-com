import React from 'react';

export default class Calc extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
       equation: "",
       display: "",
       results: [],
       solved: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.doMath = this.doMath.bind(this);
    this.thePaper = this.thePaper.bind(this);
  }
  thePaper()
  {
    let results = this.state.results;
    let printOut=[];
    for(var i=0;i<results.length;i++)
    {
      //console.log(results[i].equation);
      let spacedEquation=results[i].equation.split(/(\d+\.?\d*)?/);
      spacedEquation.shift();
      spacedEquation.pop()
      spacedEquation = " " + spacedEquation.join(" ");
      if(spacedEquation.length>32)
      {
        let splitSpace = spacedEquation.split("");
        let print = "";
        for(var j=0;j<splitSpace.length;j++)
        {
           print+=splitSpace[j];
           if((j+1)%32 == 0 || j+1==splitSpace.length)
           {
             printOut.push({total: false, print: print});
             print="";
           }
        }
      }
      else
      {
        printOut.push({total: false, print: spacedEquation});
      }
      printOut.push({total: true, print: "TOTAL: " + results[i].result})
    }
    while(printOut.length < 22)
    {
      printOut.unshift({total: false, print: ""});
    }
    while(printOut.length >= 20)
    {
      printOut.shift();
    }
    return printOut;
  }
  doMath(str)
  {
    let operators = str.split(/(\d+\.?\d*)?/);
    if(operators[0] != "-")
      operators.shift();
    operators.pop();
    let total = 0;
    while(operators.length>0)
    {
      if(/[\+\*\/-]/.test(operators[0]))
      {
        let sign = operators[0];
        operators.shift();
        if(sign=="+")
          total+=parseFloat(operators[0]);
        if(sign=="-")
          total-=parseFloat(operators[0]);
        if(sign=="/")  
          total/=parseFloat(operators[0]);
        if(sign=="*")
          total*=parseFloat(operators[0]);
        operators.shift();
      }
      else
      {
        total+=parseFloat(operators[0]);
        operators.shift();
      }
    }
    console.log("Solution: " + total);
    if(total%1 != 0)
      total = parseFloat(total.toFixed(8));
    if(total.toString().length > 14)
      this.setState({display: "ERR. OVERFLOW",equation: ""});
    else
    {
        let results=this.state.results;
        results.push({equation: this.state.equation+this.state.display,result:total});
        this.setState({display: total.toString(), equation:"",results:results, solved: true});
    }
  }
  handleChange(e)
  {
    let total = 0;
    if(e.target.name == "=")
    {
      let wholeThing = this.state.equation+this.state.display;
      if(/[\+\*\/-]/.test(wholeThing[wholeThing.length-1]))
        return false;
      this.doMath(wholeThing);
      return false;
    }
    if(e.target.name == "AC")
    {
      this.setState({display: "", equation: ""});
    }
    else if(e.target.name == "CE")
    {
      this.setState({display: ""});
    }
    else
    {
      let display = this.state.display;
      let equation = this.state.equation;
      if(display == "ERR. OVERFLOW" || display == "NaN" || display == "Infinity")
        display="";
      else if(display.length + 1 > 14 && !/[\+\*\/-]/.test(e.target.name))
      {
        this.setState({display: "ERR. OVERFLOW",equation: ""})
        return false;
      }
      if(/[\+\*\/-]/.test(e.target.name) && /[\+\*\/-]/.test(display))
      {
        let splitEq = equation.split("");
        splitEq[splitEq.length - 1] = e.target.name;
        equation = splitEq.join("");
        this.setState({display: e.target.name, equation: equation});
        return false;
      }
      if(/[\+\*\/]/.test(e.target.name) && display.length == 0)
         return false;
      if(/[\+\*\/-]/.test(e.target.name))
      {
        equation+=display+e.target.name;
        display="";
      }
      if(/[\+\*\/-]/.test(display))
      {
        display="";
      }
      if(display.length==0 && e.target.name == ".")
         display+="0";
      if(this.state.solved && !/[\+\*\/-]/.test(display))
      {
         display=e.target.name;
         this.setState({display: display, equation: equation, solved: false});
      }
      else
      {
         display+=e.target.name;
         this.setState({display: display, equation: equation});
      }
    }
  }
  render()
  {
    return(
      <div className="text-center container-fluid cal-mid ">
       <div className="game-space"/>
        <div className="row">
          <div className="col-md-6"> 
              <div className="paper">
                {
                   this.thePaper().map((d,i)=>
                   i%2==0
                   ? <div className={d.total ? "text-right evens" : "text-left evens"} key={i}>{d.print}</div>
                   : <div className={d.total ? "text-right odds"  : "text-left odds"}key={i}>{d.print}</div>
                )}
              </div>  
          </div>  
          <div className="col-md-6"> 
              <div className="calc">
                <div className="screen-pad">
                    <div className="screen middle-text">
                      <h1 className={this.state.display.length < 1 ? "cal-h1 black-text" : "cal-h1"}>{this.state.display.length > 0 ? this.state.display: '*'}</h1>
                      <h5 className={this.state.equation.length < 1 ? "cal-h1 back black-text" : "cal-h1 back"}>
                        {this.state.equation.length > 27 ? this.state.equation.substr(this.state.equation.length-27,this.state.equation.length-1) : this.state.equation.length > 0 ? this.state.equation: "*"}
                      </h5>
                    </div>  
                </div>  
                <div className="cal-buttons">
                    <div className="row">
                        <div className="col-sm-3 cal-col cal-left">
                            <button className="btn btn-block ac cal-btn"
                                    name={"AC"}
                                    onClick={this.handleChange}>
                                AC
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col left cal-right">
                            <button className="btn btn-block ce cal-btn"
                                    name={"CE"}
                                    onClick={this.handleChange}>
                                CE
                            </button>
                        </div>
                       <div className="col-sm-3 cal-col cal-right">
                            <button className="btn btn-block func cal-btn"
                                    name={"/"}
                                    onClick={this.handleChange}>
                               /
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block func cal-btn"
                                    name={"*"}
                                    onClick={this.handleChange}>
                              *
                            </button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-3 cal-col cal-left">
                            <button className="btn btn-block cal-btn"
                                    name={"7"}
                                    onClick={this.handleChange}>
                              7
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"8"}
                                    onClick={this.handleChange}>
                              8
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"9"}
                                    onClick={this.handleChange}>
                              9
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-right">
                            <button className="btn btn-block func cal-btn"
                                    name={"-"}
                                    onClick={this.handleChange}>
                              -
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 cal-col cal-left">
                            <button className="btn btn-block cal-btn"
                                    name={"4"}
                                    onClick={this.handleChange}>
                              4
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"5"}
                                    onClick={this.handleChange}>
                              5
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"6"}
                                    onClick={this.handleChange}>
                              6
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-right">
                            <button className="btn btn-block func cal-btn"
                                    name={"+"}
                                    onClick={this.handleChange}>
                              +
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 cal-col cal-left">
                            <button className="btn btn-block cal-btn"
                                    name={"1"}
                                    onClick={this.handleChange}>
                              1
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"2"}
                                    onClick={this.handleChange}>
                              2
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"3"}
                                    onClick={this.handleChange}>
                              3
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-right">
                            <button className="btn btn-block equals cal-btn"
                                    name={"="}
                                    onClick={this.handleChange}>
                              =
                            </button>
                        </div>
                    </div>
                    <div className="row bot">
                        <div className="col-sm-6 cal-col cal-left">
                            <button className="btn btn-block cal-btn"
                                    name={"0"}
                                    onClick={this.handleChange}>
                               0
                            </button>
                        </div>
                        <div className="col-sm-3 cal-col cal-left cal-right">
                            <button className="btn btn-block cal-btn"
                                    name={"."}
                                    onClick={this.handleChange}>
                              .
                            </button>
                        </div>
                      </div>
                </div>  
              </div>
          </div>  
        </div>
        <div className="game-space" />
      </div>  
    );
  }
}
