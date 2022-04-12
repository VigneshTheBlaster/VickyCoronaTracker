import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private router: Router,private hero: HeroService){
  }
  public open=false;
  public img="signup.png";
  public v=0;
  public k=0;
  public y=0;
  public gs="";
  public rot2="";
  title = 'covid';
  public rot1="VickySignup";
  public sg="Sign_Up";
  public masss="";
  ngOnInit(){
    if(window.location.pathname=="/" || window.location.pathname=='/VickySignup')
    {
      sessionStorage.removeItem("usr");
      sessionStorage.removeItem("pwd");
    }
    if(window.location.pathname=="/vignesh"){
      if(sessionStorage.getItem("usr")!=null && sessionStorage.getItem("pwd")!=null){
        this.rot1="";
        this.sg="Log_Out";
        this.img="logout.png";
        this.masss="none";
        this.rot2="19MIS0072";
        this.gs="State_Detials";
        this.k=1;
      }
    }
    if(window.location.pathname=='/19MIS0072'){
      if(sessionStorage.getItem("usr")!=null && sessionStorage.getItem("pwd")!=null){
        this.rot1="";
        this.sg="Log_Out";
        this.img="logout.png";
        this.masss="none";
        this.rot2="vignesh";
        this.gs="Country_Detials";
        this.k=1;
      }
    }

    if(window.location.pathname=='/VickySignup'){
      this.rot1="";
      this.sg="Log_In";
      this.img="login.png";
      this.v=1;
      this.masss="none";
    }

}

  Ontsk(){
    if(window.location.pathname=='/vignesh' || window.location.pathname!='/19MIS0072'){
       this.router.navigate(['vignesh']);
       this.rot1="";
       this.sg="Log_Out";
       this.img="logout.png";
       this.masss="none";
       this.k=1;
       this.rot2="19MIS0072";
       this.gs="State_Detials";
    }
   }

  vicky(){
    if(this.v==0){
    this.rot1="";
    this.sg="Log_In";
    this.img="login.png";
    this.v=1;
    this.masss="none";
    }
    else if(this.v==1){
      this.rot1="VickySignup";
      this.sg="Sign_Up";
      this.img="signup.png";
      this.v=0;
      this.masss="block";
    }

    if((this.k==1 && window.location.pathname!='/vignesh') 
    || (this.k==1 && window.location.pathname!='/19MIS0072')){
      this.rot1="VickySignup";
      this.sg="Sign_Up";
      this.img="signup.png";
      this.k=0;
      this.v=0;
      this.masss="block";
      this.rot2="";
      this.gs="";
      sessionStorage.removeItem("usr");
      sessionStorage.removeItem("pwd");
    }
  
  }

  tsk(){
    if(this.y==1){
      this.open=!this.open;
      this.rot2="19MIS0072";
      this.gs="State_Detials";
      this.y=0;
    }
    else{
      if(1==1){
      this.open=!this.open;
      this.rot2="vignesh";
      this.gs="Country_Detials";
      this.y=1;
      }
    }
  }
  
}





























/*Ontsk(){
   if(window.location.pathname=='/vignesh' || window.location.pathname!='/19MIS0072'){
    if(this.ser.done1()==1){
      this.router.navigate(['vignesh'])
      this.rot1="";
      this.sg="Log_Out";
      this.img="logout.png";
      this.masss="none";
      this.k=1;
      this.rot2="19MIS0072";
      this.gs="State_Detials";
      this.ser.done2();
   }
  }
}*/