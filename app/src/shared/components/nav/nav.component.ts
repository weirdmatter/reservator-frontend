import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  @ViewChild('drawer') drawer;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  sidenavIsOpen : boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.sidenavIsOpen = false;
  }

  onMenuButtonClicked() {
    this.drawer.toggle();
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }
}
