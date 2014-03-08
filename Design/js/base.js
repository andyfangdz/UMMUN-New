$(document).ready(function() {
    $.fn.fullpage({
				'verticalCentered': true,
				'css3': true,
				'slidesColor': ['#a1e877', '#46abe0', '#fe767a', '#fff','#f5f4f7', '#faf189'],
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['Welcome', 'Next', 'Amazing', 'Simple', 'Join', 'Creators'],
                slidesNavigation: true,
				slidesNavPosition: 'bottom',
			});
    var defaultVid = 'XNjExMTE0NzMy';
			getYoukuMp4Url(
				defaultVid, 
				function(mp4Url)
				{
					$('#youkuvideo').attr('src', mp4Url);
				}
			);
});