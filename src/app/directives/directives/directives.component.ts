import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title=false;
  name:string="";
  username="";

  cities = [
    {
      id:1,
      name:"İstanbul",
      region:"Marmara"
    },
    {
      id:2,
      name:"İzmir",
      region:"Ege"
    },
    {
      id:3,
      name:"Samsun",
      region:"Karadeniz"
    },
  {
    id:4,
    name:"Elazığ",
    region:"Doğu Anadolu"

  }
  ];
  color="";

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
  this.title=!this.title;
}
}
