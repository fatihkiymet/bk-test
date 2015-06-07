(function(booking){

    if(!booking)
    {
        booking = window.booking = {};
    }

    booking.common = {
        newId : function (prefix) { return prefix + "-" + Math.floor((Math.random() * 10000) + 1) },
        tojQuery : function(element) {
            if (typeof(element) == "string") {
                return $(element.indexOf('#') > -1 ? element : '#' + element);
            } else if (element.constructor.__proto__ == HTMLElement) {
                return $(element);
            } else {
                return element;
            }
        },
        stringComparer : function(a, b){
            //convert to string
            if(typeof(a) != 'string')
            {
                a = a.toString();
            }

            //convert to string
            if(typeof(b) != 'string')
            {
                b = b.toString();
            }

            var A = a.toLowerCase();
            var B = b.toLowerCase();

            return A.localeCompare(B);
        },
        numberComparer : function(a, b){  
            return a-b;
        },
        getComparer : function(type, desc){
            if(type == 'number')
            {
                return this.numberComparer;
            }

            return this.stringComparer;
        } 
    };    
}(window.booking));