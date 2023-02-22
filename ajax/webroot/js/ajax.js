
var csrfToken = $('meta[name="csrfToken"]').attr('content');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': csrfToken // this is defined in app.php as a js variable
    }
});

$(document).ready(function(){
 $("#add").on('click',function(){
     // alert('he');
     var name = $('#name').val();
     var email = $('#email').val();
     var phone_no = $('#phone_no').val();
     
     // alert(name);

     $.ajax({  
         url: '/users/add',  
         type: 'POST',  
         data:{
             name: name,
             email: email,
             phone_no: phone_no

         },
         
         cache: false,

         success: function(data){
            $('#formtest'). reset();

             alert('Okay');
             
         }
         });   
        });
});


//   $.ajax({{
 
//   }});


