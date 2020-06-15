// navbar 滾動效果
$(function () {
    // 漢堡條
    $('.mobileBar').click(function(){
        $('.navbar').addClass('active');
        $('body').addClass('noScroll');
    });

    // 返回
    $('.back').click(function(){
        $('.navbar').removeClass('active');
        $('body').removeClass('noScroll');
    });

    // 手機板產品小分類，在寬度576px以下點擊Product禁止轉跳頁面
    $('.navbarMenuTitle').on("click",function() {
        var bodyW = $('body').width();
        if (bodyW < 576) {
            $(this).toggleClass('active');
            $('.lineItem').slideToggle();
            return false;
        }
    });

    // 購物細項
    $('.orderSummary').click(function () {
        $(this).toggleClass('pb-4');
        $('.orderSummary i').toggleClass('arrow');
        $('.shoppingList').toggleClass('active');
    });

    // 返回
    $('.addcart').click(function(){
        $('#add .modal-dialog').addClass('right');
        // $('body').removeClass('noScroll');
    });

    // Information 展開
    $('.contact').click(function () {
        $(this).toggleClass('active');
    });
    
    // payment.html 按下返回購物車 判斷 product_detail.html 是否有hash(#add)
    var url = window.location.hash;
    if  (url === '#add') {
        $('#add').modal('show');
    }
});