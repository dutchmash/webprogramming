var today = new Date () ;
var hourNow = today.getHours ();
var groet;

if (hourNow > 18) {
	groet = 'Good evening, nice to meet you!';
} else if (hourNow > 12) {
	groet = 'Good afternoon, nice to meet you!';
} else if (hourNow > 6) {
	groet = 'Good morning, nice to meet you!';
} else {
	groet = 'Welcome! Nice to meet you!';
}

document.write('<p>' + groet + '</p>');