mkdir -p ../photos
rm ../photos/*

for file in *.jpg; do
  convert $file -quality 70 -resize 1200x1200\> ../photos/$file;
done