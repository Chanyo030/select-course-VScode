const body = {
    "studentId": "BBB"

}


// 帶API 跟 物件
fetch("http://localhost:8080/api/courseOverview", {

    //預設是getMapping方法 
    method: "POST",
    headers: {

        // 如同在Postman裡的設定
        'Content-Type': 'application/json',

    },
    body: JSON.stringify(body)
})
    .then(function (response) {
        return response.json();
    })

    .then(function (date) {
        console.log(date);
    })
