System.register(['angular2/testing', "../app/app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, app_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            testing_1.describe('AppComponent', function () {
                var app = null;
                testing_1.beforeEach(function () {
                    app = new app_component_1.AppComponent();
                });
                testing_1.it('Should have a title', function () {
                    testing_1.expect(app.title).toEqual('Tour of Heroes');
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map