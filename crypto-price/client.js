const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8084'); // Здесь указывается адрес вашего сервера WebSocket

ws.on('open', function open() {
  console.log('Соединение установлено с сервером');
});

ws.on('message', function incoming(data) {
    
  const message = JSON.parse(data);
  console.log('Текущая цена Bitcoin в долларах:', message.bitcoin_price_usd);
  // Здесь вы можете использовать данные о цене Bitcoin
});

ws.on('close', function close() {
  console.log('Соединение закрыто');
});

ws.on('error', function error(err) {
  console.error('Ошибка:', err);
});
