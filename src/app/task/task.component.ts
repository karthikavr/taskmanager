import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private httpObj:HttpClient) { }
  data1:any;
  data2:any;

  ngOnInit(): void {
    this.getUsers();
    this.getTasks();
  }
  msg:any;
  msgs:any;
  ids:any;
  message:string="";
  due_date:string="";
  due_time:string="";
  assigned_to:string="";
  priority:string="";
  blocktype:string="new";
  edit:string="";
  btntext:string="Save Task";

  changeBlock(blockName:string){
    this.blocktype=blockName;
  }

  getUsers(){
    this.httpObj.get('http://svrpay.tk/f/v3/gloify.php?q=users').subscribe((res)=>{
    this.data1 = res;
    this.data1 = this.data1[0].users;
    });
  }

  getTasks(){
    this.httpObj.get('http://svrpay.tk/f/v3/gloify.php?q=tasks').subscribe((response)=>{
    this.data2 = response;
    });
  }

  editTask(id:string){
    this.blocktype='list';
    this.btntext="Update Task";
    this.edit=id;
  }

  deleteTask(id:string){
    var formdata = new FormData();
    formdata.append("taskid", id);
    formdata.append("q", "delete");
    this.httpObj.post("http://svrpay.tk/f/v3/gloify.php", formdata).subscribe(response=>{
    this.ids=id;
    this.msg = response;
    this.msgs = "";
    this.getTasks();
    });
  }

  submitForm() {
    if(this.edit != ""){
    var formdata = new FormData();
    formdata.append("message", this.message);
    formdata.append("due_date", this.due_date+" "+this.due_time+":00");
    formdata.append("assigned_to", this.assigned_to);
    formdata.append("priority", this.priority);
    formdata.append("taskid", this.edit);
    formdata.append("q", "update");
    this.httpObj.post('http://svrpay.tk/f/v3/gloify.php', formdata).subscribe((response) =>{
      this.msgs = response;
      this.msg = "";
      this.edit="";
      this.message="";
      this.due_date="";
      this.assigned_to="";
      this.priority="";
      this.btntext="Save Task";
      this.getTasks();
    });
    }else{
      var formdata = new FormData();
      formdata.append("message", this.message);
      formdata.append("due_date", this.due_date+" "+this.due_time+":00");
      formdata.append("assigned_to", this.assigned_to);
      formdata.append("priority", this.priority);
      formdata.append("q", "create");
      this.httpObj.post('http://svrpay.tk/f/v3/gloify.php', formdata).subscribe((response) =>{
        this.msgs = response;
        this.msg = "";
        this.message="";
        this.due_date="";
        this.assigned_to="";
        this.priority="";
        this.btntext="Save Task";
        this.getTasks();
      });
    }
  }

  p:number=1;
  searchkey:string="";
}