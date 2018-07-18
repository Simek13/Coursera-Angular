import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
  }
}
