import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter, withDebugTracing
} from '@angular/router';
import {  AppRoutingModule, routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';
import { QuestionService } from './demos/dynamicForms/question/question.service';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter
     (routes, 
      //withDebugTracing()
    ), 
    provideNgxMask(), QuestionService,
    AuthGuard,
    RegisterGuard
    ],
  
};
