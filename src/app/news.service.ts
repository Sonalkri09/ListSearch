import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map';

// api + 'q=' +input+'&'+'apiKey='+apikey;



@Injectable()
export class NewsService {
	private query: string;
	private API_KEY: string= environment.NEWS_API_KEY;
	private API_URL: string= environment.NEWS_API_URL;
	//private URL: string= this.API_URL+'q='+this.query+'&apiKey='+this.API_KEY;

  constructor(private _http: Http) { }

  getNews(query)
  {
  	return this._http.get(this.API_URL+'q='+query+'&apiKey='+this.API_KEY).map(res => res.json());
  }

}
