import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtitlityService {
  constructor(public router: Router, public activeRoute: ActivatedRoute) { }

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
}
