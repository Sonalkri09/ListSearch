import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
	images: any[];

  constructor(private _newsService : NewsService) { }

  searchNews(query: string){
  	return this._newsService.getNews(query).subscribe(
  			data => console.log(data),
  			error => console.log(error),
  			() => console.log("good job!!")
  		)
  }

  ngOnInit() {
  }

}
