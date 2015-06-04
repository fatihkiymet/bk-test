$(function(){
	var reviewDs = new booking.StaticDataSource(function(){
		return hotels[0].reviews;
	});

	var reviews = reviewDs.load();
})