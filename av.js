var AudioContext = AudioContext || webkitAudioContext;
var context = new AudioContext;
//录脫脭脴脙陆脤氓
var audio = new Audio("hello.mp4");
//麓麓陆篓陆脷碌茫
var source = context.createMediaElementSource(audio);
var analyser = context.createAnalyser();
//脕卢陆脫拢潞source 隆煤 analyser 隆煤 destination
source.connect(analyser);
analyser.connect(context.destination);
//Canvas鲁玫脢录禄炉
var width = canvas.width,
	height = canvas.height;
var p = canvas.getContext("2d");
var penBg = bg.getContext("2d");

analyser.fftSize = 4096;
var length = analyser.fftSize;
//麓麓陆篓脢媒戮脻
var dataArray = new Uint8Array(length);


audio.oncanplaythrough = function() {
	fontCSSAnimation();
	audio.play();
};


//脳贸卤脽碌脛脤卯鲁盲陆楼卤盲脡芦
var gradient = p.createLinearGradient(0, 100, 480, 100);
gradient.addColorStop("0", "#f500d8");
gradient.addColorStop("1.0", "#ceaf11");

//脫脪卤脽碌脛脤卯鲁盲陆楼卤盲脡芦
var gradientRight = p.createLinearGradient(886, 100, 1366, 100);
gradientRight.addColorStop("0", "#0ee7f7");
gradientRight.addColorStop("1.0", "#2ce672");





function fontCSSAnimation() {
	o.style.opacity = 1;
	o.classList.add('fly');

	setTimeout(function() {
		oval.style.opacity = 1;
	}, 200);

	setTimeout(function() {
		oval.classList.add('strech');
	}, 1000);

	//O G脳贸脫脪鹿枚露炉
	setTimeout(function() {
		o.classList.add('rollLeft')
		g.style.opacity = 1;
		g.classList.add('rollRight')
	}, 1000);

	//OM鲁枚脧脰
	setTimeout(function() {
		m.classList.remove('hidden');
		f.classList.remove('hidden');
	}, 1200);

	//脳脰路没脤酶脭戮露炉禄颅 ,O
	setTimeout(function() {
		o.style.left = '470px';
		o.classList.add('textBounce');
		oh.classList.remove('hidden');
		oh.classList.add('show');
	}, 1800);

	//脳脰路没脤酶脭戮露炉禄颅 ,M
	setTimeout(function() {
		m.style.left = '585px';
		m.classList.add('textBounce');
		my.classList.remove('hidden');
		my.classList.add('show');
	}, 2100);

	//脳脰路没脤酶脭戮露炉禄颅 ,F
	setTimeout(function() {
		f.style.left = '715px';
		f.classList.add('textBounce');
		fucking.classList.remove('hidden');
		fucking.classList.add('show');
	}, 2400);

	//脳脰路没脤酶脭戮露炉禄颅 ,G
	setTimeout(function() {
		g.style.left = '795px';
		g.classList.add('textBounce');
		god.classList.remove('hidden');
		god.classList.add('show');
	}, 2700);

	//脝碌脝脳露炉禄颅驴陋脢录
	setTimeout(function() {
		group.classList.add('hidden');
		setTimeout(draw, 300);
	}, 4000);

	penBg.globalAlpha = 0.2;
}

