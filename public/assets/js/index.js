$(document).ready(function () {
  $(".toggle-password-btn").click(function () {
    const targetInputId = $(this).data("target");
    const targetInput = $("#" + targetInputId);

    if (targetInput.attr("type") === "password") {
      targetInput.attr("type", "text");
      $(this).html('<i class="ri-eye-off-line eye-icon"></i>');
    } else {
      targetInput.attr("type", "password");
      $(this).html('<i class="ri-eye-line eye-icon"></i>');
    }
  });

  $("#input-send").on("focus", function () {
    $("#icon-doc").addClass("d-none");
    $("#item-mic").addClass("d-none");
    $("#item-send").removeClass("d-none");
  });

  $("#input-send").on("blur", function () {
    $("#icon-doc").removeClass("d-none");
    $("#item-mic").removeClass("d-none");
    $("#item-send").addClass("d-none");
  });

  $(".upload-container").each(function () {
    const imageInput = $(this).find(".image-input");
    const previewImage = $(this).find(".preview-image");
    const changePhotoButton = $(this).find(".change-photo-button");
    const emot = $(this).find(".ri-emotion-fill");

    imageInput.on("change", function (event) {
      previewImage.attr("src", URL.createObjectURL(event.target.files[0]));
      previewImage.removeClass("d-none");
      emot.addClass("d-none");
    });

    changePhotoButton.on("click", function () {
      imageInput.click();
    });

    previewImage.on("click", function (event) {
      event.stopPropagation();
    });
  });

  // upload cover profile detail
  const imageInput2 = $("#image-input");
  const previewImage2 = $("#preview-image");
  const changePhotoButton2 = $("#change-photo-button");

  imageInput2.on("change", function (event) {
    previewImage2.attr("src", URL.createObjectURL(event.target.files[0]));
  });

  changePhotoButton2.on("click", function () {
    imageInput2.click();
  });

  previewImage2.on("click", function (event) {
    event.stopPropagation();
  });

  $("#nav1").click(function () {
    $("#top-mFriends").removeClass("d-none");
    $("#top-sPartners").addClass("d-none");
    $("#story-mFriends").removeClass("d-none");
  });

  $("#nav2").click(function () {
    $("#top-mFriends").addClass("d-none");
    $("#top-sPartners").removeClass("d-none");
    $("#story-mFriends").addClass("d-none");
  });
});

function closeBadge(button) {
  const badge = button.parentElement;
  badge.classList.add("closed");
  setTimeout(() => {
    badge.remove();
  }, 300);
}
