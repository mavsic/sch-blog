(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.returnExports = factory();
	}
}(this, function() {
	var DateUtils = {
		humanize: function(date) {
			var now = new Date();
			var daysToNow = DateUtils.getDaysDiff(date, now);
			var humanized;

			if (daysToNow === 0) {
				humanized = 'Сегодня';
			} else if (daysToNow === 1) {
				humanized = 'Вчера';
			} else if (daysToNow === 2) {
				humanized = 'Позавчера';
			} else {
				var nowWeek = DateUtils.getWeek(now);
				var week = DateUtils.getWeek(date);
				var weekDiff = nowWeek - week;
				var day = DateUtils.getDay(date);

				if (weekDiff <= 1) {
					humanized = day === 1 ? 'Во ' : 'В ';

					if (weekDiff === 1) {
						switch (day) {
							case 0, 1, 3:
								humanized += 'прошлый ';
								break;
							case 2, 4, 5:
								humanized += 'прошлую ';
								break;
							case 6:
								humanized += 'прошлое ';
								break;
						}
					}

					humanized += DateUtils.humanizeDay(day).accusative;
				} else {
					humanized = DateUtils.format(date);
				}
			}

			return humanized;
		},

		format: function(date) {
			return date.getDate() + ' ' +
				DateUtils.humanizeMonth(date.getMonth()).genetive + ' ' +
				date.getFullYear();
		},

		getDaysDiff: function(from, to) {
			var timeDiff = Math.abs(to.getTime() - from.getTime());
			var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
			return daysDiff;
		},

		getWeek: function(date) {
			var yearFirstDay = DateUtils.getYearFirstDay(date);
			var daysDiff = DateUtils.getDaysDiff(yearFirstDay, date);
			var week = Math.floor((daysDiff + DateUtils.getDay(yearFirstDay)) / 7);
			return week;
		},

		getYearFirstDay: function(date) {
			var yearFirstDay = new Date(date);
			yearFirstDay.setMonth(0, 1);
			return yearFirstDay;
		},

		getDay: function(date) {
			return (date.getDay() + 6) % 7;
		},

		humanizeDay: function(dayOfWeek) {
			switch (dayOfWeek) {
				case 0: return { nominative : 'понедельник', accusative: 'понедельник' };
				case 1: return { nominative : 'вторник', accusative: 'вторник' };
				case 2: return { nominative : 'среда', accusative: 'среду' };
				case 3: return { nominative : 'четверг', accusative: 'четверг' };
				case 4: return { nominative : 'пятница', accusative: 'пятницу' };
				case 5: return { nominative : 'суббота', accusative: 'субботу' };
				case 6: return { nominative : 'воскресенье', accusative: 'воскресенье' };
			}
		},

		humanizeMonth: function(month) {
			switch (month) {
				case 0: return { nominative: 'январь', genetive: 'января' };
				case 1: return { nominative: 'февраль', genetive: 'февраля' };
				case 2: return { nominative: 'март', genetive: 'марта' };
				case 3: return { nominative: 'апрель', genetive: 'апреля' };
				case 4: return { nominative: 'май', genetive: 'мая' };
				case 5: return { nominative: 'июнь', genetive: 'июня' };
				case 6: return { nominative: 'июль', genetive: 'июля' };
				case 7: return { nominative: 'август', genetive: 'августа' };
				case 8: return { nominative: 'сентябрь', genetive: 'сентября' };
				case 9: return { nominative: 'октябрь', genetive: 'октября' };
				case 10: return { nominative: 'ноябрь', genetive: 'ноября' };
				case 11: return { nominative: 'декабрь', genetive: 'декабря' };
			}
		}
	};

	return DateUtils;
}));
