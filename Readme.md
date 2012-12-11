
# audio

  Sexy radial audio player skin for the `<audio>` tag.
  
  ![html5 audio tag style](http://f.cl.ly/items/2Y3l3t3K0y281X0r2U0L/audio.png)

## Installation

    $ component install component/audio

## Example

```html
<audio src="https://cloudup-files.s3.amazonaws.com/1355244692571.845b8dfc324b7bd3c548e8c06380908e"></audio>
<script>
  var audio = require('audio');
  var el = document.querySelector('audio');
  audio(el);
</script>
```

## License

  MIT
