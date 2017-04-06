/**
 * Created by Carmen on 06.04.2017.
 */

$(document).ready(function () {

    // add a new list item/task
   $('#add').click(function () {
        var newTask = $('#addList').val();

        if (newTask.length>0){
            $('#toDoList').append('<tr><td><input id="checkList" type="checkbox"><input id="showList" type="text" value="' + newTask + '"></td></tr>');

            $('#addList').val('');
        }
   });

   // remove a list item/task
   $('#remove').click(function () {
      $('td').find('input').each(function () {
         if ($(this).is(':checked')){
             $(this).parents('td').remove();
         }
      });
   });

});

