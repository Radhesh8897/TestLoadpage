import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css']
})
export class UserdemoComponent implements OnInit{
  data: any[] = [];

  constructor(private dataService: SharedserviceService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((result) => {
      console.log(result)
      this.data = result.posts;
    });
  }
  // loadData() {
  //   this.dataService.getDataBatch().subscribe((result) => {
  //     this.data.push(...result);
  //   });
  // }
}
