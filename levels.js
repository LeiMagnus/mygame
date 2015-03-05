function restartLevel(){
	player.keys = 0;
	grid.clear();
	Levels[level]();
	grid.refresh();
}

function proceedToNextLevel(){
	playerControl = false;
	setTimeout(function(){
		player.keys = 0;
		if(optionBox) optionBox.clear();
		grid.clear();
		Levels[++level]();
		playerControl = true;
		grid.refresh();
	},1000);
}

function Level1(){
	var i,j;
	for(i=0;i<8;i++){
		grid.addSquare(new wall(),0,i);
		grid.addSquare(new wall(),1,i);
	}
	grid.addSquare(new wall(),2,0);
	grid.addSquare(new wall(),2,7);
	for(i=0;i<8;i++) if(i!=6){
		grid.addSquare(new wall(),3,i);
		if(i!=1) grid.addSquare(new wall(),4,i);
	}
	grid.addSquare(new wall(),5,0);
	grid.addSquare(new wall(),5,7);
	for(j=6;j<8;j++) for(i=0;i<8;i++) grid.addSquare(new wall(),j,i);
	grid.addItem(player,2,1);
	grid.addSquare(new victorySquare(),4,1);
	document.body.appendChild(new Option('Use arrow Keys to move.',[],0).box(document.body.scrollWidth-300,document.body.scrollHeight/2));
}

function Level2(){
	var i,j;
	for(i=0;i<8;i++) for(j=0;j<8;j++){
		if(i<2||i>5||j<2||j>5) grid.addSquare(new wall(),i,j);
	}
	grid.addSquare(new lock(),2,4);
	for(i=3;i<6;i++) grid.addSquare(new wall(),i,4);
	grid.addSquare(new victorySquare(),5,2);
	grid.addItem(player,2,5);
	grid.addItem(new Key(),5,5);
	document.body.appendChild(new Option('Some items can be collected.',[],0).box(document.body.scrollWidth-300,document.body.scrollHeight/2));
}
function Level3(){
	var i,j;
	for(i=0;i<8;i++) for(j=0;j<8;j++){
		if(i<2||i>5||j<1||j>5) grid.addSquare(new wall(),i,j);
	}
	grid.addSquare(new wall(),3,5);
	grid.addSquare(new wall(),4,5);
	grid.addSquare(new wall(),3,4);
	grid.addSquare(new wall(),4,4);
	grid.addSquare(switchA = new toggleSwitch(),5,1);
	grid.addSquare(new checkeredSquare(0,switchA),2,3);
	grid.addSquare(new checkeredSquare(1,switchA),5,3);
	grid.addSquare(new lock(),5,4);
	grid.addSquare(new victorySquare(),5,5);
	grid.addItem(player,2,1);
	grid.addItem(new Key(),2,5);
}

function Level4(){
	var i,j;
	for(i=0;i<8;i++) for(j=0;j<8;j++){
		if(i<2||i>5||j<2||j>5) grid.addSquare(new wall(),i,j);
	}
	grid.addSquare(switchA = new pressureSwitch(),5,3);
	grid.addSquare(new checkeredSquare(0,switchA),2,4);
	for(i=3;i<6;i++) grid.addSquare(new wall(),i,4);
	grid.addSquare(new victorySquare(),5,5);
	grid.addItem(player,5,2);
	grid.addItem(new Mover(),3,3);
	document.body.appendChild(new Option('Press R to restart the level.',[],0).box(document.body.scrollWidth-300,document.body.scrollHeight/2));
}

function Level5(){
	var i,j;
	for(i=0;i<8;i++){
		grid.addSquare(new wall(),0,i);
		grid.addSquare(new wall(),7,i);
		grid.addSquare(new wall(),i,7);
		grid.addSquare(new wall(),i,1);
	}
	grid.addSquare(new wall(),4,6);
	grid.addSquare(new wall(),6,3);
	grid.addSquare(new wall(),1,5);
	grid.addSquare(new wall(),1,6);
	grid.addSquare(new wall(),2,2);
	grid.addSquare(new wall(),3,2);
	grid.addSquare(new wall(),6,2);
	grid.addSquare(switchA = new pressureSwitch(0),5,6);
	grid.addSquare(new checkeredSquare(0,switchA),1,1);
	grid.addSquare(new checkeredSquare(0,switchA),1,2);
	grid.addSquare(new victorySquare(),6,0);
	grid.addItem(new Slider(),4,5);
	grid.addItem(player,2,5);
	document.body.appendChild(new Option('Hmmm...',[],0).box(document.body.scrollWidth-300,document.body.scrollHeight/2));
}
