function emptySquare(){
	this.id = 1;
	this.canEnter = [true,true,true,true];
	this.canExit = [true,true,true,true];
}

function leftArrow(){
	this.id = 2;
	this.canEnter = [false,true,true,true];
	this.canExit = [true,false,false,false];
}

function upArrow(){
	this.id = 3;
	this.canEnter = [true,false,true,true];
	this.canExit = [false,true,false,false];
}

function rightArrow(){
	this.id = 4;
	this.canEnter = [true,true,false,true];
	this.canExit = [false,false,true,false];
}

function downArrow(){
	this.id = 5;
	this.canEnter = [true,true,true,false];
	this.canExit = [false,false,false,true];
}

function wall(){
	this.id = 6;
	this.canEnter = [false,false,false,false];
	this.canExit = [true,true,true,true];
}

function victorySquare(){
	this.id = 7;
	this.canEnter = [true,true,true,true];
	this.canExit = [true,true,true,true];
}

function lock(){
	this.id = 8;
	this.canEnter = [false,false,false,false];
	this.canExit = [true,true,true,true];
	this.unlock = function(){
		this.id = 10;
		this.canEnter = [true,true,true,true];
		player.keys--;
		grid.refresh();
	}
}

function toggleSwitch(normal){
	this.id = (normal)?12:11;
	this.canEnter = [true,true,true,true];
	this.canExit = [true,true,true,true];
	this.state = normal;
	this.affected = [];
	this.toggle = function(){
		this.state = !this.state;
		this.id = (this.state)?12:11;
		for(var i=0;i<this.affected.length;i++){
			this.affected[i].toggle();
		}
	}
}

function checkeredSquare(normal,controller){
	this.id = (normal)?14:13;
	this.canEnter = [normal,normal,normal,normal];
	this.canExit = [true,true,true,true];
	this.state = normal;
	this.controller = controller;
	this.toggle = function(){
		this.state = !this.state;
		this.id = (this.state)?14:13;
		this.canEnter = [this.state,this.state,this.state,this.state];
	}
	controller.affected.push(this);
}

function pressureSwitch(){
	this.id = 17;
	this.canEnter = [true,true,true,true];
	this.canExit = [true,true,true,true];
	this.state = false;
	this.affected = [];
	this.toggle = function(){
		this.state = !this.state;
		for(var i=0;i<this.affected.length;i++){
			this.affected[i].toggle();
		}
	}
}
