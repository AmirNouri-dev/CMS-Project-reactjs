<div dir='rtl' align='right'>

#App Demo

![دموی اپلیکیشن](./src/assets/demo.gif)

#cms panel App
یک پنل مدیریتی برای نمایش آماری فروش ، لیست کاربران و محصولات ، حذف یا اضافه نمودن محصول و ویرایش اطلاعات و وضعیت پرداخت مشتری.
این اپ به صورت سینگل پیج و با ری اکت ساخته شده.
دریافت اطلاعات چارت و کاربران صفحه اصلی از دیتابیس فایربیس صورت میگیرد.(نیاز به دی ان اس)

#ویژگی ها
-نمایش آماری به صورت چارت
-نمایش آخرین تراکنش ها
-نمایش موجودی محصولات
نمایش لیست کاربران
-طراحی به صورت SPA
-استفاده از "React-router-dom" برای مدیریت مسیرها
-استفاده از "MUI" برای ایکون های کاربردی

#پیش نیازها
-node.js
-npm

#نصب(installation)

Bash:
git clone
[https://](https://github.com/AmirNouri-dev/CMS-Project-reactjs)
npm install
npm run dev

#ساختار پروژه

<div dir='ltr'>
  
```plaintext

|-CMSProject/
|--src
|---components #reusable components
|----Chart
|----Features
|----widgetSm
|----widgetLm
|----topBar
|----sideBar
|---contexts
|---pages #main pages(home,login,sigin,etc.)
|----home
|----login
|----newUser
|----userList
|----product
|----products
|---assets #include demo
|--public
|--- images #all images used in App
|--app.js #نقطه ورود اپ و تنظیم مسیرها
|-- README.md

```


</div>

</div>
```
