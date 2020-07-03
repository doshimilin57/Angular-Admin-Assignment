import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class UtitlityService {
<<<<<<< HEAD
  constructor(public router: Router, public activeRoute: ActivatedRoute, private http: HttpClient) { }
=======
  constructor(public router: Router, public activeRoute: ActivatedRoute) { }
>>>>>>> a3383a676a52733e58fc8d2e28b16217ab62bb85

  goBack() {
    window.history.back();
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  saveUser(data) {
    localStorage.setItem('users', data);
  }

  getDevices() {
    return JSON.parse(localStorage.getItem('devices'));
  }

  saveDevice(data) {
    localStorage.setItem('devices', data);
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  generateId() {
    return (Math.random() * 1000000).toFixed(0);
  }

  getQueryParam() {
    return this.activeRoute.queryParams;
  }

  setAuthenticatedStatus(value) {
    localStorage.setItem('isAuthenticated', value);
  }

  getAuthenticatedStatus() {
    return localStorage.getItem('isAuthenticated');
  }

}
