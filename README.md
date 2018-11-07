# DEAD PROJECT WARNING

This project is no longer maintained, check out some of the forks. Or, I recommend string-to-color

String to Color
===============

Tiny library to generate the same nice hex color for a string in Javascript. 

###Features 

- Sexy colors, not muddy browns and boring grays
- Binary safe
- Only 0.5kb minified

### Why it needed to exist 

I needed a way to generate a consistent NICE color for any given word to assign a tag it's own independent color (without knowing what all tags are).

### How to use it

    var color = '#'+string_to_color('Some String');
    alert(color);

Optionally, you can pass a percentage to lighten/darken the shade. The default value is -10.

    var lighterColor = '#'+string_to_color('Some String', 40);
    alert(lighterColor);

###Demo 

http://icorbin.com/code/string_to_color/example.html




