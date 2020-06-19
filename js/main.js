function consultaCep(){
    console.log("aqui");
    locale = ""
    var cep = document.getElementById("input-txt").value;
    urlFix = "https://viacep.com.br/ws/";
    urlFix = urlFix.concat( cep, "/json/");
    $.ajax({
        url: urlFix,
        type: "GET",
        success: function(response){
            $(".mtab").show();
            $("#logradouro-out").html(response.logradouro);
            $("#bairro-out").html(response.bairro);
            $("#localidade-out").html(response.localidade);
            $("#estado-out").html(response.uf);
            $("#cep-display").html("CEP: "+ response.cep);
        }
    });
}
$(function(){
    $(".mtab").hide();
});