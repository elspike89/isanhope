(function () {
  // 모바일 판별
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  // if (!isMobile) return;

  if (isMobile) {
    const isGalleryOfIndexPage = document.getElementsByClassName('uio_box gallery_box')[0];
    if (isGalleryOfIndexPage) {
      isGalleryOfIndexPage.style.display = 'none';
    }
  }

  // 사이드바 열린 상태 제거
  const wrap = document.getElementById('wrap');
  if (wrap) {
    wrap.classList.remove('is_side_menu_open');
  }

  // modoo 사이드바 상태 쿠키 제거
  document.cookie = 'SIDE_MENU_OPEN=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
})();

(function () {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  console.log(isMobile)
  if (!isMobile) return;

  document.addEventListener(
    'click',
    function (e) {
      const a = e.target.closest('.gallery_img a');
      if (!a) return;

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    },
    true // ⭐ 캡처 단계에서 차단
  );
})();
