import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-vicky-signup',
  templateUrl: './vicky-signup.component.html',
  styleUrls: ['./vicky-signup.component.scss'],
  providers:[HeroService]
})
export class VickySignupComponent implements OnInit {

  constructor(public servv: HeroService) { }
  ngOnInit(): void {
  }
  public User_Name="";
  public Password="";
  public cpa;
  public First_Name="";
  public Last_Name="";
  public Phone_Number="";
  public email="";
  public Occupation="";
  public Select_State="";
  public v;
  signup(){
    this.v=
          {
            "User_Name":this.User_Name,
            "Password":this.Password,
            "First_Name":this.First_Name,
            "Last_Name":this.Last_Name,
            "Phone_Number":this.Phone_Number,
            "Select_State":this.Select_State,
            "email":this.email,
            "Occupation":this.Occupation
          };
    if(this.Password.length>=8 && this.Password!=""){
      if(this.cpa==this.Password){
        if(this.Phone_Number.length==10 && this.Phone_Number!=""){
        if(this.User_Name!=""&&this.First_Name!=""&&this.Last_Name!=""&&this.email!=""&&this.Occupation!=""&&this.Select_State!=""){
          this.v=
          {
            "User_Name":this.User_Name,
            "Password":this.Password,
            "First_Name":this.First_Name,
            "Last_Name":this.Last_Name,
            "Phone_Number":this.Phone_Number,
            "Select_State":this.Select_State,
            "email":this.email,
            "Occupation":this.Occupation
          };
          this.servv.st(this.v).subscribe((data) =>{
            if(data=='1'){
            alert('Signed_Up Successfully');
            }
            else{
            alert('Not Saved Some Server Problem');
            }
          });
          this.User_Name="";
          this.Password="";
          this.cpa="";
          this.First_Name="";
          this.Last_Name="";
          this.Phone_Number="";
          this.Occupation="";
          this.email="";
        }
        else{
          alert("All fields are required");
        }
      }
      else{
        alert("Phone number should be exactly 10");
      }
    }
      else{
        alert("Password and conform-password not matched");
      }
    }
    else{
      alert("Password should be atleast 8");
    }
  }

}









/*url="";
  dis="none";
  chg(e){
    if(e.target.files){
      var t=new FileReader();
      t.readAsDataURL(e.target.files[0]);
      t.onload=(event:any)=>{
        this.url= event.target.result;
        this.dis="block"
      }
    }
  } */