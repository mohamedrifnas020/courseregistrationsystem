function showenrolledstd(){

fetch("http://localhost:8080/courses/enrolled" )
.then((Response)=> Response.json())
.then((enrolledstudents)=>{


    const enrolledtable=document.getElementById("enrolledstudent")

    enrolledstudents.forEach(enrolledstudent => {

        var row =`<tr>
        <td>${enrolledstudent.name}</td>
        <td>${enrolledstudent.emailid}</td>
        <td>${enrolledstudent.coursename}</td>
        
        
        
        
        </tr>`

        enrolledtable.innerHTML+=row;
        
    });
});





};