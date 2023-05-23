const express = require('express');
const router = express.Router();
const members = require('../../data/account_secret');

router.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if( !username || !password ){
        res.status(400).json({msg: '請輸入使用者名稱及密碼'});
        return;
    }
  
    const member = members.find((member) => member.username === username);

    // 進行使用者名稱與密碼的驗證
    if ( member && member.password === password ) {
      // 登入成功
      res.json({ success: true });
    } else {
      // 登入失敗
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

module.exports = router;