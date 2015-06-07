(function(booking){
    'use strict';

    var defaults = {
        templateSelector : '',
        containerSelector : '',
        dataSource : null,
        bindingHandlers : []
    };

    booking.Repeater = function(options){
        var self = this;

        options = $.extend({}, true, defaults, options);            

        self.container = $(options.containerSelector);
        self.template = $(options.templateSelector);
        self.dataSource = options.dataSource;        
        self.bindingHandlers = options.bindingHandlers;

        if(self.container.length == 0)
        {
            throw "specified container could not be found in the dom";
        }

        if(self.template.length == 0)
        {
            throw "specified template could not be found in the dom"
        }

        if(!self.dataSource)
        {
            throw "dataSource options is required"
        }

        self.dataSource.bind("onChanged", function(){
            self.databind();
        });
        

        var render =  function(dataItems){
            //removes everything but template
            self.container.children().not('.template').remove();

            //adds items
            if(dataItems.length > 0)
            {
                $(dataItems).each(function(i, row){
                    //clones template
                    var element = $(self.template).clone(true).removeClass('template');

                    element.appendTo(self.container);

                    //applybindings
                    for (var bindingKey in self.bindingHandlers) {                        
                        self.bindingHandlers[bindingKey].call(self, row, element);
                    }     
                }); 
            }
        }       

        this.databind = function(){            
            var response = this.dataSource.load();
            render(response.rows);            

            var data = {
                pageIndex : self.dataSource.params.pageIndex,
                pageSize : self.dataSource.params.pageSize,
                total : response.total
            };            


            if(options.pager)
            {
                var pager = new booking.Pager({
                    containerSelector: options.pager.containerSelector,
                    templateSelector : options.pager.templateSelector,
                    dataSource : self.dataSource,
                    bindingHandlers : options.pager.bindingHandlers
                });

                pager.render(data);
            }
        };    
    }




}(booking));


