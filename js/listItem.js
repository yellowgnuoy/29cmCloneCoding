// 리스트 및 상세 메뉴 연결
for (let i = 1; i < 12; i++) {
  const listItem = $(".list li").eq(i);
  const detailItem = $(".Detailedmenu").eq(i - 1);

  listItem.on("mouseenter", () => {
    detailItem.css("display", "block");
  });

  listItem.on("mouseleave", () => {
    detailItem.css("display", "none");
  });

  detailItem.on("mouseenter", () => {
    detailItem.css("display", "block");
  });

  detailItem.on("mouseleave", () => {
    detailItem.css("display", "none");
  });
}

// 리스트 0번엔 상세 안 뜨게 처리
$(".list li")
  .eq(0)
  .on("mouseenter", () => {
    $(".Detailed").css("display", "none");
  });

// 하얀 화면 제어
const $detailed = $(".Detailed");
$("#bundle, .Detailed").on("mouseenter", () => {
  $detailed.css("display", "block");
});

$(".list, .Detailed").on("mouseleave", () => {
  $detailed.css("display", "none");
});

let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");
const hideThreshold = 300;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > hideThreshold) {
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0px";
    } else {
      header.style.top = "-184px";
    }
  } else {
    header.style.top = "0px";
  }

  prevScrollPos = currentScrollPos;
});
