const dateInput = $('#date-input');
const calendar = $('#kalender');
let selectedDate = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function buildCalendar(year, month) {
    const now = new Date();
    const montInName = (monthNumber) => {
        let newMonth
        switch (monthNumber) {
            case 1:
                newMonth = 'Januari'
                break;
            case 2:
                newMonth = 'Februari'
                break;

            case 3:
                newMonth = 'Maret'
                break;

            case 4:
                newMonth = 'April'
                break;

            case 5:
                newMonth = 'Mei'
                break;

            case 6:
                newMonth = 'Juni'
                break;
            case 7:
                newMonth = 'Juli'
                break;
            case 8:
                newMonth = 'Augustus'
                break;
            case 9:
                newMonth = 'September'
                break;
            case 10:
                newMonth = 'Oktober'
                break;
            case 11:
                newMonth = 'November'
                break;
            case 12:
                newMonth = 'Desember'
                break;
            default:
                return;
        }
        return newMonth;
    }

    let calendarHTML = '<div class="kalendar-nav">';
    calendarHTML += '<span class="kalendar-nav-month">' + (montInName(month + 1).toUpperCase()) + " " + year + '</span>';
    calendarHTML += '<div class="kalendar-nav-buttons-wrapp">';
    calendarHTML += '<button id="prev-month"><img src="./assets/img/icon/ic-change-month-prev.svg" alt="prev" width="24" height="24"></button>';
    calendarHTML += '<button id="next-month"><img src="./assets/img/icon/ic-change-month-next.svg" alt="next" width="24" height="24"></button>';
    calendarHTML += '</div>';
    calendarHTML += '</div>';
    calendarHTML += '<table>';
    calendarHTML += '<thead><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>';
    calendarHTML += '<tbody>';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += '<td></td>';
            } else if (day > daysInMonth) {
                break;
            } else {
                let classes = '';
                if (day === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
                    classes += ' today';
                }
                if (selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
                    classes += ' selected';
                }
                calendarHTML += `<td class="${classes}">${day}</td>`;
                day++;
            }
        }
        calendarHTML += '</tr>';
    }

    calendarHTML += '</tbody></table>';
    calendar.html(calendarHTML);

    calendar.find('td').click(function () {
        if ($(this).text()) {
            selectedDate = new Date(year, month, $(this).text());
            const formattedDate = formatDate(selectedDate);
            dateInput.val(formattedDate);
            calendar.toggleClass('hidden');
        }
    });

    $('#prev-month').click(function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        buildCalendar(currentYear, currentMonth);
    });

    $('#next-month').click(function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        buildCalendar(currentYear, currentMonth);
    });
}
function formatDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}
function build() {
    $("#date-input").on('click', function (e) {
        buildCalendar(currentYear, currentMonth);
        calendar.toggleClass('hidden');
        $(".kanal-list").addClass("hidden");
    })
    $(document).click(function (event) {
        if (!$(event.target).closest('.selectControl').length) {
            calendar.addClass('hidden');
        }
    });
    calendar.on('click', function (event) {
        event.stopPropagation();
    });

    dateInput.on('change', function () {
        selectedDate = new Date(dateInput.val() + 'T00:00:00');
        currentYear = selectedDate.getFullYear();
        currentMonth = selectedDate.getMonth();
        buildCalendar(currentYear, currentMonth);
    });
}

export function calender() {
    if ($("#kalender").length > 0) {
        build();
    }
}