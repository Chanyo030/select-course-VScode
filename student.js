const inputIdDOM = document.querySelector("#inputId");
const inputNameDOM = document.querySelector("#inputName");
const btn1DOM = document.querySelector("#btn1");


btn1DOM.addEventListener("click", function () {

    const inputId = inputIdDOM.value;
    const inputName = inputNameDOM.value;

    const body = {
        studentId: inputId,
        studentName: inputName
    };

    fetch("http://localhost:8080/api/updateStudentInfo", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(body)
    })

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            alert(data.message)
            console.log(data);

        })



}

)





