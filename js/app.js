
$("#open").click(function () {
    if ($(".strip-header-nav").css("left") == "0px") {
        $("#open").children().addClass("fa-times");
        $(".strip-header-nav").animate({ "left": "240px" }, 500);
        $(".nav-tap-menu").animate({ "left": "0" }, 500);
        $(".menu-item a").animate({ "opacity": "1", "padding-top": "25px" }, 1000);
    }
    else {
        $("#open").children().removeClass("fa-times");
        $(".strip-header-nav").animate({ "left": "0" }, 500);
        $(".nav-tap-menu").animate({ "left": "-240px" }, 500);
        $(".menu-item a").animate({ "opacity": "0", "padding-top": "500px" }, 500);
    }

})

//API

let httpReq = new XMLHttpRequest();
let allData = [];
let category = 'now_playing';



getData(category);  

let links = document.querySelectorAll(".nav-category");
for(let i = 0 ; i < links.length ;i++)
{
    links[i].addEventListener("click",function(e)
    {
        category = e.target.text;
        getData(category);
    })
}



function getData(category) 
{
    httpReq.open("GET", "https://api.themoviedb.org/3/movie/"+ category +"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2zl3xlxzqw0IspOQLV4lPbb_FBAjzL6Hx7x7WeyOvSTn6XpffIClJ0IEA");
    httpReq.send();
    httpReq.onreadystatechange = function(){
        if(httpReq.readyState ==4 && httpReq.status ==200)
        {
            allData =JSON.parse(httpReq.response).results;
            displayData();
        }
    }

}



function displayData()
{
    var temp =``;

    for (let i = 0; i < allData.length; i++) {
        temp += `<div class="col-lg-4 col-md-6 mt-5">
        <div class="post">
            <img class="img-fluid rounded" src=https://image.tmdb.org/t/p/w500`+allData[i].poster_path+`>
            <div class="layer  d-flex align-items-center">
                <div class="info p-0">
                    <h2>`+allData[i].original_title+`</h2>
                    <p>`+allData[i].overview+`</p>
                    <p>`+allData[i].vote_average+`</p>
                    <p>`+allData[i].release_date+`</p>
                </div>
            </div>
        </div>

    </div>`
    };

    document.getElementById("rowData").innerHTML =temp;
}
//serach
$(".search").keyup(function()
{
   let serach = $(this).val();
    let temp = ``;
    for (let i = 0; i < allData.length; i++) {
        if(allData[i].original_title.toLowerCase().includes(serach.toLowerCase()))
        {
            temp += `<div class="col-lg-4 col-md-6 mt-5">
            <div class="post">
                <img class="img-fluid rounded" src=https://image.tmdb.org/t/p/w500`+allData[i].poster_path+`>
                <div class="layer  d-flex align-items-center">
                    <div class="info p-0">
                        <h2>`+allData[i].original_title+`</h2>
                        <p>`+allData[i].overview+`</p>
                        <p>`+allData[i].vote_average+`</p>
                        <p>`+allData[i].release_date+`</p>
                    </div>
                </div>
            </div>
    
        </div>`
        };
        
    }
    document.getElementById("rowData").innerHTML =temp;
})


//validation
let userNameRegex = /^[a-zA-Z0-9]+$/;
let userEmailRegex = /^\w+@[a-zA-Z_]+?/;
let userPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
let userAgeRegex = /^[1-9][0-9]?$|^100$/;
let userPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

$("#name").keyup(function () 
{
    let userName = $(this).val();
    if (userNameRegex.test(userName) == false) {
        $("#nameAlert").css("display", 'block');
    }
    else {
        $("#nameAlert").css("display", 'none');
    }
})

$("#email").keyup(function () 
{
    let userEmail = $(this).val();
    if (userEmailRegex.test(userEmail) == false) {
        $("#emailAlert").css("display", 'block');
    }
    else {
        $("#emailAlert").css("display", 'none');
    }
})
$("#phone").keyup(function () {
    let userPhone = $(this).val();
    if (userPhoneRegex.test(userPhone) == false) {
        $("#phoneAlert").css("display", 'block');
    }
    else {
        $("#phoneAlert").css("display", 'none');
    }
})
$("#age").keyup(function () {
    let userAge = $(this).val();
    if (userAgeRegex.test(userAge) == false) {
        $("#ageAlert").css("display", 'block');
    }
    else {
        $("#ageAlert").css("display", 'none');
    }
})
$("#password").keyup(function () 
{
        let userPassword = $(this).val();
        if (userPasswordRegex.test(userPassword) == false) {
            $("#passwordAlert").css("display", 'block');
        }
        else {
            $("#passwordAlert").css("display", 'none');
        }
})
$("#passwordConfrim").keyup(function () 
{
    let userPasswordConfrim = $(this).val();
    if (userPasswordRegex.test(userPasswordConfrim) == false) {
        $("#passwordConfAlert").css("display", 'block');
        $("#submitBtn").attr("disabled","true");
    }
    else {
        $("#passwordConfAlert").css("display", 'none');
        $("#submitBtn").removeAttr("disabled");
    }
})








