import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'lib-CalendarLib',
  templateUrl: './calendar-lib.component.html'
})
export class CalendarLibComponent implements OnInit, OnChanges {
  @Input() locale: any;

  date2: Date = new Date();

  es = {
    firstDayOfWeek: 1,
    dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Borrar',
  };

  en = {
    firstDayOfWeek: 2,
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    today: 'Today',
    clear: 'Clear',
  };

  constructor(private config: PrimeNGConfig) { }

  @ViewChild("calendar", { static: true }) calendarRef: any;

  ngOnInit() {
    if (this.locale === "en")
      this.config.setTranslation(this.en);
    else {
      this.config.setTranslation(this.es)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}

