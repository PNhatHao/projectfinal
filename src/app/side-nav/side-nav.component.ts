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
      title: 'Xem chứng chỉ',
      link: 'diplomas/course',
    },
    {
      title: 'Quản lí chứng chỉ',
      link: 'diplomas/maintenance',
    },
    {
      title: 'Quản lí văn bằng',
      link: 'diplomas/categories',
    },
    {
      title: 'Hoàn thành chứng chỉ',
      link: 'diplomas/finish',
    },
    {
      title: 'Quản lí nhân viên',
      link: 'users/list',
    },
    {
      title: 'Quản lí đăng kí',
      link: 'users/all-orders',
    },
    {
      title: 'Đã đăng kí',
      link: 'users/order',
    },
  ];
}
