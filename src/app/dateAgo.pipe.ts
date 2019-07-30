import { PipeTransform, Pipe } from '@angular/core';

import * as moment from 'moment';

@Pipe({
    name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {
    transform(dateStr) {
        const inpueDate = moment(new Date(dateStr));
        const todayDate = moment();

        const days = todayDate.diff(inpueDate, 'd')

        if (days === 0) {
            return 'Today'
        }
        if (days === 1) {
            return 'Yesterday'
        }
        if (days > 1) {
            return days + ' days ago'
        }
        return ''
    }
}