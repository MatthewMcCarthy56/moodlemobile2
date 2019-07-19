import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@IonicPage({ segment: 'addon-calendar-new' })
@Component({
    selector: 'page-addon-calendar-new',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'newcalendar.html'
})
export class AddonCalendarNewPage {
  viewDate: Date = new Date();

  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: 'Increments badge total on the day cell',
      color: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
      start: new Date(),
      meta: {
        incrementsBadgeTotal: true
      }
    },
    {
      title: 'Does not increment the badge total on the day cell',
      color: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
      start: new Date(),
      meta: {
        incrementsBadgeTotal: false
      }
    }
  ];

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }
}
