import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

import { ProfileSectionComponent } from '../../components/profile-section/profile-section.component';
import { RefereeSectionComponent } from '../../components/referee-section/referee-section.component';
import { AdminSectionComponent } from '../../components/admin-section/admin-section.component';
import { AthleteSectionComponent } from '../../components/athlete-section/athlete-section.component';

register();

type SectionKey = 'profile' | 'referee' | 'admin' | 'athlete';

interface DashboardCard {
  key: SectionKey;
  title: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    ProfileSectionComponent,
    RefereeSectionComponent,
    AdminSectionComponent,
    AthleteSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiperEl', { static: false })
  swiperEl?: ElementRef<HTMLElement & { swiper?: any; initialize?: () => void }>;

  selectedSection: SectionKey = 'profile';

  cards: DashboardCard[] = [
    {
      key: 'profile',
      title: 'Profile',
      image: 'assets/images/profile-placeholder.png',
    },
    {
      key: 'referee',
      title: 'Referee',
      image: 'assets/images/referee-placeholder.png',
    },
    {
      key: 'admin',
      title: 'Admin Bod',
      image: 'assets/images/admin-placeholder.png',
    },
    {
      key: 'athlete',
      title: 'Judo Athlete',
      image: 'assets/images/athlete-placeholder.png',
    },
  ];

  ngAfterViewInit(): void {
    const swiperElement = this.swiperEl?.nativeElement;

    if (!swiperElement) {
      return;
    }

    Object.assign(swiperElement, {
      init: false,
      initialSlide: 0,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      grabCursor: true,
      speed: 450,
      spaceBetween: -18,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        scale: 0.86,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        768: {
          spaceBetween: -28,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 220,
            scale: 0.88,
            modifier: 1,
            slideShadows: false,
          },
        },
      },
    });

    swiperElement.initialize?.();

    swiperElement.addEventListener('swiperslidechange', (event: Event) => {
      const customEvent = event as CustomEvent;
      const swiper = customEvent.detail?.[0];

      if (!swiper) {
        return;
      }

      const activeIndex = swiper.realIndex ?? 0;
      const activeCard = this.cards[activeIndex];

      if (activeCard) {
        this.selectedSection = activeCard.key;
      }
    });
  }

  slideToSection(section: SectionKey): void {
    const swiper = this.swiperEl?.nativeElement?.swiper;
    const index = this.cards.findIndex((card) => card.key === section);

    if (!swiper || index < 0) {
      this.selectedSection = section;
      return;
    }

    if (typeof swiper.slideToLoop === 'function') {
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }

    this.selectedSection = section;
  }

  trackByCardKey(index: number, card: DashboardCard): SectionKey {
    return card.key;
  }
}