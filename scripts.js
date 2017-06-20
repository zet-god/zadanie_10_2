//alert('hello');

var span = $("span");

// span.each(function () {
// 	span.css('color, 'green;);
// });

// $(function() {
// 	$('span').css('color', 'yellow');
// });


span.each(function(index, element) {
console.log(index);
	if(index % 2 == 0) {
		$(element).css('color', 'yellow');
	};
	//$("span:even").css('color', 'yellow');
});

var p = $("p");

p.each(function (index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click</button>'
	$(element).append(button);
});

$("button").click(function() {
	alert($(this).attr("data-tmp"));
});
