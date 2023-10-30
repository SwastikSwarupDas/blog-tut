import { Component } from '@angular/core';
import {NgForm,FormControl,FormGroup,Validators} from  '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-tut';
  userData:any={};

  getData(data:NgForm){
    console.warn(data);
    this.userData=data;
  }

  display = false

  toggle(){
    this.display=!this.display;
  }

  list:any[]=[];

  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list)
  }

  deleteTask(id:number)
  {
    this.list=this.list.filter(item=>item.id!==id)
  }

  data = 20;

  updateChild(){
    this.data= Math.floor(Math.random()*10)
  }

  userDetails = [
    {name:'Anil Sidhu',email:'anil@test.com'},
    {name:'Bhasker Verma',email:'bhasker@test.com'},
    {name:'Sam Sidhu',email:'samsidhu@test.com'},
    {name:'nigga singh balle balle',email:'nsbb@test.com'},
    {name:'hood paaji hip hop',email:'hphh@test.com'},
  ]

  datax = "x";
  updateData(item:string)
  {
    console.warn(item)
    this.datax=item;
  }

  name:any;

  getVal(item:any){
    console.warn(item);
  }

  userLogin(item:any){
    console.warn(item);
  }

  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  }
  )

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }
}