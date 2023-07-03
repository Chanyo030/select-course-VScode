const curriculumInputDOM = document.querySelector("#curriculumInput");
const curriculumResultDOM = document.querySelector("#curriculumResult");
const selectStudentDOM = document.querySelector("#selectStudent");
const curriculumBtnDOM = document.querySelector("#curriculumBtn");
const curriculumResDOM = document.querySelector(".curriculumRes")




const selectDropdownBtn1DOM = document.querySelector("#selectDropdownBtn1");
const selectDropdownBtn2DOM = document.querySelector("#selectDropdownBtn2");
const selectDropdownBtn3DOM = document.querySelector("#selectDropdownBtn3");
const selectStudentInputIdDOM = document.querySelector("#selectStudentInputId");
const selectInputCourseCodeDOM = document.querySelector("#selectInputCourseCode");
const selectStudentInfoDOM = document.querySelector("#selectStudentInfo");

// 學生課程查詢
curriculumBtnDOM.addEventListener("click", function () {
    const curriculumInput = curriculumInputDOM.value;

    const body = {
        "studentId": curriculumInput
    };

    fetch("http://localhost:8080/api/courseOverview", {
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
            let content = "";


            // 陣列跟List就要用foreach，並用item打點取DB值
            // courseQuery => postman的res回傳參數名
            data.courseQuery.forEach(function (item) {

                content += `
                <table class="table" >
                <tbody id="curriculumResult">
                    <tr>
                        <th scope="row">${item.courseCode}</th>
                        <td>${item.courseName}</td>
                        <td>${item.courseDay}</td>
                        <td>${item.startTime}</td>
                        <td> ${item.endTime}</td>
                        <td>${item.units}</td>
                    </tr>
                </tbody>
            </table>
                `
            });

            console.log(content);
            curriculumResultDOM.innerHTML = content

            // 反之，一般回船的資料直接用postman的res回傳參數名打點就可以了

            let studentSelectCourse = "";

            studentSelectCourse += `<div id="selectStudent">
                <p>學號：${data.student.studentId}</p>
                <p>姓名：${data.student.studentName}</p>
                <p>課程代碼：${data.student.courseCode}</p>
                </div>`

            console.log(studentSelectCourse);
            selectStudentDOM.innerHTML = studentSelectCourse;

            console.log(data);
        })

})

// 選課
selectDropdownBtn1DOM.addEventListener("click", function () {
    // split 可以用來根據你指定的分隔符號，將字串切割成一個字串陣列。
    const selectStudentInputId = selectStudentInputIdDOM.value;
    const selectInputCourseCode = selectInputCourseCodeDOM.value.split(',');

    const body = {
        "studentId": selectStudentInputId,
        "courseCodeSet": selectInputCourseCode
    };

    fetch("http://localhost:8080/api/courseSelection", {
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
            alert(data.message);

            let selectCourse = "";
            selectCourse += `

            <p>學號: ${data.student.studentId}</p>
            <p>姓名: ${data.student.studentName}</p>
            <p>課程代碼:${data.student.courseCode}</p>`

            selectStudentInfoDOM.innerHTML = selectCourse;
            console.log(selectCourse);
        })

})

// 加選
selectDropdownBtn2DOM.addEventListener("click", function () {
    const selectStudentInputId = selectStudentInputIdDOM.value;
    const selectInputCourseCode = selectInputCourseCodeDOM.value.split(',');

    const body = {
        "studentId": selectStudentInputId,
        "courseCodeSet": selectInputCourseCode
    };

    fetch("http://localhost:8080/api/addCourse", {
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

            let studentAddCourse = "";
            studentAddCourse += `
            <p>學號: ${data.student.studentId}</p>
            <p>姓名: ${data.student.studentName}</p>
            <p>課程代碼:${data.student.courseCode}</p>
        `
            selectStudentInfoDOM.innerHTML = studentAddCourse;

        })


})

// 退選
selectDropdownBtn3DOM.addEventListener("click", function () {
    const selectStudentInputId = selectStudentInputIdDOM.value;
    const selectInputCourseCode = selectInputCourseCodeDOM.value.split(',');

    const body = {
        "studentId": selectStudentInputId,
        "courseCodeList": selectInputCourseCode
    };

    fetch("http://localhost:8080/api/withdrawCourse", {
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

            let studentWithdrawCourse = "";
            studentWithdrawCourse += `
            <p>學號: ${data.student.studentId}</p>
            <p>姓名: ${data.student.studentName}</p>
            <p>課程代碼:${data.student.courseCode}</p>
        `
            selectStudentInfoDOM.innerHTML = studentWithdrawCourse;

        })

})