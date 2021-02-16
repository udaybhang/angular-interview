import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private bridgeService: BridgeService, private router: Router) { }
  register() {
    this.bridgeService.postData(this.model).subscribe(data=>{
      console.log(data);
      this.router.navigate(['dashboard']);

    },(error)=>{
      alert(error.error.message);
    })
  }
  ngOnInit(): void {
  }

}
