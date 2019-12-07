(function($){
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    $.app = {
        createQuiz: function(data){
            data = data || {}
            return $.ajax({
                type:"POST",
                url:"/api/quiz/create",
                data:data,
                dataType:'json'
            })
        },
        
        getQuizs: function(data){
            data = data || {}
            return $.ajax({
                type:"GET",
                url:"/api/quiz/get",
                data:data,
                dataType:'json'
            })
        },

        getAllData: function(){
            return $.ajax({
                type:"GET",
                url:"/api/test/datas",
                dataType:'json'
            })
        },

        getAllUsers: function(){
            return $.ajax({
                type:"GET",
                url:"/api/test/users",
                dataType:'json'
            })
        },

        getAllFruits: function(){
            return $.ajax({
                type:"GET",
                url:"/api/test/fruits",
                dataType:'json'
            })
        },

        getAllDays: function(){
            return $.ajax({
                type:"GET",
                url:"/api/test/days",
                dataType:'json'
            })
        }
    }



    

})(jQuery);

// Define function
// Function.prototype.method = function (name, func) {
//     this.prototype[name] = func;
//     return this;
// };

var TableData = function({srno, name, address, desc}){
    this.srno = srno;
    this.name = name;
    this.address = address;
    this.desc = desc;
}

TableData.prototype.renderDataTable = function(){
    var body = $('tbody','#test-table')
    var html = '<tr>';
    html += '<td>'+this.srno+'</td>'; 
    html += '<td>'+this.name+'</td>'; 
    html += '<td>'+this.address+'</td>'; 
    html += '</tr>'
    body.append(html);
}

TableData.prototype.renderUsersTable = function(){
    var body = $('tbody','#test-table1')
    var html = '<tr>';
    html += '<td>'+this.srno+'</td>'; 
    html += '<td>'+this.name+'</td>'; 
    html += '<td>'+this.desc+'</td>'; 
    html += '</tr>'
    body.append(html);
}

TableData.prototype.renderFruitsTable = function(){
    var body = $('tbody','#test-table2')
    var html = '<tr>';
    html += '<td>'+this.srno+'</td>'; 
    html += '<td>'+this.name+'</td>'; 
    html += '</tr>'
    body.append(html);
}

TableData.prototype.renderDaysTable = function(){
    var body = $('tbody','#test-table3')
    var html = '<tr>';
    html += '<td>'+this.srno+'</td>'; 
    html += '<td>'+this.name+'</td>'; 
    html += '</tr>'
    body.append(html);
}


// var makeBlue = function (elem, callback) {
//     elem.classList.add('blue');
//     if (callback && typeof callback === 'function') {
//         callback(elem);
//     }
// };

// // example
// var elem = document.querySelector('.not-blue');
// makeBlue(elem, function (elem) {
//     elem.classList.add('color-changed');
// });

// (function () {

    // if ( typeof window.CustomEvent !== "function" ) {
    //     function CustomEvent ( event, params ) {
    //         params = params || { bubbles: false, cancelable: false, detail: undefined };
    //         var evt = document.createEvent( 'CustomEvent' );
    //         evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    //         return evt;
    //        }
        
    //       CustomEvent.prototype = window.Event.prototype;
        
    //       window.CustomEvent = CustomEvent;
    // }
  
    
//   })();

// creating custom event
var makeBlue = function (elem) {
    elem.classList.add('blue');
    // Create a new event
    var event = new CustomEvent('madeBlue');
    console.log(event)
    // Dispatch the event
    elem.dispatchEvent(event);
};

var elem = document.querySelector('#not-blue');
makeBlue(elem);

// Run function on `madeBlue` event
elem.addEventListener('madeBlue', function (elem) {
    elem.classList.add('color-changed');
}, false);

