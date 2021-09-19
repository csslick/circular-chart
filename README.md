# circular-chart
demo: https://csslick.github.io/circular-chart/   

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
