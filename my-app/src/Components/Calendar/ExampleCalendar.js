import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar';
import events from './events';
import * as dates from './dates';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
