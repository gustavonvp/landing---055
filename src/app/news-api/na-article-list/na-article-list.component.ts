import { Component, OnInit } from '@angular/core';
import { Article, NewsApiService } from '../news-api.service';




@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css']
})
export class NaArticleListComponent implements OnInit {
  article: Article[];

  constructor(private newsApiService: NewsApiService) { 
    this.newsApiService.pagesOutput.subscribe((article) => {
      this.article = article;
    })
  }

  ngOnInit() {
  }

}
