
# audio

  Sexy radial audio player skin for the `<audio>` tag.
  
  ![html5 audio tag style](http://f.cl.ly/items/2Y3l3t3K0y281X0r2U0L/audio.png)

## Installation

    $ component install component/audio

## Example

```html
<audio src="your-source-here"></audio>
<script>
  var audio = require('audio');
  var el = document.querySelector('audio');
  audio(el);
</script>
```

## API

### .toggle()

  Toggle play state.

### .play()

  Start playback.

### .pause()

  Pause playback.

## License

  MIT
