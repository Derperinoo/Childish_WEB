


$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:blackbear&type=album"
}).done(function(res){
	console.log(res);
  var i;
	let count = res.albums.total;
	let html=``;

  for(i=0; i<count; i++){
    html += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${res.albums.items[i].images[1].url}" style="width:100px" style="height:100px">
      </div>
     <div class="card-stacked">
       <div class="card-content">
          <p>${res.albums.items[i].name}</p>
        </div>
      </div>
    </div>
  </div>`;
  }
	document.querySelector('#lul').innerHTML = html;
});

$.ajax({
    url:"https://api.spotify.com/v1/albums/717ryge05ohaVKGzbNykeQ"
  }).done(function(album){
      console.log(album);
      var j;
      let count2 = album.tracks.items.length;
      let html2 = ``;

      for(j=0; j<count2; j++){
        html2 += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${album.images[1].url}" style="width:100px" style="height:100px">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${album.tracks.items[j].name}</p>
          <p><audio controls>
          <source src="${album.tracks.items[j].preview_url}" type="audio/ogg">
          </audio>
        </div>
      </div>
    </div>
  </div>`;
      }

  document.querySelector('#lel').innerHTML = html2;
});

$.ajax({
    url:"https://api.spotify.com/v1/albums/6S0sbdQmuF3IhNRcMkuQK3"
  }).done(function(album2){
      console.log(album2);
      var k;
      let count3 = album2.tracks.items.length;
      let html3 = ``;

      for(k=0; k<count3; k++){
        html3 += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${album2.images[1].url}" style="width:100px" style="height:100px">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${album2.tracks.items[k].name}</p>
          <p><audio controls>
          <source src="${album2.tracks.items[k].preview_url}" type="audio/ogg">
          </audio>
        </div>
      </div>
    </div>
  </div>`;
      }

  document.querySelector('#lal').innerHTML = html3;
});

$.ajax({
    url:"https://api.spotify.com/v1/albums/73noZpfh0GBKKQ80gtbjYg"
  }).done(function(album3){
      console.log(album3);
      var l;
      let count4 = album3.tracks.items.length;
      let html4 = ``;

      for(l=0; l<count4; l++){
        html4 += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${album3.images[1].url}" style="width:100px" style="height:100px">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${album3.tracks.items[l].name}</p>
          <p><audio controls>
          <source src="${album3.tracks.items[l].preview_url}" type="audio/ogg">
          </audio>
        </div>
      </div>
    </div>
  </div>`;
      }

  document.querySelector('#lol').innerHTML = html4;
});

// document.getElementById("app").innerHTML=html;