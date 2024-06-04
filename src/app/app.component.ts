import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { }

  navigateToSameUrl() {
    this.router.navigate(['hello'], { state: { carNo: Math.random() }, onSameUrlNavigation: 'reload' });
  }
}
