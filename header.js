var header_content_data = [
  {
    image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    title: "Liked Songs",
  },
  {
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/5r3wPya2PpeTTsXsGhQU8O/en",
    title: "Shubh Radio",
  },
  {
    image:
      "https://mosaic.scdn.co/640/ab67616d00001e0260990cb15a709c97cdddc837ab67616d00001e027476a766e798ff26abcc2cb0ab67616d00001e02a1d56525c3380e5cbda5f48fab67616d00001e02b564e8c029152557d739ff6d",
    title: "My playlist #6",
  },
  {
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc81f480a6da366f051cf74cc/2/en-GB/default",
    title: "Daily Mix 2",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000274fff2139c75c7083370e10c",
    title: "chill lofi study beats",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2730b976123dcdaf4d60fb7ca2c",
    title: "Another One Of Me (feat. 21 Savage)",
  },
];

window.onload = ()=>{


var header_content = document.getElementById("header-content");
console.log( header_content);
for (var i = 0; i < header_content_data.length; i++) {
    console.log(header_content_data[i].image);
    var div = document.createElement("div");
    div.className = "header_content_item";
    div.innerHTML = `<img src="${header_content_data[i].image}" alt="" />
        <p>${header_content_data[i].title}</p>
        <div class="play-bg">
        <div class="play-btn">
        <span class="fa fa-play"></span>
        </div>
        </div>
        `;
    header_content.appendChild(div);
    }

}