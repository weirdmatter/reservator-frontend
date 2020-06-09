import { Injectable, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { HttpService }                                        from '../http/http.service';
import { Reservation }                                        from 'src/shared/interfaces/reservation.interface';
import { NewReservation }                                     from 'src/shared/interfaces/new-reservation.interface';
import { Overlay, OverlayRef }                                            from '@angular/cdk/overlay';
import { NewReservationControllerComponent } from '../../../app/new-reservation/controller/new-reservation.controller.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  invokeNewReservationComponent : EventEmitter<void>;
  private overlayRef            : OverlayRef;

  constructor(private http : HttpService, private overlay: Overlay, private componentFactoryResolver: ComponentFactoryResolver) {
    this.invokeNewReservationComponent = new EventEmitter<void>();
    this.overlayRef = this.overlay.create(
      {
        hasBackdrop: false,
        positionStrategy: this.overlay.position().global().bottom().right()
      }
    );
  }

  /**
   * Fetches all reservations
   */
  getReservations(dates ?: object) : Promise<Reservation[]> {
    return dates
      ? this.http.get(`reservations?start=${dates['start']}&end=${dates['end']}`)
      : this.http.get('reservations');
  }

  /**
   * Deletes the reservation containing the given group id
   * @param reservation_group_id An id to identify resources which are part of the same reservation
   */
  deleteReservation(reservation_group_id : string) : Promise<any> {
    return this.http.delete(`reservations/delete/${reservation_group_id}`);
  }

  /**
   * Creates a new reservation
   * @param data The reservation data to be sent to the backend
   */
  createReservation(data : NewReservation) : Promise<Reservation> {
    return this.http.post('reservations', data);
  }

  /**
   * Creates a new instance of the NewReservationComponent, displaying it to the user
   */
  openNewReservationComponent() {
   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewReservationControllerComponent);
   const portal           = new ComponentPortal(componentFactory.componentType);
   const component        = this.overlayRef.attach<NewReservationControllerComponent>(portal);

   component.instance.close.subscribe(() => {
     this.overlayRef.detach();
   });
  }
}
