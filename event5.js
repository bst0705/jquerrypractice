$(function() {
 $('#form').submit(function(){

   let selectValue = $('#select-form').val();
   let textValue = $('#text-form').val();
   $('#output-text').text(textValue);
   $('#output-select').text(selectValue);
   return false;
 });
});