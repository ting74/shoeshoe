$(document).ready(function () {
    $('.carbox').click(function (e) {
        e.stopPropagation();
    });

    $('.shopping_cart').click(function () {
        $('.carbox').css({
            'right': '20px',
            'opacity': '1'
        });
        $('.carbox_bg').css('display', 'block');
    });

    $('.carbox_bg').click(function () {
        $('.carbox').css({
            'right': '-500px',
            'opacity': '0'
        });
        $('.carbox_bg').css('display', 'none');
    });

    //-----無縫輪播圖--------------------------------
    let curindex = 0;
    let count = $('.cl_item').length;

    function moveTo(index) {
        $('.carousel').css('transform', 'translateX(' + index * -100 + '%)');
        $('.carousel').css('transition', 'transform 0.5s');
        $('.active').removeClass('active');
        $('.cl_c').eq(index).addClass('active');
        curindex = index;
    }

    function init() {
        const firstCloned = $('.cl_item').eq(0).clone();
        const lastCloned = $('.cl_item').eq(count - 1).clone();
        $('.carousel').append(firstCloned);
        $('.carousel').prepend(lastCloned);
        lastCloned.css('marginLeft', '-100%');
        setInterval(moveRight, 5000);
    }

    function moveLeft() {
        if (curindex === 0) {
            $('.carousel').css('transition', '');
            $('.carousel').css('transform', 'translateX(' + count * -100 + '%)');
            $('.carousel').width();
            moveTo(count - 1);
        }
        else {
            moveTo(curindex - 1);
        }
    }

    function moveRight() {
        if (curindex === count - 1) {
            $('.carousel').css('transition', '');
            $('.carousel').css('transform', 'translateX(100%)');
            $('.carousel').width();
            moveTo(0);
        }
        else {
            moveTo(curindex + 1);
        }
    }

    init();
    $('.pre').click(moveLeft);
    $('.next').click(moveRight);
    $('.cl_c').click(function () {
        var index = $('.cl_c').index(this);
        moveTo(index);
    });
    //-----------------------------------------
    var nowlang;

    $('.lc_item').click(function () {
        var lang = $(this).data('lang');
        setLanguage(lang);
        $('.language').text($(this).text());
        loadshoe();
    });

    function setLanguage(lang) {
        $('[data-lang-zh], [data-lang-en]').each(function () {
            var text = $(this).data('lang-' + lang);
            if ($(this).is('input') || $(this).is('textarea')) {
                $(this).attr('placeholder', text);
            } else {
                if (text) {
                    $(this).text(text);
                }
            }
            nowlang = lang;
        });
    }
    setLanguage("zh");

    var nikeData = [
        {
            imagePath: "./pt/nk/1-1.webp",
            name: "Nike dunk low 深藍奶油",
            price: "2,699",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/2-1.webp",
            name: "Sacai x Nike LDV Waffle Grey 灰白",
            price: "2,699",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/3-1.webp",
            name: "Sacai x Nike LDV Waffle 彩色",
            price: "22,800",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/4-1.webp",
            name: "Sacai x Nike LDV Waffle BLACK 黑",
            price: "17,500",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/5-1.webp",
            name: "Nike Air Max 1 CNY “Longevity” 萬壽無疆 新年限定款",
            price: "10,000",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/6-1.webp",
            name: "Nike Gamma Force 黑白",
            price: "2,580",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/7-1.webp",
            name: "Air Jordan 1 Low Quilted 菱格紋 小香奈兒 低筒",
            price: "3,180",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/8-1.webp",
            name: "Nike Air Jordan 1 厚底 灰白",
            price: "4,880",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/9-1.webp",
            name: "Nike dunk low 椰奶摩卡",
            price: "2,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/10-1.webp",
            name: "Air Jordan 1 Mid Quilted 菱格紋 小香奈兒 高筒",
            price: "5,580",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/11-1.webp",
            name: "Supreme x Air Force 1 白紅勾",
            price: "12,800",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/12-1.webp",
            name: "Nike Air Force 1 '07 LV8 復古學院 刺繡綠勾 男鞋",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/13-1.webp",
            name: "Bode x Nike Astro Grabber 聯名款 黑色",
            price: "17,800",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/14-1.webp",
            name: "Nike Dunk Low Pink Velvet 緞面櫻花粉",
            price: "2,580",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/15-1.webp",
            name: "Nike P-6000 拿鐵",
            price: "2,680",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/16-1.webp",
            name: "Nike Dunk High Bordeaux Crush 勃根地酒紅",
            price: "3,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/17-1.webp",
            name: "Nike Air Jordan 1 Low SE Craft 煙黑武士 小倒鉤",
            price: "3,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/18-1.webp",
            name: "Nike Air Jordan 1 Low Method of Make “Legend Light Brown” 奶油編織金標",
            price: "5,180",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/19-1.webp",
            name: "NIKE Air Jordan 1 Low SE Light Steel Grey 高級灰",
            price: "3,299",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/20-1.webp",
            name: "NIKE ZOOM VOMERO 5 SP ANTHRACITE 淺灰白",
            price: "3,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/21-1.webp",
            name: "Nike Dunk Low Chenille Swoosh 黑灰毛毛勾勾",
            price: "3,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/22-1.webp",
            name: "Nike Dunk High LX Certified Fresh Team Gold 奶油雛菊",
            price: "3,580",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/23-1.webp",
            name: "NIKE GAMMA FORCE 黑白大勾 ",
            price: "2,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/24-1.webp",
            name: "Nike Air Jordan 1 Mid Smoke Grey 小Dior灰白黑煙灰",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/25-1.webp",
            name: "Nike Blazer Low 77 Jumbo 黑白",
            price: "2,680",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/26-1.webp",
            name: "NIKE AIR JORDAN 1 LOW 黑曜石藍",
            price: "3,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/27-1.webp",
            name: "Nike Dunk Low “Barely Green” 草莓薄荷",
            price: "2,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/28-1.webp",
            name: "Nike DunK Low (GS) Ivory Hyper Royal 冰山海鹽灰藍",
            price: "4,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/29-1.webp",
            name: "Nike Air Force 1 Low '07 Sherpa Fleece 羊羔毛 藍勾",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/nk/30-1.webp",
            name: "Nike Dunk Low “Gorge Green” 白綠午夜藍",
            price: "3,680",
            star: "0",
            person: "0"
        },
    ];

    var adidasData = [
        {
            imagePath: "./pt/ad/1-1.webp",
            name: "Adidas Originals Campus 00s 牛奶糖",
            price: "3,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/2-1.webp",
            name: "Adidas Originals Samba OG 縫線寶寶藍",
            price: "3,299",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/3-1.webp",
            name: "Adidas Gazelle Bold x Ordinary People 水藍燕麥灰",
            price: "5,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/4-1.webp",
            name: "Adidas originals rivarly 生椰拿鐵",
            price: "4,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/5-1.webp",
            name: "Adidas Handball Spezial 咖啡牛奶",
            price: "5,480",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/6-1.webp",
            name: "Adidas Originals Samba OG 銀河蕾絲",
            price: "7,080",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/7-1.webp",
            name: "Adidas Originals London 復古藍白",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/8-1.webp",
            name: "didas Neo VL Court 4.0 黑標",
            price: "2,299",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/9-1.webp",
            name: "Adidas Adilette Clogs 綁帶洞洞鞋 三色",
            price: "2,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/10-1.webp",
            name: "Adidas Originals Gazelle 復古紅白",
            price: "6,680",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/11-1.webp",
            name: "Adidas Originals Gazelle 高級灰",
            price: "5,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/12-1.webp",
            name: "Atmos x Adidas Sambae 拉鍊拼接 丹寧牛仔焦糖",
            price: "6,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/13-1.webp",
            name: "Adidas samba OG 焦糖底森林綠",
            price: "3,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/14-1.webp",
            name: "Adidas Handball Spezial 深海霧霾",
            price: "4,580",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/15-1.webp",
            name: "Adidas Sambae “Valentine's Day” 米灰精靈",
            price: "6,280",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/16-1.webp",
            name: "Adidas OG Superstar 奶油灰藍",
            price: "3,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/17-1.webp",
            name: "Adidas Originals Gazelle Bold 厚底黑白",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/18-1.webp",
            name: "Adidas XLG Runner Deluxe Black 黑銀",
            price: "6,180",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/19-1.webp",
            name: "Adidas Neo Gradas 燕麥焦糖",
            price: "2,680",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/20-1.webp",
            name: "Adidas samba OG 深海軍藍",
            price: "3,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/21-1.webp",
            name: "Adidas samba OG 復古雲白",
            price: "3,180",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/22-1.webp",
            name: "Adidas Wensley Spzl Cardboard 栗子摩卡",
            price: "6,880",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/23-1.webp",
            name: "Adidas Bermuda Glow Pink 粉",
            price: "5,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/24-1.webp",
            name: "Adidas Originals Samba 黑紫",
            price: "4,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/25-1.webp",
            name: "Adidas Origins Handball Spezial 紅粉佳人",
            price: "3,980",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/26-1.webp",
            name: "Adidas Originals Samba OG 紫羅蘭繡花🌸",
            price: "4,380",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/27-1.webp",
            name: "Adidas Originals Bermuda 夜色靛藍",
            price: "5,780",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/28-1.webp",
            name: "Adidas Originals Bermuda 復古湛藍",
            price: "4,880",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/29-1.webp",
            name: "Adidas Originals Bermuda 卵石灰紫",
            price: "6,680",
            star: "0",
            person: "0"
        },
        {
            imagePath: "./pt/ad/30-1.webp",
            name: "Adidas Foot Industry x Gazelle Indoor Off White Sand Strata 翻蓋米白粉",
            price: "8,180",
            star: "0",
            person: "0"
        },
    ];

    var searchData = [];

    var limit = 9;
    var page = 1;
    var Data = nikeData.concat(adidasData);

    function loadshoe() {
        $('.shoeContainer').empty();
        var start = (page - 1) * limit;
        var end = start + limit;

        Data.slice(start, end).forEach(function (shoe) {
            var starText;
            if (nowlang === "zh") {
                var avgg = parseFloat(shoe.star) / parseFloat(shoe.person)
                starText = (shoe.star === "0") ? "尚無評分" : avgg.toFixed(1);
            } else {
                var avgg = parseFloat(shoe.star) / parseFloat(shoe.person)
                starText = (shoe.star === "0") ? "No ratings yet" : avgg.toFixed(1);
            }

            var shoeItem = document.createElement('div');
            shoeItem.classList.add('shoeitem');
            shoeItem.innerHTML =
                `<div class="shoePt"><img src="${shoe.imagePath}" alt="">
            <div class="addcart">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                    fill="currentColor" />
                </svg>
            </div>
        </div>
        <div class="shoename_C">
            <div class="shoeName">${shoe.name}</div>
            <div class="shoeMoney">NT$<span>${shoe.price}</span></div>
        </div>
        <div class="star_C">
                <span class="starnum" >${starText}</span>
                <div class="starimg_C"><img src="./icon/star.png" alt="">
        </div>
        </div>`;

            $('.shoeContainer').append(shoeItem);
        });
        setLanguage(nowlang);


        // ----------------------------------------------------------------------------------
        $('.shoePt img').each(function () {
            var imgFile = $(this).attr('src');
            var preloadImage = new Image();
            var imgExt = /(\d+)-(\d+)(\.\w{3,4})$/;
            preloadImage.src = imgFile.replace(imgExt, '$1-2$3');
            var add = $(this).closest('.shoePt').find('.addcart');
            $(this).hover(function () {
                $(this).attr('src', preloadImage.src);
            }, function () {
                if (!add.is(':hover')) {
                    $(this).attr('src', imgFile);
                }
            });
        });

        //購物車
        $('.addcart').click(function () {
            var parent = $(this).closest('.shoeitem');
            var title = parent.find('.shoeName').text();
            var money = parent.find('.shoeMoney span').text();
            var starnum = parent.find('.starnum');
            var imgExt = /(\d+)-(\d+)(\.\w{3,4})$/;
            var Img2 = parent.find('.shoePt img').attr('src');
            var Img1 = Img2.replace(imgExt, '$1-1$3');
            var Img3 = Img2.replace(imgExt, '$1-3$3');
            // console.log(sternum);

            var newitem = document.createElement('div');
            newitem.classList.add('buybg');
            newitem.innerHTML =
                `<div class="buyContainer">
                <div class="buypt_C">
                    <div class="buypt">
                        <img src="${Img1}" alt="">
                    </div>
                    <div class="choosebuypt">
                        <div class="choosebuypt_item">
                            <img src="${Img1}" alt="">
                        </div>
                        <div class="choosebuypt_item">
                            <img src="${Img2}" alt="">
                        </div>
                        <div class="choosebuypt_item">
                            <img src="${Img3}" alt="">
                        </div>
                    </div>
                </div>
                <div class="buy_ifmt">
                    <div>
                        <div class="buy_if_title">${title}</div>
                        <div class="buy_if_dollor">NT$<span>${money}</span></div>
                    </div>
                    <div class="buy_if_CCC">
                        <div class="buy_if_star_C">
                            <div class="starNum" data-lang-zh="請輸入你的評分" data-lang-en="enter your rating">請輸入你的評分</div>
                            <div class="star-rating">
                                <span class="star" data-value="1">&#9733;</span>
                                <span class="star" data-value="2">&#9733;</span>
                                <span class="star" data-value="3">&#9733;</span>
                                <span class="star" data-value="4">&#9733;</span>
                                <span class="star" data-value="5">&#9733;</span>
                            </div>
                        </div>
                        <div class="buy_if_size_C">
                            <span data-lang-zh="尺寸" data-lang-en="Size">尺寸</span>
                            <select class="buy_if_size">
                                <option value="23">23</option>
                                <option value="23.5">23.5</option>
                                <option value="24">24</option>
                                <option value="24.5">24.5</option>
                                <option value="25">25</option>
                                <option value="25.5">25.5</option>
                                <option value="26">26</option>
                                <option value="26.5">26.5</option>
                                <option value="27">27</option>
                                <option value="27.5">27.5</option>
                                <option value="28">28</option>
                                <option value="28.5">28.5</option>
                            </select>
                        </div>
                        <div class="buy_if_numC">
                            <button class="buy_if_reduce">
                                <svg fill="#000000" width="24px" height="24px" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
                                    <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H1.319a1.03 1.03 0 1 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03z" />
                                </svg>
                            </button>
                            <div class="buy_if_count">1</div>
                            <button class="buy_if_plus">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="buy_if_plusCar_C">
                            <button class="buy_if_plusCar" data-lang-zh="加入購物車" data-lang-en="add to the cart">加入購物車</button>
                        </div>
                    </div>
                </div>
                <div class="close_buybg">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>`;

            $('body').append(newitem);
            setLanguage(nowlang);

            $('.choosebuypt_item').click(function () {
                var newSrc = $(this).find('img').attr('src');
                $('.buypt img').attr('src', newSrc);
            });

            var rating = 0;
            $('.star').on('click', function () {
                rating = $(this).data('value');
                $('.star').each(function () {
                    if ($(this).data('value') <= rating) {
                        $(this).addClass('selected');
                    } else {
                        $(this).removeClass('selected');
                    }
                });
                if (nowlang === "zh") {
                    $('.starNum').text("你的評分是 " + rating + "/5")
                } else {
                    $('.starNum').text("Your rating is " + rating + "/5")
                }
            });

            $('.star').on('mouseenter', function () {
                var hoverRating = $(this).data('value');
                setHover(hoverRating);
            });

            $('.star-rating').on('mouseleave', function () {
                setHover(rating);
            });

            function setHover(hoverRating) {
                $('.star').each(function () {
                    if ($(this).data('value') <= hoverRating) {
                        $(this).addClass('hover');
                    } else {
                        $(this).removeClass('hover');
                    }
                });
            }

            $('.close_buybg,.buybg').click(function () {
                newitem.remove();
                if (rating !== 0) {
                    var item = nikeData.find(function (product) {
                        return product.name === title;
                    });

                    if (item) {
                        var avg;
                        item.person = parseFloat(item.person + 1);
                        if (item.star === "0") {
                            avg = rating;
                            item.star = parseFloat(item.star) + rating;
                        } else {
                            item.star = parseFloat(item.star) + rating;
                            avg = parseFloat(item.star) / parseFloat(item.person);
                        }
                        // console.log(avg);
                        // console.log(item);
                        starnum.text(avg.toFixed(1));
                    }
                }
            });

            $('.buyContainer').click(function (e) {
                e.stopPropagation();
            });

            $('.buy_if_reduce').click(function () {
                if ($('.buy_if_count').text() > 1) {
                    $('.buy_if_count').text(parseInt($('.buy_if_count').text()) - 1);
                }
            });

            $('.buy_if_plus').click(function () {
                $('.buy_if_count').text(parseInt($('.buy_if_count').text()) + 1);
            });

            $('.buy_if_plusCar').click(function () {
                if ($('.count').text() == "") {
                    $('.count').text(1);
                }
                else {
                    $('.count').text(parseInt($('.count').text()) + 1);
                }

                var parent = $(this).closest('.buyContainer');
                var count = parent.find('.buy_if_count').text();
                var size = parent.find('.buy_if_size option:selected').val();

                var cbitem = document.createElement('div');
                cbitem.classList.add('carboxitem');

                cbitem.innerHTML = `
                <img src="${Img1}" alt="">
                <div class="cbt_c">
                    <div style="width: 100%;">
                        <div class="cbtitle">${title}</div>
                        <div class="cbsize">${size}</div>
                    </div>
                    <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-between;">
                        <div class="cbm_C">
                            <span class="cbm_count">${count}</span>
                            <span>
                            x NT$<span class="cb_money">${money}</span>
                            </span>
                        </div>
                        <button class="cb_delete">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                `;
                var cart_item = document.createElement('div');
                cart_item.classList.add('cart_item');
                var total = parseInt(money.replace(/,/g, '')) * parseInt(count);
                cart_item.innerHTML = `
                <div class="ci_product">
                    <img src="${Img1}" alt="">
                    <div style="display: flex; flex-direction: column; margin-left: 10px;">
                        <span id="ci_p_name">${title}</span>
                        <span id="ci_p_size">${size}</span>
                    </div>
                </div>
                <div class="ci_money">NT$${money}</div>
                <div class="ci_count">${count}</div>
                <div class="ci_Amoney">
                NT$${total}
                    <div class="d_cart_item">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#292929" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                `;
                $('.cart_item_C').append(cart_item);
                $('.carbox_C').append(cbitem);
                check();
                // newitem.remove();
                $('.buybg').click();

                if (typeof Allmoney === 'undefined') {
                    Allmoney = 0;
                }
                Allmoney += total;
                $('#All_money').text("NT$" + Allmoney);

                $('.cb_delete').last().click(function (e) {
                    e.stopPropagation();
                    var index = $(this).closest('.carboxitem').index();
                    removeitem(index);
                });

                $('.d_cart_item').last().click(function (e) {
                    e.stopPropagation();
                    var index = $(this).closest('.cart_item').index();
                    removeitem(index);
                });

                function removeitem(index) {
                    var carboxitem = $('.carbox_C .carboxitem').eq(index);
                    carboxitem.remove();

                    var checkitem = $('.Carbox_Check .cart_item').eq(index);
                    var itemTotalCart = parseInt(checkitem.find('.ci_money').text().replace(/,/g, '').replace('NT$', '')) * parseInt(checkitem.find('.ci_count').text());
                    Allmoney -= itemTotalCart;
                    checkitem.remove();

                    $('#All_money').text("NT$" + Allmoney);

                    var num = $('.carbox_C').children().length;
                    if (num >= 1) {
                        $('.count').text(num);
                    } else {
                        $('.count').text("");
                    }
                    check();

                    if (Allmoney == 0) {
                        $('.Carbox_Check').hide();
                        $('.noproduct').show();
                    }
                }
            });

            $('#carbox_check_close').click(function () {
                $('.Carbox_Check_next_C').hide();
                $('.Carbox_Check_C').hide();
                $('.Carbox_Check').show();
                $('.correct_C').hide();
                $('body').css('overflow', 'auto');
            });

            $('#to_ccn').click(function () {
                $('.Carbox_Check').hide();
                $('.Carbox_Check_next_C').show();
                var money = $('#All_money').text();
                $('#ccni_money_M').text(money);

                let user = personData.find(person => person.name === cookiesname);
                $('#ccn_name').val(user.name);
                $('#ccn_email').val(user.email);
                $('#ccn_phone').val(user.phone);
                $('#ccn_attr').val(user.addr);
            });

            $('#go_back_cc').click(function () {
                $('.Carbox_Check').show();
                $('.Carbox_Check_next_C').hide();
            });

            $('#send_order').click(function () {
                var input_C = ['#ccn_name', '#ccn_phone', '#ccn_attr', '#ccn_email'];
                var allFilled = true;

                input_C.forEach(function (input) {
                    if ($(input).val() === "") {
                        $(input).css('border-color', '#FF4C4C');
                        allFilled = false;
                    } else {
                        $(input).css('border-color', '#ccc');
                    }
                });

                if (allFilled) {
                    $('.Carbox_Check_next_C').hide();
                    $('.loader').show();
                    let interval = setInterval(function () {
                        $('.loader').hide();
                        $('.correct_C').show();

                        $('.cart_item_C').empty();
                        $('.carbox_C').empty();
                        $('.count').text("");
                        $('#All_money').text("0");
                        Allmoney = 0;
                        check();
                        clearInterval(interval);
                    }, 2000);
                }
            });

            function check() {
                if ($('.carbox_C').children().length > 0) {
                    $('.cb_noitem').hide();
                    $('.cb_checkout').show();
                } else {
                    $('.cb_noitem').show();
                    $('.cb_checkout').hide();
                }
            };
        });
    }
    function loadpageNum() {
        $('.page').empty();
        PAGE = Math.ceil(Data.length / limit);

        for (var i = 0; i < PAGE; i++) {
            var pagenum = document.createElement('span');
            pagenum.classList.add('pageitem');
            pagenum.textContent = i + 1;
            $('.page').append(pagenum);
            if (i == 0) {
                $('.pageitem').css('background-color', '#e1e3e0');
            }
        }
        $('.pageitem').click(function () {
            page = parseInt($(this).text());
            loadshoe();
            window.scrollTo({ top: 500, behavior: 'smooth' });
            $('.pageitem').css('background-color', '');
            $(this).css('background-color', '#e1e3e0');
        });
    }
    loadshoe();
    loadpageNum();

    $('.cb_checkout').click(function () {
        var plog;
        if (nowlang === "zh") {
            plog = "請先登入";
        } else {
            plog = "Please log in first";
        }
        if (cookiesname && cookiesname.length > 0) {
            $('.Carbox_Check_C').show();
            $('body').css('overflow', 'hidden')
            $('.carbox_bg').click();
            $('.Carbox_Check').show();
            $('.noproduct').hide();
        }
        else {
            alert(plog);
            $('.carbox_bg').click();
            $('.account').click();
        }
    });

    $('.opt_item').click(function () {
        var chooseText = $(this).text();
        var chooseValue = $(this).data('value');

        limit = parseInt(chooseValue);

        page = 1;
        window.scrollTo({ top: 500, behavior: 'smooth' });
        loadshoe();
        loadpageNum();
        $('.opt_choose').text(chooseText);
    });


    $('.sort_li_item').click(function () {
        if ($(this).find('.sort_ul_ul').is(':hidden')) {
            $(this).find('.sort_ul_ul').slideDown(500);
            $(this).find('#sortplus').hide();
            $(this).find('#sortsub').show();
        }
        else {
            $(this).find('.sort_ul_ul').slideUp(500);
            $(this).find('#sortplus').show();
            $(this).find('#sortsub').hide();
        }
    });

    $('#all, .brand_option').click(function () {
        var title;
        var text = $(this).text();

        if (text === $('#all').data('lang-zh') || text === $('#all').data('lang-en')) {
            title = $(this).text();
            Data = nikeData.concat(adidasData);
        } else if (text === $('.brand_option').first().data('lang-zh') || text === $('.brand_option').first().data('lang-en')) {
            title = $(this).text();
            Data = nikeData;
        } else if (text === $('.brand_option').last().data('lang-zh') || text === $('.brand_option').last().data('lang-en')) {
            title = $(this).text();
            Data = adidasData;
        }

        $('#serchempty').hide();
        page = 1;
        loadshoe();
        loadpageNum();
        $('#sort_hd_title').text(title);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    });

    $('#all').click(function (e) {
        e.stopPropagation();
    });

    $('#search_btn').click(function () {
        var keywords = $('#searchInput').val();
        $('#searchInput').val('');
        if (keywords.trim() !== '') {
            $('#searchInput').blur();
            searchData = [];
            searchData = nikeData.concat(adidasData).filter(function (shoe) {
                return shoe.name.includes(keywords);
            });

            if (searchData.length === 0) {
                $('#serchempty').show();
            } else {
                $('#serchempty').hide();
            }
            Data = searchData;
            page = 1;
            loadshoe();
            loadpageNum();

            if (nowlang === "zh") {
                $('#sort_hd_title').text("有關 " + keywords + " 的收尋結果");
            } else {
                $('#sort_hd_title').text("Related " + keywords + " search results for");
            }
            window.scrollTo({ top: 500, behavior: 'smooth' });
        }
    });

    $('#searchInput').keydown(function (e) {
        if (e.keyCode === 13) {
            $('#search_btn').click();
        }
    });
    // ------chat-------------------------------------------------------------------------------------------------
    var chatopen = false;
    var dateupdate = false;

    $('.chat').click(function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var today = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
        var time = (hour < 10 ? '0' + hour : hour) + ":" + (min < 10 ? '0' + min : min);
        if (!dateupdate) {
            $('.chatdate').text(today);
            $('.Sitem_time').text(time);
            if (cookiesname) {
                $('.schat').text("Hello," + cookiesname);
            } else {
                $('.schat').text("Hello");
            }
            dateupdate = true;
        }


        if (chatopen) {
            $('.chatContainer').css({
                'width': '0',
                'height': '0',
                'opacity': '0'
            });
        } else {
            $('.chatContainer').css({
                'width': '350px',
                'height': '70%',
                'opacity': '1'
            });
        }
        chatopen = !chatopen;
    });

    $('.closechat').click(function () {
        $('.chat').click();
    });

    $('.chatsubmit').click(function () {
        var message = $('.chat_input').val();
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();

        if (message.trim() !== '') {
            var mes = document.createElement('div');
            mes.classList.add('cc_Vitem');
            mes.innerHTML = `
            <div class="Vitem_c">
                <div class="vchat">${message}</div>
                <div class="vntime">${(hour < 10 ? '0' + hour : hour) + ":" + (min < 10 ? '0' + min : min)}</div>
            </div>
            `;
            $('.chatchat').append(mes);
            $('.chat_input').val('');
            $('.chatchat').scrollTop($('.chatchat')[0].scrollHeight);
        }
    });

    $('.chat_input').keydown(function (e) {
        if (e.keyCode === 13) {
            $('.chatsubmit').click();
        }
    });

    //--------login sign-----------------------------------------------
    $('.account').click(function () {
        $('.person_bg').show();
        $('body').css('overflow', 'hidden')
        if (cookiesname && cookiesname.length > 0) {
            let user = personData.find(person => person.name === cookiesname);
            if (user) {
                $('#edp_name').val(user.name);
                $('#edp_email').val(user.email);
                $('#edp_password').val(user.password);
                $('#edp_phone').val(user.phone);
                $('#edp_addr').val(user.addr);
            }
            $('.edit_person').show();
        }
    });

    $('#R_btn').click(function () {
        $('.loginform_C').hide();
        $('.registerform_C').show();
        $('.error-message').remove();
        $('#l_email').val('');
        $('#l_password').val('');
    });

    $('#l_btn').click(function () {
        $('.loginform_C').show();
        $('.registerform_C').hide();
        $('.error-message').remove();
        $('#r_name').val('');
        $('#r_email').val('');
        $('#r_password').val('');
        $('#r_phone').val('');
        $('#r_addr').val('');
    });

    let personData = [
        {
            name: "測試",
            email: "1",
            password: "1",
            phone: "09",
            addr: "addr"
        },
    ];

    $('#r_submit').click(function (e) {
        e.preventDefault();
        let r_name = $('#r_name').val().trim();
        let r_email = $('#r_email').val().trim();
        let r_password = $('#r_password').val().trim();
        let r_phone = $('#r_phone').val().trim();
        let r_addr = $('#r_addr').val().trim();


        $('.error-message').remove();

        let isempty = true;
        var p_input;
        if (nowlang === "zh") {
            p_input = "請輸入 ";
        } else {
            p_input = "please enter ";
        }

        if (r_name.length === 0) {
            $('#r_name').after('<span class="error-message">' + p_input + $('#r_name').attr('placeholder') + '</span>');
            isempty = false;
        }
        if (r_email.length === 0) {
            $('#r_email').after('<span class="error-message">' + p_input + $('#r_email').attr('placeholder') + '</span>');
            isempty = false;
        }
        if (r_password.length === 0) {
            $('#r_password').after('<span class="error-message">' + p_input + $('#r_password').attr('placeholder') + '</span>');
            isempty = false;
        }
        if (r_phone.length === 0) {
            $('#r_phone').after('<span class="error-message">' + p_input + $('#r_phone').attr('placeholder') + '</span>');
            isempty = false;
        }
        if (r_addr.length === 0) {
            $('#r_addr').after('<span class="error-message">' + p_input + $('#r_addr').attr('placeholder') + '</span>');
            isempty = false;
        }

        if (isempty) {
            let newPerson = {
                name: r_name,
                email: r_email,
                password: r_password,
                phone: r_phone,
                addr: r_addr
            };
            personData.push(newPerson);
            $('#r_name').val('');
            $('#r_email').val('');
            $('#r_password').val('');
            $('#r_phone').val('');
            $('#r_addr').val('');

            let countdown = 5;
            function check_p_l() {
                if (nowlang === "zh") {
                    $('#countdown').text(`恭喜你成為會員，頁面將在 ${countdown} 秒後自動跳轉...`);
                } else {
                    $('#countdown').text(`Congratulations on becoming a member, the page will automatically jump in ${countdown} seconds...`);
                }
            }
            check_p_l();

            let interval = setInterval(function () {
                countdown--;
                check_p_l();
                if (countdown === 0) {
                    clearInterval(interval);
                    $('#countdown').text('');
                    $('#l_btn').click();
                }
            }, 1000);
        }
    });

    var cookiesname = "";

    $('#l_submit').click(function (e) {
        e.preventDefault();
        let l_email = $('#l_email').val().trim();
        let l_password = $('#l_password').val().trim();

        let user = personData.find(person => person.email === l_email && person.password === l_password);

        var p_input;
        if (nowlang === "zh") {
            p_input = "請輸入 ";
        } else {
            p_input = "please enter ";
        }

        let havetxt = true;
        $('.error-message').remove();

        if (l_email.length === 0) {
            $('#l_email').after('<span class="error-message">' + p_input + $('#l_email').attr('placeholder') + '</span>');
            havetxt = false;
        }
        if (l_password.length === 0) {
            $('#l_password').after('<span class="error-message">' + p_input + $('#l_password').attr('placeholder') + '</span>');
            havetxt = false;
        }

        if (havetxt) {
            $('.error-message').remove();
            if (user) {
                cookiesname = user.name;
                $('#l_email').val('');
                $('#l_password').val('');
                $('.person_C').hide();
                $('.loader').show();
                window.scrollTo({ top: 0 });
                let interval = setInterval(function () {
                    $('.loader').hide();
                    $('.person_bg').hide();
                    $('body').css('overflow', 'auto')
                    clearInterval(interval);
                }, 2500);
            } else {
                if (nowlang === "zh") {
                    $('#l_password').after('<span class="error-message">電子郵件或密碼錯誤</span>');
                }
                else {
                    $('#l_password').after('<span class="error-message">Wrong email or password</span>');
                }
            }
        }
    });

    $('#previous').click(function () {
        $('.person_bg').hide();
        $('body').css('overflow', 'auto')
        $('.loginform_C').show();
        $('.registerform_C').hide();
    });

    $('.edit_cancel').click(function () {
        let user = personData.find(person => person.name === cookiesname);
        $('#edp_name').val(user.name);
        $('#edp_email').val(user.email);
        $('#edp_password').val(user.password);
        $('#edp_phone').val(user.phone);
        $('#edp_addr').val(user.addr);
    });

    $('.edit_edit').click(function () {
        let user = personData.find(person => person.name === cookiesname);
        if (user) {
            user.name = $('#edp_name').val();
            user.email = $('#edp_email').val();
            user.password = $('#edp_password').val();
            user.phone = $('#edp_phone').val();
            user.addr = $('#edp_addr').val();
            if (nowlang === "zh") {
                alert("個人資訊已更新");
            } else {
                alert("Personal information has been updated");
            }
        }
    });

    $('.signout').click(function () {
        cookiesname = "";
        $('.registerform_C').hide();
        $('.edit_person').hide();
        $('#edp_name').val("");
        $('#edp_email').val("");
        $('#edp_password').val("");
        $('#edp_phone').val("");
        $('#edp_addr').val("");
        window.scrollTo({ top: 0 });
        $('.loader').show();
        let interval = setInterval(function () {
            $('#previous').click();
            $('.loginform_C').show();
            $('.person_C').show();
            $('.loader').hide();
            $('.person_bg').hide();
            $('body').css('overflow', 'auto')
            clearInterval(interval);
        }, 1500);
    });
});
