import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from "@angular/router";
import {StudentsService} from "../services/students.service";
import {Payment} from "../model/students.model";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatDivider,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatTable,
    MatHeaderCellDef,
    MatToolbar
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements  OnInit{
   studentsCode!: string;
   StudentPayment!: Array<Payment>;
   PaymentDataSource! :MatTableDataSource<Payment>;
  public displayedColumns = ['id','date','type','status','amount','firstName'];
  constructor(private activeRoute: ActivatedRoute,
              private  studentService: StudentsService,
              private router : Router) {
  }
  ngOnInit(): void {
    this.studentsCode = this.activeRoute.snapshot.params['code'];
    this.studentService.getPaymentStudent(this.studentsCode).subscribe({
   next: value => {
     this.StudentPayment = value;
     this.PaymentDataSource = new MatTableDataSource<Payment>(this.StudentPayment);
   },
      error: err => {console.log(err)}
    })
  }

  newPayement() {
   this.router.navigateByUrl(`/admin/new-payment/${this.studentsCode}`)
  }
}
