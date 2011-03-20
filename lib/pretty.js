/* Sky Slavin, Ludopoli. MIT license.
* based on	
* JavaScript Pretty Date
* Copyright (c) 2008 John Resig (jquery.com)
* Licensed under the MIT license.
*/

// Takes an ISO time and returns a string representing how
// long ago the date represents.
window.prettify = function (time) {
	return prettyDate(time) 
};

var say = {};
say.just_now = " just now",
say.minute_ago = " 1 minute ago",
say.minutes_ago = " minutes ago",
say.hour_ago = " 1 hour ago",
say.hours_ago = " hours ago",
say.yesterday = " Yesterday",
say.days_ago = " days ago",
say.weeks_ago = " weeks ago"

function prettyDate(time) {
	var current_date = new Date();
	current_date_time = current_date.getTime();
	current_date_full = current_date_time + (1 * 60000);
	//console.log(current_date.getTimezoneOffset());
	var date = new Date(time);
	var diff = ((current_date_full - date.getTime()) / 1000);

	if ($.browser.msie) {
		var dates = time.replace(/(-|T|:|\.)/gi, ",").substr(0, 23).split(",");
		date = new Date(Date.UTC(dates[0], dates[1]-1, dates[2],dates[3],dates[4],dates[5],dates[6])).getTime();
		diff = ((current_date_full - date) / 1000);
	};

	var day_diff = Math.floor(diff / 86400);

	if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
		return;

	return day_diff == 0 && (
      diff < 60 && say.just_now ||
      diff < 120 && say.minute_ago ||
      diff < 3600 && Math.floor(diff / 60) + say.minutes_ago ||
      diff < 7200 && say.hour_ago ||
      diff < 86400 && Math.floor(diff / 3600) + say.hours_ago) ||
    day_diff == 1 && say.yesterday ||
    day_diff < 7 && day_diff + say.days_ago ||
    day_diff < 31 && Math.ceil(day_diff / 7) + say.weeks_ago;
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if (typeof jQuery != "undefined") {
	jQuery.fn.prettyDate = function () {
		return this.each(function () {
			var date = prettyDate($(this).attr("datetime"));
			$(this).text(date);
		});
	};
	jQuery("document").ready(function () {
		jQuery("time.human").prettyDate();
	});
};
