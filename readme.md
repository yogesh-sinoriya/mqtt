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
If it don't work, install erlang in machine.
- `sudo apt-get update` 
- `sudo apt-get install erlang`

### Refrence
- [http://mqtt.org/faq](http://mqtt.org/faq)
- [https://www.npmjs.com/package/mqtt](https://www.npmjs.com/package/mqtt)
- [https://github.com/emqtt/emqttd/wiki/Get-Started](https://github.com/emqtt/emqttd/wiki/Get-Started)




