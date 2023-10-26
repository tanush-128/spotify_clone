library_items_data = [
  {
    title: "Liked Songs",
    desc: "PinnedPlaylist . 82 songs",
    img_url: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  },
  {
    title: "Your Episodes",
    desc: "PinnedSaved & downloaded episodes",
    img_url: "https://misc.scdn.co/your-episodes/SE-64.png",
  },
  {
    title: "My playlist #6",
    desc: "Playlist . Tanush Agarwal",
    img_url:
      "https://mosaic.scdn.co/60/ab67616d00001e0260990cb15a709c97cdddc837ab67616d00001e027476a766e798ff26abcc2cb0ab67616d00001e02a1d56525c3380e5cbda5f48fab67616d00001e02b564e8c029152557d739ff6d",
  },
  {
    title: "AP Dhillon",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f178c81f480a6da366f051cf74cc",
  },
  // { title: "My Playlist #5", desc: "Playlist . Tanush Agarwal", img_url: "" },
  {
    title: "homework vibes",
    desc: "Playlist . Spotify",
    img_url: "https://i.scdn.co/image/ab67706f0000000264a2f100351022f13e2f8fa1",
  },
  {
    title: "Brodha V",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f1786775784f719dcfe8bdc558e4",
  },
  {
    title: "Best",
    desc: "Playlist . Tanush Agarwal",
    img_url:
      "https://mosaic.scdn.co/60/ab67616d00001e020432bfd9e6adb616fd8bcc97ab67616d00001e0252b2a3824413eefe9e33817aab67616d00001e026cd9798b6ace10ff98d1abddab67616d00001e02d2aaf635815c265aa1ecdecc",
  },
  {
    title: "White",
    desc: "Playlist . Tanush Agarwal",
    img_url: "https://i.scdn.co/image/ab67616d00001e02185ca0219b7b5bc54ba23640",
  },
  {
    title: "all liked from yt music",
    desc: "Playlist . Tanush Agarwal",
    img_url: "https://i.scdn.co/image/ab67706c0000da84573110b85db546add06f83a7",
  },
  {
    title: "Nicezb123869",
    desc: "Playlist . Homosepian",
    img_url:
      "https://mosaic.scdn.co/60/ab67616d00001e028a3f0a3ca7929dea23cd274cab67616d00001e0295d5d85909d5deb5cee9f311ab67616d00001e02ba5db46f4b838ef6027e6f96ab67616d00001e02f2d671c22b70e01b78a618a8",
  },
  // { title: "liked", desc: "Playlist . Tanush Agarwal", img_url: "" },
  {
    title: "Intense",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f1787ed0bee1816ded96cd0288e5",
  },
  {
    title: "Gurinder Gill",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f1786861fef0ab940b270bfebcbd",
  },
  {
    title: "Arijit Singh",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3",
  },
  {
    title: "A.R. Rahman",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f178b19af0ea736c6228d6eb539c",
  },
  {
    title: "Diljit Dosanjh",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f178fc043bea91ac91c222d235c9",
  },
  {
    title: "Justin Bieber",
    desc: "Artist",
    img_url: "https://i.scdn.co/image/ab6761610000f1788ae7f2aaa9817a704a87ea36",
  },
];

var library_list = document.getElementsByClassName("library-list")[0];
for (var i = 0; i < library_items_data.length; i++) {
  var div = document.createElement("div");
  div.className = "library-items";
  div.innerHTML = `<div class="library-items-img">
  <img src="${library_items_data[i].img_url}" alt="" />
</div>
<div class="library-items-details">
  <h4>${library_items_data[i].title}</h4>
  <h5>${library_items_data[i].desc}</h5>
</div>`;
  library_list.appendChild(div);
}

// element added


