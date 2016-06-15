import {Component} from 'angular2/core';
import {LessonsComponent} from './components/lessons.component'
import {StudentsComponent} from './components/students'
@Component({
    selector: 'my-app',
    //template: '<h1>Hoş Geldiniz!</h1><lesson></lesson>',
    templateUrl: 'app/templates/home/app.html',
    directives :[LessonsComponent, StudentsComponent]
})
export class AppComponent { }
