import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type LevelCard = {
  key: 'referee' | 'technical' | 'gradeExaminer' | 'kataExaminer';
  title: string;
  badgeLabel: string;
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
      currencyPercent: 72,
      progressionPercent: 35,
    },
    {
      key: 'technical',
      title: 'Technical Official Level',
      badgeLabel: 'Technical Official',
      currencyPercent: 55,
      progressionPercent: 20,
    },
    {
      key: 'gradeExaminer',
      title: 'Grade Examiner Level',
      badgeLabel: 'Senior Examiner',
      currencyPercent: 40,
      progressionPercent: 10,
    },
    {
      key: 'kataExaminer',
      title: 'Kata Examiner Level',
      badgeLabel: 'Kata Examiner',
      currencyPercent: 25,
      progressionPercent: 5,
    },
  ];

  trackByTitle(_index: number, item: LevelCard) {
    return item.key;
  }

  ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
}
