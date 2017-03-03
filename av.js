
var AudioContext=AudioContext||webkitAudioContext;
var context=new AudioContext;
//加载媒体
var audio=new Audio("sky.mp3");
//创建节点
var source=context.createMediaElementSource(audio);
var analyser=context.createAnalyser();
//连接：source → analyser → destination
source.connect(analyser);
analyser.connect(context.destination);
//Canvas初始化
var width=canvas.width,height=canvas.height;
var g=canvas.getContext("2d");
g.translate(0.5,0.5);
//计算出采样频率44100所需的缓冲区长度
var length=analyser.frequencyBinCount*context.sampleRate/context.sampleRate|0;
console.log(analyser.frequencyBinCount,context.sampleRate)
//创建数据
var output=new Uint8Array(length);
//播放帧
(function callee(e){
  analyser.getByteFrequencyData(output);
  //将缓冲区的数据绘制到Canvas上
  g.clearRect(-0.5,-0.5,width,height);
  g.beginPath(),g.moveTo(0,height);
  for(var i=0;i<width;i++)
    g.lineTo(i,height-height*output[Math.round(length*i/width)]/555);
  g.lineTo(i,height),g.fill();
  //请求下一帧
  requestAnimationFrame(callee);
})();
//播放
audio.play();