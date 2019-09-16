import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, BehaviorSubject, Observable} from 'rxjs';

import { Menu } from './slide-menu.model';

@Injectable({
  providedIn: 'root'
})
export class SlideMenuService {

  private serverUrl = '';
  private loading = false;
  private loadingChanged = new BehaviorSubject<boolean>(false);
  private httpSubscription: Subscription;
  private isSuccessfullyCompleted = false;
  private apiContent: any = null;


  constructor(private http: HttpClient) { }

  public resetData(){
    this.updateLoading(false);
    this.isSuccessfullyCompleted = false;
    this.apiContent = null;
    this.cancelRequest();
  }

  private cancelRequest(){
    if(this.httpSubscription) {
      if (!this.httpSubscription.closed){
        this.httpSubscription.unsubscribe;
      }
    }
  }

  public getLoading(): Observable<boolean> {
    return this.loadingChanged.asObservable();
  }

  public updateLoading(loading: boolean){
    this.loading = loading;
    this.loadingChanged.next(this.loading);
  }

  public hasSuccessfullyCompleted(){
    return this.isSuccessfullyCompleted;
  }

  public getContent(){
    return this.apiContent;
  }

  public call(){
    this.updateLoading(true);
    const fullUrl = this.serverUrl;
    
    // this.httpSubscription = this.http.get(`${fullUrl}`, {withCredentials:true}).subscribe(
    //   (response:any) => {
    //     this.apiContent = new Menu(response);
    //     this.isSuccessfullyCompleted = true;
    //     this.updateLoading(false);
    //   },
    //   (error: any) => {
    //     this.apiContent = new Menu(error);
    //     this.isSuccessfullyCompleted = false;
    //     this.updateLoading(false);
    //   }
    // );

    this.apiContent = new Menu([
      {
        id: '1',
        display: 'Home',
        hint: 'Home Test',
        pid: null,
        level: 1,
        hasChildren: false,
        children: [],
        type: 'ROUTE',
        action: '/home',
        target: null,
        disabled: false,
        class: '',
        eid: ''
      },
      {
        id: '2',
        display: 'Resources',
        hint: 'Resources Test',
        pid: null,
        level: 1,
        hasChildren: true,
        children: [
          {
            id: '2.1',
            display: 'Google',
            hint: 'www.google.com',
            pid: '2',
            level: 2,
            hasChildren: false,
            children: [],
            type: 'URL',
            action: 'http://www.google.com',
            target: '_blank',
            disabled: false,
            class: '',
            eid: ''
          },
          {
            id: '2.2',
            display: 'Yahoo!',
            hint: 'www.yahoo.com',
            pid: '2',
            level: 2,
            hasChildren: false,
            children: [],
            type: 'URL',
            action: 'http://yahoo.com',
            target: '_blank',
            disabled: false,
            class: '',
            eid: ''
          }
        ],
        type: 'DRILLDOWN',
        action: null,
        target: null,
        disabled: false,
        class: '',
        eid: ''
      }
    ]);

    this.isSuccessfullyCompleted = true;
    this.updateLoading(false);
  }

}
