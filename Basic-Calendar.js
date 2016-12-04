var $ = function (id) { return document.getElementById(id); };

var getMonthNumber = function(){
    var c = new Date();
    var month = new Array(12);
    month[0] = 0;
    month[1] = 1;
    month[2] = 2;
    month[3] = 3;
    month[4] = 4;
    month[5] = 5;
    month[6] = 6;
    month[7] = 7;
    month[8] = 8;
    month[9] = 9;
    month[10] = 10;
    month[11] = 11;
    var t = month[c.getMonth()];
    getMonthText(t)
    return t;
}

var getMonthText = function(currentMonth) {

    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function(currentMonth) {

    var endOfMonth = new Date();

    // Set the month to next month
    endOfMonth.setMonth(currentMonth + 1 );

    // Set the date to one day before the start of the month
    endOfMonth.setDate(0);
};

var getCurrentYear = function(){
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

// Displays the Month and the Year.
$("month_year").innerHTML = getMonthText(getMonthNumber()) + ' ' + getCurrentYear();


// This finds the first or last day of the month ---- next function within the generateTable() is the (functionName)
function dayFinder(functionName){
    output = '';

    switch(functionName.substr(0, 3)) {
        case 'Sun':
            output = 0;
        break;
        case 'Mon':
            output = 1;
        break;
        case 'Tue':
           output = 2;
        break;
        case 'Wed':
            output = 3;
        break;
        case 'Thu':
           output = 4;
        break;
        case 'Fri':
            output = 5;
        break;
        case 'Sat':
            output = 6;
        break;
    }
    return output;
}

//Creates the Calendar structure and populates the td
(function generateTable(){

//gets the first day and converts it to a string.
    var firstDay = function(){
        var date = new Date();      
        return new Date(date.getFullYear(), date.getMonth(), 1).toString();
    }

    function daysInThisMonth() {
      var date = new Date();
      return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    }

    var html = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    var day = 1;
    var start = 0;
    html += "<tr></tr>\n";

    var d = dayFinder(firstDay());
    var end = daysInThisMonth();

    // generates empty <td>'s
    while(start < d){
        html += "<td> </td>";
        start++;
    }

    // populates the <td>'s w/ #'s
    for(var ii =start; ii<=6; ii++){
        html += "<td>"+day+"</td>";
        day++;
    }

    // start of the 2-last <tr>'s
    for(var i =0; i<4; i++){
        html += "<tr></tr>\n";

        // populates the <td>'s with #'s
        for(var ii =0; ii< 7; ii++){
            html += "<td>"+day+"</td>";
            day++;

            //if (last day){ <td>' '</td};
            if(day > end){
                day = '';
                for(var ii; ii< 6; ii++){
                    html += "<td></td>";
                }
            }
        }
    }
    $('calendar').innerHTML = (html);
})();
