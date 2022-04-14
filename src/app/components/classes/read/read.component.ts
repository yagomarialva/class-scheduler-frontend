import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Class } from 'src/app/model/classe.model';
import { ClassesServiceService } from '../../services/classes-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  classes: Class[] = [];
  displayedColumns = ['id', 'student', 'doc', 'professor']
  dataSource = new MatTableDataSource(this.classes);

  constructor(private classesService: ClassesServiceService) { }

  ngOnInit(): void {
    this.classesService.read().subscribe(classes => {
      // this.pacients = pacients
      this.dataSource.data = classes;
      console.log(this.dataSource.data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
