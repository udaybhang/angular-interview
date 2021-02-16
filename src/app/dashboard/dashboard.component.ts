import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any = [];
  constructor(private bridgeService: BridgeService) { }

  ngOnInit(): void {
    this.bridgeService.getData().subscribe(data=>{
      this.userData = data;
    }, (error)=>{
      alert(error.error.message);
    })
  }

}
