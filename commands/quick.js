export default (event) => {
  event.reply({
    type: 'text',
    text: '請選擇',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            // 按下去後使用者會傳出文字
            type: 'message',
            // 傳出的文字
            text: 'usd',
            // 按鈕文字
            label: '查美元匯率',
          },
        },
        {
          type: 'action',
          action: {
            // 傳位置訊息
            type: 'location',
            // 按鈕文字
            label: '查附近農村美食',
          },
        },
        {
          type: 'action',
          action: {
            // 打開網站
            type: 'uri',
            uri: 'https://line.me',
            // 按鈕文字
            label: '打開 line 官網',
          },
        },
        {
          type: 'action',
          action: {
            // postback
            type: 'postback',
            // 按鈕文字
            label: 'postback測試',
            // 傳入 postback 事件的資料
            data: 'abcd',
            // 選填，使用者傳出文字
            // displayText: '12345678',
          },
        },
      ],
    },
  })
}
