import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from 'src/libs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  rolesData;

  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.getRoles();
  }
  getRoles() {
     this.roleService.getAllRoles().subscribe(data => {
       this.rolesData=data;
     })
  }

  addNewRole(roleForm :NgForm) {
    this.roleService.addRole(roleForm.value).subscribe(data => {
      this.getRoles();
    },
    error => {
      alert("something went wrong!");
    }
    );
  }
  deleteRole(roleForm:NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(data => {
      this.getRoles();
    },
    error => {
      alert("something went wrong!");
    }
    );
  }

}
