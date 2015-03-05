function Grid(maxX,maxY,boxSize){
	var b,i,j;
	var t = document.createElement('table');
	t.setAttribute('style','border-collapse:collapse;');
	t.box = [];
	t.boxSize = boxSize;
	for(i=0;i<maxY;i++){
		t.box.push(t.appendChild(document.createElement('tr')).childNodes);
		for(j=0;j<maxX;j++){
			b = t.lastChild.appendChild(document.createElement('td'));
			b.setAttribute('style','vertical-align:top;height:'+boxSize+'px;width:'+boxSize+'px;background-color:rgb(108,145,147);background-image:url("'+imageLocation+'first.png");background-position:-64px 0px;');
			b.grid = t;
			b.x = j;
			b.y = maxY - (i+1);
			b.content = new emptySquare();
			b.getOrthogonallyAdjacentBoxes = function(){
				var a = [{x:-1,y:0},{x:0,y:1},{x:1,y:0},{x:0,y:-1}];
				for(var i=0;i<4;i++) a[i] = this.grid.getBoxByCoordinates(this.x+a[i].x,this.y+a[i].y);
				return a;
			}
		}
	}
	t.box.reverse();
	t.getBoxByCoordinates = function(x,y){
		if(y<0||x<0||y>=this.box.length||x>=this.box[0].length) return null;
		return this.box[y][x];
	}
	t.refresh = function(){
		var i,j,k;
		for(i=0;i<this.box.length;i++) for(j=0;j<this.box[0].length;j++){
			k = this.box[i][j].content.id*-64;
			this.box[i][j].style.backgroundPosition = k+'px 0px';
		}
	}
	t.addSquare = function(square,x,y){
		var b = this.getBoxByCoordinates(x,y);
		if(b) b.content = square;
		return square;
	}
	t.addItem = function(item,x,y){
		var b = this.getBoxByCoordinates(x,y);
		if(b) b.appendChild(item.node);
		return item.node;
	}
	t.clear = function(){
		var i,j;
		for(i=0;i<this.box.length;i++) for(j=0;j<this.box[0].length;j++){
			this.box[i][j].content = new emptySquare();
			if(this.box[i][j].childNodes.length) this.box[i][j].removeChild(this.box[i][j].lastChild);
		}
	}
	return t;
}
