/**
 * Created by Carmen on 06.04.2017.
 */
$(document).ready(function () {
   $('#add').click(function () {
        var newTask = $('#addList').val();

        if (newTask.length>0){
            $('#toDoList').append('<tr><td><input type="checkbox"><input id="showList" type="text" value="' + newTask + '"></td></tr>');

            $('#addList').val('');
        }
   });

});

