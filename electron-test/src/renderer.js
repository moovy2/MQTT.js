window.$ = window.jQuery = require('jquery')
const path = require('node:path');
const mqtt = require(path.join(process.cwd(), '../build/mqtt'))

console.log('start connecting...')
const client = mqtt.connect('mqtt://broker.hivemq.com:1883')

client.on('connect', () => {
  $('#status').text('online')
  $('#protocol').text(client.options.protocol)
})
