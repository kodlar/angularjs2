System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.takeAllCourse = function () {
                    return [
                        { name: 'c#', hours: 900 },
                        { name: 'c++', hours: 800 },
                        { name: 'objective c', hours: 700 }
                    ];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map