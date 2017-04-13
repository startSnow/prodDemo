//OrangeTree
/*
*aSettings
*width-Class="OrangeTree"的宽度
*height-Class="OrangeTree"的高度
*indent-层级缩进
*view-"expanded"or"collapsed"or"firstNode"默认"expanded"
*firstNode-view如果为"firstNode"这里是要展开第几个节点,从1开始计算
*single-bool,每次只能展开一级？默认为false,如果view为"expanded"则无效
*/

var OrangeTree; //主操作对象

jQuery.fn.OrangeTree = function(aSettings) {
    OrangeTree = $(this); //绑定对象
    /************************************************************************************************************************************
    控件样式
    ***********************************************************************************************************************************/
    InitStyle(aSettings); //初始化控件样式
    /************************************************************************************************************************************
    事件绑定
    ***********************************************************************************************************************************/
    //首级菜单点击事件
    OrangeTree.find(".first_node").each(function() {
        $(this).bind("click", function() {
            //判断是否已点击过
            if ($(this).hasClass("first_node_click")) {
                //已点击
                $(this).removeClass("first_node_click");
                /**********************滑动************************/
                $(this).next("ul").slideUp("slow");
            } else {
                //未点击

                //single模式
                if (aSettings.view != "expanded") {
                    if (aSettings.single) {
                        $(this).parent("li[class='Item']").siblings("li[class='Item']").children("span").removeClass("first_node_click");
                        $(this).parent("li[class='Item']").siblings("li[class='Item']").children("ul").slideUp("slow");
                    }
                }

                $(this).addClass("first_node_click");
                /**********************滑动************************/
                $(this).next("ul").slideDown("slow");
            }
        });
    });

    //父级菜单点击事件
    OrangeTree.find(".Item").children("span[class!='first_node']").each(function() {
        $(this).bind("click", function() {
            if ($(this).hasClass("Item_node_click")) {
                //已点击
                $(this).removeClass("Item_node_click");
                //图标
                $(this).parent("li[class='Item']").siblings("li[class='Item']").children("span").children("img").attr("src", "../img/demo/item_node_img_right.png");
                $(this).children("img").attr("src", "../img/demo/item_node_img_right.png");
                //滑动
                $(this).next("ul").slideUp("slow");
            } else {
                //未点击
                //single模式
                if (aSettings.view != "expanded") {
                    if (aSettings.single) {
                        $(this).parent("li[class='Item']").siblings("li[class='Item']").children("span").removeClass("Item_node_click");
                        $(this).parent("li[class='Item']").siblings("li[class='Item']").children("ul").slideUp("slow");
                    }
                }
                $(this).addClass("Item_node_click");
                //图标
                $(this).parent("li[class='Item']").siblings("li[class='Item']").children("span").children("img").attr("src", "../img/demo/item_node_img_right.png");
                $(this).children("img").attr("src", "../img/demo/item_node_img_button.png");
                //滑动
                $(this).next("ul").slideDown("slow");
            }
        });
    });
    //绑定所有子元素的点击事件
    OrangeTree.find(".subItem span a").each(function() {
        $(this).bind("click", function() {
            OrangeTree.find(".subItem span").each(function() {
                $(this).removeClass("subItem_node_click");
                $(this).children("img").attr("src", "../img/demo/subItem_img_bg.png");
            });
            $(this).parent("span").addClass("subItem_node_click");
            $(this).siblings("img").attr("src", "../img/demo/subItem_img_click.png");
        });
    });


    /************************************************************************************************************************************
    控件初始化
    ***********************************************************************************************************************************/
    switch (aSettings.view) {
        case "collapsed":
            //缩进
            ViewCollapsed();
            break;
        case "firstNode":
            //第几个展开
            ViewNode(aSettings.firstNode);
            break;
        default:
            //展开
            ViewExpanded();
            break;
    }
}

//初始化样式
function InitStyle(aSettings) {

    /************************************************************************************************************************************
    设置缩进
    ***********************************************************************************************************************************/
    OrangeTree.children("ul").children("li").each(function() {
        TreeView(aSettings.indent, $(this).children("ul"), aSettings.indent);
    });
    
    /************************************************************************************************************************************
    控件样式
    ***********************************************************************************************************************************/
    
    //设置控件的样式
    OrangeTree.css({
        "width": aSettings.width, //宽度
        "height": aSettings.height//高度s
    });
    
    //设置.OrangeTree首级li的样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.children("ul").children("li[class='Item']").children("span").addClass("first_node");

    //设置.OrangeTree首级的.subItem的样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.children("ul").children("li[class='subItem']").children("span").addClass("first_node_subItem");

    //设置.OrangeTree父级的.Item的样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.children("ul").find("li").each(function () {
        if($(this).hasClass("Item")) {
            $(this).children("span[class!='first_node']").addClass("Item_node");
        }
    });

    /************************************************************************************************************************************
    鼠标移动样式
    ***********************************************************************************************************************************/
    //设置.OrangeTree首级li下span的鼠标移动样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.children("ul").children("li[class='Item']").children("span[class='first_node']").hover(function() {
        //鼠标移入,添加移动样式
        $(this).addClass("first_node_hover");
    }, function() {
        //鼠标移出,删除移动样式
        $(this).removeClass("first_node_hover");
    });
    //设置.OrangeTree父级li下span的鼠标移动样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.find(".Item").each(function () {
        $(this).children("span[class!='first_node']").hover(function() {
            $(this).addClass("Item_node_hover");
        }, function() {
            $(this).removeClass("Item_node_hover");
        });
    });
    //设置子级li下span的鼠标移动样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.find(".subItem").each(function() {
        $(this).children("span").hover(function() {
            //鼠标移入,添加移动样式
            $(this).addClass("subItem_node_hover");
        }, function() {
            //鼠标移出,删除移动样式
            $(this).removeClass("subItem_node_hover");
        });
    });
    
    //设置子级li下span下img的图片样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.find(".Item").each(function() {
        if (!$(this).children("span").hasClass("first_node")) {
            $(this).children("span").children("img").addClass("Item_Img_bg");
        }
    });

    //设置子级li下span下img的图片样式
    //为了兼容IE6,此样式不用CSS
    OrangeTree.find(".subItem").each(function() {
    $(this).children("span").children("img").addClass("subItem_Img_bg");
    });
}

//递归设置span的缩进
function TreeView(indent,obj,transfer) {
    $(obj).children("li").children("span").css({
    "text-indent": (transfer + "px").toString()
});
    transfer = indent + transfer;
    $(obj).children("li").each(function() {
    TreeView(indent, $(this).children("ul"), transfer);
    });
}

/*自定义视图*/
function ViewNode(firstNode) {
    ViewCollapsed();
    OrangeTree.children("ul").children("li:nth-child(" + firstNode + ")").children("span[class='first_node']").click();
}
/*缩进视图*/
function ViewCollapsed() {
    OrangeTree.find("li").each(function() {
        if ($(this).hasClass("Item")) {
            $(this).children("ul").hide();
        }
    });
}
/*展开视图*/
function ViewExpanded() {
    OrangeTree.find("li").each(function() {
        if ($(this).hasClass("Item")) {
            if ($(this).children("span").hasClass("first_node")) {
                $(this).children("span").addClass("first_node_click");
            } else {
                $(this).children("span").addClass("Item_node_click");
            }
        }
    });
}