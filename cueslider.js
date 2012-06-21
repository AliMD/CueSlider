// Zepto/jQuery fadeLoop plugin for fade slide show effects
(function($){
	$.extend($.fn,{
		cueslider : function(options){
			options = $.extend({
				duration : 500,
				autoPlay : false,
				nextBtn  : 'div.banner .next',
				backBtn  : 'div.banner .back',
				autoPlayInterval   : 3000,
				transitionProperty : 'left top opacity'.split(' ')
			}, options);

			var iszep  = !!window.Zepto,
				slides = this,
				cuePos = [];
			slides.cuePos = cuePos;
				
			slides.each(function(){ // store slide positions.
				var p,obj = {};
				for(var i in options.transitionProperty){
					p=options.transitionProperty[i];
					obj[p]=$(this).css(p);
				}
				cuePos.push(obj);
			});

			cuePos.shifc = function(revert){
				if(revert){
					this.unshift(this.pop());
				}else{
					this.push(this.shift());
				}
			};

			slides.refresh = function(){
				slides.each(function(i){
					$(this).animate(cuePos[i],options.duration);
				});
			};

			$(options.nextBtn).click(function(){
				slides.cuenext();
			});
			$(options.backBtn).click(function(){
				slides.cueback();
			});
		},

		cuenext : function(){
			this.cuePos.shifc();
			this.refresh();
		},
		
		cueback : function(){
			this.cuePos.shifc(true);
			this.refresh();
		}
	});
})($);
