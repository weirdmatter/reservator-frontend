import { Component, OnInit }  from '@angular/core';
import { ReservationService } from '../../../shared/services/reservations/reservation.service';
import { ListingConfig } from '../../../shared/interfaces/listing-config.interface';
import { Reservation }        from 'src/shared/interfaces/reservation.interface';
import { ResourceType } from '../../../shared/enums/resource-type.enum';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.controller.component.html',
  styleUrls: ['./list-reservations.controller.component.sass']
})
export class ListReservationsControllerComponent implements OnInit {

  reservationListingConfig : ListingConfig;

  constructor(private reservations : ReservationService) { }

  ngOnInit(): void {
    this.buildReservationsListingConfig();
  }

  private buildReservationsListingConfig() {
    // const reservations : Reser = await this.reservations.getReservations();
    console.log('aaa')
    const reservations : Reservation[] = [
      {
        reservation_group_id      : 'abcdefg1234567',
        collaborator_registration : 'FINAN_20190411_11',
        total_price               : 135.19,
        resources                 : [
          {
            resource : {
              resource_id   : 13245,
              code          : 'ABC',
              name          : 'Cadeira',
              total_amount  : 55,
              available_amount : 13,
              price: 10,
              type: ResourceType.FURNITURE,
            },
            begin_date : new Date(),
            end_date   : new Date(),
            amount     : 2,
            total_price : 22.00
          },
          {
            resource : {
              resource_id   : 6789,
              code          : 'AAAA',
              name          : 'Sala 03',
              total_amount  : 1,
              available_amount : 1,
              price: 100.73,
              type: ResourceType.ROOM,
            },
            begin_date : new Date(),
            end_date   : new Date(),
            amount     : 1,
            total_price : 100.73
          }
        ],
        creation_date             : new Date()
      },
      {
        reservation_group_id      : 'bbbbbdddddwdadasdw',
        collaborator_registration : 'INF_20130124_3',
        total_price               : 33.21,
        resources                 : [
          {
            resource : {
              resource_id   : 333444,
              code          : 'KDKPOA',
              name          : 'Projetor',
              total_amount  : 30,
              available_amount : 3,
              price: 15.50,
              type: ResourceType.MOBILE_EQUIPMENT,
            },
            begin_date : new Date(),
            end_date   : new Date(),
            amount     : 2,
            total_price : 31.00
          },
          {
            resource : {
              resource_id   : 3312555,
              code          : 'DDAGASD',
              name          : 'Apagador de quadro branco',
              total_amount  : 10,
              available_amount : 1,
              price: 2.21,
              type: ResourceType.MOBILE_EQUIPMENT,
            },
            begin_date : new Date(),
            end_date   : new Date(),
            amount     : 1,
            total_price : 2.21
          }
        ],
        creation_date             : new Date()
      }
    ];

    this.reservationListingConfig = {
      title     : 'Reservas',
      subtitle  : 'Selecione uma data de início e uma data de término para pesquisar por reservas efetuadas entre estes períodos de tempo.',
      hasFilter : true,
      hasAction : true,
      data      : reservations
    }

  }



}
