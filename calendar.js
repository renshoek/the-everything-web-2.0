;(function() {
  function Calendar(target, date, data) {
    var date
    var calendar
    var container

    switch (typeof date) {
      case 'string':
        date = date.split('-')
        date = new Date(date[0], parseInt(date[1], 10) - 1, date[2])
        break
      case 'undefined':
        date = new Date()
        break
      case 'object':
        if (date instanceof Array) {
          data = date
          date = new Date()
        } else {
          date = date
        }
        break
      default:
        throw 'Invalid date type!'
    }

    container = document.querySelector(target)
    calendar = buildTable(date.getFullYear(), date.getMonth())
    container.appendChild(calendar)
    container.appendChild(buildControls(date))

    function buildTable(year, month) {
      var controlDate = new Date(year, month + 1, 0)
      var currDate = new Date(year, month, 1)
      var iter = 0
      var ready = true

      var table = newElement('table')
      var thead = newElement('thead')
      var tbody = newElement('tbody')
      var tr

      if (currDate.getDay() !== 0) {
        iter = 0 - currDate.getDay()
      }

      while (ready) {
        if (currDate.getDay() === 6) {
          if (tr) {
            tbody.appendChild(tr)
          }
          tr = null
        }

        if (!tr) {
          tr = newElement('tr')
        }

        currDate = new Date(year, month, ++iter)

        tr.appendChild(newDayCell(currDate, iter < 1 || +currDate > +controlDate))

        if (+controlDate < +currDate && currDate.getDay() === 0) {
          ready = false
        }

      }

      thead.innerHTML = '<tr>' +
        '<th class="day">Sun</th>' +
        '<th class="day">Mon</th>' +
        '<th class="day">Tue</th>' +
        '<th class="day">Wed</th>' +
        '<th class="day">Thu</th>' +
        '<th class="day">Fri</th>' +
        '<th class="day">Sat</th>' +
        '</tr>'

      table.appendChild(thead)
      table.appendChild(tbody)

      table.className = 'calendar'
      table.setAttribute('cellspacing', 0)
      table.setAttribute('cellpadding', 0)
      table.setAttribute('data-period', year + '-' + (month))

      return table
    }

    function newDayCell(dateObj, isOffset) {
      var td = newElement('td')
      var number = newElement('span')
      var isoDate = dateObj.toISOString()
      isoDate = isoDate.slice(0, isoDate.indexOf('T'))

      number.innerHTML = dateObj.getDate()
      td.className = isOffset ? 'day adj-month' : 'day'
      td.setAttribute('data-date', isoDate)

      td.appendChild(number)

      for (var i = 0; i < data.length; i++) {
        if (data[i].date === isoDate) {
          var item = newElement('span')
          item.style.backgroundColor = data[i].color
          item.className = 'calendar-item'
          td.appendChild(item)
        }
      }

      return td
    }

    function newElement(tagName) {
      return document.createElement(tagName)
    }

    function buildControls(date) {
      var div = newElement('div')
      var prevBtn = newElement('span')
      var nextBtn = newElement('span')

      prevBtn.innerHTML = '&larr;'
      prevBtn.className = 'calendar-control'
      prevBtn.setAttribute('data-calendar-control', 'prev')

      nextBtn.innerHTML = '&rarr;'
      nextBtn.className = 'calendar-control'
      nextBtn.setAttribute('data-calendar-control', 'next')

      div.className = 'calendar-controls'

      div.appendChild(prevBtn)
      div.appendChild(nextBtn)

      removeEventListener(document, 'click', calendarControlClick)
      addEventListener(document, 'click', calendarControlClick)

      function calendarControlClick(evt) {
        evt.preventDefault()
        if (!evt.target.getAttribute('data-calendar-control')) {
          return
        }

        var target = evt.target

        while (target.parentNode) {
          if (target.parentNode === container) {
            break;
          }

          target = target.parentNode

          if (!target) {
            return
          }
        }

        var action = evt.target.getAttribute('data-calendar-control')

        switch (action) {
          case 'prev':
            date = new Date(date.getFullYear(), date.getMonth() - 1, 1)
            break
          case 'next':
            date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
            break
        }

        calendar = buildTable(date.getFullYear(), date.getMonth())

        container.removeChild(container.firstChild)
        container.insertBefore(calendar, container.firstChild)
      }

      return div
    }

    function addEventListener(target, event, handler) {
      if (document.addEventListener) {
        target.addEventListener(event, handler, false)
      } else {
        target.attachEvent('on' + event, handler)
      }
    }

    function removeEventListener(target, event, handler) {
      if (document.removeEventListener) {
        target.removeEventListener(event, handler, false)
      } else {
        target.detachEvent('on' + event, handler)
      }
    }
  }

  this.calendar = Calendar

}).call(this)

const thisYear = new Date().getFullYear()
var data = [{
  date: `${thisYear}-08-15`,
  title: 'Title A',
  color: '#f00'
}, {
  date: `${thisYear}-08-16`,
  title: 'Title B',
  color: '#f0f'
}, {
  date: `${thisYear}-09-10`,
  title: 'Title C',
  color: '#ff0'
}, {
  date: `${thisYear}-09-01`,
  title: 'Title D',
  color: '#0ff'
}]

calendar('#calendar', data)