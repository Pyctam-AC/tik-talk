import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems = [
    {
      icon: 'home',
      label: 'Моя страница',
      link: 'profile/me'
    },
    {
      icon: 'chats',
      label: 'Чаты',
      link: 'chats'
    },
    {
      icon: 'search',
      label: 'Поиск',
      link: 'search'
    },
  ]

}
