import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type LevelCard = {
  key: 'referee' | 'technical' | 'gradeExaminer' | 'kataExaminer';
  title: string;
  badgeLabel: string;
  badgeImage?: string;
  currencyPercent: number;
  progressionPercent: number;
};

@Component({
  selector: 'app-referee-section',
  templateUrl: './referee-section.component.html',
  styleUrls: ['./referee-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RefereeSectionComponent {
  // MVP: placeholder data. Later this should come from the backend.
  cards: LevelCard[] = [
    {
      key: 'referee',
      title: 'Referee Level',
      badgeLabel: 'Area Referee',
      badgeImage: 'assets/images/badges/area-referee.png',
      currencyPercent: 72,
      progressionPercent: 35,
    },
    {
      key: 'technical',
      title: 'Technical Official Level',
      badgeLabel: 'Technical Official',
      badgeImage: 'assets/images/badges/technical-official.png',
      currencyPercent: 55,
      progressionPercent: 20,
    },
    {
      key: 'gradeExaminer',
      title: 'Grade Examiner Level',
      badgeLabel: 'Senior Examiner',
      badgeImage: 'assets/images/badges/senior-examiner.png',
      currencyPercent: 40,
      progressionPercent: 10,
    },
    {
      key: 'kataExaminer',
      title: 'Kata Examiner Level',
      badgeLabel: 'Senior Kata Examiner',
      badgeImage: 'assets/images/badges/senior-kata-examiner.png',
      currencyPercent: 25,
      progressionPercent: 5,
    },
  ];

  trackByTitle(_index: number, item: LevelCard) {
    return item.key;
  }

}
