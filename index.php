<!DOCTYPE html>
<html lang="en-IE">
<head>
	<meta charset="utf-8" />
	<title>Video Player with Subtitles - Mozilla</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<link rel="stylesheet" href="styles.css" />
</head>
<body>
	<h1>Sintel</h1>
	<figure id="videoContainer" data-fullscreen="false">
		<video id="video" controls preload="metadata">
			<source src="brad.mp4" type="video/mp4">
			<track label="English" kind="subtitles" srclang="en" src="sub-en.vtt" default>
		</video>
		<figcaption>
			&copy; copyright Blender Foundation | <a href="http://www.sintel.org">www.sintel.org</a>
		</figcaption>
	</figure>
</body>
<script src="videoASD.js"></script>
</html>