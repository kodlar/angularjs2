import {Component} from 'angular2/core'
import {CourseService} from '../services/course.service'
import {GrowOnfocusDirective} from '../directives/grow-onfocus.directive'
@Component({
    selector:'lesson',
    template:`<h2> Dersler </h2>
    Son Güncellenme Zamanı: {{LocalTime}}
    <div><b>&nbsp;&nbsp;Yeni Kurs:</b></div>
    <div>&nbsp;&nbsp;<input type="text" growonFocus style="width:120px"/></div>
    <ul>
        <li *ngFor="#course of courses">
            {{course.name}} : {{course.hours}} saatlik eğitim.
        </li>
    </ul>
    `,
    providers : [CourseService],
    directives : [GrowOnfocusDirective]
})

export class LessonsComponent{
  private time : string;
  
  public get LocalTime() : string {
      return this.time;
  }
  
  public set LocalTime(v : string){
      this.time = v;
  }
  
  courses;
  
  constructor(courserService: CourseService){
      var d = new Date();
      this.LocalTime = d.toLocaleDateString();
      this.courses = courserService.takeAllCourse();
  }
  
/*  
  public courses = [
        { name: 'c#', hours : 900},
        { name: 'c++', hours : 800},
        { name: 'objective c', hours : 700}
        ]
  */
}