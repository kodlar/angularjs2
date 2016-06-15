System.register(['angular2/core', '../services/student.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_service_1;
    var StudentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentsComponent = (function () {
                function StudentsComponent(studentService) {
                    this.Name = 'Erdem';
                    this.students = studentService.takeAllStudent();
                }
                Object.defineProperty(StudentsComponent.prototype, "Name", {
                    get: function () {
                        return this.name;
                    },
                    set: function (v) {
                        this.name = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                StudentsComponent = __decorate([
                    core_1.Component({
                        selector: 'student',
                        template: "<h2> Se\u00E7ili \u00F6\u011Frenci {{name}} okulu b\u0131rakt\u0131 ! </h2><ul>\n        <li *ngFor=\"#student of students\">\n            {{student.name}} : {{student.lesson}} ald\u0131\u011F\u0131 ders.\n        </li>\n    </ul>\n    ",
                        providers: [student_service_1.StudentService],
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService])
                ], StudentsComponent);
                return StudentsComponent;
            }());
            exports_1("StudentsComponent", StudentsComponent);
        }
    }
});
//# sourceMappingURL=students.js.map