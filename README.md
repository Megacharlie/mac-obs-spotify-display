# CHANGES FROM SOURCE

Modified this track finder for use my live streams.

Some changes include:

- `Fixes the server launching (it wasn't launching on my computer when running the code).`

- `Scrolling text loops, rather than black space showing inbetween text rewinds.`

- `Un-square album arts (yes there is such a thing on spotify??) will zoom in to fill the square.`

- `General styling and layout improvements over original to match my streams.`

![Screenshot_2021-07-17 Spotify](https://user-images.githubusercontent.com/52173511/126030096-280087e5-05fe-4215-9993-d079ecebe9a4.png)

Thanks so much for the original source @DPr00f!!

# Spotify-track-info

Node spotify track info that generates a `currentSong.txt` that can be used on OBS to show the current spotify song.

It can also serve the content to be used on browser source. Just point the location to http://localhost:9090

Probably should have to point this out but this only works on MacOS. duh

# Install

```
npm install
```

# Execute

```
npm start
```

# Execute a server instead

```
npm run server
```

Point to `http://localhost:9090/`

Customize the port by setting a env variable i.e. `PORT=7070 npm run server`

## Template

You can change the `template.txt`

## Template variables

The template suports the following variables:

- `{{artist}}`
- `{{album}}`
- `{{disc_number}}`
- `{{duration}}`
- `{{played_count}}`
- `{{track_number}}`
- `{{popularity}}`
- `{{id}}`
- `{{name}}`
- `{{album_artist}}`
- `{{artwork_url}}`
- `{{spotify_url}}`
