(function(booking){
    'use strict';

    var defaults = {
        templateSelector : '',
        containerSelector : '',
        dataSource : null,
        bindingHandlers : []
    };

    function Pager(options)
    {        
        options = $.extend({}, true, defaults, options);

        var self = this;

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

        this.render = function(data){            
            //removes everything but template
            self.container.children().not('.template').remove();

            //clones template
            var element = $(self.template).clone(true).removeClass('template');
            element.appendTo(self.container);
            //applybindings
            for (var bindingKey in self.bindingHandlers) {                        
                self.bindingHandlers[bindingKey].call(self, data, element);
            }     
        }
    }

    booking.Pager = Pager;

}(booking))