name_of_student_array=[];
function submit(){
var display_student_array=[];
for (var a=1;a<=4;a++){
var names=document.getElementById("name_of_the_student_"+a).value;
console.log(names);
name_of_student_array.push(names);
}
console.log(name_of_student_array);
var length_of_name_of_student_array=name_of_student_array.length;
console.log(length_of_name_of_student_array);
for (var k=0;k<length_of_name_of_student_array;k++){
display_student_array.push("<h4>Name- "+name_of_student_array[k]+"</h4>");
console.log(display_student_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_of_student_array.sort();
console.log(name_of_student_array);
var display_student_array_sorted=[];
var length_of_name_of_student_array=name_of_student_array.length;
console.log(length_of_name_of_student_array);
for (var k=0;k<length_of_name_of_student_array;k++){
display_student_array_sorted.push("<h4>Name- "+name_of_student_array[k]+"</h4>");
console.log(display_student_array_sorted);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array_sorted;
var remove_commas=display_student_array_sorted.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_of_student_array+"</h1>";
}