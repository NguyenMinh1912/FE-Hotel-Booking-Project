import {Injectable} from '@angular/core';
import {AuthenicationRequest} from "../../request/auth";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../response";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
  private readonly URL = environment.BACK_END_HOST + '/api/login';


  constructor(private httpClient: HttpClient) {
  }


  login(request: AuthenicationRequest): Observable<AuthenticationResponse> {
    console.log(this.URL)
    return this.httpClient.post<AuthenticationResponse>(this.URL, request);
  }


  isLogin(): boolean {
    return false;
  }
}
