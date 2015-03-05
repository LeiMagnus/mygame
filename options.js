var optionBox = null;

function Option(text,choice,data){
	this.text = text;
	this.choice = choice;
	this.data = data;
	this.box = function(x,y){
		var b;
		var e = document.createElement('div');
		var p = document.createElement('p');
		var s = document.createElement('div');
		if(optionBox){
			document.body.removeChild(optionBox);
			optionBox = null;
		}
		e.setAttribute('style','position:absolute;top:'+y+'px;left:'+x+'px;background-color:black;color:white;font:20pt courier new;');
		e.appendChild(p).innerHTML = this.text;
		e.appendChild(s);
		for(var i=0;i<this.choice.length;i++){
			b = document.createElement('button');
			s.appendChild(b).innerHTML = this.choice[i][0];
			b.click = this.choice[i][1];
			b.data = data;
			b.addEventListener('click',function(ev){
				if(ev.target.click()){
					document.body.removeChild(optionBox);
					optionBox = null;
				}
			});
		}
		e.clear = function(){
			if(this.parentNode) this.parentNode.removeChild(this);
			optionBox = null;
		}
		return optionBox = e;
	}
}
