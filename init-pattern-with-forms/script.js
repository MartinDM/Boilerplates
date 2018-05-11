// Project name
var FormDemoProject = {  

    // Functions for a view, in this case, forms, applied as data on the body
    forms: function(view){
        console.log('ran')
        // Set defaults
        $.validator.setDefaults({
            highlight: function (el) {
            $(el).addClass('is-invalid');
            // console.log(el)
            //$(el).closest('.form-collection').addClass('has-error');
            },
            unhighlight: function (el) {
            $(el).removeClass('is-invalid');
            //$(el).closest('.form-collection').removeClass('has-error');
            },
            errorClass: 'invalid-feedback',
            errorPlacement: function (error, el) {
            if (el.attr('type') == 'checkbox' || el.attr('type') == 'radio') {
                error.appendTo(el.parents('.form-check'));
            } else {
                error.insertAfter(el);
                console.log('check err')
            }
            }
        })
    
        $('#user-form').validate({ 
            rules: {
                email: {
                    required: true,
                },
                name: {
                    required: true
                },
                color: {
                    required: true
                },
                terms: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'please enter an email address',
                    email: 'please enter a valid one',
                },
                name: {
                    required: 'please enter your name'
                },
                terms: {
                    required: 'Do accept our terms please!'
                }
            }
        });  
    }, 
    common: function(){
        'use strict'
        console.log('a common page ran')
    }

}

var App = {
    exec: function(view) {
        'use strict'; 
        var namespace = FormDemoProject; 
        if ( view != '' && namespace[view]) {
            // Execute the object for the correct page...
            namespace[view]()
        }
    },
    init: function(){
        'use strict';
        // Run common stuff
        App.exec('common')
        $('[data-view]').each( function(i, el){
            var view = el.getAttribute('data-view'); 
            App.exec(view);
        });
    }
}

$(document).ready(App.init);