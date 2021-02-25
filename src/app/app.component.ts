import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = {
    email : '',
    password: ''
  };
  showcart = true;
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  constructor(private modalservice: ModalService) { }
  ngOnInit() {
    // if (this.userService.isLoggedIn()) {
    // this.router.navigateByUrl('/dashboard/home');
    // }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // this.userService.login(form.value).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     this.userService.setToken(res.token);
    //     const data = {
    //       UserName: form.value.email,
    //       LogType: 'Login'
    //     };
    //     this.router.navigateByUrl('/dashboard/home');
    //   },
    //   err => {
    //     this.toastr.error(err.error.message);
    //   }
    // );
  }

  openModal(id){
    this.modalservice.open(id);
  }
  closeModal(id){
    this.modalservice.close(id);
  }
}
