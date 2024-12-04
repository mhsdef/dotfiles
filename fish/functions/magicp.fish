function magicp -d 'Converts given image to webp'
    magick $argv[1] -quality 70 (string replace -r '\.[^\.]*$' '.webp' $argv[1])
end
