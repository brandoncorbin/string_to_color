/********************************************************
Name: str_to_color
Description: create a hash from a string then generates a color
Usage: alert('#'+str_to_color("Any string can be converted"));
author: Brandon Corbin [code@icorbin.com]
website: http://icorbin.com
********************************************************/

function string_to_color(str, options) {

    this.hash = function(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };

    this.shade = function(color, percent) {
        var num = parseInt(color, 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);

    };

    this.int_to_rgba = function(i) {
        var color = ((i >> 24) & 0xFF).toString(16) +
            ((i >> 16) & 0xFF).toString(16) +
            ((i >> 8) & 0xFF).toString(16) +
            (i & 0xFF).toString(16);
        return color;
    };

    this.rgba_to_hex = function(color) {
        return '#' + ('000000' + (color & 0xFFFFFF).toString(16)).slice(-6);
    };



    var hash = this.hash(str);
    var rgba = this.int_to_rgba(hash);
    var shaded = this.shade(rgba, -10);

    return shaded;

}