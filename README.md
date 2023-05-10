# 我的記帳簿 Expense Tracker
![markdown](https://i.imgur.com/FVL4NiJ.png "Login Page")
![markdown](https://i.imgur.com/s33vGTP.png "Home Page")
## 介紹
紀錄屬於自己的支出清單，可以瀏覽、編輯支出、利用分類查詢花費。
## Features功能
•	使用者可註冊帳號或連結Facebook登入
• 新增、編輯、瀏覽或刪除支出資訊
•	依照支出類別搜尋特定花費
## Environment Setup 環境建置
1.	Node.js 14.16.0
2.	Express 4.18.2
3.	Express-handlebars 4.0.2
4.  Express-session 1.17.1
5.  Body-parser 1.20.2
6.  connect-flash 0.1.1
7.  dotenv 16.0.3
8.  mongoose 5.9.7
9.  method-override 3.0.0
10.  passport  0.4.1
11.  passport-local  1.0.0
12.  passport-facebook  3.0.0
13.  Bcryptjs  2.4.3

## Install安裝與使用
1.	確認安裝Node.js和npm之後，將專案 clone 到本地
```
https://github.com/elviawu/Expense-Tracker.git
```
2.	透過終端機進入此專案資料夾，輸入：
```
npm install
```
3.	安裝完畢後，輸入：
```
npm run start
```
4.	若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
```
App is running on http://localhost:3000
```
5.	若欲暫停使用
```
ctrl + c
```
6.	匯入種子資料
```
npm run seed
```
7.	終端機出現下列字樣，表示種子資料執行完畢
```
mongodb connected
categorySeeder created
recordSeeder created
Done !
```