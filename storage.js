<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
  <title>Document</title>
</head>
<body>
  

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

   <script src="app.js"></script>
   <script src="storage.js"></script>
   <script src="weather.js"></script>
   <script src="ui.js"></script>

   <div className="containe">
      <div className="row">
        <div class="col-md-6. mx-auto.text-center bg-primary mt-5 p-5 rounded">
           <h1 id="w-location"></h1>
           <h3 className="text-dark" id="w-desc"></h3>
           <h3 id="w-string"></h3>
           <img id="w-icon"/>
           <ul id="w-details" className="list-group mt-3">
            <li className="list-group-item" id="w-humidity"></li>
            <li className="list-group-item" id="w-dewpoint"></li>
            <li className="list-group-item" id="w-feels-like"></li>
            <li className="list-group-item" id="w-wind"></li>
           </ul>
        </div>  
      </div>
   </div>
  
</body>
</html>