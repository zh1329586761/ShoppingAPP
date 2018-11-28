import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,Validators,FormGroup} from "@angular/forms";
/**
 * Generated class for the CeshiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ceshi',
  templateUrl: 'ceshi.html',
})
export class CeshiPage {

    RegisterForm: FormGroup;
    name: any;
    email:any;
    password: any;
    repassword:any;
constructor(public navCtrl: NavController, public navParams: NavParams,
     private formBuilder: FormBuilder) {

        this.RegisterForm = formBuilder.group({
            name: ['', Validators.compose([Validators.required])],
            email:['',Validators.compose([Validators.required,Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            repassword:['',Validators.compose([Validators.required,Validators.minLength(6)])]
        })
        this.name = this.RegisterForm.controls['name'];
        this.email=this.RegisterForm.controls['email'];
        this.password = this.RegisterForm.controls['password'];
        this.repassword=this.RegisterForm.controls['repassword']



}

ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
}





}
