$(window).on('load', function(){

	function parallax(){
		$('.parallax__image').each(function(){
			const img = $(this).find('img')
			const windowTop = $(window).scrollTop()
			const windowHeight = $(window).height()
			const windowBottom = $(window).scrollTop() + windowHeight
			const imageTop = $(this).offset().top
			const imageHeight = $(this).height()
			const imageBottom = $(this).offset().top + imageHeight

			if (!(imageTop > windowBottom || imageBottom < windowTop)) { 
				const sub = imageTop - windowTop
				if (sub >= 0) {
					img.css({
						transform: `scaleX(${(sub / 2000) + 1})`
					})
				} else {
					img.css({
						transform: `scaleX(1) translateY(${(-sub / 2)}px)`
					})
				}
			}
		})
	}
	parallax()
	$(window).scroll(function(){
		parallax()
	})
	$(window).resize(function(){
		parallax()
	})
})