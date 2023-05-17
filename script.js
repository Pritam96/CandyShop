const BASE_URL = 'https://crudcrud.com/api/1f5d685a5cb14052a8c31b32a6cbcbf1';

const form = document.querySelector('#_form');

form.addEventListener('submit', addToTheList);

function addToTheList(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const price = Number(document.querySelector('#price').value);
  const quantity = Number(document.querySelector('#quantity').value);

  const item = { name, description, price, quantity };

  axios
    .post(`${BASE_URL}/stock`, item)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  form.reset();
}

function showStockList(item) {
  //   document.getElementById('response').innerHTML += `
  //   <div class="card">
  //         <div class="card-body">
  //           <div class="row">
  //             <div class="col">${item.name}</div>
  //             <div class="col">${item.description}</div>
  //             <div class="col">${item.price} Rupees</div>
  //             <div class="col">${item.quantity}</div>
  //             <div class="col">
  //               <button class="btn btn-outline-secondary" onclick="getCandy(1,${item._id})">Buy 1</button>
  //             </div>
  //             <div class="col">
  //               <button class="btn btn-outline-secondary"  onclick="getCandy(1,${item._id})">Buy 2</button>
  //             </div>
  //             <div class="col">
  //               <button class="btn btn-outline-secondary"  onclick="getCandy(1,${item._id})">Buy 3</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>`;

  let div_card = document.createElement('div');
  div_card.className = 'card';

  let div_card_body = document.createElement('div');
  div_card_body.className = 'card-body';

  let div_row = document.createElement('div');
  div_row.className = 'row';

  let div_col_name = document.createElement('div');
  div_col_name.className = 'col';
  div_col_name.appendChild(document.createTextNode(`${item.name}`));

  let div_col_description = document.createElement('div');
  div_col_description.className = 'col';
  div_col_description.appendChild(
    document.createTextNode(`${item.description}`)
  );

  let div_col_price = document.createElement('div');
  div_col_price.className = 'col';
  div_col_price.appendChild(document.createTextNode(`${item.price} Rupees`));

  let div_col_quantity = document.createElement('div');
  div_col_quantity.className = 'col';
  div_col_quantity.id = 'quantity';
  div_col_quantity.appendChild(
    document.createTextNode(`${item.quantity} Pics`)
  );

  // Button 1
  let div_col_btn1 = document.createElement('div');
  div_col_btn1.className = 'col';
  let btn1 = document.createElement('button');
  btn1.setAttribute('type', 'button');
  btn1.id = 'get_one';
  btn1.className = 'btn btn-outline-secondary';
  btn1.appendChild(document.createTextNode('Buy 1'));
  div_col_btn1.appendChild(btn1);

  btn1.onclick = () => {
    axios
      .put(`${BASE_URL}/stock/${item._id}`, {
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity - 1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // document.querySelector('#quantity').innerHTML = `${item.quantity - 1} Pics`;
    showStock();
  };

  // Button 2
  let div_col_btn2 = document.createElement('div');
  div_col_btn2.className = 'col';
  let btn2 = document.createElement('button');
  btn2.setAttribute('type', 'button');
  btn2.id = 'get_two';
  btn2.className = 'btn btn-outline-secondary';
  btn2.appendChild(document.createTextNode('Buy 2'));
  div_col_btn2.appendChild(btn2);

  btn2.onclick = () => {
    axios
      .put(`${BASE_URL}/stock/${item._id}`, {
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity - 2,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // document.querySelector('#quantity').innerHTML = `${item.quantity - 2} Pics`;
    showStock();
  };

  // Button 3
  let div_col_btn3 = document.createElement('div');
  div_col_btn3.className = 'col';
  let btn3 = document.createElement('button');
  btn3.setAttribute('type', 'button');
  btn3.id = 'get_three';
  btn3.className = 'btn btn-outline-secondary';
  btn3.appendChild(document.createTextNode('Buy 3'));
  div_col_btn3.appendChild(btn3);

  btn3.onclick = () => {
    axios
      .put(`${BASE_URL}/stock/${item._id}`, {
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity - 3,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // document.querySelector('#quantity').innerHTML = `${item.quantity - 3} Pics`;
    showStock();
  };

  div_row.appendChild(div_col_name);
  div_row.appendChild(div_col_description);
  div_row.appendChild(div_col_price);
  div_row.appendChild(div_col_quantity);
  div_row.appendChild(div_col_btn1);
  div_row.appendChild(div_col_btn2);
  div_row.appendChild(div_col_btn3);

  div_card_body.appendChild(div_row);
  div_card.appendChild(div_card_body);

  document.querySelector('#response').appendChild(div_card);
}

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });

// axiosInstance.get('/stock').then((res) => {
//   res.data.forEach((item) => {
//     showStockList(item);
//     console.log(item);
//   });
// });

function showStock() {
  document.querySelector('#response').innerHTML = '';
  axios.get(`${BASE_URL}/stock`).then((res) => {
    res.data.forEach((item) => {
      showStockList(item);
      console.log(item);
    });
  });
}

showStock();
