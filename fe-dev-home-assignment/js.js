
var currentPage = {
	selectedRooms : {}
};

function calculateTotal(){	
	var total = 0;

	for(var key in currentPage.selectedRooms)
	{
		total = total + currentPage.selectedRooms[key]
	}

	if(total > 0)
	{
		$('.rooms_table .action-panel').css('display', 'inline-block');
	}
	else
	{
		$('.rooms_table .action-panel').hide();
		return;
	}

	$('#total-price').html('Total : &euro;' + total.toFixed(2));

	return total;
}



function renderReviews(){
	var reviewPagingParams = new booking.PagingParams();
	reviewPagingParams.pageIndex = 1;
	reviewPagingParams.pageSize = 5;
	reviewPagingParams.sortList = [{ field: 'score'}];
	reviewPagingParams.filterList = [];

	var reviewColModel = [
		{
			type : 'string',	
			name : 'sender'
		},
		{
			type : 'number',
			name : 'score'				
		},
		{
			type : 'string',
			name : 'review'				
		}
	];

	var getReviews = function(){
		return hotels[0].reviews;
	};

	var reviewDs = new booking.StaticDataSource(getReviews, reviewColModel, reviewPagingParams); 

	var reviewRepeater = new booking.Repeater({
		containerSelector : '.reviews_list',
		templateSelector : '.one_review.template',
		dataSource : reviewDs,
		pager : {
			templateSelector : '.review_list_pagination.template',
			containerSelector : '.review-pagination-wrapper',
			bindingHandlers : {
				"showing" : function(model, element){				
					if(model.total == 0)
					{
						element.find('.page_showing').hide();
						return;
					}

					var first = (model.pageIndex - 1) * model.pageSize + 1;
					var last = model.pageIndex * model.pageSize;
					if(last > model.total)
					{
						last = model.total;						
					}				

					element.find('.page_showing').text("Showing: {0} - {1}".replace('{0}',  first).replace('{1}',  last));	
				},
				"previous" : function(model, element){
					var link = element.find('.review_previous_page');
					var hasPrev = (model.pageIndex - 1) * model.pageSize > 0;

					if(hasPrev){
						link.removeClass('disabled')						
					}
					else
					{
						link.addClass('disabled')
					}

					
					link.on("click", function(e) {						
						reviewDs.pageIndex(reviewDs.params.pageIndex - 1);		
					})

				},
				"next" : function(model, element){
					var link = element.find('.review_next_page');
					var totalPage = Math.ceil(model.total / model.pageSize);				

					var hasNext = (model.pageIndex + 1)  <= totalPage;

					if(hasNext)
					{
						element.find('.review_next_page').removeClass('disabled');
					}
					else{
						element.find('.review_next_page').addClass('disabled');
					}
					
					link.on("click", function(e) {
						if(hasNext)
						{
							reviewDs.pageIndex(reviewDs.params.pageIndex + 1);	
						}						
					});
				}
			}
		},
		bindingHandlers : {
			"score" : function(model, element){						
				element.find('.review_score').text(model.score);
			},
			"review": function(model, element){
				element.find('.review_content').html('{review}<cite>{sender}</cite>'.replace('{review}', model.review).replace('{sender}', model.sender));
			}
		}
	});


	reviewRepeater.databind();
	

	$('.reviews select').on("change", function(e){
		reviewDs.addSort("score", this.value === "desc");
	});
}

function renderRooms()
{
	var roomPagingParams = new booking.PagingParams();
	roomPagingParams.sortList = [{ field : "price", desc : false}];
	roomPagingParams.filterList = [];

	var roomColModel = [
		{
			type : 'number',	
			name : 'price'
		},
		{
			type : 'number',
			name : 'occupancy',
		},
		{
			type : 'string',
			name : 'room'			
		}
	];

	var getrooms = function(){
		return hotels[0].rooms;
	};

	var roomDs = new booking.StaticDataSource(getrooms, roomColModel, roomPagingParams); 

	var roomRepeater = new booking.Repeater({
		containerSelector : '.rooms_table tbody',
		templateSelector : '.one_room.template',
		dataSource : roomDs,
		bindingHandlers : {
			"name" : function(model, element){						
				element.find('.room_name').text(model.name);
			},
			"occupancy": function(model, element){
				element.find('.room_occupancy').text(model.occupancy);
			},
			"quantity": function(model, element){
				element.find('select').on("change", function(e){
					currentPage.selectedRooms[model.name] = model.price * parseInt(this.value);
					calculateTotal();
				});
			},
			"price" : function(model, element){
				element.find('.room_price').html('&euro;' + model.price); 
			}
		}
	});


	$('.rooms_table .sortable').on("click", function(e){
		var element = $(this);
		$('.rooms_table .sortable').not(element).removeClass('asc').removeClass('desc');		
		var desc = false;

		if(element.hasClass('asc'))
		{
			element.removeClass('asc');	
			element.addClass('desc');	
			desc = true;
		}
		else if(element.hasClass('desc'))
		{
			element.removeClass('desc');	
			element.addClass('asc');		
			desc = false;
		}
		else
		{
			element.addClass('asc');
		}	

		var sortCol = element.attr('data-sortable');	
		roomDs.addSort(sortCol, desc)
	});

	roomRepeater.databind();
	

}


$(function(){
	renderRooms();
	renderReviews();	
})