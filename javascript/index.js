const showByLanguage = document.querySelector('.showByLanguage');
const showByModule = document.querySelector('.showByModule');
const showByClient = document.querySelector('.showByClient')
const btnloadCSV = document.querySelector(".button-csv")
const URL = 'http://localhost/cegos_challenge/api/getData.php'

async function getData() {
  const response = await fetch(URL)
  const data = await response.json()
  showData(data)
  //Add value and remove duplicates for Language
  const langs = data.filter((value, index, self) =>
    index === self.findIndex((el) => (
      el.Language === value.Language
    )))
  langs.forEach((el) => {
    showByLanguage.innerHTML += `
    <option value="${el.Language}">${el.Language}</option>
    `
  })
  //Add value and remove duplicates for Module
  const module = data.filter((value, index, self) =>
    index === self.findIndex((el) => (
      el.Module === value.Module
    )))
  module.forEach((el) => {
    showByModule.innerHTML += `
    <option value="${el.Module}">${el.Module}</option>
    `
  })
  //Add value and remove duplicates for Client
  const client = data.filter((value, index, self) =>
    index === self.findIndex((el) => (
      el.Client === value.Client
    )))
  client.forEach((el) => {
    showByClient.innerHTML += `
    <option value="${el.Client}">${el.Client}</option>
    `
  })
}
showByClient.addEventListener('change', (event) => filterClient(event));
async function filterClient(e) {
  const response = await fetch(URL)
  const data = await response.json()
  const client = data.filter(el => el.Client === e.target.value);
  showData(e.target.value === 'all' ? data : client);
}


showByModule.addEventListener('change', (event) => filterModule(event));
async function filterModule(e) {
  const response = await fetch(URL)
  const data = await response.json()
  const modules = data.filter(el => el.Module === e.target.value);
  showData(e.target.value === 'all' ? data : modules);
}

showByLanguage.addEventListener('change', (e) => filterLanguage(e));
async function filterLanguage(e) {
  const response = await fetch(URL)
  const data = await response.json()
  const languages = data.filter(el => el.Language === e.target.value);
  showData(e.target.value === 'all' ? data : languages);
}

const btnShowByMobile = document.querySelector('.showMobile');
btnShowByMobile.addEventListener('change', (e) => filterMobile(e));

async function filterMobile(e) {
  const response = await fetch(URL)
  const data = await response.json()
  const mobile = data.filter(el => el.Mobile === e.target.value);
  showData(e.target.value === 'all' ? data : mobile);
}

const btnShowByDate = document.querySelector('.showByDate');
btnShowByDate.addEventListener('change', (e) => sortDate(e));
async function sortDate(e) {
  const response = await fetch(URL)
  const data = await response.json()
  const date = e.target.value === 'desc' ? data.reverse() : data;
  showData(date)
}

function showData(a) {
  const tbody = document.querySelector('.tbody');
  tbody.innerHTML = '';
  a.forEach(el => {
    tbody.innerHTML += `
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <td class="p-2">${el.InternalClient}</td>
    <td class="p-2">${el.Client}</td>
    <td class="p-1">${el.Module}</td>
    <td class="p-1">${el.Language}</td>
    <td class="p-1">${el.URL}</td>
    <td class="p-1">${el.Date}</td>
    <td class="p-1">${el.Width}</td>
    <td class="p-1">${el.Height}</td>
    <td class="p-1">${el.Browser}</td>
    <td class="p-1">${el.BrowserVersion}</td>
    <td class="p-1">${el.Java === '1' ? '&#10003;' : '&#10005;'}</td>
    <td class="p-1">${el.Mobile === '1' ? '&#10003;' : '&#10005;'}</td>
    <td class="p-1">${el.OS}</td>
    <td class="p-1">${el.OSVersion}</td>
    <td class="p-1">${el.Cookies === '1' ? '&#10003;' : '&#10005;'}</td>
    </tr>
    `
  });
}

function download_csv(csv, filename) {
  const csvFile = new Blob([csv], { type: "text/csv" });
  const downloadLink = document.createElement("a");

  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

function export_table_to_csv(html, filename) {
  const csv = [];
  const rows = document.querySelectorAll("table tr");
  for (let i = 0; i < rows.length; i++) {
    const row = [], cols = rows[i].querySelectorAll("td, th");

    for (let j = 0; j < cols.length; j++)
      row.push(cols[j].innerText);

    csv.push(row.join(","));
  }
  download_csv(csv.join("\n"), filename);
}

btnloadCSV.addEventListener("click", function () {
  const html = document.querySelector("#tblData").outerHTML;
  export_table_to_csv(html, "table.csv");
});

getData()

