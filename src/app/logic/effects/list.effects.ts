import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '../services/list/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
    ADD_NEWS, AddNewsSuccess,
    FETCH_NEWS, FETCH_NEWS_BY_QUERY,
    FetchNews, FetchNewsByQuery,
    FetchNewsFail,
    FetchNewsSuccess, SetLastItem
} from '../actions/list.action';
import {catchError, mergeMap, flatMap} from 'rxjs/operators';

@Injectable()
export class ListEffects {
    @Effect()
    fetchNews$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_NEWS),
            mergeMap((action: FetchNews) => {
                return this.listService.getNews(action.payload)
                    .pipe(flatMap((news: {data}) => [
                            new FetchNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail())))
                    );
            })
        );

    @Effect()
    fetchNewsByQuery$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_NEWS_BY_QUERY),
            mergeMap((action: FetchNewsByQuery) => {
                return this.listService.getNewsByQuery(action.payload)
                    .pipe(flatMap((news: {data}) => [
                            new FetchNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail())))
                    );
            })
        );

    @Effect()
    addNews$: Observable<Action> = this.actions$
        .pipe(ofType(ADD_NEWS),
            mergeMap((action: FetchNewsByQuery) => {
                return this.listService.addNews(action.payload)
                    .pipe(flatMap((news: {data}) => [
                            new AddNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail())))
                    );
            })
        );

    constructor(private actions$: Actions, private listService: ListService) {
    }
}
