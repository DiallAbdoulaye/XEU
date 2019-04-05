let saveInformations = [];
const urlBase = `http://data.fixer.io/api/latest?access_key=8960a644b5f4e6d5872e5feb616bbb26&format=1?`;
const apiKey = "8960a644b5f4e6d5872e5feb616bbb26";
const urlApi = `${urlBase}${apiKey}&symbols=GBP,CHF,USD,JPY,KWD`;
function Tab() {
  return `

    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Euro (EUR)</th>
        <th scope="col">Livre Sterling (GBP)</th>
        <th scope="col">Franc Suisse (CHF)</th>
        <th scope="col">Dollars (USD)</th>
        <th scope="col">Yen (JPY)</th>
        <th scope="col">Dinar koweïtien (KWD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>15</th>
        <td>12,44</td>
        <td>10,27</td>
        <td>18,72</td>
        <td>328</td>
        <td>48</td>
      </tr>

    </tbody>
  </table>
  `;
}
function display() {
  let el = document.querySelector("#display");
  el.innerHTML = Tab() + el.innerHTML;
}
async function latestFetch() {
  try {
    const response = await fetch(`${urlApi}`);
    if (!response.ok) {
      return;
    }
    const results = await response.json();
    let arrCurrency = [];
    // response.rates.forEach(currency => {
    //   arrCurrency.push(currency);
    // });
    display();
    console.log(results);
    // alert(results.rates.CHF);
  } catch (error) {
    console.log("🚨 Error", error);
  }
}
