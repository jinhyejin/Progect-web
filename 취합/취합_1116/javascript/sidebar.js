const categoryObject = {
  setActive: function(isStore, id){
    let elementId = document.getElementById(id);
    let elementClass = document.querySelector(".dropdown-content");

    // $("#category a").css("text-decoration","none");
    // elementId.style.textDecoration = "underline";
    // if(isStore){
    //   $(".dropbtn").css("text-decoration","underline");
    //   elementClass.style.display = "block";
    // }else{
    //   elementClass.style.display = "none";
    // }
    $("#category a").css("color","#8d8d8d");
    elementId.style.color = "black";
    if(isStore){
      $(".dropbtn").css("color","black");
      elementClass.style.display = "block";
    }else{
      elementClass.style.display = "none";
    }

    //Store창일 때, 아래 목록 블록형태 우지
    $(".dropdown").hover(
      function(){
        $(".dropdown-content").css("display","block");
      },
      function(){
        if(isStore){
          $(".dropdown-content").css("display","block");
        }else{
          $(".dropdown-content").css("display","none");
        }
      }
    )

    // 마우스 올릴 때, 밑줄표시
    $("#category a").hover(
      function(){
        console.log("in : "+isStore+"/"+i+"/"+id+"/"+this.className);
        $(this).css("text-decoration","underline");
        if(this.id == "Store"||this.id == "Best_item"||this.id == "Outwear"||this.id == "Top"||this.id == "Bottom"||this.id=="Shos & Bag"){
          $(".dropbtn").css("text-decoration","underline");
        }else {
          $(".dropbtn").css("text-decoration","none");
        }
      },
      function(){
        console.log("out : "+isStore+"/"+i);
        if(this.id==id){
          $(this).css("text-decoration","underline");
        }else{
          $(this).css("text-decoration","none");
        }
        if(isStore){
          $(".dropbtn").css("text-decoration","underline");
        }else{
          $(".dropbtn").css("text-decoration","none");
        }
      }
    )
  }
};
