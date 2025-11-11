import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './commands/usd.js'
import commandFood from './commands/food.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})

bot.on('message', (event) => {
  if (event.message.type === 'text') {
    if (event.message.text === 'usd') {
      commandUSD(event)
    }
  } else if (event.message.text === 'quick') {
    commandQuick(event)
  }
})
bot.on('postback', (event) => {
  console.log(event)
  event.reply(event.postback.data)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
