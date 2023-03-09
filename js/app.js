const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.news_category));
};

const displayData = (datas) => {
  const dataList = document.getElementById("data-list");
  datas.forEach((data) => {
    console.log(data);
    const li = document.createElement("li");
    li.innerHTML = `
            <li>${data.category_name}</li>
        `;
    dataList.appendChild(li);
  });
};

loadData();
