// Selim Doyranlı Tarafından Hazırlanmıştır | 08.10.2016 | Material-Form
// https://selimdoyranli.com
// http://www.radkod.com
// http://www.sanalyer.com

$(document).ready(function(){

//Kaydol - Şifre Unuttum Linkleri Arası Geçiş
$(document).ready(function(){
$("#kayit-form").hide();
$("#sifre-hatirlat-form").hide();	
$(".hesap-olustur-link").click(function(e){
$("#login-form").slideUp(0);	
$("#kayit-form").fadeIn(300);	
});

$(".zaten-hesap-var-link").click(function(e){
$("#kayit-form").slideUp(0);
$("#sifre-hatirlat-form").slideUp(0);	
$("#login-form").fadeIn(300);	
});

$(".sifre-hatirlat-link").click(function(e){
$("#login-form").slideUp(0);	
$("#sifre-hatirlat-form").fadeIn(300);	
});
});


});
