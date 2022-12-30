
//메뉴버튼 
$('#menuBtn').mouseenter(function(){
    $('.bar1').stop().animate({
    top : '15%'},200)
});

$('#menuBtn').mouseleave(function(){
$('.bar1').stop().animate({
top : 0},200)
});

$('#menuBtn').mouseenter(function(){
$('.bar3').stop().animate({
top : '85%'},200)
});

$('#menuBtn').mouseleave(function(){
$('.bar3').stop().animate({
top : '100%'},200)
});

//이미지 높이
let imgH = $('.visual-img').height();

setInterval(resizeImge,10);

$('.main-top-slideArea-img').resize(function(){
    resizeImge();
})
resizeImge();

function resizeImge(){
    let imgH = $('.visual-img').height();
    let maxH = 734
    if(imgH<maxH){
        $('.main-top-slideArea-img').css({height : imgH})
    }else{
        $('.main-top-slideArea-img').css({height : maxH})
    }
};

//top 이미지 자동 슬라이드
let slideList1 = $('.slid')
let textNum = $('.text-list');
let currentNum = $('.control-current');
let prevarrow = $('.prevarrow');
let nextarrow = $('.nextarrow');
let play1 = $('.play')
let setintervalId;
let current =0
let pr =$('.progress');

pr.css({width:0}).stop().animate({width:'100%'},5000,"linear")

function autoslide(){
    setintervalId=setInterval(function(){
        let prev = slideList1.eq(current);
        let prevText =textNum.eq(current);
        let prevNum =currentNum.eq(current);
        pr.css({width:0}).stop().animate({width:'100%'},5000,"linear")
        move(prev, 0, '-100%');
        slideList1.removeClass('imgeEscape');
        prev.addClass('imgeEscape');
        prevText.addClass('active');
        textNum.removeClass('active');
        prevNum.addClass('on');
        currentNum.removeClass('on');
        current++;
        
        if(current==slideList1.size()){
            current=0;  
        }
        let next = slideList1.eq(current);
        let nextText =textNum.eq(current)
        let nextNum =currentNum.eq(current);
        move(next,'100%', 0);
        slideList1.addClass('imgeEscape');
        next.removeClass('imgeEscape');
        nextText.addClass('active');
        nextNum.addClass('on')
    },5000);
}
autoslide()

function move(tg, start, end){
    tg.css('top',start).stop().animate({top:end},800)
}

//next,prev 버튼
nextarrow.click(function(){
    let prev = slideList1.eq(current);
    let prevText =textNum.eq(current);
    let prevNum =currentNum.eq(current);
    move(prev, 0, '-100%');
    slideList1.removeClass('imgeEscape')
    prev.addClass('imgeEscape');
    prevText.addClass('active');
    textNum.removeClass('active');
    prevNum.addClass('on');
    currentNum.removeClass('on');
    pr.css({width:0}).stop().animate({width:'100%'},5000,"linear")
    current++;

    if(current==slideList1.size()){
        current=0;
        prev.removeClass('imgeEscape');
       
    }
    let next = slideList1.eq(current);
    let nextText =textNum.eq(current);
    let nextNum =currentNum.eq(current);
    move(next,'100%', 0);
    slideList1.addClass('imgeEscape');
    next.removeClass('imgeEscape');
    nextText.addClass('active');
    nextNum.addClass('on')
    clearInterval(setintervalId);
    autoslide();

  
if(play1.hasClass('on')){
    clearInterval(setintervalId);
}
});

prevarrow.click(function(){
    let prev = slideList1.eq(current);
    let prevText =textNum.eq(current);
    let prevNum =currentNum.eq(current);
    move(prev, 0, '100%');
    slideList1.removeClass('imgeEscape')
    prev.addClass('imgeEscape');
    prevText.addClass('active');
    textNum.removeClass('active');
    prevNum.addClass('on');
    currentNum.removeClass('on');
    pr.css({width:0}).stop().animate({width:'100%'},5000,"linear")
    current--;
   
    if(current==-slideList1.size()){
        current=0;
        prev.removeClass('imgeEscape');
       
    }
    let next = slideList1.eq(current);
    let nextText =textNum.eq(current);
    let nextNum =currentNum.eq(current);
    move(next,'-100%', 0);
    slideList1.addClass('imgeEscape');
    next.removeClass('imgeEscape');
    nextText.addClass('active');
    nextNum.addClass('on')
    clearInterval(setintervalId);
    autoslide();

    if(play1.hasClass('on')){
        clearInterval(setintervalId);}
});

