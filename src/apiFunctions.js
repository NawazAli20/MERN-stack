 const apiEndPoint = "http://localhost:3000/api/students"; 

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

    export {addStudent};