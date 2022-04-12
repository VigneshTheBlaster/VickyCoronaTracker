import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import { Vignesh } from '../vignesh.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-vicky-login',
  templateUrl: './vicky-login.component.html',
  styleUrls: ['./vicky-login.component.scss'],
})
export class VickyLoginComponent implements OnInit {
  constructor(private router: Router,public serv: HeroService) { 
  }

  ngOnInit():void{
  }
  @Output() vignesh=new EventEmitter();

  public v;
  public y;
  Data:Vignesh[];
  public User_Name="";
  public Password="";
  Onts(){
    if(this.User_Name!="" && this.Password!=""){
      this.v=
      {
        "User_Name":this.User_Name,
        "First_Name":"",
        "Last_Name":"",
        "Password":this.Password,
        "Phone_Number":"",
        "Select_State":"",
        "email":"",
        "Occupation":""
      }
      this.serv.ut(this.v).subscribe((data) =>{
        this.Data=data as Vignesh[];
        if(this.Data.length!=0){
          this.User_Name="";
          this.Password="";
          sessionStorage.setItem("usr",this.User_Name);
          sessionStorage.setItem("pwd",this.Password);
          this.vignesh.emit();
        }
        else{
          this.User_Name="";
          this.Password="";
          alert("UserName or PassWord are wrong!!!");
        }
      });
  }
  else{
    alert("Please Enter UserName and PassWord!!!");
  }
  }
}