//pause,play버튼 누르면 멈추고 실행하기
let play =document.querySelector('.play')
let pause =document.querySelector('.pause')

pause.onclick = function(){
    pause.classList.remove('on')
    play.classList.add('on')
    clearInterval(setintervalId)
}
play.onclick = function(){
    play.classList.remove('on')
    pause.classList.add('on')
    pr.css({width:0}).stop().animate({width:'100%'},5000,"linear")
    autoslide();
}

//next,prev버튼 화살표, 글자변경
$('.nextarrow').mouseenter(function(){
    $('.nextbtn').animate({opacity: "1"},100)
});
$('.nextarrow').mouseout(function(){
    $('.nextbtn').animate({opacity: "0"},100)
});
$('.prevarrow').mouseenter(function(){
    $('.prevbtn').animate({opacity: "1"},100)
});
$('.prevarrow').mouseout(function(){
    $('.prevbtn').animate({opacity: "0"},100)
});

//헤더 스크롤 네비게이션(흰색배경)
let $window = window;
let $header = document.getElementById('header');
let $height = $header.offsetHeight;

$window.addEventListener('scroll',function(){
    if(this.pageYOffset>$height){
        if(!$header.classList.contains('scrollHeader')){
            $header.classList.add('scrollHeader')
        }else{}
    }else{
        if($header.classList.contains('scrollHeader')){
            $header.classList.remove('scrollHeader')
        }
    }
});
let header = $('#header')
let scrollHeader = $('.scrollHeader')

$(window).scroll(function(){
    let scrollHeaderTop =scrollHeader.scrollTop();
    let mainHeight = $('#main_visual').innerHeight();
    if(scrollHeaderTop>mainHeight){
        header.stop().animate({
            top : 100 +'%'
        },500)
    }else{}
});

//스크롤 이벤트 해더 수정!!!!!!!
$(window).scroll(function(){
    const wt= $(window).scrollTop();
    let docEl =$(document).innerHeight();
    let docMax =parseInt(docEl/8)
    if(wt>=docMax){
        header.css({"-webkit-transform":"translateY(-100%)","opacity":"0"});
    }else{
        header.css({"-webkit-transform":"translateY(0)","opacity":"1"});
    }
    if(wt>400){
        $('.sideNav').css({opacity:'1'})
    }else{
        $('.sideNav').css({opacity:'0'})
    }
});
/* $(window).on("mousewheel",function(e){
    if(e>0){
        if(wt>docMax){header.css({"-webkit-transform":"translateY(0)","opacity":"1"});}
    }else if(e<0){
        header.css({"-webkit-transform":"translateY(-100%)","opacity":"0"});
    }
}); */


//텍스트 슬라이드
function spaceTextTransform(){
const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
const offset1 = (scrollTop-document.querySelector('.main_space_text').offsetTop) *0.2;

document.querySelector('.main_space_text').style.transform = "translateX("+ -offset1+"px)";
};
window.addEventListener('scroll',spaceTextTransform);

//배경 아이콘 슬라이드
function bgscroll(){
    const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    const offset = scrollTop *0.08;

    document.querySelector('#bg_slide').style.transform = "translateY("+offset+"px)";
}
window.addEventListener('scroll',bgscroll);