function draw() {
	requestAnimationFrame(draw)
	analyser.getByteFrequencyData(dataArray);
	p.clearRect(0, 0, width, height);

	//路脜脡盲脨脭卤鲁戮掳
	var gradientBg = penBg.createRadialGradient(width / 2, height / 2, height - Math.floor(Math.random() * 150 + 100), width / 2, height / 2, width / 2);
	gradientBg.addColorStop(0, "white");
	gradientBg.addColorStop(1, '#000');
	penBg.clearRect(0, 0, width, height);
	penBg.fillStyle = gradientBg;
	penBg.fillRect(0, 0, width, height);
	//脳贸

	//脳贸脤卯鲁盲
	p.beginPath();
	p.moveTo(0, height - 200);
	var x = 0;
	for (var i = 1; i < 42; i++) {
		var lineHeight = dataArray[i] / 256 * height / 3;
		if (i < 5) {
			p.lineTo(x, height - dataArray[i] / 256 * height / 2 - 200)
		} else if (i > 40) {
			p.lineTo(x - 13, height - 200)
		} else {
			p.lineTo(x, height - lineHeight - 200)
		}
		x += 12;
	}
	p.fillStyle = gradient;
	p.fill();
	p.closePath();




	//脳贸脧脽脤玫
	p.beginPath();
	p.moveTo(0, height - 200);
	var x = 0;
	for (var i = 1; i < 42; i++) {
		var lineHeight = dataArray[i] / 256 * height / 3;
		if (i < 5) {
			p.lineTo(x, height - dataArray[i] / 256 * height / 2 - 210 - Math.floor(Math.random() * 30))
		} else if (i > 40) {
			p.lineTo(x - 13, height - 220)
		} else {
			p.lineTo(x, height - lineHeight - 210 - Math.floor(Math.random() * 30))
		}
		x += 12;
	}
	p.strokeStyle = gradient;
	p.stroke();
	p.closePath();


	//脟氓鲁媒脳贸虏脿碌脳虏驴虏驴路脰脝碌脝脳
	p.fillStyle = '#fff';
	p.fillRect(0, height - 300, 470, 101);

	//脳贸碌鹿脫掳
	p.beginPath();
	p.moveTo(0, height - 299);
	var x = 0;
	for (var i = 1; i < 41; i++) {
		var lineHeight = dataArray[i] / 256 * height / 50;
		if (i < 5) {
			p.lineTo(x, dataArray[i] / 256 * height / 24 + 380)
		} else p.lineTo(x, lineHeight + 380)
		x += 12;
	}
	p.lineTo(x - 12, height - 299)
	p.fillStyle = '#21dd13';

	p.shadowBlur = 20;
	p.shadowColor = "#21dd13";
	p.fill();
	p.closePath();
	p.shadowBlur = 0;





	//脫脪

	//脫脪脤卯鲁盲
	p.beginPath();
	p.fillStyle = gradientRight;
	p.moveTo(width, height - 200);
	var x = width;
	for (var i = 1; i < 42; i++) {
		var lineHeight = dataArray[i] / 256 * height / 3;
		if (i < 5) {
			p.lineTo(x, height - dataArray[i] / 256 * height / 2 - 200)
		} else if (i > 40) {
			p.lineTo(x + 12, height - 200)
		} else {
			p.lineTo(x, height - lineHeight - 200)
		}
		x -= 12;
	}
	p.fill();
	p.closePath();

	//脫脪脧脽脤玫
	p.beginPath();
	p.moveTo(width, height - 200);
	var x = width;
	for (var i = 1; i < 42; i++) {
		var lineHeight = dataArray[i] / 256 * height / 3;
		if (i < 5) {
			p.lineTo(x, height - dataArray[i] / 256 * height / 2 - 210 - Math.floor(Math.random() * 30))
		} else if (i > 40) {
			p.lineTo(x + 12, height - 200)
		} else {
			p.lineTo(x, height - lineHeight - 210 - Math.floor(Math.random() * 30))
		}
		x -= 12;
	}
	p.strokeStyle = gradientRight;
	p.stroke();
	p.closePath();

	//脟氓鲁媒脫脪虏脿bi碌脳虏驴虏驴路脰脝碌脝脳
	p.fillStyle = '#fff';
	p.fillRect(width - 480, height - 300, 480, 100);


	//脫脪碌鹿脫掳
	p.beginPath();
	p.moveTo(width, height - 299);
	var x = width;
	for (var i = 1; i < 41; i++) {
		var lineHeight = dataArray[i] / 256 * height / 50;
		if (i < 5) {
			p.lineTo(x, dataArray[i] / 256 * height / 24 + 380)
		} else p.lineTo(x, lineHeight + 380)
		x -= 12;
	}
	p.lineTo(x + 12, height - 299)
	p.fillStyle = '#21dd13';

	p.shadowBlur = 20;
	p.shadowColor = "#21dd13";
	p.fill();
	p.closePath();
	p.shadowBlur = 0;


}