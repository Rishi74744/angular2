"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var movie_list_component_1 = require("./movies/movie-list.component");
var movie_guard_service_1 = require("./movies/movie-guard.service");
var movie_filter_pipe_1 = require("./movies/movie-filter.pipe");
var star_component_1 = require("./shared/star.component");
var movie_detail_component_1 = require("./movies/movie-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'movies', component: movie_list_component_1.MovieListComponent },
                { path: 'movie/:id', component: movie_detail_component_1.MovieDetailComponent, canActivate: [movie_guard_service_1.MovieDetailGuard] },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            movie_list_component_1.MovieListComponent,
            movie_filter_pipe_1.MovieFilterPipe,
            star_component_1.StarComponent,
            welcome_component_1.WelcomeComponent,
            movie_detail_component_1.MovieDetailComponent
        ],
        providers: [movie_guard_service_1.MovieDetailGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map