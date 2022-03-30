import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title="ElaZıĞ DoğU aNadOlU bölGesiNdeDir.";

  turkishUpperCaseVal:any;
  today:any;
  cashValue=1323.34;
  percentVal=325.12;
  cash=1500;

  objectVal:Object = {
    foo:"bar",
    baz:"qux",
    nested: {xyz:3 , numbers: [1,2,3,4,5]}
  };
  cities = [
    "istanbul",
    "izmir",
    "ankara",
    "edirne",
    "mersin",
    "antalya",
    "samsun"
  ];
  cityName="İstanbul";
  constructor() { }

  ngOnInit(): void {
    this.today=new Date().toDateString();
    this.turkishUpperCaseVal=this.title.toLocaleUpperCase("tr-TR");
  }

}
