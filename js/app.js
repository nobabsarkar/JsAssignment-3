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
            <li onclick="moreDataLoad('${data.category_id}')">${data.category_name}</li>
        `;
    dataList.appendChild(li);
  });
};

loadData();

const spinner = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

const moreDataLoad = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayLoadData(data.data));
  spinner(true);
};

moreDataLoad();

const displayLoadData = (datas) => {
  const noNews = document.getElementById("no-news");
  if (datas.length === 0) {
    noNews.classList.remove("d-none");
  } else {
    noNews.classList.add("d-none");
  }

  const newsCard = document.getElementById("news-card");
  newsCard.innerHTML = "";
  datas.forEach((data) => {
    const cardDiv = document.createElement("div");
    // cardDiv.classList.add("row g-0");
    cardDiv.innerHTML = `
  <div class="card mb-3 p-1" >
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
        <div class="d-flex align-items-center justify-content-between mt-4">
          <div class="author-img d-flex align-items-center">
               <img style src="${data.author.img}">
               <div class="ms-1">
                  <h5 class="m-0">${data.author.name}</h5>
                  <p class="m-0">${data.author.published_date}</p>
               </div>
          </div>
          <div>
            <p class="m-0"><i class="fa-solid fa-eye"></i> ${
              data.total_view
            }</p>
          </div>
          <button onclick="modalBody('${
            data.details
          }')" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    newsCard.appendChild(cardDiv);
  });
  spinner(false);
};

const showModal = (showingModal) => {
  const modal = document.getElementById("modal-header");
  modal.innerHTML = `'${showingModal}'`;
};

// const modalBody = (bodyModal) => {
//   const modal = document.getElementById("modal-bodys");
//   modal.innerHTML = `'${bodyModal}'`;
// };
