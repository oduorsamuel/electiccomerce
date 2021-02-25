import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  model = {
    email : '',
    password: ''
  };
  showcart = true;
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  count: string;
  constructor(private modalservice: ModalService) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngDoCheck(){
    if (localStorage.getItem('count')){
      this.count = localStorage.getItem('count');
    }else{
      this.count = '0';
    }
  }

  openModal(id){
    this.modalservice.open(id);
  }
  closeModal(id){
    this.modalservice.close(id);
  }
}
