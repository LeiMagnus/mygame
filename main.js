var imageLocation = 'customsprites/';
var playerControl = true;
var level = 0;
var Levels = [Level1,Level2,Level3,Level4,Level5,function(){
	
}];

function start(){
	player = new Player();
	grid = document.body.appendChild(Grid(8,8,62));
	Levels[level]();
	grid.refresh();
}

function userCommand(ev){
	var k = ev.keyCode;
	if(playerControl){
		if(k>=37&&k<41) player.move(k-37);
		else if(k==82) restartLevel();
	}
}
