import React from 'react';

const buttons2 =  [
      [{name: "Ans",   type: "other"},
       {name: "sin-1", type: "sci", smol: "-1"},
       {name: "cos-1", type: "sci", smol: "-1"},    
       {name: "tan-1", type: "sci", smol: "-1"},
       {name: "CE",    type: "func"}],
      [{name: "2nd",   type: "letter"},
        {name: "^",    type: "other"},        
        {name: "(",    type: "other"},
        {name: ")",    type: "other"},
        {name: "÷",    type: "ops"}],
      [{name: "Del",   type: "red"},
       {name: "7",     type: "num"},
       {name: "8",     type: "num"},
       {name: "9",     type: "num"},
       {name: "×",     type: "ops"}],
      [{name: "log",   type: "other"},
       {name: "4",     type: "num"},
       {name: "5",     type: "num"},
       {name: "6",     type: "num"},
       {name: "-",     type: "ops"}],
      [{name: "ln",    type: "other"},
       {name: "1",     type: "num"},
       {name: "2",     type: "num"},
       {name: "3",     type: "num"},
       {name: "+",     type: "ops"}],
      [{name: "e",     type: "other"},
       {name: "0",     type: "num"},
       {name: ".",     type: "num"},
       {name: "=",     type: "func"},
       {name: "Enter", type: "other"}]];

const buttons =  [
      [{name: "Shift", type: "func"},
       {name: "sin",   type: "sci"},
       {name: "cos",   type: "sci"},    
       {name: "tan",   type: "sci"},
       {name: "CE",    type: "func"}],
      [{name: "2nd",   type: "letter"},
        {name: "^",    type: "other"},
        {name: "(",    type: "other"},
        {name: ")",    type: "other"},
        {name: "÷",    type: "ops"}],
      [{name: "Del",   type: "red"},
       {name: "7",     type: "num"},
       {name: "8",     type: "num"},
       {name: "9",     type: "num"},
       {name: "×",     type: "ops"}],
      [{name: "√",     type: "other"},
       {name: "4",     type: "num"},
       {name: "5",     type: "num"},
       {name: "6",     type: "num"},
       {name: "-",     type: "ops"}],
      [{name: "π",     type: "other"},
       {name: "1",     type: "num"},
       {name: "2",     type: "num"},
       {name: "3",     type: "num"},
       {name: "+",     type: "ops"}],
      [{name: "e",     type: "other"},
       {name: "0",     type: "num"},
       {name: ".",     type: "num"},
       {name: "=",     type: "func"},
       {name: "Enter", type: "other"}]];

 const letters =  [
      [{name: "Shift", type: "other"}, 
       {name: "A",     type: "letter"},
       {name: "B",     type: "letter"},    
       {name: "C",     type: "letter"},       
       {name: "AC",    type: "red"}],
      [{name: "D",     type: "letter"},     
       {name: "E",     type: "letter"},
       {name: "F",     type: "letter"},
       {name: "G",     type: "letter"},
       {name: "H",     type: "letter"}],
      [{name: "I",     type: "letter"},
       {name: "J",     type: "letter"},
       {name: "K",     type: "letter"},
       {name: "L",     type: "letter"},
       {name: "M",     type: "letter"}],
      [{name: "N",     type: "letter"},
       {name: "O",     type: "letter"},
       {name: "P",     type: "letter"},
       {name: "Q",     type: "letter"},
       {name: "R",     type: "letter"}],
      [{name: "S",     type: "letter"},
       {name: "T",     type: "letter"},
       {name: "U",     type: "letter"},
       {name: "V",     type: "letter"},
       {name: "W",     type: "letter"}],
      [{name: "X",     type: "letter"},
       {name: "Y",     type: "letter"},
       {name: "Z",     type: "letter"},
       {name: "=",     type: "func"},
       {name: "Enter", type: "other"}]];



