const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8084 });

const krakenWs = new WebSocket('wss://ws.kraken.com');

krakenWs.on('open', function open() {
  console.log('Соединение установлено с биржей Kraken');
  krakenWs.send(JSON.stringify({
    event: 'subscribe',
    pair: ['XBT/USD'],
    subscription: {
      name: 'ticker'
    }
  }));
});

wss.on('connection', function connection(ws) {
  console.log('Новое соединение установлено');

  krakenWs.on('message', function incoming(data) {
    const message = JSON.parse(data);

    if (message[1]) {
        if (typeof(message[1]['c']) != undefined) {
           console.log(message[1]['c'][0])
           bitcoinPrice = message[1]['c'][0]
        }
        ws.send(JSON.stringify({ bitcoin_price_usd: bitcoinPrice }));
        console.log('Текущая цена Bitcoin в долларах:', bitcoinPrice);  
     }
      
     
    
  });

  ws.on('close', function close() {
    console.log('Соединение закрыто');
  });

  ws.on('error', function error(err) {
    console.error('Ошибка:', err);
  });
});
