import {Component} from 'angular2/core';
import {StudentService} from '../services/student.service'

@Component({
    selector:'student',
    template:`<h2> Seçili öğrenci {{name}} okulu bıraktı ! </h2><ul>
        <li *ngFor="#student of students">
            {{student.name}} : {{student.lesson}} aldığı ders.
        </li>
    </ul>
    `,
    providers : [StudentService],
})

export class StudentsComponent {
  private name : string;

  public get Name() : string {
      return this.name;
  }

  public set Name(v : string){
      this.name = v;
  }
  students;
  constructor(studentService: StudentService)
  {
    this.Name = 'Erdem';
    this.students = studentService.takeAllStudent();
  }




}
