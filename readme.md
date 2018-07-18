# MQTT
Getting started with MQTT + Node.js

## Test your MQTT app.
```
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
```
## Start your own MQTT broker with emqtt:
To download emqtt, go to [http://emqtt.io/downloads](http://emqtt.io/downloads) and download zip file as per your OS. Unzip it goto folder.
To start broker, run `./bin/emqttd console`

```
wget -O emqttd.zip http://emqtt.io/downloads/latest/ubuntu16_04
unzip emqttd.zip
cd emqttd && ./bin/emqttd console
```

emqtt works with erlang, Erlang must be installed in your machine.
If not than please install it using given commands.
`sudo apt-get update` 
`sudo apt-get install erlang`

### Refrence
- [https://www.npmjs.com/package/mqtt](https://www.npmjs.com/package/mqtt)
- [https://github.com/emqtt/emqttd/wiki/Get-Started](https://github.com/emqtt/emqttd/wiki/Get-Started)




