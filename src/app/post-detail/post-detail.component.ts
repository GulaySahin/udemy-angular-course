import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  clap=15;

  constructor() { }

  ngOnInit(): void {
  }
  clickClap() {
    console.log("Alkışlandı...");
    this.clap++;
  }

}
