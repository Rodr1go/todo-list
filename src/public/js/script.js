$(document).ready(function(){
    $(".btn-transition.btn.btn-outline-danger").click(function(){
      var id = $(this).data('id')
      $.ajax({
        method: "GET",
        url: "/todos/"+id
      })
      
      $(this).parent().parent().parent().parent().remove()
    });
  });