export default class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttons: buttons,
      shifted: false,
      second: false,
      input: "",
      error: "",
      store: "",
      vars: [{name: "e",value: Math.E},{name: "π", value: Math.PI},{name: "X", value: "2"}],
      output: []
    }
    this.doTheMath = this.doTheMath.bind(this);
    this.error = this.error.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputToScreen = this.inputToScreen.bind(this);
    this.solve = this.solve.bind(this);
  }
  error(str)
  {
    this.setState({error: str});
  }
  handleInput(e)
  {
    //console.log(e.target.value);
    let input = this.state.input;
    let assignTo = "";
    if( (e.target.value !="-" && this.opsCheck(e.target.value) && input.length == 0) || (input == "-" && e.target.value=="-"))
    {
      if(this.state.output.length > 0)
      {
        input+=this.state.output[this.state.output.length-1].line;
      }
      else
      {
        this.error("ERROR 1: INVALID EQUATION");
        return;
      }
    }
    if(this.state.error != "")
      this.setState({error: ""});
    if( (input.indexOf("--") != -1 && e.target.value =="-") 
     || (this.opsCheck(input[input.length-1]) && e.target.value ==")")
     || (this.opsCheck(e.target.value) && e.target.value!="-" && input[input.length-1] == "(")
     || (input[input.ength-1] != "-" && this.opsCheck(input[input.length-1]) && this.opsCheck(e.target.value) && e.target.value != "-") ) 
    {
      this.error("ERROR 2: CONSECUTIVE OPERATORS");
      return;
    }
    if(   (input.length == 0 && e.target.value ==".")
      || (input.length > 0 && !this.numCheck(input[input.length-1]) && e.target.value=="."))
      input+="0";
    switch(e.target.value){
      case "2nd":{
        if(!this.state.second)
          this.setState({buttons: buttons2, second: true});
        else
          this.setState({buttons: buttons, second: false});
        return;
      }
      case "Ans":{
        //console.log("Trying to get answer");
        if(this.state.output.length==0)
          return;
        else if(this.state.output[this.state.output.length]!="NaN")
        {
          input+=this.state.output[this.state.output.length-1].line;
          this.setState({input: input});
          return;
        }  
        return;
      }
      case "Shift":{
        if(!this.state.shifted)
         this.setState({buttons: letters, shifted: true});
        else
         this.setState({buttons: buttons, shifted: false});
        return; 
      }
      case "log":{
        input += "log(";
        this.setState({input: input});
        return;
      }
      case "ln":{
        input += "ln(";
        this.setState({input: input});
        return;
      }
      case "sin-1":{
        input += "sin-1(";
        this.setState({input: input});
        return;
      }
      case "cos-1":{
        input += "cos-1(";
        this.setState({input: input});
        return;
      }
      case "tan-1":{
        input += "tan-1(";
        this.setState({input: input});
        return;
      }  
      case "sin":{
        input += "sin(";
        this.setState({input: input});
        return;
      }
      case "cos":{
        input += "cos(";
        this.setState({input: input});
        return;
      }
      case "tan":{
        input += "tan(";
        this.setState({input: input});
        return;
      }
      case "√":{
        input += "√(";
        this.setState({input: input});
        return;
      }
      case "=":{
        if(this.state.input.indexOf("=") == -1)
        {
          this.setState({input: input+"="});
          return;
        }
        else
        {
          this.setState({error: 'ERROR 3: MULTIPLE "="'})
          return;
        }
      }
      case "CE":{
        this.setState({input: ""});
        return;
      }  
      case "AC":{
        this.setState({
          error: "ALL VARIABLES RESET", input: "", output:[],
          buttons: buttons,
          shifted: false,
          vars: [{name: "e",value: Math.E},{name: "π", value: Math.PI}]
        });
        return;
      }
      case "Last":{
        if(this.state.output.length==0)
          return;
        else{
          input+=this.state.output[this.state.output.length-1].line;
          this.setState({input: input});
          return;
        }
      }
      case "Del":{
        if(input.length > 0)
        { 
          if(input=="cos(" || input == "tan(" || input == "sin(" || input=="√(" ||
             input=="log(" || input == "ln("  || input=="cos-1(" || input == "tan-1("
             || input == "sin-1(")
            input = "";
          else if(  input.substr(input.length-6,input.length-1) == "cos-1("
                 || input.substr(input.length-6,input.length-1) == "sin-1("
                 || input.substr(input.length-6,input.length-1) == "tan-1(")
          {
            input = input.substr(0,input.length-6);
          }
          else if(  input.substr(input.length-4,input.length-1) == "cos("
                 || input.substr(input.length-4,input.length-1) == "sin("
                 || input.substr(input.length-4,input.length-1) == "tan("
                 || input.substr(input.length-4,input.length-1) == "log(")
          {
            input = input.substr(0,input.length-4);
          }
          else if(input.substr(input.length-3,input.length-1) == "ln(")
          {
            input = input.substr(0,input.length-3);
          }
          else if(input.substr(input.length-2,input.length-1) == "√(")
          {
            input = input.substr(0,input.length-2);
          }
          else{
            input = input.substr(0,input.length-1);
          }  
          this.setState({input: input});
          return;
        }
        else
          return;
      }  
      case "Enter":{
        this.handleSubmit();
        return;
      } 
      default: {
        if(e.target.value == "-" && this.state.output.length > 0 && input.length==0
          && this.state.output[this.state.output.length-1].line != "NaN")
          input+=this.state.output[this.state.output.length-1].line;
        input += e.target.value;
        if(/\d+\.\d+\./g.test(input))
        {
          this.error('ERROR 4: MULTIPLE "."');
          return;
        }
        /*if(e.target.value==undefined)
        {
          console.log(e.target);
          return;
        }*/
        this.setState({input: input});
        return;
      }
    }
  }
  handleSubmit()
  {
    let input    = this.state.input;
    let assignTo = "";
    if((input.indexOf(")") < input.indexOf("("))||(input.lastIndexOf(")") < input.lastIndexOf("(")))
    {
      this.error("ERROR 5: INVALID EXPRESSION");
      return;
    }
    //Check for missing
    let leftCount  = 0;
    let rightCount = 0;
    for(let i=0;i<input.length;i++)
    {
      if(input[i] == "(")
        leftCount++;
      if(input[i] == ")")
        rightCount++;
    }
    if(leftCount<rightCount)
    {
      this.setState({error: 'ERROR 6: MISSING "(" '});
      return;
    }
    if(leftCount>rightCount)
    {
      this.setState({error: 'ERROR 6: MISSING ")" '});
      return;
    }
    if(/[ABCDEFGHIJKLMNOPQRSTUVWXYZeπ]/g.test(input))
    {
      let letterCheck = input.split(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZeπ]/);
      //check for letter clusteres
      let letterCount = 0;
      let undefinedCount = 0;
      let undefinedVar = "";
      for(let l=0;l<letterCheck.length;l++)
      {
        if(letterCheck[l].length > 1)
        {
          this.setState({error: "ERROR 7: MISSING OPERATORS"});
          return;
        }
        if(letterCheck[l] != "")
        {
          let check = false;
          for(let v=0;v<this.state.vars.length;v++)
          {
            if(this.state.vars[v].name == letterCheck[l])
              check = true;
          }
          if(!check)
          {
            undefinedCount++;
            undefinedVar = letterCheck[l];
          } 
          letterCount++;
        }        
      }
      if((undefinedCount == 1 || letterCount == 1) && input.indexOf("=") != -1)
      {
        console.log("TRYING TO ASSIGN VARIABLE");
        let assignment=input.split("=");
        if(assignment[0].length!=1 && assignment[1].length!=1)
        {
          this.error("ERROR 8: INVALID ASSIGNEMENT");
          return;
        } 
        else if(this.opsCheck(assignment[0]) || this.opsCheck(assignment[1])
            || this.altOpsCheck(assignment[0]) || this.altOpsCheck(assignment[0]))
        {
          this.error("ERROR 8: INVALID ASSIGNEMENT");
          return;
        }
        else if((assignment[0].length!=1 && assignment[1].length!=1 )
          && ((assignment[0].length==1 && this.numCheck(assignment[0]))
          || (assignment[1].length==1 && this.numCheck(assignment[1])))) 
        {
          this.error("ERROR 8: INVALID ASSIGNEMENT");
          return;
        }
        else
        {
          console.log("undefined var "  + undefinedVar);
          if(assignment[0].length == 1 && undefinedVar == assignment[0])
          {
            assignTo = assignment[0];
            input    = assignment[1];
          }
          else if(undefinedVar == assignment[1])
          {
            assignTo = assignment[1];
            input    = assignment[0];
          }
          else{
            this.error("ERROR 9: INVALID ASSIGNMENT");
            return;
          }
        }
      }
      else
      {
        for(let m=0;m<letterCheck.length;m++)
        {
          let check = false;
          if(letterCheck[m] == "")
            check = true;
          for(let n=0;n<this.state.vars.length;n++)
          {
            if(this.state.vars[n].name == letterCheck[m])
              check = true;
          }
          if(!check)
          {
            this.error("ERROR 10: " + letterCheck[m] + " IS UNDEFINED"); 
            return;
          }
        }
      }
    }  
    else if(input.indexOf("=")!=-1)
    {
      this.error("ERROR 11: INVALID ASSIGNMENT");
      return;
    }
    console.log("looks good to me!");
    if(this.opsCheck(input[input.length-1]) || this.altOpsCheck(input[input.length-1])
       && input[input.length-1]!= ")")
    {
      this.error("ERROR 16: INVALID EXPRESSION");
      return;
    }
    let split = input.split("");
    let arr = [];
    let num = ""
    //Put everything into an array
    while(split.length>0)
    {
      let last = arr[arr.length-1];
      if(this.opsCheck(split[0]) || this.altOpsCheck(split[0]))
      {
        if(num!="")
        {
          arr.push(parseFloat(num));
          num="";
        }  
        arr.push(split.shift());
      }
      else if(this.numCheck(split[0]) || split[0]== ".")
      {
        num+=split.shift();  
      }  
      else if(/[sct]/.test(split[0]))
      {
        let op = split.shift();
        op+=split.shift();
        op+=split.shift();
        if(split[0]=="-")
        {
          op+=split.shift();
          op+=split.shift();
        }
        arr.push(op);
      }
      else if(split[0]=="l")
      {
        let op = split.shift();
        op+=split.shift();
        if(op.indexOf("n") == -1)
          op+=split.shift();
        arr.push(op);
      }
      else if(/[ABCDEFGHIJKLMNOPQRSTUVWXYZeπ]/.test(split[0]))
      {
        let letter = split.shift();
        if(num!="")
        {
          arr.push(parseFloat(num));
          num = "";
          arr.push("×");
        }
        for(let v=0;v<this.state.vars.length;v++)
        {
          if(this.state.vars[v].name == letter)
            arr.push(this.state.vars[v].value);
        }
        if(split[0]!= undefined && 
           ( this.numCheck(split[0]) 
          || split[0]=="(" 
          || /[ABCDEFGHIJKLMNOPQRSTUVWXYZeπ]/.test(split[0])))
          arr.push("×");
      }
      else
        arr.push(split.shift());
      let pushed = arr[arr.length-1]
      if( 
           (!this.opsCheck(pushed) && !this.altOpsCheck(pushed) && split[0]=="(")
        || ( pushed == ")" && split[0] == "(")
        || ( pushed == ")" && split.length > 0 
             && !this.opsCheck(split[0]) && !this.altOpsCheck(split[0]))
        || ((typeof(pushed)=='number' || num != "" ) && split[0]=="(")
        )
       { 
         if(num!="")
         {
           arr.push(parseFloat(num));
           num="";
         }
         arr.push("×");
       }  
    }
    if(num!="")
      arr.push(parseFloat(num));
    this.rpn(arr,assignTo);
    //console.log(arr);
  }
  rpn(arr,to)
  {
    console.log("trying to reverse polish");
    console.log(arr);
     //https://en.wikipedia.org/wiki/Shunting-yard_algorithm
    let queue = [];
    let stack = [];
    while(arr.length > 0)
    {
      if(!this.opsCheck(arr[0]) && !this.altOpsCheck)
      {
         queue.push(arr.shift());
      }
      else if(this.PEDMAS(arr[0]) < 5)
      {         
         if(stack.length != 0)
         {
           while(stack.length> 0 && this.PEDMAS(stack[stack.length-1]) >= this.PEDMAS(arr[0]))
           {
              queue.push(stack.pop());
           }           
         }
         stack.push(arr.shift());
      }
      //3+4*2/(1-5)^2^3 https://en.wikipedia.org/wiki/Reverse_Polish_notation
      else
      {   
        if(arr[0]==")")
        {
          this.error("ERROR 12: INVALID EXPRESSION");
          return;
        }
        stack.push(arr.shift());
        while(stack.indexOf("(") != -1)
        {
          while(arr[0] != ")")
          {
            if(this.opsCheck(arr[0]) || this.altOpsCheck(arr[0]))
            {
              if(stack[stack.length-1]!="(" && this.PEDMAS(arr[0]) < this.PEDMAS(stack[stack.length-1]))
                queue.push(stack.pop());
              stack.push(arr.shift());
            }  
            else
              queue.push(arr.shift());
          }
          arr.shift();
          while(stack[stack.length-1] != "(")
          {
            queue.push(stack.pop());
          }  
          stack.pop();
        } 
      }
    }
    while(stack.length > 0)
    {
      queue.push(stack.pop());
    }
    console.log(queue);
    this.solve(queue,to);
  }
  doTheMath(a,b,operator)
  {
    console.log("doing the math " + a + " " + operator + " " + b);
    switch(operator){
       case "^": return Math.pow(a,b);
       case "÷": {
         if(b==0)
         {
           this.error("ERROR 13: DIVIDE BY 0");
           return "ERROR 13: DIVIDE BY 0";
         }
         else  
          return a/b;
       }  
       case "+": return a+b;
       case "-": return a-b;
       case "×": return a*b;
      default : {
        console.log("whoops, you broke it");
        return false;
      }  
    }
  }
  solve(arr,to)
  {
    console.log("trying to solve");
    let stack = [];
    for(let i=0;i<arr.length;i++)
    {
      if(!this.opsCheck(arr[i])&&!this.altOpsCheck(arr[i]))
        stack.push(arr[i]);
      else if(this.altOpsCheck(arr[i]))
      {
        if(stack.length > 0)
           stack[stack.length-1] = this.doMoreMath(stack[stack.length-1],arr[i])
        else
          stack[0] = this.doMoreMath(0,arr[i])
      }
      else
      {
        let b = stack.pop();
        let a = 0;
        if(stack.length > 0)
          a = stack.pop();
        stack.push(this.doTheMath(a,b,arr[i]));
      }
    }
    console.log(stack);
    if(stack.length > 1 || this.state.error!="" || stack.length == 0)
    {
      this.error("ERROR 14: INVALID EQUATION");
    }  
    else if(this.state.error=="")
    {
      let eq = [];
      let line = "";
      for(let o=0;o<this.state.input.length;o++)
      {
        if(o<29)
          line += this.state.input[o];
        else
        {
          eq.push({line: line, style: "left",type:"out"});
          line = this.state.input[o];
        }
      }
      if(line!="")
        eq.push({line: line, style: "left",type:"out"});
      eq.push({line: stack[0].toString(), style: "right",type:"out"});    
      let output = this.state.output;
      while(eq.length > 0){
        output.push(eq.shift());
        if(output.length > 5)
          output.shift(); 
      }
      console.log(JSON.stringify(output));
      let vars = this.state.vars;
      if(to!="")
      {
        console.log("assigning " + stack[0].toString() + " to " + to);
        vars.push({name: to, value: stack[0]});
      }
      this.setState({output: output,input: "",vars: vars});
    }  
  }
  numCheck(str)
  {
    switch(str){
      case "9": return true;
      case "8": return true;
      case "7": return true;
      case "6": return true;
      case "5": return true;
      case "4": return true;
      case "3": return true;
      case "2": return true;
      case "1": return true;
      case "0": return true;
      default : return false;
    }
  }
  PEDMAS(str)
  {
     switch(str){
       case "sin": return 4;
       case "cos": return 4;
       case "tan": return 4;
       case "sin-1": return 4;
       case "cos-1": return 4;
       case "tan-1": return 4;
       case "log": return 4;
       case "ln": return 4;  
       case "√": return 4;
       case "^": return 3;
       case "÷": return 2;
       case "+": return 1;
       case "-": return 1;
       case "×": return 2;
       default: return 5;
     }
  }
  altOpsCheck(str)
  {
    switch(str){
      case "√": return true;
      case "(": return true;
      case ")": return true;
      case "sin": return true;
      case "cos": return true;
      case "tan": return true;
      case "sin-1": return true;
      case "cos-1": return true;
      case "tan-1": return true;
      case "log": return true;
      case "ln": return true;
      default : return false;
    }    
  }
  doMoreMath(a,operator)
  {
     console.log("doing more math " + operator + " of " + a);
     switch(operator){
      case "√"  : return Math.sqrt(a);
      case "sin": return Math.sin(a);
      case "cos": return Math.cos(a);
      case "tan": return Math.tan(a);
      case "sin-1": return Math.asin(a);
      case "cos-1": return Math.acos(a);
      case "tan-1": return Math.atan(a);
      case "ln": return Math.log(a);
      case "log": return Math.log(a)/Math.log(10);
      default : return false;
    }    
  }
  opsCheck(str)
  {
    switch(str){
      case "÷": return true;
      case "+": return true;
      case "-": return true;
      case "×": return true;
      case "^": return true;
      default : return false;
    }
  }
  inputToScreen()
  {
    //7 lines
    //30 character
    let output = [];
    for(let i=0;i<this.state.output.length;i++)
    {
      output.push(this.state.output[i]);
    }
    while(output.length > 6)
    {
      output.shift();
    }
    let input  = this.state.input;
    let line   = "";
    for(let i=0;i<input.length;i++)
    {
      if(line.length<29)
        line += input[i];
      else{
        output.push({line: line, style: "left",type:"in"});
        if(output.length > 6 && output[0].type == "out")
          output.shift();
        line = input[i];
      }
    }
    output.push({line: line, style: "left",type:"in"});
    if(output.length > 6 && output[0].type == "out")
      output.shift();
    if(output.length<=6){
      while(output.length<6)
      {
         output.push({line: ""});
      }
      //console.log(output);
      output.push({line: this.state.error, type: "in", style: "left"});
      return output;
    }
    else{
      this.error("ERROR, OVERFLOW");
      this.setState({input: ""});
    }
  }
  render()
  {
    return(
      <div className="text-center container-fluid cal-body">
      <center>  
      <div className="calc-pad">
        <div className="calc-body text-center container-fluid">
        <div className="calc-logo calc-num">
          <div className="row">
            <div className="col-sm-6 text-left calc-brand">
               Cap'm Pedma's 
            </div>  
            <div className="col-sm-6 text-right calc-brand">
               HMS-469
            </div>  
          </div>  
        </div>    
        <div className="calc-shadow">
          <div className="calc-screen">
            {this.inputToScreen().map((d,i)=>
               d.line!="" 
               ?  <div key={"line " + i} className={"calc-" + d.style}>{d.line}</div>
               : <br/>
             )}
          </div>
        </div>
        <div className="calc-buttons">
          {this.state.buttons.map((d,i)=>
             <div key={"row " + i} className="row">
               {d.map((dd,ii)=>
                  <div className={"col calc-pos-"+ii}>
                    <button className = {"btn calc-btn calc-"+ dd.type}
                            value     = {dd.name}
                            smol      = {dd.smol}
                            onClick   = {this.handleInput}>     
                      {dd.name}</button>  
                  </div>      
               )}                     
             </div>                       
           )}
        </div>  
      </div>
     </div>  
        </center>   
     </div>   
    )
  }
}