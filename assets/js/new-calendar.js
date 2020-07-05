document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      now: '2020-06-07',
      selectable: true,
      selectHelper: true,
      editable: true, // enable draggable events
      aspectRatio: 1.8,
      scrollTime: '00:00', // undo default 6am scrollTime
      headerToolbar: {
        left: 'today prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineThreeDays,timeGridWeek,dayGridMonth'
      },
      initialView: 'resourceTimelineDay',
      views: {
        resourceTimelineThreeDays: {
          type: 'resourceTimeline',
          duration: { days: 3 },
          buttonText: '3 days'
        }
      },
      resourceAreaHeaderContent: 'Rooms',
      resources: [
        { id: 'a', title: 'Auditorium A' },
        { id: 'b', title: 'Auditorium B', eventColor: 'green' },
        { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
        { id: 'd', title: 'Auditorium D', children: [
          { id: 'd1', title: 'Room D1' },
          { id: 'd2', title: 'Room D2' }
        ] },
        { id: 'e', title: 'Auditorium E' },
        { id: 'f', title: 'Auditorium F', eventColor: 'red' },
        { id: 'g', title: 'Auditorium G' },
        { id: 'h', title: 'Auditorium H' },
        { id: 'i', title: 'Auditorium I' },
        { id: 'z', title: 'Auditorium J' }
      ],
      events: [
        { id: '1', resourceId: 'b', start: '2020-06-07T02:00:00', end: '2020-06-07T07:00:00', title: 'event 1' },
        { id: '2', resourceId: 'c', start: '2020-06-07T05:00:00', end: '2020-06-07T22:00:00', title: 'event 2' },
        { id: '3', resourceId: 'd', start: '2020-06-06', end: '2020-06-08', title: 'event 3' },
        { id: '4', resourceId: 'e', start: '2020-06-07T03:00:00', end: '2020-06-07T08:00:00', title: 'event 4' },
        { id: '5', resourceId: 'f', start: '2020-06-07T00:30:00', end: '2020-06-07T02:30:00', title: 'event 5' }
      ],
      select: function(arg) {
        console.log(
          'select callback',
          arg.startStr,
          arg.endStr,
          arg.resource ? arg.resource.id : '(no resource)'
        );
      },
      dateClick: function(arg) {
        console.log(
          'dateClick',
          arg.date,
          arg.resource ? arg.resource.id : '(no resource)'
        );
      }
    });

    calendar.render();

    document.getElementById('select-G').addEventListener('click', function() {
      calendar.select({
        start: '2020-06-07T02:00:00',
        end: '2020-06-07T07:00:00',
        resourceId: 'g'
      });
    });

    document.getElementById('select-unspecified').addEventListener('click', function() {
      calendar.select('2020-06-07T02:00:00', '2020-06-07T07:00:00');
    });

  });