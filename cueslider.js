// Zepto/jQuery fadeLoop plugin for fade slide show effects
(function($){
	$.extend($.fn,{
		cueslider :function(options){

			options=$.extend({
				duration : 1000,
				autoPlay : false,
				autoPlayInterval : 3000,
				transitionProperty:'left top opacity'.split(' ');
			},options);

			var iszep = !!window.Zepto,
				cuePos=[],
				slides = this;

			slides.each(function(){
				console.log(this);
			});

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
