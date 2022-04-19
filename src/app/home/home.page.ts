import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data=[];
pruebas=[];
  constructor(private barcodeScanner: BarcodeScanner ) {}
scan(){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.data.push(barcodeData.text)
   }).catch(err => {
       console.log('Error', err);
   });
}

}
