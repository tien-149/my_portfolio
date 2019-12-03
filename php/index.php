<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
</head>
<body>
<h1>Contact form</h1>
    <form action="data/contact.php" method="post">
    <label form="">Name</label>
    <input id ="name" type="text" name="name" placeholder="name">

    <label form="">Email</label>
    <input id ="email" type="text" name="email" placeholder="email">

    <label form="">Subject</label>
    <input id="subject" type="text" name="subject" placeholder="subject">

    <label form="">Message</label>
    <input id="message" type="text" name="message" placeholder="message">

    <button type="submit"> Submit </button>
    </form>
</body>
</html>