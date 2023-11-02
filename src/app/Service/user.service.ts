import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  proceedLogin(inputData:any){

    return this.http.post('https://fakestoreapi.com/auth/login', inputData )
  }
isLogged(){
 return localStorage.getItem('token') !==null
}

getToken(){
  return localStorage.getItem('token') !==null? localStorage.getItem('token'): ''
}

}
