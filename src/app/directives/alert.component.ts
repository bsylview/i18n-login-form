import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this._alertService.getMessage().subscribe(message => {
            this.message = message;
         });
    }
}
