import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fecha =Date();
  grupo = "1A";
  asunto=this.grupo+" "+this.fecha;
  cuerpo:any;
  Asitencias=[];
  lista=["Pedro","Paco","De la mar","Ximeno","Hernan"];
  preparado=[];
  constructor(private barcodeScanner: BarcodeScanner, private emailComposer: EmailComposer ) {}
scan(){

  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.Asitencias.push(barcodeData.text)
   }).catch(err => {
       console.log('Error', err);
   });
}


enviar(){
  this.Asitencias.sort();
  this.cuerpo=this.Asitencias;
  this.emailComposer.getClients().then((apps: []) => {
    // Returns an array of configured email clients for the device
 });
 
 this.emailComposer.hasClient().then( (isValid: boolean) => {
  if (isValid) {
    // Now we know we have a valid email client configured
    // Not specifying an app will return true if at least one email client is configured
  }
 });
 
 this.emailComposer.hasAccount().then((isValid: boolean) => {
  if (isValid) {
    // Now we know we have a valid email account configured
  }
 });
 
 this.emailComposer.isAvailable().then( (available: boolean) => {
  if(available) {
    // Now we know we can send an email, calls hasClient and hasAccount
    // Not specifying an app will return true if at least one email client is configured
  }
 });
 
 let email = {
   to: 'angelmr.222b@gmail.com',
   subject: this.asunto,
   body: this.cuerpo,
   isHtml: true
 }
 
 // Send a text message using default options
 this.emailComposer.open(email);


}




}
