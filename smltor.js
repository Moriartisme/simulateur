$('input[name="option"]').on('change', function(e){
 const isChecked = $(e.target).is(":checked");
 const optionValue = $(e.target).val();
 if(optionValue == "a" && isChecked){
  $(".va1, .va2").show();
  $("#a1")[0].value = ""
  $("#a2")[0].value = ""
 }else if(optionValue == "b" && isChecked){
  $(".va3, .va4").show();
  $("#a3")[0].value = ""
  $("#a4")[0].value = ""
 } else if(optionValue == "a" && !isChecked){
  $(".va1, .va2").hide();
  $("#a1")[0].value = "";
  $("#a2")[0].value = ""
 } else if(optionValue == "b" && !isChecked){
  $(".va3, .va4").hide();
  $("#a3")[0].value = ""
  $("#a4")[0].value = ""
 }
 calculate();
});

calculate = function()
{
    var optiona1, optiona2, optiona3, optiona4, resultss;
   optiona1 = Number(document.getElementById("a1").value);
   optiona2 = Number(document.getElementById("a2").value);
   optiona3 = Number(document.getElementById("a3").value);
   optiona4 = Number(document.getElementById("a4").value);
    if (a3 == null || a3 == "", a4 == null || a4 == "") {   
    resultss = parseInt(optiona1)+parseInt(optiona2);} 
    else {
    resultss = parseInt(optiona1)+parseInt(optiona2)+parseInt(optiona3)+parseInt(optiona4);}
    document.getElementById('a5').value = resultss;
    }
    
    $('input[type=number]').on('focusout', calculate);

     