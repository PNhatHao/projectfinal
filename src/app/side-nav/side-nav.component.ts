import { Component } from '@angular/core';
import { SideNavItem } from '../models/models.module';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      title: 'view diplomas',
      link: 'diplomas/course',
    },
    {
      title: 'manage books',
      link: 'diplomas/maintenance',
    },
    {
      title: 'manage categories',
      link: 'diplomas/categories',
    },
    {
      title: 'finish diploma',
      link: 'diplomas/finish',
    },
    {
      title: 'view users',
      link: 'users/list',
    },
    {
      title: 'all orders',
      link: 'users/all-orders',
    },
    {
      title: 'my orders',
      link: 'users/order',
    },
  ];
}
