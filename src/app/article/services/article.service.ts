import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`

    return this.http.delete<{}>(url)
  }
}
