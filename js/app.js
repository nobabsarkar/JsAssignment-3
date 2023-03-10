const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.news_category));
};

const displayData = (datas) => {
  const dataList = document.getElementById("data-list");
  datas.forEach((data) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <li>${data.category_name}</li>
        `;
    dataList.appendChild(li);
  });
};

loadData();

const moreDataLoad = () => {
  fetch(`https://openapi.programming-hero.com/api/news/category/01`)
    .then((res) => res.json())
    .then((data) => displayLoadData(data.data));
};

moreDataLoad();

const displayLoadData = (datas) => {
  const newsCard = document.getElementById("news-card");
  datas.forEach((data) => {
    console.log(data);
    const cardDiv = document.createElement("div");
    // cardDiv.classList.add("row g-0");
    cardDiv.innerHTML = `
  <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-6">
      <img src="${
        data.image_url
      }" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title mt-2">${data.title}</h5>
        <p class="card-text mt-3">${data.details.slice(0, 200)}...</p>
        <div>
          <div class="author-img d-flex align-items-center mt-4">
               <img style src="${data.author.img}">
               <div class="ms-1">
                  <h5 class="m-0">${data.author.name}</h5>
                  <p class="m-0">${data.author.published_date}</p>
               </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    newsCard.appendChild(cardDiv);
  });
};
