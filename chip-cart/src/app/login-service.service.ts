import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/app/users/add/", data)
      .pipe(map((res: any) => { return res }))
  }
  getUser() {
    return this.http.get<any>("http://localhost:3000/app/users")
      .pipe(map((res: any) => { return res }))
  }
  getUserById(id: number) {
    return this.http.get<any>("http://localhost:3000/app/users/" + id)
      .pipe(map((res: any) => { return res }))
  }
  updateUser(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/app/users/update/" + id, data)
      .pipe(map((res: any) => { return res }))
  }
  deleteUser(id: number) {
    return this.http.delete<any>("http://localhost:3000/app/users/delete/" + id)
      .pipe(map((res: any) => { return res }))
  }
}
