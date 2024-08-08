import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ArticlePage} from './article.page';
import {CommentComponent} from './comments.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: ArticlePage }
        ])
    ],
    declarations: [
        ArticlePage,
        CommentComponent
    ],
    exports: []
})
export class ArticleModule {
}
