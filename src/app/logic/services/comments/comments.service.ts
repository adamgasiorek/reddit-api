import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

interface CommentsContext {
  category: string;
  id: string;
}

const routes = {
  getComments: (c) => `${environment.serverUrl}/r/${c.category}/comments/${c.id}.json`,
};

@Injectable({ providedIn: 'root' })
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getArticleComments(context: CommentsContext): Observable<Object> {
    return this.httpClient.get(routes.getComments(context));
  }
}
