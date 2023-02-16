import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SpinnerViewComponent } from './spinner-view/spinner-view.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private router: Router, private dialog: MatDialog) { }

  start(message?: string): MatDialogRef<SpinnerViewComponent> {  
        
    const dialogRef = this.dialog.open(SpinnerViewComponent,{  
        disableClose: true ,  
        data: message == ''|| message == undefined ? "Loading..." : message  
    });  
    return dialogRef;  
  };  

stop(ref:MatDialogRef<SpinnerViewComponent>){  
    ref.close();  
}  
}
