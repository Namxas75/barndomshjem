(function(){
	$.getJSON('json/home.json').done(function(data){

		var dir = 2;
		var node = 'For-entréen';
		var view;
		var $forward = $('a.forward');
		
		$('a.arrow').on('click',function(e){
			e.preventDefault();
			$this = $(this);
			new_direction = getDirection($this);
			dir = mod(4,(dir + new_direction));
			view = data[node][dir];


			var $img = $('img.display');
			switch (new_direction) {
				case -1:
					$img.effect('drop',{direction:'right'},200,function(){
						$img.attr("src","/images/" + view['image']).effect('slide', {direction: 'left'},'show', 350);
					});
				break;
				case 1:
					$img.effect('drop',{direction:'left'},200,function(){
						$img.attr("src","/images/" + view['image']).effect('slide', {direction: 'right'},'show', 350);
					});
				break;
				case 0:
					node = view['link'];
					view = data[node][dir];
					$img.effect('fade',function(){
						$img.attr("src","/images/" + view['image']).fadeIn();
					});
				break;
			}
			var $forward = $('.forward');
			$forward.hide();
			if (!!view['link']) {
				$forward.show();
			}
				$('h2.room-header').text(node);
				$('p.description').text(view['description']);
		});

		var getDirection = function(obj) {
			return Number(obj.data('direction'));
		}

		function mod(n, m) {
	    return ((m % n) + n) % n;
		}
	});
})();


