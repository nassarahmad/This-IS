// loader
function lazyLoadImage(img) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.src = el.dataset.src;
      }
    });
  });

  observer.observe(img);
}

function showLoader() {
  $("body").append(`<div id="loader">Loading...</div>`);
}

function hideLoader() {
  $("#loader").remove();
}