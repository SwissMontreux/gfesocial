$(document).ready(function () {
  let imgCount = 0;
  const url = "assets/img/human/";
  const data = [
    {
      img: `${url}human1.png`,
      distance: "2.5",
      progress: "80",
      social: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
      name: "Alfredo Calzoni",
      age: "20",
      location: {
        city: "Hamburg",
        region: "Germany",
      },
    },
    {
      img: `${url}human2.png`,
      distance: "2.5",
      progress: "60",
      social: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
      name: "Andi Wijaya",
      age: "23",
      location: {
        city: "Jakarta",
        region: "Indonesia",
      },
    },
    {
      img: `${url}human3.png`,
      distance: "16.5",
      progress: "90",
      social: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
      name: "Gonzalo Higuain",
      age: "19",
      location: {
        city: "New York",
        region: "USA",
      },
    },
    {
      img: `${url}human5.png`,
      distance: "2.5",
      progress: "70",
      social: {
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
      name: "Alonso Zola",
      age: "20",
      location: {
        city: "Hamburg",
        region: "Germany",
      },
    },
  ];

  const frame = $(".frame");
  data.forEach((_data) => appendCard(_data));

  let current = frame.find(".carousel:last-child");
  let likeText = current.children().eq(0);
  let startX = 0,
    startY = 0,
    moveX = 0,
    moveY = 0;
  initCard(current);

  $("#like").click(function () {
    moveX = 1;
    moveY = 0;
    complete();
  });

  $("#dislike").click(function () {
    moveX = -1;
    moveY = 0;
    complete();
  });

  function appendCard(data) {
    const firstCard = frame.children().eq(0);
    const newCard = $("<div>", {
      id: "carouselExampleIndicators",
      class: "carousel slide",
    }).append(`
          <div class="carousel-indicators" style="z-index: 9999;">
            <button style="display: none !important" style type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button style="display: none !important" style type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                class="wrapper-img-home d-flex flex-column position-relative"
                style="background: linear-gradient(180deg, rgba(75, 22, 76, 0.00) 90%, rgba(75, 22, 76, 0.70) 100%), url(${data.img}) no-repeat,
                    lightgray;
                  background-size: cover;
                  background-position: center;"
                >
                  <div class="p-3 card-body d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between">
                      <div class="left">
                        <div class="bg-transwhite d-flex align-items-center">
                          <span class="span-16-white">${data.distance} km away</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="clearfix">
                          <div id="greencircle" data-percent="${data.progress}" class="bg-transwhite small white"></div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column align-items-center gap-3 mb-2">
                      <div class="d-flex flex-column gap-1">
                        <span class="span-16-white text-center d-flex align-items-center justify-content-center gap-3"><a class="text-white href="${data.social.twitter}"><i class="ri-twitter-line ri-lg"></i></a> <a class="text-white href="${data.social.instagram}"><i class="ri-instagram-line ri-lg"></i></a></span>
                        <span class="span-24-white text-center">${data.name}, ${data.age}</span>
                        <span class="span-14-white-uppercase text-center">${data.location.city}, ${data.location.region}</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        `);
    if (firstCard.length) firstCard.before(newCard);
    else frame.append(newCard);
    imgCount++;
  }

  function initCard(card) {
    card.on("pointerdown", onPointerDown);
  }

  function setTransform(x, y, deg, duration) {
    current.css(
      "transform",
      `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`
    );
    likeText.css("opacity", Math.abs((x / innerWidth) * 2.1));
    likeText.attr("class", `is-like ${x > 0 ? "like" : "nope"}`);
    if (duration) current.css("transition", `transform ${duration}ms`);
  }

  function onPointerDown({ clientX, clientY }) {
    startX = clientX;
    startY = clientY;
    current.on("pointermove", onPointerMove);
    current.on("pointerup", onPointerUp);
    current.on("pointerleave", onPointerUp);
  }

  function onPointerMove({ clientX, clientY }) {
    moveX = clientX - startX;
    moveY = clientY - startY;
    setTransform(moveX, moveY, (moveX / innerWidth) * 50);
  }

  function onPointerUp() {
    current.off("pointermove", onPointerMove);
    current.off("pointerup", onPointerUp);
    current.off("pointerleave", onPointerUp);
    if (Math.abs(moveX) > frame.width() / 2) {
      current.off("pointerdown", onPointerDown);
      complete();
    } else cancel();
  }

  function complete() {
    const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3;
    const flyY = (moveY / moveX) * flyX;
    setTransform(flyX, flyY, (flyX / innerWidth) * 50, innerWidth);

    const prev = current;
    const next = current.prev();
    if (next.length) initCard(next);
    current = next;
    likeText = current.children().eq(0);
    appendCard(data[imgCount % 4]);
    setTimeout(() => prev.remove(), innerWidth);
  }

  function cancel() {
    setTransform(0, 0, 0, 100);
    setTimeout(() => current.css("transition", ""), 100);
  }
});
