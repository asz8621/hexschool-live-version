"use strict";

$(function () {
  // look
  $('.downIcon').click(function () {
    $(this).toggleClass('spin');
    $('.operatingBtn').toggleClass('show');
    $('.close').click(function () {
      $('.downIcon').removeClass('spin');
      $('.operatingBtn').removeClass('show');
    });
  }); // 移除modal雙開

  $('a[data-toggle="modal"][data-dismiss="modal"]').on('click', function () {
    var target = $(this).data('target');
    $(target).on('shown.bs.modal', function () {
      $('body').addClass('modal-open');
    });
  });
});
//# sourceMappingURL=all.js.map
