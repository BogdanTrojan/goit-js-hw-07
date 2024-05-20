const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;

  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
