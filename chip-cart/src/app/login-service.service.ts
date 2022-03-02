import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("https://localhost:44385/api/User/signUp/", data)
      .pipe(map((res: any) => { return res }))
  }
  getUser() {
    return this.http.get<any>("https://localhost:44385/api/User/get_all_users")
      .pipe(map((res: any) => { return res }))
  }
  getUserById(id: number) {
    return this.http.get<any>("https://localhost:44385/api/User/get_user_by_id/" + id)
      .pipe(map((res: any) => { return res }))
  }
  updateUser(data: any, id: number) {
    return this.http.put<any>("https://localhost:44385/api/User/updateUser/",  data)
      .pipe(map((res: any) => { return res }))
  }
  deleteUser(id: number) {
    return this.http.delete<any>("https://localhost:44385/api/User/deleteUser/" + id)
      .pipe(map((res: any) => { return res }))
  }
}
