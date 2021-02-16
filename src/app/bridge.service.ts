import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  formData:any = []
  constructor(private httpClient: HttpClient) { }

  postData(obj: any) {
    return this.httpClient.post('http://localhost:3005/api/user/signUp', obj);
    // return this.formData.push
  }
  getData() {
    return this.httpClient.get('http://localhost:3005/api/user/listUser');
    // return this.formData.push
  }
}
