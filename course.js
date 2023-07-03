// 新增
const course_code1DOM = document.querySelector("#course_code1");
const course_name1DOM = document.querySelector("#course_name1");
const course_day1DOM = document.querySelector("#course_day1");
const start_time1DOM = document.querySelector("#start_time1");
const end_time1DOM = document.querySelector("#end_time1");
const units1DOM = document.querySelector("#units1");

const addCourseBtnDOM = document.querySelector("#addCourseBtn");
const addCourseInfoDOM = document.querySelector("#addCourseInfo");



// 修改
const course_code2DOM = document.querySelector("#course_code2");
const course_name2DOM = document.querySelector("#course_name2");
const course_day2DOM = document.querySelector("#course_day2");
const start_time2DOM = document.querySelector("#start_time2");
const end_time2DOM = document.querySelector("#end_time2");
const units2DOM = document.querySelector("#units2");

const updateCourseBtnDOM = document.querySelector("#updateCourseBtn");
const updateCourseInfoDOM = document.querySelector("#updateCourseInfo");

// 刪除
const course_code3DOM = document.querySelector("#course_code3");
const deleteCourseBtnDOM = document.querySelector("#deleteCourseBtn");
const deleteCourseInfoDOM = document.querySelector("#deleteCourseInfo");

// 代碼查詢
const searchIdInputDOM = document.querySelector("#searchIdInput");
const searchIdBtnDOM = document.querySelector("#searchIdBtn");
const searchIdTableInfoDOM = document.querySelector("#courseTableInfo");

// 名稱查詢
const searchNameInputDOM = document.querySelector("#searchNameInput");
const searchNameBtnDOM = document.querySelector("#searchNameBtn");
const searchNameTableInfoDOM = document.querySelector("#courseTableInfo");



// 新增
addCourseBtnDOM.addEventListener("click", function () {
    const course_code1 = course_code1DOM.value;
    const course_name1 = course_name1DOM.value;
    const course_day1 = course_day1DOM.value;
    const start_time1 = start_time1DOM.value;
    const end_time1 = end_time1DOM.value;
    const units1 = units1DOM.value;

    const body = {
        "courseCode": course_code1,
        "course": course_name1,
        "courseDay": course_day1,
        "startTime": start_time1,
        "endTime": end_time1,
        "units": units1
    };

    fetch("http://localhost:8080/api/addCreateCourse", {
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

            let addCourse = "";
            addCourse = `
            <p>課程代碼: ${data.school.courseCode}</p>
            <p>課程名稱: ${data.school.courseName}</p>
            <p>課程星期: ${data.school.courseDay}</p>
            <p>開始時間: ${data.school.startTime}</p>
            <p>結束時間: ${data.school.endTime}</p>
            <p>學分: ${data.school.units}</p>`

            addCourseInfoDOM.innerHTML = addCourse;
            console.log(addCourse);
        })

})

// 修改
updateCourseBtnDOM.addEventListener("click", function () {
    const course_code2 = course_code2DOM.value;
    const course_name2 = course_name2DOM.value;
    const course_day2 = course_day2DOM.value;
    const start_time2 = start_time2DOM.value;
    const end_time2 = end_time2DOM.value;
    const units2 = units2DOM.value;

    const body = {
        "courseCode": course_code2,
        "course": course_name2,
        "courseDay": course_day2,
        "startTime": start_time2,
        "endTime": end_time2,
        "units": units2
    };

    fetch("http://localhost:8080/api/updateCourse", {
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

            let updateCourse = "";

            updateCourse = `
    <p>課程代碼: ${data.school.courseCode}</p>
    <p>課程名稱: ${data.school.courseName}</p>
    <p>課程星期: ${data.school.courseDay}</p>
    <p>開始時間: ${data.school.startTime}</p>
    <p>結束時間: ${data.school.endTime}</p>
    <p>學分: ${data.school.units}</p>`

            updateCourseInfoDOM.innerHTML = updateCourse;
            console.log(updateCourse);

        })

})

// 刪除
deleteCourseBtnDOM.addEventListener("click", function () {
    const course_code3 = course_code3DOM.value;

    const body = {
        "courseCode": course_code3
    };

    fetch("http://localhost:8080/api/deleteCourse", {
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

// 課程總覽
// let body = {

// }

fetch("http://localhost:8080/api/courseAllInfo", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify(body)
    body: JSON.stringify({})
})

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        console.log(data);
        let courseAll = "";

        data.selectCourseList.forEach(function (item) {

            courseAll += `<table class="table" id="courseTable">
    <tbody id="courseTableInfo">
        <tr>
        <th scope="row">${item.courseCode}</th>
        <td>${item.courseName}</td>
        <td>${item.courseDay}</td>
        <td>${item.startTime}</td>
        <td>${item.endTime}</td>
        <td>${item.units}</td>
        </tr>
    
    </tbody>
    </table>`

        });
        console.log(courseAll);
        searchIdTableInfoDOM.innerHTML = courseAll;

    })




// 代碼查詢
searchIdBtnDOM.addEventListener("click", function () {
    const searchIdTableInput = searchIdInputDOM.value;
    const body = {
        "courseCode": searchIdTableInput

    }

    fetch("http://localhost:8080/api/courseQuery", {
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

            let searchIdTable = "";
            searchIdTable = `

            <table class="table" id="courseTable">
            <tbody id="courseTableInfo">
                <tr>
                <th scope="row">${data.school.courseCode}</th>
                <td>${data.school.courseName}</td>
                <td>${data.school.courseDay}</td>
                <td>${data.school.startTime}</td>
                <td>${data.school.endTime}</td>
                <td>${data.school.units}</td>
                </tr>

            </tbody>
        </table>`

            searchIdTableInfoDOM.innerHTML = searchIdTable

        })
})

// 名稱查詢
searchNameBtnDOM.addEventListener("click", function () {
    const searchNameInput = searchNameInputDOM.value;

    const body = {
        "course": searchNameInput

    }

    fetch("http://localhost:8080/api/courseNameQuery", {
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

            let searchNameTable = "";
            data.courseQuery.forEach(function (item) {
                searchNameTable += `

    <table class="table" id="courseTable">
    <tbody id="courseTableInfo">
        <tr>
        <th scope="row">${item.courseCode}</th>
        <td>${item.courseName}</td>
        <td>${item.courseDay}</td>
        <td>${item.startTime}</td>
        <td>${item.endTime}</td>
        <td>${item.units}</td>
        </tr>

    </tbody>
</table>`
            })



            searchNameTableInfoDOM.innerHTML = searchNameTable
            console.log(searchNameTable);

        })
})