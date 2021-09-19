# circular-chart
demo: https://csslick.github.io/circular-chart/   
<img width="824" alt="스크린샷 2021-09-19 오후 8 35 37" src="https://user-images.githubusercontent.com/24298382/133925980-232bd950-1e4e-4ddd-b2ca-2f65e36056be.png">

How to
```
<head>
  ...
  <title>Circular Chart</title>
  <!-- add CSS -->
  <link rel="stylesheet" href="circular.css">
</head>
<body>

  <div class="circular" data-angle="50" data-color="gold"></div>
  <div class="circular" data-angle="30" data-color="green"></div>
  <div class="circular" data-angle="90" data-color="red"></div>

  <!-- add plug-in -->
  <script src="circular.js"></script>

  <!-- run -->
  <script>
    const circular = new Circular();
    circular.draw();
  </script>

</body>
```
