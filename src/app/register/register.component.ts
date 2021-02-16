import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private bridgeService: BridgeService) { }
  register() {
    this.bridgeService.getData(this.model).subscribe(data=>{
      console.log(data);
    },(error)=>{
      alert(error.error.message);
    })
  }
  ngOnInit(): void {
  }

}
