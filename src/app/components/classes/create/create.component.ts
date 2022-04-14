import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/model/classe.model';
import { ClassesServiceService } from '../../services/classes-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  classes: Class = {
    student:"",
    teacher:"",
    doc:""
  }

  constructor(private classesService: ClassesServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }


  createClass(): void {
    this.classesService.create(this.classes).subscribe(() => {
      this.classesService.showMessage('Aula marcada!')
      this.router.navigate(['/classes'])
    })

  }

  cancel(): void {
    this.router.navigate(['/classes'])
  }


}
