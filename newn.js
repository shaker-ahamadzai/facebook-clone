
$(document).ready(function(){
    //This is the code for toggle the profile section;

    $(".profile").click(function(){
        $(".settings-menu").slideToggle(300);
    })







    ///// This is for like button/////
    var likeImag = $("#like-img1");

    $("#like-btn1").click(function(){
        if(likeImag.attr("src","image/like.png")){
            likeImag.attr("src","image/like-blue.png");
        }        
    })
    $("#like-btn1").dblclick(function(){
        likeImag.attr("src","image/like.png");
    })


    var likeImag2 = $("#like-img2");

    $("#like-btn2").click(function(){
        if(likeImag2.attr("src","image/like.png")){
            likeImag2.attr("src","image/like-blue.png");
        }        
    })
    $("#like-btn2").dblclick(function(){
        likeImag2.attr("src","image/like.png");
    })

    

    var likeImag1 = $("#like-img3");

    $("#like-btn3").click(function(){
        if(likeImag1.attr("src","image/like.png")){
            likeImag1.attr("src","image/like-blue.png");
        }        
    })
    $("#like-btn3").dblclick(function(){
        likeImag1.attr("src","image/like.png");
    })

    //////////////////////////////////////////////

    /// This is the code for toggling the comment section
    $(".comment-btn1").click(function(){
        $("#comment-div1").slideToggle();
    })

    $(".comment-btn2").click(function(){
        $("#comment-div2").slideToggle();
    })

    $(".comment-btn3").click(function(){
        $("#comment-div3").slideToggle();
    })

    /////////////////////////////////////////////////

    ////This is the code section for the share 
    $(".share-btn1").click(function(){
        $("#shares1").slideToggle();
    })

    $(".share-btn2").click(function(){
        $("#shares2").slideToggle();
    })

    $(".share-btn3").click(function(){
        $("#shares3").slideToggle();
    })
})

document.querySelector("#logout").onclick = function(){
    window.open("js_exerrsie.html");
    window.close("facebook.html");
}