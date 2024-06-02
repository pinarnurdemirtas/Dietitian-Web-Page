document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 

        var kilo = document.getElementById('exampleInputkilo').value;
        var boy = document.getElementById('exampleInputboy').value;

        if (kilo.trim() == '' || boy.trim() == '') {
            alert('Lütfen eksiksiz giriniz.');
            return;
        }


        var vki = vkiHesapla(boy, kilo);
        document.getElementById('vkn').innerHTML = vki.toFixed(1);

        if (vki >= 0.0 && vki <= 18.4) {
            document.getElementById('ob').innerHTML = "İdeal kilonun altındasınız :)";
        } else if (vki >= 18.5 && vki <= 24.9) {
            document.getElementById('ob').innerHTML = "İdeal kilodasınız :)";
        } else if (vki >= 25.0 && vki <= 29.9) {
            document.getElementById('ob').innerHTML = "İdeal kilonun üstündesiniz :)";
        } else if (vki >= 30.0 && vki <= 39.9) {
            document.getElementById('ob').innerHTML = "İdeal kilonun çok üstündesiniz (obez) :|";
        } else if (vki >= 40.0) {
            document.getElementById('ob').innerHTML = "İdeal kilonun çok üstündesiniz (morbid obez) :|";
        }
    });

    document.getElementById('submit2').addEventListener('click', function(event) {
        event.preventDefault(); 

        var yas = parseInt(document.getElementById('yas').value);
        var vkn2 = parseFloat(document.getElementById('vkn2').value);
        var bel = parseFloat(document.getElementById('bel').value);
        var egzersiz = document.getElementById('egzersiz').value;
        var meyve = document.getElementById('meyve').value;
        var ilaç = document.getElementById('ilaç').value;
        var kan = document.getElementById('kan').value;
        var gen = document.getElementById('gen').value;

      

        if (isNaN(yas) || isNaN(vkn2) || isNaN(bel) || egzersiz.trim() == '' || meyve.trim() == '' || ilaç.trim() == '' || kan.trim() == '' || gen.trim() == '') {
            alert('Lütfen eksiksiz giriniz.');
            return;
        }

        var diyabetRiski = diyabetRiskiHesabi(vkn2, yas, bel, egzersiz, meyve, ilaç, kan, gen);
        document.getElementById('diyabet').innerHTML = diyabetRiski.toFixed(1);

        if (diyabetRiski >= 0 && diyabetRiski <= 44) {
            document.getElementById('risk').innerHTML = "Düşük Risk :)";
        } else if (diyabetRiski > 44 && diyabetRiski <= 59) {
            document.getElementById('risk').innerHTML = "Orta Risk :|";
        } else if (diyabetRiski > 59) {
            document.getElementById('risk').innerHTML = "Yüksek Risk :/";
        }
        console.log(diyabetRiski);
    });

    var vkiHesapla = (boy, kilo) => {
        var vki = kilo / (boy / 100 * boy / 100); // vki hesaplar
        return vki;
    }

    var diyabetRiskiHesabi = (vki2, yas, belCevresi, egzersizSuresi, meyveSebzeTuketimi, ilacKullanimi, kanSekeriSeviyesi, genetik) => {
        var es = egzersizSuresi === 'yes' ? 10 : 0;
        var mst = meyveSebzeTuketimi === 'yes' ? 10 : 0;
        var ik = ilacKullanimi === 'yes' ? 10 : 0;
        var ks = kanSekeriSeviyesi === 'yes' ? 10 : 0;
        var g = genetik === 'yes' ? 10 : 0;

        var diyabetRiski = yas + vki2 + belCevresi - es - mst + ik + ks + g; // Diyabet riski hesaplar
        console.log({ es, mst, ik, ks, g, diyabetRiski });  // Hesaplanan değerleri kontrol edin.

        return diyabetRiski;
    }
});