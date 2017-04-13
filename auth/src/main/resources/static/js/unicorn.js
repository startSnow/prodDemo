/**
 * Unicorn Admin Template
 * Diablo9983 -> diablo9983@gmail.com
**/
$(document).ready(function(){

	
	var ul = $('#sidebar > ul');
	var leftnav = $('.leftnav');
	var sid = $('#sidebar');
	var uoff= $('.sidebar_close');
	var yoff= $('#sidebar_close');
	var yopen = $('#sidebar_open');
	var sss= $('.leftnav').width();
	$('#sidebar_btn').click(function(){
	
		if(leftnav.css('width') == '60px'){
						sid.animate({   
				left: "0px",   
			  }, 300 );
			  
			uoff.animate({   
				left: "-60px",   
			  }, 300 );
			$('.in-sub-navimg').css({width:'160px'});
			$(".in-sub-navimg img").css({display:'block'});
			$('#content').css({marginLeft:'260px'});
			$('.icona').css({marginLeft:'60px'});
			$('.leftnav').css({width:'260px'});
		}else{
			
			  $('.in-sub-navimg').css({width:'159px'});
			uoff.animate({   
				left: "0px",   
			  }, 300 );
			  
			  sid.animate({   
				left: "-260px",   
			  }, 300 );
			  $('.leftnav').css({width:'60px'});
			 $('.in-sub-navimg').css({width:'0px'});
			 $(".in-sub-navimg img").css({display:'none'});
			 $('.icona').css({marginLeft:'10px'});
			 $('#content').css({marginLeft:'60px'});
			 
		}
	});
	
		$('.lihove').hover(function(){
			var xl=$(".sidebar_closexl");
			if(xl.css('display') == 'none'){
				xl.slideDown(200);
				}else{
					
					xl.slideUp(200);
					}
			
			});
			
			$('.lihove_pen').hover(function(){
			var xlpen=$(".sidebar_closepen");
			if(xlpen.css('display') == 'none'){
				xlpen.slideDown(200);
				}else{
					
					xlpen.slideUp(200);
					}
			
			});
		$('.threemenus').hover(function(){
			var threemenu=$(".sidebar_closepen_list");
			if(threemenu.css('display') == 'none'){
				threemenu.slideDown(200);

				}else{
					
					threemenu.slideUp(200);
					}
			
			});


	$('#sidebar > a').click(function(e)
	{
		e.preventDefault();
		var sidebar = $('#sidebar');
		if(sidebar.hasClass('open'))
		{
			sidebar.removeClass('open');
			ul.slideUp(250);
		} else 
		{
			sidebar.addClass('open');
			ul.slideDown(250);
		}
	});
	
	// === Resize window related === //
	$(window).resize(function()
	{
		if($(window).width() > 479)
		{
			//ul.css({'display':'block'});	
			$('#content-header .btn-group').css({width:'auto'});		
		}
		if($(window).width() < 479)
		{
			ul.css({'display':'none'});
			fix_position();
		}
		if($(window).width() > 768)
		{
			$('#user-nav > ul').css({width:'auto',margin:'0'});
            $('#content-header .btn-group').css({width:'auto'});
		}
	});
	
	if($(window).width() < 468)
	{
		ul.css({'display':'none'});
		fix_position();
	}
	if($(window).width() > 479)
	{
	   $('#content-header .btn-group').css({width:'auto'});
		//ul.css({'display':'block'});
	}
	
	// === Tooltips === //
	$('.tip').tooltip();	
	$('.tip-left').tooltip({ placement: 'left' });	
	$('.tip-right').tooltip({ placement: 'right' });	
	$('.tip-top').tooltip({ placement: 'top' });	
	$('.tip-bottom').tooltip({ placement: 'bottom' });	
	
	// === Search input typeahead === //
	$('#search input[type=text]').typeahead({
		source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons','Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs','Widgets'],
		items: 4
	});
	
	// === Fixes the position of buttons group in content header and top user navigation === //
	function fix_position()
	{
		var uwidth = $('#user-nav > ul').width();
		$('#user-nav > ul').css({width:uwidth,'margin-left':'-' + uwidth / 2 + 'px'});
        
        var cwidth = $('#content-header .btn-group').width();
        $('#content-header .btn-group').css({width:cwidth,'margin-left':'-' + uwidth / 2 + 'px'});
	}
	
	// === Style switcher === //
	$('#style-switcher i').click(function()
	{
		if($(this).hasClass('open'))
		{
			$(this).parent().animate({marginRight:'-=190'});
			$(this).removeClass('open');
		} else 
		{
			$(this).parent().animate({marginRight:'+=190'});
			$(this).addClass('open');
		}
		$(this).toggleClass('icon-arrow-left');
		$(this).toggleClass('icon-arrow-right');
	});
	
	$('#style-switcher a').click(function()
	{
		var style = $(this).attr('href').replace('#','');
		$('.skin-color').attr('href','../css/unicorn.'+style+'.css');
		$(this).siblings('a').css({'border-color':'transparent'});
		$(this).css({'border-color':'#aaaaaa'});
	});
			
		$('.submenu > a').click(function(e)
			{
				$('#djcd').slideToggle(500);
				e.preventDefault();
				
			});
		$('.sub').click(function(){
					var ject =$("#ejcd");
								
									if(ject.css('display') == 'none'){
										ject.slideDown(400);
							 			
									}else{
										ject.slideUp(400);
										
									}
				})
				$('.yjan').click(function(){
					var  clst=$("#sjcd");
								
									if(clst.css('display') == 'none'){
										clst.slideDown(400);
							 			
									}else{
										clst.slideUp(400);
										
									}
				});
				$('.sjdj').click(function(){
					var  clmove=$("#fjcd");
								
									if(clmove.css('display') == 'none'){
										clmove.slideDown(400);
							 			
									}else{
										clmove.slideUp(400);
										
									}
				});
				$('.searchtb').click(function(e){
					var evt=window.event || e;
					evt.stopPropagation();
					var  searchm=$(".searchtext");
								
					if(searchm.css('display') == 'none'){
						$('.searchtb').css("display","none");
						searchm.slideDown(200);
					}
				});
					$(document).click(function (e) {
					var evt=window.event || e;  
		            var target=evt.target || evt.srcElement;
					var attrStr=$(target).attr("class");
					if(attrStr != "test"){
						if (!$(this).is(".tip-right")&&!$(this).is(".searchtb")&&!$(this).is(".test")){
							$('.searchtb').css("display","block");
							$(".searchtext").css("display","none");
						} 
					}					
		            evt.stopPropagation(); //阻止事件冒泡 
		        });
});

function setup_sidebar_menu()
 {
	if(public_vars.$sidebarMenu.length)
	{
		var $items_with_subs = public_vars.$sidebarMenu.find('li:has(> ul)'),
			toggle_others = public_vars.$sidebarMenu.hasClass('toggle-others');
		
		$items_with_subs.filter('.active').addClass('expanded');
		
		$items_with_subs.each(function(i, el)
		{
			var $li = jQuery(el),
				$a = $li.children('a'),
				$sub = $li.children('ul');
			
			$li.addClass('has-sub');
			
			$a.on('click', function(ev)
			{
				ev.preventDefault();
				
				if(toggle_others)
				{
					sidebar_menu_close_items_siblings($li);
				}
				
				if($li.hasClass('expanded') || $li.hasClass('opened'))
					sidebar_menu_item_collapse($li, $sub);
				else
					sidebar_menu_item_expand($li, $sub);
			});
		});
	}
}