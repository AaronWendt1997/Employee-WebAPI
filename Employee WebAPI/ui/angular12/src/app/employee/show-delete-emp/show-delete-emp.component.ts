import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-delete-emp',
  templateUrl: './show-delete-emp.component.html',
  styleUrls: ['./show-delete-emp.component.css']
})
export class ShowDeleteEmpComponent implements OnInit {

  constructor(private service:SharedService) {
    this.ModalTitle="";
   }

  EmployeeList:any=[];

  ModalTitle: string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfHire:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
