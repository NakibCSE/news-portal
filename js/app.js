//loading category list
const loadCategory = () => {
    const url = "https://openapi.programming-hero.com/api/news/categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => showNewsCategory(data.data.news_category))
      .catch((error) => console.log(error));
  };

   //show category 
const showNewsCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    
    categories.forEach((category) => {
      const listDiv = document.createElement("li");
      listDiv.classList.add("nav-item");
      listDiv.innerHTML = `
      <a  onclick="categoryNewsLoad('${category.category_id}','${category.category_name}')" class="nav-link active owner" aria-current="page">${category.category_name}</a>
      `;
      categoryContainer.appendChild(listDiv);
    });
  };

  // loading categories news details 
const categoryNewsLoad = (category_id, name) => {
    // show spinner
    const spinnerSection = document.getElementById("spinner");
    spinnerSection.classList.remove("d-none");
  
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showCategoryNews(data.data, name))
      .catch((error) => console.log(error));
  };