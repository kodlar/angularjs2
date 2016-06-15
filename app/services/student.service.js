System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StudentService;
    return {
        setters:[],
        execute: function() {
            StudentService = (function () {
                function StudentService() {
                }
                StudentService.prototype.takeAllStudent = function () {
                    return [
                        { name: 'okan', lesson: 'math' },
                        { name: 'ozan', lesson: 'scince' },
                        { name: 'elif', lesson: 'religion' }
                    ];
                };
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=student.service.js.map