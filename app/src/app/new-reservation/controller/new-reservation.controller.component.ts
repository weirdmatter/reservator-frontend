import { Component, OnInit, EventEmitter } from '@angular/core';
import { ReservationService } from '../../../shared/services/reservations/reservation.service';
import { NewReservationConfig } from 'src/shared/interfaces/new-reservation-config.interface';
import { CollaboratorService } from '../../../shared/services/collaborators/collaborator.service';
import { ResourceService } from '../../../shared/services/resources/resource.service';
import { FormGroup } from '@angular/forms';
import { NewReservation } from '../../../shared/interfaces/new-reservation.interface';
import { Reservation } from 'src/shared/interfaces/reservation.interface';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.controller.component.html',
  styleUrls: ['./new-reservation.controller.component.sass'],
  providers: [DatePipe]
})
export class NewReservationControllerComponent implements OnInit {

  isVisible       : Boolean;
  close           : EventEmitter<void>;
  presenterConfig : NewReservationConfig;

  constructor(
    private reservations  : ReservationService,
    private collaborators : CollaboratorService,
    private resources     : ResourceService,
    private datePipe      : DatePipe,
    private snackbar      : MatSnackBar)
  {
    this.isVisible  = false;
    this.close      = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.buildPresenterConfig();
  }

  ngOnDestroy(): void {
    console.log('Destruindo component de nova reserva');
    this.reservations.invokeNewReservationComponent.unsubscribe();
  }

  async buildPresenterConfig() {
    const collaborators = await this.collaborators.getCollaborators();
    const resources     = await this.resources.getResources();

    this.presenterConfig = {
      collaborators : collaborators,
      resources     : resources
    };
  }

  async saveReservation(data : FormGroup) {

    const collaborator = data.get('collaborator').value;
    const reservations = data.controls.resources['controls'].map((formGroup) => {
      return {
        resource_id : formGroup.controls.resource.value,
        amount      : formGroup.controls.amount.value,
        begin_date  : this.datePipe.transform(formGroup.controls.beginDate.value, 'yyyy-MM-dd'),
        end_date    : this.datePipe.transform(formGroup.controls.endDate.value, 'yyyy-MM-dd')
      }
    });

    const newReservation : NewReservation = {
      collaborator_id : collaborator,
      resources       : reservations
    };

    this.reservations.createReservation(newReservation)
      .then((res : Reservation) => {
        window.location.reload()
      })
      .catch((err) => {
        console.error('ERRO AO FAZER RESERVA: ', err);
        this.snackbar.open('Erro ao criar reserva.', 'Ok', {duration: 5000});
    });
  }

  destroyView() {
    this.close.emit();
  }

}
