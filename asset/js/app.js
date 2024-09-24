

document.getElementById('btn-register')
    .addEventListener("click", btnRegister)


function btnRegister() {
    let name = document.getElementById('txt-name').value;
    let age = document.getElementById('txt-age').value;
    let contact = document.getElementById('txt-contact').value;
    let gname = document.getElementById('txt-gname').value;
    let gaddress = document.getElementById('txt-gaddress').value;
    let gcontact = document.getElementById('txt-gcontact').value;


    let requestBody = {
        "name": name,
        "age": age,
        "contact":contact,
        "gname":gname,
        "gaddress":gaddress,
        "gcontact":gcontact
    }

    fetch("http://localhost:8080/student/save", {
        method: 'POST',
        body:JSON.stringify(requestBody),
        headers:new Headers({"Content-Type":"application/json"})
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            // showsuccesnotification()
        });
}

// function showsuccesnotification() {

//     const toastLiveExample = document.getElementById('liveToast');
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

//     toastBootstrap.show()


// }

// Function to get all student data
// async function getAllStudents() {
//     try {
//         // Call to the backend API to fetch all students
//         let response = await fetch('http://localhost:8080/student/get'); // Use your correct API endpoint here

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Convert response to JSON
//         let data = await response.json();

//         // Handle/display the data
//         console.log(data);
//         // You can now manipulate the data or display it on your web page
//     } catch (error) {
//         console.error('Error fetching student data:', error);
//     }
// }

