function validasi(){
	var a= document.forms["ab"]["nama"].value;
	var b= document.forms["ab"]["password"].value;
	var x= document.forms["ab"]["cek"].value;
if (x!="Saya Bukan Robot") {
alert("validasi salah");
}
else{
	if (a=="login1" && b==123){

	alert("anda login sebagai Pelanggan");
}
	else if (a=="login2" && b==1234) {
		alert("anda login sebagai penagih");
	}

	else if (a=="login3" && b==12345) {
		alert("anda login sebagai Staf Administrasi");
	}

	else if (a=="login4" && b==123456) {
		alert("anda login sebagai Bendahara");
	}

	else if (a=="login5" && b==1234567) {
		alert("anda login sebagai Koordinator");
	}
	else if (a=="login6" && b==12345678) {
		alert("anda login sebagai Pemilik");
	}
else{
	alert("anda tidak terdaftar ");
}

	}
}

