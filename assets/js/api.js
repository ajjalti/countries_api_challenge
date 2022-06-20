function getAll(){
    url = "https://restcountries.com/v3.1/all";
    request = $.getJSON(url,function(data){
        pays=[];
        data.forEach(element => {
            pays.push([element.flags.png,element.name.common,element.population,element.region,element.capital]);
        });
        pays.forEach(element=>{
            $("#main").append(createCard(element));
        })
    });
    
};
function getByRegion(region){
    url = `https://restcountries.com/v2/regionalbloc/${region}`;
    request = $.getJSON(url,function(data){
        pays=[];
        data.forEach(element => {
            pays.push([element.flags.png,element.name,element.population,element.region,element.capital]);
        });
        $("#main").html("");
        pays.forEach(element=>{
            $("#main").append(createCard(element));
        });
    });

};
function createCard(data){
    return $(`
    <div class="col p-2">
      <div class="card shadow-sm">
        <img src="${data[0]}" alt="">
        <h2 class="text-center">${data[1]}</h2>
        <div class="card-body">
          <p class="card-text">Population : ${data[2]}</p>
          <p class="card-text">Region : ${data[3]}</p>
          <p class="card-text"> Capital : ${data[4]}</p>
        </div>
      </div>
    </div>
    `);
};
$(function(){
    getAll();
})
$("#search").on("click",function(){
    region=$("select").val();
    if(region)
        getByRegion(region);
})
