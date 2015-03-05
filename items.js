function Player(){
	this.keys = 0;
	this.node = document.createElement('div');
	this.node.setAttribute('style','background:url("'+imageLocation+'first.png");height:60px;width:60px;');
	this.move = function(d){
		if(!this.node.parentNode) return false;
		var b = this.node.parentNode.getOrthogonallyAdjacentBoxes()[d];
		if(b && this.node.parentNode.content.canExit[d] && b.content.canEnter[(d<2)?d+2:d-2]){
			if(b.childNodes.length){
				if(b.lastChild.item.collectable) b.lastChild.item.collect();
				else if(b.lastChild.item.movable){
					b.lastChild.item.move(d);
					return false;
				}
			}
			if(this.node.parentNode.content.id==17) this.node.parentNode.content.toggle();
			this.node.parentNode.removeChild(this.node); 
			b.appendChild(this.node);
			if(b.content.id==11||b.content.id==12||b.content.id==17) b.content.toggle();
			grid.refresh();
			if(b.content.id==7) return proceedToNextLevel();
		}else if(b && b.content.id==8 && player.keys>0) b.content.unlock();
	}
}

function Key(){
	this.collectable = true;
	this.node = document.createElement('div');
	this.node.setAttribute('style','background:url("'+imageLocation+'first.png");background-position:-576px 0px;height:60px;width:60px;');
	this.node.item = this;
	this.collect = function(){
		player.keys++;
		this.node.parentNode.removeChild(this.node);
	}
}

function Mover(){
	this.movable = true;
	this.node = document.createElement('div');
	this.node.setAttribute('style','background:url("'+imageLocation+'first.png");background-position:-960px 0px;height:60px;width:60px;');
	this.node.item = this;
	this.move = function(d){
		if(!this.node.parentNode) return false;
		var b = this.node.parentNode.getOrthogonallyAdjacentBoxes()[d];
		if(b && this.node.parentNode.content.canExit[d] && b.content.canEnter[(d<2)?d+2:d-2]){
			if(b.childNodes.length) return false;
			if(this.node.parentNode.content.id==17) this.node.parentNode.content.toggle();
			if(b.content.id==11||b.content.id==12||b.content.id==17) b.content.toggle();
			this.node.parentNode.removeChild(this.node);
			b.appendChild(this.node);
			grid.refresh();
		}
	}
}

function Slider(){
	this.movable = true;
	this.node = document.createElement('div');
	this.node.setAttribute('style','background:url("'+imageLocation+'first.png");background-position:-1024px 0px;height:100%;width:100%;');
	this.node.item = this;
	this.moveOnce = function(d){
		if(!this.node.parentNode) return false;
		var b = this.node.parentNode.getOrthogonallyAdjacentBoxes()[d];
		if(b && this.node.parentNode.content.canExit[d] && b.content.canEnter[(d<2)?d+2:d-2]){
			if(b.childNodes.length) return false;
			if(this.node.parentNode.content.id==17) this.node.parentNode.content.toggle();
			if(b.content.id==11||b.content.id==12||b.content.id==17) b.content.toggle();
			this.node.parentNode.removeChild(this.node);
			b.appendChild(this.node);
			grid.refresh();
			return true;
		}
		return false;
	}
	this.move = function(d){
		playerControl = false;
		slider = this;
		this.direction = d;
		setTimeout(function(){
			if(slider.moveOnce(slider.direction)) slider.move(slider.direction);
			else playerControl = true;
		},100);
	}
}
