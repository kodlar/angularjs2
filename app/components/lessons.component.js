System.register(['angular2/core', '../services/course.service', '../directives/grow-onfocus.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, grow_onfocus_directive_1;
    var LessonsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (grow_onfocus_directive_1_1) {
                grow_onfocus_directive_1 = grow_onfocus_directive_1_1;
            }],
        execute: function() {
            LessonsComponent = (function () {
                function LessonsComponent(courserService) {
                    var d = new Date();
                    this.LocalTime = d.toLocaleDateString();
                    this.courses = courserService.takeAllCourse();
                }
                Object.defineProperty(LessonsComponent.prototype, "LocalTime", {
                    get: function () {
                        return this.time;
                    },
                    set: function (v) {
                        this.time = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                LessonsComponent = __decorate([
                    core_1.Component({
                        selector: 'lesson',
                        template: "<h2> Dersler </h2>\n    Son G\u00FCncellenme Zaman\u0131: {{LocalTime}}\n    <div><b>&nbsp;&nbsp;Yeni Kurs:</b></div>\n    <div>&nbsp;&nbsp;<input type=\"text\" growonFocus style=\"width:120px\"/></div>\n    <ul>\n        <li *ngFor=\"#course of courses\">\n            {{course.name}} : {{course.hours}} saatlik e\u011Fitim.\n        </li>\n    </ul>\n    ",
                        providers: [course_service_1.CourseService],
                        directives: [grow_onfocus_directive_1.GrowOnfocusDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], LessonsComponent);
                return LessonsComponent;
            }());
            exports_1("LessonsComponent", LessonsComponent);
        }
    }
});
//# sourceMappingURL=lessons.component.js.map