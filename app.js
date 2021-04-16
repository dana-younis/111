'use strict';
let c1= new Cookie(Seattle,23,65,6.3,);
let c2= new Cookie(Tokyo,3,24,1.2);
let c3= new Cookie(Dubai,11	,38,3.7);
let c4= new Cookie(Paris,20,38,	2.3);
let c5= new Cookie(Lima,2,16,4.6);

const hours = ['6am','7am' ,'8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
function randomNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; }


  function Cookie(name,MinCust,MaxCust,AvgCookie){
      name=this.name;
      MinCust=this.MinCust;
      MaxCust=this.MaxCust;
      AvgCookie=this.AvgCookie;
      r=[];
      m=[];
      total=0;

  }

     Cookie.prototype.gitR= function() {
      for (let index = 0; index <hours.length; index++) {
      this.r.push(randomNumber(this.MinCust,this.MaxCust))   
      }
      console.log(this.r); }

      Cookie.prototype.gitm=function(){
          for (let index = 0; index <hours.length; index++) {Math.floor(
            this.m.push(this.r[i]*this.AvgCookie));
            this.total=this.total+this.m[i];
          }
              console.log( this.m); }
        
    
    
      render=function (){
        let perant=document.gi

    }          




   




