function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var date=document.getElementById("date_row"+no);
 var task=document.getElementById("task_row"+no);
 var description=document.getElementById("description_row"+no);
 var efforts=document.getElementById("efforts_row"+no);
 var call=document.getElementById("call_row"+no);
	
 var date_data=date.innerHTML;
 var task_data=task.innerHTML;
 var description_data=description.innerHTML;
 var efforts_data=efforts.innerHTML;
 var call_data=call.innerHTML;
	
 date.innerHTML="<input type='date' id='date_text"+no+"' value='"+date_data+"'>";
 task.innerHTML="<input type='text' id='task_text"+no+"' value='"+task_data+"'>";
 description.innerHTML="<input type='text' id='description_text"+no+"' value='"+description_data+"'>";
 efforts.innerHTML="<input type='text' id='efforts_text"+no+"' value='"+efforts_data+"'>";
 call.innerHTML="<input type='text' id='call_text"+no+"' value='"+call_data+"'>";
}




function save_row(no)
{
 var date_val=document.getElementById("date_text"+no).value;
 var task_val=document.getElementById("task_text"+no).value;
 var description_val=document.getElementById("description_text"+no).value;
 var efforts_val=document.getElementById("efforts_text"+no).value;
 var call_val=document.getElementById("call_text"+no).value;

 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("task_row"+no).innerHTML=task_val;
 document.getElementById("description_row"+no).innerHTML=description_val;
 document.getElementById("efforts_row"+no).innerHTML=efforts_val;
 document.getElementById("call_row"+no).innerHTML=call_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}




function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}



/*function addRows(){ 
    var table = document.getElementById('emptbl');
    var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length; 
    var row = table.insertRow(rowCount);
    for(var i =0; i <= cellCount; i++){
        var cell = 'cell'+i;
        cell = row.insertCell(i);
        var copycel = document.getElementById('col'+i).innerHTML;
        cell.innerHTML=copycel;
        if(i == 3){ 
            var radioinput = document.getElementById('col3').getElementsByTagName('input'); 
            for(var j = 0; j <= radioinput.length; j++) { 
                if(radioinput[j].type == 'radio') { 
                    var rownum = rowCount;
                    radioinput[j].name = 'gender['+rownum+']';
                
            
        }
    }
}*/




function add_row()
{
 var new_date=document.getElementById("new_date").value;
 var new_task=document.getElementById("new_task").value;
 var new_description=document.getElementById("new_description").value;
 var new_efforts=document.getElementById("new_efforts").value;
 var new_call=document.getElementById("new_call").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='date_row"+table_len+"'>"+new_date+"</td><td id='task_row"+table_len+"'>"+new_task+"</td><td id='description_row"+table_len+"'>"+new_description+"</td><td id='efforts_row"+table_len+"'>"+new_efforts+"</td><td id='call_row"+table_len+"'>"+new_call+"</td></tr>";

 document.getElementById("new_date").value="";
 document.getElementById("new_task").value="";
 document.getElementById("new_description").value="";
 document.getElementById("new_efforts").value="";
 document.getElementById("new_call").value="";
}


/*disable previous dates */
$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
    
    $('new_date').attr('min', minDate);
});