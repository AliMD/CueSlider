// Zepto/jQuery fadeLoop plugin for fade slide show effects
(function($){
	$.extend($.fn,{
		cueslider :function(options){

			options=$.extend({
				duration : 1000,
				autoPlay : false,
				autoPlayInterval : 3000,
				transitionProperty:'left top opacity'.split(' ')
			},options);

			var iszep = !!window.Zepto,
				cuePos=[],
				slides = this;
				
			slides.each(function(){
				var p,obj = {};
				for(var i in options.transitionProperty){
					p=options.transitionProperty[i]
					obj[p]=$(this).css(p);
				}
				cuePos.push(obj);
			});
			
			/*console.log(cuePos.push(cuePos.shift()));
			console.log(cuePos);*/
			$('span.next').click(function(){
				console.log(cuePos.push(cuePos.shift()));
				console.log(cuePos)
			})

			/*cuePos = [
				{
					left : '10px',
					top : '10px',
					opacity : 0
				},
				{
					left : '150px',
					top : '100px',
					opacity : 1
				}
				*/
		}
	});
})($);
