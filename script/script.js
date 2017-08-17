// referensi js pada => Adam Khoury https://www.youtube.com/watch?v=c_ohDPWmsM0

alert('Cara bermain : temukan setiap simbol yang sama pada setiap kotak');
var memory_array = ['*','*','**','**','&','&','&&','&&','$','$','$$','$$','#','#','##','##','@','@','@@','@@','!','!','!!','!!'];
var memory_values =[];
var memory_tile_ids =[];
var tiles_flipped = 0;


Array.prototype.memory_tile_shuffle = function () {
  var i = this.length, j,temp;
//function random yang digunakan pada function newBoard
  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp =this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}


//perulangan
function newBoard() {
  tiles_flipped =0;
  var output  = '';
  memory_array.memory_tile_shuffle();
  //perulangan untuk variabel memory_array
  //tampil pada index dan menambahkan div dengan id tile
  for(var i = 0; i < memory_array.length; i++){
  output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  }
  document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,val){
  if(tile.innerHTML === "" && memory_values.length < 2){
    tile.innerHTML = val;
      if(memory_values.length === 0){
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
        
      } else if(memory_values.length === 1){
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
          //kondisi true false dalam game
          if(memory_values[0] === memory_values[1]){
            tiles_flipped +=2;
            
            memory_values = [];
            memory_tile_ids = [];
            alert('Bagus... pilihan anda tepat :)');
            //memulai kembali.
            if(tiles_flipped == memory_array.length){
              alert('permainan dibersihkan ... lanjutkan permainan baru');
              document.getElementById('memory_board').innerHTML = "";
              newBoard();
            }
          } 
          else {
            function flip2Back() {
              var tile_1 = document.getElementById(memory_tile_ids[0]);
              var tile_2 = document.getElementById(memory_tile_ids[1]);
              tile_1.style.background = 'url(bg.jpg) no-repear';
              tile_1.innerHTML ='';
              tile_2.style.background = 'url(bg.jpg) no-repear';
              tile_2.innerHTML ='';
              memory_values = [];
              memory_tile_ids =[];
            }setTimeout(flip2Back, 55);
               
          }

      }

  }

}