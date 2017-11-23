import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataProviderService {
    private webServiceUrl = '';
    constructor(private http: Http) { }

    getAll(): Promise<Response> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const url = this.webServiceUrl;
        return this.http
        .get(url)
        .toPromise()
        .then((response) => {
          return response.json().data as Response[];
        })
        .catch(this.handleError);
    }

    delete(): Promise<Response> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = '';

        return this.http
          .delete(url, { headers: headers })
          .toPromise()
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg || error);
      }
}
