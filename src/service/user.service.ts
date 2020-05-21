import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post("https://reqres.in/api/users", data );
  }

  update(id, data) {
    return this.http.put("https://reqres.in/api/users/" + id, data );
  }

  delete(id) {
    return this.http.delete("https://reqres.in/api/users/" + id);
  }
}
