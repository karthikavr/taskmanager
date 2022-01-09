import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpObj:HttpClient) { }
  data1:any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpObj.get('http://svrpay.tk/f/v3/gloify.php?q=users').subscribe((res)=>{
    this.data1 = res;
    });
  }

  p:number=1;
  searchkey:string="";;
}