//화면 넓이에 따른 변경
//moreBtn 색상 변경
//cx,cy 크기 변경
let windowWidth = $(window).width();
setInterval(moreBtnBlack,100);
$(window).resize(function(){
    moreBtnBlack();
});
moreBtnBlack();
function moreBtnBlack(){
    let windowWidth = $(window).width();
    if(windowWidth<1023){
        $('.moreBtnBlack').find('img').attr('src','./imgs/moreBtn.png').css('transform','rotate(0deg)')
    }else{$('.moreBtnBlack').find('img').attr('src','./imgs/topImgSlideArrow.png').css('transform','rotate(180deg)')}
    if(windowWidth<=768){
        $('.bg').attr({cx:10,cy:10,r:8})
        $('.bar').attr({cx:10,cy:10,r:8})
    }else{
        $('.bg').attr({cx:12,cy:12,r:10})
        $('.bar').attr({cx:12,cy:12,r:10})
    }
};


//scroll 버튼
let main_serviceTop = $('#main_service').offset();

$('.scroll').click(function(){
    $('html,body').stop().animate({scrollTop: main_serviceTop.top},500);
});

//svg animation
let brandStory = $('.brand_story_title');
let brandStorySt = brandStory.offset().top;
//console.log(brandStorySt)

$(window).scroll(function(){
    let wt= $(window).scrollTop();
    if(wt>=brandStorySt-100){
        let i=1
        let j=1
        $('.icon1>svg>.st0').addClass('stAni')
        $('.icon2>svg>path').each(function(){
            $(this).addClass('st'+i);
            i =i + 1;
        });
        $('.icon3>svg>path').each(function(){
            $(this).addClass('st'+j);
            j =j + 1;
        });
    };
});

//POWERED BY MIELE img 사이즈

setInterval(resizePowered,30);
resizePowered();

$('.main_powered_img_area').resize(function(){
    resizePowered();
});

function resizePowered(){
    let poweredH = $('.main_powered_img_area> figure>img').height();
    $('.main_powered_img_area').css('height',poweredH)
    $('.listSpot').css('height',poweredH)
}

//POWERED BY MIELE auto 슬라이드
let powered = $('.main_powered_img_area>figure');
let current1 =0
let setintervalP;
let poweredBtn =$('.listSpot>ul>li>button');
let poweredBar = $('.circle>svg>.bar');

function autoPowered(){
    setintervalP=setInterval(function(){
        let prev = powered.eq(current1);
        powered.find('img').css({transform:'scale(1.1)',opacity:0})
        prev.find('img').css({transform:'scale(1)',opacity:1})
        poweredBtn.addClass('dot')
        poweredBtn.removeClass('circle')
        current1++;
        if(current1==powered.size()){current1=0;}
        let next = powered.eq(current1);
        let nextBtn = poweredBtn.eq(current1);
        powered.find('img').css({transform:'scale(1.1)',opacity:0})
        next.find('img').css({transform:'scale(1)',opacity:1})
        nextBtn.addClass('circle')
        nextBtn.removeClass('dot')
    },7000);
};
autoPowered();

poweredBtn.click(function(){
    clearInterval(setintervalP)
    let tg = $(this);
    let i = tg.find('span').text();
    let prev = powered.eq(i);
    powered.find('img').css({transform:'scale(1.1)',opacity:0})
    prev.find('img').css({transform:'scale(1)',opacity:1})
    poweredBtn.removeClass('circle')
    poweredBtn.addClass('dot')
    tg.addClass('circle')
    tg.removeClass('dot')
    function clickAutoPowered(){
        setintervalP=setInterval(function(){
            powered.find('img').css({transform:'scale(1.1)',opacity:0})
            prev.find('img').css({transform:'scale(1)',opacity:1})
            poweredBtn.addClass('dot')
            poweredBtn.removeClass('circle')
            i++;
            if(i==powered.size()){i=0;}
            let next = powered.eq(i);
            let nextBtn = poweredBtn.eq(i);
            powered.find('img').css({transform:'scale(1.1)',opacity:0})
            next.find('img').css({transform:'scale(1)',opacity:1})
            nextBtn.addClass('circle')
            nextBtn.removeClass('dot')
        },7000);
    };
    clickAutoPowered()
});




//gototop btn
$('.gototopBtn').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},800);
});