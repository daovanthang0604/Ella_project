var app = angular.module("app", ["ngRoute"]);

app.controller("newProductController", ($scope) => {
  $scope.products = [
    {
      vendor: "ella - halothemes",
      name: "Dlass Mapten Tacios Del",
      defaultColor: "black",
      rating: 5,
      price: 59,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-17_300x.jpg?v=1624012561",
    },
    {
      vendor: "SODLING",
      name: "Oulla Dinter Miver",
      defaultColor: "DarkOrange",
      rating: 4,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-31_300x.jpg?v=1624347359",
    },
    {
      vendor: "SODLING",
      name: " Dollis Pharetras Raneu",
      defaultColor: "DarkOrange",
      rating: 3,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-yellowgreen_5a47c10b-4e0a-42ab-acfb-6a8d74ac44d2_360x.jpg?v=1622106634",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Rosmo Namino Milancelos",
      defaultColor: "Gainsboro",
      rating: 4,
      price: 59,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-18_dea67dca-c8da-42d0-8aab-fa73d0e14ee9_300x.jpg?v=1622106556",
    },
    {
      vendor: "SODLING",
      name: "Lulla Dinterdum Mivera",
      defaultColor: "DarkOrange",
      rating: 4,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-cyan_9b0a6735-3079-4638-8328-4ab2b16903e5_300x.jpg?v=1622106404",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Cosmopoolis Namino Odi",
      defaultColor: "Slategray",
      rating: 5,
      price: 229,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-28_62bce169-b48c-40cc-bbd2-8fe9d75e88ca_300x.jpg?v=1622106342",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Class Maptern Tacitos Del",
      defaultColor: "Black",
      rating: 4,
      price: 229,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-16_36214dbc-15a1-4e56-b9c5-aa4f3f44a619_300x.jpg?v=1622104757",
    },
    {
      vendor: "Solding",
      name: "Nulla Dinterrdum Miverra",
      defaultColor: "Darkorange",
      rating: 4,
      price: 329,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-cyan_e8a5b2f6-c029-4e03-aee3-d802fec84bb3_300x.jpg?v=1622104677",
    },
    {
      vendor: "ella - halothemes",
      name: "Dlass Mapten Tacios Del",
      defaultColor: "black",
      rating: 5,
      price: 59,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-17_300x.jpg?v=1624012561",
    },
    {
      vendor: "SODLING",
      name: "Oulla Dinter Miver",
      defaultColor: "DarkOrange",
      rating: 4,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-31_300x.jpg?v=1624347359",
    },
    {
      vendor: "SODLING",
      name: " Dollis Pharetras Raneu",
      defaultColor: "DarkOrange",
      rating: 3,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-yellowgreen_5a47c10b-4e0a-42ab-acfb-6a8d74ac44d2_360x.jpg?v=1622106634",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Rosmo Namino Milancelos",
      defaultColor: "Gainsboro",
      rating: 4,
      price: 59,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-18_dea67dca-c8da-42d0-8aab-fa73d0e14ee9_300x.jpg?v=1622106556",
    },
    {
      vendor: "SODLING",
      name: "Lulla Dinterdum Mivera",
      defaultColor: "DarkOrange",
      rating: 4,
      price: 399,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-cyan_9b0a6735-3079-4638-8328-4ab2b16903e5_300x.jpg?v=1622106404",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Cosmopoolis Namino Odi",
      defaultColor: "Slategray",
      rating: 5,
      price: 229,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-28_62bce169-b48c-40cc-bbd2-8fe9d75e88ca_300x.jpg?v=1622106342",
    },
    {
      vendor: "ELLA - HALOTHEMES",
      name: "Class Maptern Tacitos Del",
      defaultColor: "Black",
      rating: 4,
      price: 229,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-16_36214dbc-15a1-4e56-b9c5-aa4f3f44a619_300x.jpg?v=1622104757",
    },
    {
      vendor: "Solding",
      name: "Nulla Dinterrdum Miverra",
      defaultColor: "Darkorange",
      rating: 4,
      price: 329,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/products/surfboard-1-cyan_e8a5b2f6-c029-4e03-aee3-d802fec84bb3_300x.jpg?v=1622104677",
    },
  ];
  $scope.createArray = (n) => new Array(n);
});

app.controller("featuredCollectionController", ($scope) => {
  $scope.collections = [
    {
      title: "All rounders",
      description:
        "Quisquemos sodales suscipit tortor condimentum from $219.00",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/feature-image-block-2_200x.jpg?v=1622606574",
    },
    {
      title: "Performances",
      description:
        "Quisquemos sodales suscipit tortor condimentum from $219.00",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/feature-image-block-1_200x.jpg?v=1622606575",
    },
    {
      title: "Long boards",
      description:
        "Quisquemos sodales suscipit tortor condimentum from $219.00",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/feature-image-block-3_200x.jpg?v=1622606574",
    },
    {
      title: "Retro surfboards",
      description:
        "Quisquemos sodales suscipit tortor condimentum from $219.00",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/feature-image-block-4_200x.jpg?v=1622606574",
    },
  ];
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper 2
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
