<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Application Name</title>
    <!-- Add your stylesheets and scripts here -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
    <!-- Add your scripts here -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
