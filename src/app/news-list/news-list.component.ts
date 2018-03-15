import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
	news: any[];
  newsFound: boolean = false;

  handleSuccess(data){
    this.newsFound = true;
    this.news = data.articles;
    console.log(data.articles);
  }

  handleError(error){
    console.log(error);
  }



  constructor(private _newsService : NewsService) { }

  searchNews(query: string){
    debugger
  	return this._newsService.getNews(query).subscribe(
  			data => this.handleSuccess(data),
  			error => this.handleError(error),
  			() => console.log("good job!!")
  		)
  }

  ngOnInit() {
  }

}
