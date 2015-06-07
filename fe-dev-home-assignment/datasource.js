(function(booking){

    function Response(){
        this.rows = [];
        this.total = 0;
    }

    function PagingParams(){        
        this.pageIndex = 1;
        this.pageSize = 100;
        this.filterList = [];
        this.sortList = []
    }

    function DataSource(loadFn, params) {
        var self = this;

        self.loadFn = loadFn;        
        self.params = params;

        self.total = 0;
        self.events = { 
            "onChanged" : []
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
        if(page < 1)
        {
            return;
        }

        this.params.pageIndex = page;
        this.trigger("onChanged")
    }

    DataSource.prototype.pageSize = function(size)
    {
        this.params.pageSize = size;
        this.trigger("onChanged")
    }


    DataSource.prototype.bind = function(name, callback)
    {
        this.events[name].push(callback);
    }

    DataSource.prototype.multiSortEnabled = false;

    DataSource.prototype.addSort = function(name, desc){        
        var sortItem = this.params.sortList.filter(function(item){
            return item.field == name;
        });

        //if aldready sorted change the sort direction
        if(sortItem.length > 0)
        {
            sortItem[0].desc = !!desc;
        }
        else
        {
            if(this.multiSortEnabled){                                
                this.params.sortList.push({field : name, desc : !!desc});
            }            
            else{
                if(this.params.sortList.length == 0)
                {
                    this.params.sortList.push({field : name, desc : !!desc});                        
                }
                else
                {
                    this.params.sortList[0] = {field : name, desc : !!desc};
                }
            }   
        }
        
        this.pageIndex(1);
    }

    DataSource.prototype.clearSort = function(){
        this.params.sortList = [];
        this.trigger("onChanged");
    }

    DataSource.prototype.load = function(){

    }

    DataSource.prototype.removeSort = function(name){
        $.each(this.params.sortList, function(i, val){
            if(val.name == name)
            {
                delete this.params.sortList[i];
            }
        });
        this.trigger("onChanged");
    }

    function StaticDataSource(loadFn, cols, params) {
        var self = this;   
        self.cols = cols;
        DataSource.call(self, loadFn, params);        
        
        this.load = function () {

                var response = new Response();

                var rows = self.loadFn();

                if(rows && rows.length > 0){ 
                    response.rows = rows;
                    response.total = rows.length;
                }
                else
                {
                    return response; 
                }                            
                
                if(self.params.sortList.length > 0){
                    var sortItem = self.params.sortList[0];
                    var col = self.cols.filter(function(item){
                        return item.name == sortItem.field;
                    });

                    if(col.length > 0){
                        
                        var comparer = booking.common.getComparer(col[0].type);
                        
                        response.rows.sort(function(a, b){
                            return comparer(a[sortItem.field], b[sortItem.field]);
                        });
                        
                        if(sortItem.desc){
                            response.rows.reverse();    
                        }                                                
                    }                    
                    else{
                        throw "dataSource columns doesn't contain given sort field";
                    }
                }


                var take = self.params.pageSize;
                var skip = self.params.pageSize * (self.params.pageIndex - 1);
                response.rows = response.rows.slice(skip, skip + take);

                return response;
        };
    }


    StaticDataSource.prototype = Object.create(DataSource.prototype);
    StaticDataSource.prototype.constructor = StaticDataSource;

    booking.StaticDataSource = StaticDataSource;
    booking.Response = Response;
    booking.PagingParams = PagingParams;

}(booking));
