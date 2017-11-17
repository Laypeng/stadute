
    var nav = document.getElementsByClassName("nav")[0];
    var nav_boxs = nav.getElementsByClassName("nav-box");
    for(var i =0;i<nav_boxs.length;i++){
        nav_boxs[i].onmouseover = function () {
            this.className = "nav-box active";
        };
        nav_boxs[i].onmouseout = function () {
            this.className = "nav-box";
        };
    }
    var nav_uls = nav.getElementsByClassName("nav-ul");
    for(var j=0;j<nav_uls.length;j++){
        var nav_lis = nav_uls[j].getElementsByTagName("li");
        for(var i =0;i<nav_lis.length;i++){
            nav_lis[i].onmouseover = function () {
                this.className = "nav-li";
            };
            nav_lis[i].onmouseout = function () {
                this.className = "";
            };
        }
    }


    var header = document.getElementsByClassName("header")[0];
    var header_img = header.getElementsByTagName("img")[0];
    var header_arrow_left = header.getElementsByClassName("arrow-left")[0];
    var header_arrow_right = header.getElementsByClassName("arrow-right")[0];
    var header_lis = header.getElementsByTagName("li");
    var statusImg = 0;
    var timer = setInterval(abc,3000);
    header_arrow_left.onclick = function () {
        var index = statusImg == 0 ? 4 : statusImg -1;
        header_lis[statusImg].className = "";
        header_lis[index].className = "con-active";
        switchImg(index);
    };
    header_arrow_right.onclick = function () {
        var index = statusImg == 4 ? 0 : statusImg+1;
        header_lis[statusImg].className = "";
        header_lis[index].className = "con-active";
        switchImg(index);
    };
    for(var i =0;i<header_lis.length;i++){
        header_lis[i].index = i;
        header_lis[i].onmouseover = function () {
            if(statusImg == this.index){
                return;
            }
            this.className = "con-li";
            clearInterval(timer);
        };
        header_lis[i].onmouseout = function () {
            if(statusImg == this.index){
                return;
            }
            this.className = "";
            timer = setInterval(abc,3000);
        };
        header_lis[i].onclick = function () {
            if(statusImg == this.index){
                return;
            }
            header_lis[statusImg].className = "";
            this.className = "con-active";
            switchImg(this.index);
        };
    }

    function abc() {
        var index = statusImg == 4 ? 0 : statusImg+1;
        header_lis[statusImg].className = "";
        header_lis[index].className = "con-active";
        switchImg(index);
    }
    function switchImg(index) {
        statusImg = index;
        header_img.src = "images/banner"+(index+1)+".png";
    }




    var center = document.getElementsByClassName("center")[0];
    var center_left = center.getElementsByClassName("left")[0];
    var center_left_lis = center_left.getElementsByTagName("li");
    for(var i =0;i<center_left_lis.length;i++){
        center_left_lis[i].onmouseover = function () {
            this.className = "clear active";
        };
        center_left_lis[i].onmouseout = function () {
            this.className = "clear";
        };
    }
    var center_right = center.getElementsByClassName("right")[0];
    var center_right_lis = center_right.getElementsByTagName("li");
    for(var i =0;i<center_right_lis.length;i++){
        center_right_lis[i].onmouseover = function () {
            this.className = "clear active";
        };
        center_right_lis[i].onmouseout = function () {
            this.className = "clear";
        };
    }
    var center_both = center.getElementsByClassName("both")[0];
    var center_both_top = center_both.getElementsByClassName("top")[0];
    var center_both_bottom = center_both.getElementsByClassName("bottom")[0];
   /* var center_both_bottom_img = center_both_bottom.getElementsByTagName("img");
    for(var i =0;i<center_both_bottom_img.length;i++){
        center_both_bottom_img[i].onmouseover = function () {
            this.className = "botimg";
        };
        center_both_bottom_img[i].onmouseout = function () {
            this.className = "";
        };
    }*/
    var center_both_bottom_lis = center_both_bottom.getElementsByTagName("li");
    for(var i =0;i<center_both_bottom_lis.length;i++){
        center_both_bottom_lis[i].onmouseover = function () {
            this.className = "active";
        };
        center_both_bottom_lis[i].onmouseout = function () {
            this.className = "";
        };
    }
    var children = center_both_top.getElementsByClassName("box");
    for(var i =0;i<children.length;i++){
        children[i].onmouseover = function () {
            var str = this.className+" active";
            this.className = str;
        };
        children[i].onmouseout = function () {
            var str = this.className;
            str = str.substring(0,str.length-7);
            this.className = str;
        }
    }



    var course = document.getElementsByClassName("course");
    for(var j=0;j<course.length;j++){
        var course_box = course[j].getElementsByClassName("box");
        for(var i =0;i<course_box.length;i++){
            course_box[i].onmouseover = function () {
                this.className = "box active";
            };
            course_box[i].onmouseout = function () {
                this.className = "box";
            };
        }
    }



    var info_area = document.getElementsByClassName("info-area")[0];
    var btn_help = info_area.getElementsByClassName("btn-help")[0];
    btn_help.onmouseover = function () {
        this.className = "btn-help active";
    };
    btn_help.onmouseout = function () {
        this.className = "btn-help";
    };
    var info_right_area = info_area.getElementsByClassName("right-area")[0];
    var info_item = info_right_area.getElementsByClassName("item");
    for(var i =0;i<info_item.length;i++){
        info_item[i].onmouseover = function () {
            this.className = "item active clear";
        };
        info_item[i].onmouseout = function () {
            this.className = "item clear";
        }
    }
    var info_left_area = info_area.getElementsByClassName("left-area")[0];
    var avatar_area = info_left_area.getElementsByClassName("avatar")[0];
    avatar_area.onmouseover = function () {
        this.className = "avatar active";
    };
    avatar_area.onmouseout = function () {
        this.className = "avatar";
    };




    var footer = document.getElementsByClassName("footer")[0];
    var footer_up_a = footer.getElementsByClassName("up")[0].getElementsByTagName("a");
    for(var i =0;i<footer_up_a.length;i++){
        footer_up_a[i].onmouseover = function () {
            this.className = "active";
        };
        footer_up_a[i].onmouseout = function () {
            this.className = "";
        }
    }
    var bg_green_items = footer.getElementsByClassName("bg-green");
    for(var i =0;i<bg_green_items.length;i++){
        bg_green_items[i].onmousemove = function () {
            this.className = "bg-green a-green";
        };
        bg_green_items[i].onmouseout = function () {
            this.className = "bg-green";
        }
    }