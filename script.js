function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var sum = num1 + num2 + num3;
    var difference = num1 - num2 - num3;
    var product = num1 * num2 * num3;
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    var mid = (num1 + num2 + num3) - max - min;
    var div = num1 / num2 / num3;
    var combine = num1 + num2 - num3;

    var result = "Hasil Penjumlahan: " + sum + "<br>" +
                 "Hasil Pengurangan: " + difference + "<br>" +
                 "Hasil Perkalian: " + product + "<br>" +
                 "Hasil Kombinasi: " + combine + "<br>" +
                 "Hasil Pembagian: " + div + "<br>" +
                 "Nilai Maksimum: " + max + "<br>" +
                 "Nilai Minimum: " + min + "<br>" +
                 "Nilai Tengah: " + mid;

    document.getElementById("result").innerHTML = result;
}