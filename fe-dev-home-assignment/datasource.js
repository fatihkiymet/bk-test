(function(booking){

    var defaults = {
        pageIndex: 1,
        pageSize: 10,
        filterList: [],
        sortList: [],
        multiSortEnabled : false
    };

    function Response(){
        this.rows = [];
        this.total = 0;
    }

    function DataSource(settings) {
        var self = this;
        this.total = 0;


        this.settings = $.extend(true, {}, defaults, settings);

        this.events = { 
            "onChanged" : [],
            "done" : []
        };

        this.trigger = function(name, args) {

            if(self.events[name])
            {
                $.each(self.events[name], function(i, callback){
                    callback.apply(self, args);    
                })                
            }            
        };             

    }

    DataSource.prototype.pageIndex = function(page)
    {
        this.settings.pageIndex = page;
        this.trigger("onChanged")
    }

    DataSource.prototype.pageSize = function(size)
    {
        this.settings.pageSize = size;
        this.trigger("onChanged")
    }

    DataSource.prototype.bind = function(name, callback)
    {
        this.events[name].push(callback);
    }

    DataSource.prototype.addSort = function(name, desc){        
        var sortItem = this.settings.sortList.filter(function(item){
            return item.field == name;
        });

        //if aldready sorted change the sort direction
        if(sortItem.length > 0)
        {
            sortItem[0].desc = !!desc;
        }
        else
        {
            if(this.settings.sortList.length == 0 || this.settings.multiSortEnabled){
                this.settings.sortList.push({field : name, desc : !!desc})
            }        
        }
        
        this.trigger("onChanged");
    }

    DataSource.prototype.clearSort = function(){
        this.settings.sortList = [];
        this.trigger("onChanged");
    }

    DataSource.prototype.load = function(){

    }

    DataSource.prototype.removeSort = function(name){
        $.each(this.settings.sortList, function(i, val){
            if(val.name == name)
            {
                delete this.settings.sortList[i];
            }
        });
        this.trigger("onChanged");
    }

    function StaticDataSource(loadFn, model, settings) {
        var self = this;   
        self.model = model;
        DataSource.call(this, settings);        
        
        this.load = function () {

                var response = new Response();

                var rows = loadFn();

                //if empty or null
                if(!!rows == false || rows.length == 0){ 
                    return response; 
                }
                else
                {
                    response.rows = rows;
                    response.total = rows.length;
                }                            
                

                if(self.settings.sortList.length > 0){
                    var sortItem = self.settings.sortList[0];

                    if(self.model.hasOwnProperty(sortItem.field)){
                        
                        var comparer = common.getComparer(model[sortItem.field].type);
                        
                        self.rows.sort(function(a, b){
                            return comparer(a[sortItem.field], b[sortItem.field]);
                        });
                        
                        if(sortItem.desc){
                            response.rows.reverse();    
                        }                                                
                    }                    
                    else{
                        throw "dataSource model doesn't contain given sort field";
                    }
                }


                var take = self.settings.pageSize;
                var skip = self.settings.pageSize * (self.settings.pageIndex - 1);
                response.rows = response.rows.slice(skip, skip + take);

                return response;
        };
    }

    booking.DataSource = DataSource;

    StaticDataSource.prototype = Object.create(DataSource.prototype);
    StaticDataSource.prototype.constructor = StaticDataSource;

    booking.StaticDataSource = StaticDataSource;    

}(window.booking));
