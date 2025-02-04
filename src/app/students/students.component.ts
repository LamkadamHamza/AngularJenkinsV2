import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {StudentsService} from "../services/students.service";
import {Student} from "../model/students.model";
import {NgForOf} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {Action} from "rxjs/internal/scheduler/Action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    NgForOf,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatTable,
    MatHeaderCellDef,
    MatButton
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

   students! : Array<Student>;



  public displayedColumns = ['id','code','firstName','lastName','programId','Action'];
  public dataSource : any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private studentService: StudentsService , private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe({
      next : value => {

         this.students = value;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error : err => {
         console.log(err);
      }
    })
  }

  protected readonly Action = Action;

  studentPayement(student: Student) {
    this.router.navigateByUrl(`/admin/student-detail/${student.code}`)
  }
}
