 const apiEndPoint = "http://localhost:3000/api/students"; 

    async function getStudents() {
      const response = await fetch(apiEndPoint,{method:"GET"});
      if(response.ok){
        return await response.json();
      }else{
        alert("student fetch error");
      }  
      
    }

   async function getStudent(studentId) {
      const response = await fetch(`${apiEndPoint}/${studentId}`);

      if (response.ok) {
        const student = await response.json();
        return student;
      } else {
        alert("Student could not fetch with ID:"+studentId);
        return null;
      }
    }

 async function addStudent(student){
        const response = await fetch(apiEndPoint,
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(student)   
            });
        if(response.ok){
            return response.body;
        }else{
            alert('Addition failed');
        }
    }


 async function updateStudent(studentId, student){
        const response = await fetch(`${apiEndPoint}/${studentId}`,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(student)   
            });
        if(response.ok){
            return await response.json();
        }else{
            alert('Update failed');
        }
    }

    export {getStudents, getStudent, addStudent, updateStudent};