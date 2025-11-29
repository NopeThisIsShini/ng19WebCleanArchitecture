import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tech-widget',
  imports: [CommonModule],
  templateUrl: './tech-widget.component.html',
  styleUrl: './tech-widget.component.scss'
})

export class TechWidget {
  activeTab: string = 'mobile';

  tabs = [
    { id: 'mobile', label: 'Mobile' },
    { id: 'frontend', label: 'Front End' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cms', label: 'CMS' },
    { id: 'devops', label: 'Cloud & DevOps' }
  ];

  // 🔹 Mobile
  mobileTech = [
    { name: 'Swift', icon: 'https://cdn.simpleicons.org/swift/F05138' },
    { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Android', icon: 'https://cdn.simpleicons.org/android/3DDC84' },
    { name: 'iOS', icon: 'https://cdn.simpleicons.org/ios/000000' }
  ];

  // 🔹 Front End
  frontendTech = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
  ];

  // 🔹 Backend
  backendTech = [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Golang', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/java/007396' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' }
  ];

  // 🔹 Database
  databaseTech = [
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite/003B57' }
  ];

  // 🔹 CMS
  cmsTech = [
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
    { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/96BF48' },
    { name: 'Magento', icon: 'https://cdn.simpleicons.org/magento/EE672F' },
    { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/4353FF' },
    { name: 'Strapi', icon: 'https://cdn.simpleicons.org/strapi/2F2E8B' },
    { name: 'Drupal', icon: 'https://cdn.simpleicons.org/drupal/0678BE' }
  ];

  // 🔹 DevOps
  devopsTech = [
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
    { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/azure/0078D4' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939' }
  ];

  openTab(tabName: string) {
    this.activeTab = tabName;
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab;
  }
}

