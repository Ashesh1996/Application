$(document).ready(function(){
    // alert();
    $("#one").prop("checked", true);
    if($("#one").prop("checked")== true){
      $("#onetab").show();
      $("#twotab").hide();
    }
    $("#one").click(function(){
      $("#onetab").show();
      $("#twotab").hide();
    })

    $("#onetab-button").click(function(){
    var first_name = $("#first_name");
    var last_name = $("#last_name");
    var date=$("#date");
    var citi=$("#citi");
    var nation=$("#nation");

    if(first_name.val()==""){
          alert("please enter First name");
          first_name.focus();
          return false;
        }
        else if(last_name.val()==""){
          alert("please enter Last name");
          last_name.focus();
          return false;
        }
        else if(date.val()==""){
          alert("please enter DOB");
          date.focus();
          return false;
        }
        else if(citi.val()==""){
          alert("please enter Citizenship");
          citi.focus();
          return false;
        }
        else if(nation.val()==""){
          alert("please enter Nationality");
          nation.focus();
          return false;
        }
        else{
          $("#twotab").show();
      $("#onetab").hide();
      $("#one").prop("checked", false);
      $("#two").prop("checked", true);
        }

    })
    $("#two").click(function(){
    var first_name = $("#first_name");
    var last_name = $("#last_name");
    var date=$("#date");
    var citi=$("#citi");
    var nation=$("#nation");

    if(first_name.val()=="" && last_name.val()=="" && date.val()=="" && citi.val()=="" && nation.val()==""){
          alert("please fillup all field");
          return false;
        }

        else{
          alert("please click nxt");
          return false;
        }

    })
     

     if($("#two").prop("checked")== true){
      $("#threetab").hide();
      $("#twotab").show();
      $("#onetab").hide();
      $("#fourtab").hide();
      $("#fivetab").hide();
      $("#sixtab").hide();

    }
    $("#two").click(function(){
      $("#threetab").hide();
      $("#twotab").show();
      $("#onetab").hide();
      $("#fourtab").hide();
      $("#fivetab").hide();
      $("#sixtab").hide();

    })
    $("#twotab-button").click(function(){
      var add= $("#address");
      var addd=$("#address1");
      var state=$("#state");
      var desh=$("#country");
      var pin=$("#pincode");
      var phone=$("#phoneno");
      var gmail=$("#mail");

      if (add.val()=="") {
        alert("Give your present Address");
        add.focus();
        return false;
      }
      else if (addd.val()=="") {
        alert("Give your permanent Address");
        addd.focus();
        return false;
      }
      else if (state.val()=="") {
        alert("Write your State Name");
        state.focus();
        return false;
      }
      else if (desh.val()=="") {
        alert("Give your Country name");
        desh.focus();
        return false;
      }
      else if (pin.val()=="") {
        alert("Give your Present Address pincode");
        pin.focus();
        return false;
      }
      else if (phone.val()=="") {
        alert("Give your Valid Phone number");
        phone.focus();
        return false;
      }
      else if (gmail.val()=="") {
        alert("Give your Email Id");
        addd.focus();
        return false;
      }
      else{
        $("#threetab").show();
        $("#three").prop("checked", true);
         $("#twotab").hide();
      $("#two").prop("checked", false);
      
      
      }
    })
     $("#three").click(function(){
     var add= $("#address");
      var addd=$("#address1");
      var state=$("#state");
      var desh=$("#country");
      var pin=$("#pincode");
      var phone=$("#phoneno");
      var gmail=$("#mail");

    if(add.val()=="" && addd.val()=="" && state.val()=="" && desh.val()=="" && pin.val()=="" &&
     phone.val()=="" && gmail.val()=="")
        {
          alert("Please fillup all field");
         return false;
        }
        else{ 
          alert("please click Next");
                return false;    
        }
    })
  })