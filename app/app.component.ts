import {Component} from 'angular2/core';
import {LessonsComponent} from './lessons.component'

@Component({
    selector: 'my-app',
    template: '<h1>Hoş Geldiniz!</h1><lesson></lesson>',
    directives :[LessonsComponent]
})
export class AppComponent { }