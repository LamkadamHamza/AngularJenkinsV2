import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Payment, Student} from "../model/students.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private  http : HttpClient) { }


  public  getAllPayement():Observable<Array<Payment>>{

    return this.http.get<Array<Payment>>(`${environment.backendHost}/payments`)
  }

  public  getAllStudent():Observable<Array<Student>>{

    return this.http.get<Array<Student>>(`${environment.backendHost}/students`)
  }


  public  getPaymentStudent(code: string):Observable<Array<Payment>>{

    return this.http.get<Array<Payment>>(`${environment.backendHost}/students/${code}/payments`)
  }

}
