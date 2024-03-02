#!/bin/bash

printf "Enter Title: "
read TITLE

printf "Enter Excerpt: "
read EXCERPT

DATE=$(date +"%Y-%m-%dT%H:%M:%S.%3N")
FILENAME=$(date +"%Y-%m-%d")
FILEPATH="_posts/$FILENAME.md"

echo "Copying template to $FILEPATH"
cp template.md $FILEPATH || { echo 'Copying failed' ; exit 1; }

echo "Replacing placeholders in $FILEPATH"
sed -i "s/{{title}}/$TITLE/g" $FILEPATH || { echo 'Title replacement failed' ; exit 1; }
sed -i "s/{{date}}/$DATE/g" $FILEPATH || { echo 'Date replacement failed' ; exit 1; }
sed -i "s/{{excerpt}}/$EXCERPT/g" $FILEPATH || { echo 'Excerpt replacement failed' ; exit 1; }

echo "Done"
