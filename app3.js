var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1', {
  host: '127.0.0.1',
  keepalive: 60,
  port: 1883,
  // clientId: "yogesh_test_1",
  protocolId: "MQTT",
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 10 * 1000,
  qos: 1,
  will: {
    topic: "/client/disconnected",
    payload: "disconnected",
    qos: 1
  }
})

client.on('connect', function () {
  client.subscribe('/p2p/12345')
  client.publish('/client/test', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
  // client.end()
})

client.on('reconnect', function () {
  console.log('reconnect')
});
client.on('close', function () {
  console.log('close')
});
client.on('offline', function () {
  console.log('offline')
});
client.on('error', function (error) {
  console.log('error-->', error)
});
client.on('packetsend', function (packet) {
  // console.log('packetsend-->', packet)
});
client.on('packetreceive', function (packet) {
  // console.log('packetreceive-->', packet)
});

setInterval(() => {
  // console.log('Hello MQTT')
  client.publish('/p2p/12345', 'Hi')
}, 3000)
