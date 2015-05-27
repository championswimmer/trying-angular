/**
 * Created by championswimmer on 26/5/15.
 */
function AppComponent() {}
AppComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'my-app'
    }),
    new angular.ViewAnnotation({
        template: '<h1>My first Angular 2 App</h1>'
    })
];
document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(AppComponent);
});