import { Component, OnInit } from '@angular/core';
import { UrlManager } from '../../utils/shared-constants.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  urlMngr: UrlManager;
  constructor(private router: Router) {
    this.urlMngr = new UrlManager();
  }

  ngOnInit(){
    console.log("router : ", this.router);
    console.log("this.router.navigate : ", this.router.navigate)
  }

  navigateTo(url: string) {
    if (url === null || typeof url === 'undefined' || url === '') return;
    this.router.navigate([this.urlMngr.getModuleUrl(url)]);
  }
}
