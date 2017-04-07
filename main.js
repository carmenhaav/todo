/**
 * Created by Carmen on 06.04.2017.
 */

$(document).ready(function () {
    var id = 0;
    // add a new list item/task
    $('#add').click(function () {
        id++;
        var newTask = $('#addList').val();

        $.ajax({
            method: "POST",
            data: {
                row_id: id,
                new_task: newTask
            }
        });

        if (newTask.length > 0) {
            $('table tbody').append('<tr><td><input id="' + id + '" type="checkbox" name="checkTick"></td><td><input class="form-control" id="showList" type="text" value="' + newTask + '"></td></tr>');

            $('#addList').val('');
        }
    });

    // remove a list item/task
    $('#remove').click(function () {
        var row_id = $("input:checked").prop('id');

        $.ajax({
            method: "GET",
            data: {
                "id": row_id
            }
        });

        $('table tbody').find('input[name="checkTick"]').each(function () {
            if ($(this).is(':checked')) {
                $(this).parents('tr').remove();
            }
        });
        id--;
    });

});

