import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {StudentsService} from "../services/students.service";
import {MatButton} from "@angular/material/button";
import {Student} from "../model/students.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatTable,
    MatColumnDef,
    MatSort,
    MatHeaderCell,
    MatCell,
    MatPaginator,
    MatRow,
    MatHeaderRow,
    MatHeaderCellDef,
    MatCellDef,
    HttpClientModule,
    MatTableModule,
    MatButton
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit , AfterViewInit{


  public payments : any;
  public displayedColumns = ['id','date','type','status','amount','firstName','Action'];
  public dataSource : any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private studentService : StudentsService , private router: Router) {
  }
  ngOnInit(): void {

    this.studentService.getAllPayement()
      .subscribe({
        next : value => {
          this.payments = value;
          this.dataSource = new MatTableDataSource(this.payments);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error : err => {
          console.log(err);
        }
      })
  }

  ngAfterViewInit(): void {
  }

  studentPayement(student: Student) {
  this.router.navigateByUrl(`/admin/student-detail/${student.code}`)
  }
}
