import { Component, HostListener, OnInit } from '@angular/core';

import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, CommonModule],
    templateUrl: './topbar-widget.component.html',
    styleUrl: './topbar-widget.component.scss'
})
export class TopbarWidget implements OnInit{
    logo: string = 'assets/images/logo.png';
    constructor(public router: Router) {}
    isSticky = false;
    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isSticky = window.scrollY > 50; // Adjust threshold as needed
        console.log('this.isSticky', this.isSticky);
  }
  ngOnInit(): void {
    console.log(this.isSticky, '888888');
    
  }
}

