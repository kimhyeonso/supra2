console.clear();

function Menu() {
	$('.main_menu > li').mouseenter(function(){
		$('.black_box').addClass('active');
	});
	
	$('.main_menu > li, .sub_menu').mouseleave(function(){
		$('.black_box').removeClass('active');
	});
}

Menu();

function HeaderFix() {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 0) {
			$(".top_bar").addClass("active");
		} else {
			$(".top_bar").removeClass("active");
		}
	});
}

HeaderFix();

//pc 버전 스크롤시 arrow보여주기
function ArrowFix() {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 0) {
			$(".top_btn").addClass("active");
		} else {
			$(".top_btn").removeClass("active");
		}
	});
}

ArrowFix();

//모바일 버전 스크롤시 arrow보여주기
function ArrowFix_mo() {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 0) {
			$(".top_btn_mo").addClass("active");
		} else {
			$(".top_btn_mo").removeClass("active");
		}
	});
}

ArrowFix_mo();

//pc 버전 arrow 클릭시 맨 위로
function ArrowClick() {
	$(document).ready(function () {
		$(".top_btn").bind("click", function () {
			$("html, body").animate({ scrollTop: "0" }, 500);
		});
		// 애니메이션 효과로 자연스럽게 이동됨, 0.5초

		$(".top_btn").on("click", function () {
			$("html").scrollTop("0");
		});
		// 애니메이션 효과없이 즉시 해당 위치 0 지점으로 이동함
	});
}

ArrowClick();

//모바일 버전 arrow 클릭시 맨 위로
function ArrowClick_mo() {
	$(document).ready(function () {
		$(".top_btn_mo").bind("click", function () {
			$("html, body").animate({ scrollTop: "0" }, 500);
		});
		// 애니메이션 효과로 자연스럽게 이동됨, 0.5초

		$(".top_btn_mo").on("click", function () {
			$("html").scrollTop("0");
		});
		// 애니메이션 효과없이 즉시 해당 위치 0 지점으로 이동함
	});
}

ArrowClick_mo();

//사이드 메뉴 클릭시 1차메뉴
function SideMenu_btn() {
	$(".side_menu_btn_on").click(function () {
		$(".side_box").show();
	});
	$(".exit_btn").click(function () {
		$(".side_box").hide();
	});
}

SideMenu_btn();

//사이드 1차메뉴 클릭시 2차메뉴
function SideMenu__show() {
	$(".side_menu ul > li").click(function () {
		let $this = $(this);
		let has = $this.hasClass("active");

		// 클릭당한 대상의 active 붙어있는 형제들 먼저 호출
		// 그의 모든 후손은 slideUp이 되라!!
		$this.siblings(".active").find("ul").stop().fadeOut(300);

		// 클릭당한 대상의 active 붙어있는 형제들 먼저 호출
		// 형제들 호출 뒤, active 붙어있는 후손들부터 active 제거!
		$this.siblings(".active").find(".active").removeClass("active");

		// 클릭당한 대상의 active 붙어있는 형제들 호출 후 active 제거!
		$this.siblings(".active").removeClass("active");

		if (has) {
			$this.find("> ul").stop().fadeOut(300);
			$this.find(".active").removeClass("active");
			$this.removeClass("active");
		} else {
			$this.find("> ul").stop().fadeIn(300);
			$this.addClass("active");
		}
	});

	$(".side_menu ul").click(function () {
		return false;
	});
}

SideMenu__show();

//탑배너 슬라이드
function TopBannerSwiper__init() {
	const swiper = new Swiper(".top_banner .swiper", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000
		}
	});
}

TopBannerSwiper__init();

//슬라이드 스와이퍼
function SectionWrapSwiper__init() {
	const swiper = new Swiper(".section_wrap .swiper", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000
		},
		pagination: {
			el: ".swiper-pagination"
		}
	});
}

SectionWrapSwiper__init();

//pc 스와이퍼
function SwiperSection__init() {
	const swiper = new Swiper(".swiper_section_01 .swiper", {
		// 스와이퍼 속성 정의
		loop: true,
		speed: 1000,
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-group-01 .swiper-button-next",
			prevEl: ".swiper-button-group-01 .swiper-button-prev"
		},
		breakpoints: {
			1024: {
				slidesPerView: 5
			}
		}
	});
}
SwiperSection__init();

//모바일용 스와이퍼
function SwiperSection_02__init() {
	const swiper = new Swiper(".swiper_section_mo .swiper", {
		// 스와이퍼 속성 정의
		loop: true,
		speed: 1000,
		slidesPerView: 2.5,
		slidesPerGroup: 1,
		spaceBetween: 10
	});
}
SwiperSection_02__init();

//BEST ITEM
function SwiperSection__init_02() {
	const swiper = new Swiper(".swiper_section_02 .swiper", {
		// 스와이퍼 속성 정의
		loop: true,
		speed: 1000,
		slidesPerView: 1.5,
		slidesPerGroup: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-group-02 .swiper-button-next",
			prevEl: ".swiper-button-group-02 .swiper-button-prev"
		},
		breakpoints: {
			1024: {
				slidesPerView: 4
			}
		}
	});
}
SwiperSection__init_02();

//인스타 슬라이드
function SwiperSection__init_07() {
	const swiper = new Swiper(".swiper_section_07 .swiper", {
		// 스와이퍼 속성 정의
		loop: true,
		speed: 300,
		autoplay: {
			delay: 3000
		},
		slidesPerView: 2.5,
		slidesPerGroup: 1,
		spaceBetween: 10,
		breakpoints: {
			1024: {
				slidesPerView: 4
			}
		}
	});
}

SwiperSection__init_07();
