var $ = require('jquery');
require('luis-almeida/unveil');
var DateUtils = require('dateUtils');
var Prism = require('prism');

$('.post__date').each(function() {
	var el = $(this);
	var date = new Date(el.attr('datetime'));

	el
		.text(DateUtils.humanize(date))
		.addClass('post__date_humanized');
});

$('.spoiler__toggle').click(function() {
	$(this)
		.toggleClass('spoiler__toggle_expanded')
		.next('.spoiler__content').slideToggle(500);
});

$('.post img').unveil(0, function() {
	var image = $(this);
	var container = image.closest('.image');
	image.load(function() {
		container.addClass('image_unveiled');
	});
});

$('pre code')
	.one('unveil', function() {
		// I would have used highlight.js, but it doesn't play well with UglifyJS or JSPM bundler
		// or whatever :(
		Prism.highlightElement(this);
	})
	.unveil();
