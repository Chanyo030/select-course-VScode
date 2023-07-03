// 新增學生資訊
const student_Id1DOM = document.querySelector("#student_Id1");
const student_Name1DOM = document.querySelector("#student_Name1");
const addStudentBtnDOM = document.querySelector("#addStudentBtn");

const addStudentDivInfoDOM = document.querySelector("#addStudentDivInfo");

// 修改學生資訊
const student_Id2DOM = document.querySelector("#student_Id2");
const student_Name2DOM = document.querySelector("#student_Name2");
const updateStudentBtnDOM = document.querySelector("#updateStudentBtn");

const updateStudentInfoDOM = document.querySelector("#updateStudentInfo");

// 刪除學生資訊
const student_Id3DOM = document.querySelector("#student_Id3");
const student_Name3DOM = document.querySelector("#student_Name3");
const deleteStudentBtnDOM = document.querySelector("#deleteStudentBtn");

// 學號查詢
const studentIdInfoInputDOM = document.querySelector("#studentIdInfoInput");
const studentIdInfoBtnDOM = document.querySelector("#studentIdInfoBtn");
const studentIdInfoTableDOM = document.querySelector("#studentMangeTableInfo");

// 姓名查詢
const studentNameInfoInputDOM = document.querySelector("#studentNameInfoInput");
const studentNameInfoBtnDOM = document.querySelector("#studentNameInfoBtn");
const studentNameInfoTableDOM = document.querySelector("#studentMangeTableInfo");

// 學生總覽
const studentMangeTableInfoDOM = document.querySelector("#studentMangeTableInfo");



// 新增學生資訊
addStudentBtnDOM.addEventListener("click", function () {

    const student_Id1 = student_Id1DOM.value;
    const student_Name1 = student_Name1DOM.value;

    const body = {
        "studentId": student_Id1,
        "studentName": student_Name1
    };

    fetch("http://localhost:8080/api/addStudentInfo", {
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
            console.log(data);
            alert(data.message)

            let addStudent = "";
            addStudent = `
            <p>學號：${data.student.studentId}</p>
            <p>姓名：${data.student.studentName}</p>`
            addStudentDivInfoDOM.innerHTML = addStudent;
            console.log(addStudent);
        })

})

// 修改學生資訊
updateStudentBtnDOM.addEventListener("click", function () {
    const student_Id2 = student_Id2DOM.value;
    const student_Name2 = student_Name2DOM.value;

    const body = {
        "studentId": student_Id2,
        "studentName": student_Name2
    }

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
            console.log(data);
            alert(data.message)

            let updateStudent = "";
            updateStudent = `
            <p>學號：${data.student.studentId}</p>
            <p>姓名：${data.student.studentName}</p>
            <p>課程代碼：${data.student.courseCode}</p>`
            updateStudentInfoDOM.innerHTML = updateStudent;
            console.log(updateStudent);
        })
})

// 刪除學生資訊
deleteStudentBtnDOM.addEventListener("click", function () {
    const student_Id3 = student_Id3DOM.value;
    const student_Name3 = student_Name3DOM.value;

    const body = {
        "studentId": student_Id3,
        "studentName": student_Name3
    }

    fetch("http://localhost:8080/api/deleteStudentInfo", {
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
            console.log(data);
            alert(data.message)

        })
})

// 學號查詢
studentIdInfoBtnDOM.addEventListener("click", function () {
    const studentIdInfoInput = studentIdInfoInputDOM.value;

    const body = {
        "studentId": studentIdInfoInput,
    }

    fetch("http://localhost:8080/api/studentIdQuery", {
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
            console.log(data);
            alert(data.message)

            let studentIdInfo = "";
            studentIdInfo = `
            <table class="table" id="studentMangeTable">
                    <tbody id="studentMangeTableInfo">
                        <tr>
                            <th scope="row">${data.student.studentId}</th>
                            <td>${data.student.studentName}</td>
                            <td>${data.student.courseCode}</td>
                        </tr>

                    </tbody>
                </table>
                `
            studentIdInfoTableDOM.innerHTML = studentIdInfo;
            console.log(studentIdInfo);

        })


})

// 姓名查詢
studentNameInfoBtnDOM.addEventListener("click", function () {

    const studentNameInfoInput = studentNameInfoInputDOM.value;

    const body = {
        "studentName": studentNameInfoInput
    }

    fetch("http://localhost:8080/api/studentNameQuery", {
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
            console.log(data);
            alert(data.message)

            let studentName = "";
            studentName = `
            <table class="table" id="studentMangeTable">
                    <tbody id="studentMangeTableInfo">
                        <tr>
                            <th scope="row">${data.student.studentId}</th>
                            <td>${data.student.studentName}</td>
                            <td>${data.student.courseCode}</td>
                        </tr>

                    </tbody>
                </table>
                `
            studentNameInfoTableDOM.innerHTML = studentName;
            console.log(studentName);
        })

})

// 學生總覽
fetch("http://localhost:8080/api/studentAllInfo", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify({})

})
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let studentCourseAllInfo = "";
        data.studentAllList.forEach(function (item) {

            studentCourseAllInfo += `
            <table class="table" id="studentMangeTable">
                            <tbody id="studentMangeTableInfo">
                                <tr>
                                    <th scope="row">${item.studentId}</th>
                                    <td>${item.studentName}</td>
                                    <td>${item.courseCode}</td>
                                </tr>
        
                            </tbody>
                        </table>`

            studentMangeTableInfoDOM.innerHTML = studentCourseAllInfo;
            console.log(studentCourseAllInfo);

        })

    })
