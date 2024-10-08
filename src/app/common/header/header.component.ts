import { Component } from '@angular/core';
import { UrlManager } from '../../utils/shared-constants.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  urlMngr: UrlManager;
  constructor(private router: Router) {
    this.urlMngr = new UrlManager();
  }

  navigateTo(url: string) {
    if (url === null || typeof url === 'undefined' || url === '') return;
    this.router.navigate([this.urlMngr.getModuleUrl(url)]);
  }
}
