var correctas = 0;
var incorrectas = 0;

document.getElementById("correctas").innerHTML = correctas;
document.getElementById("incorrectas").innerHTML = incorrectas;

var pregunta = {
    pregunta : "1.¿Cuáles eran los principales puertos españoles y sus rutas de comercio?",
    opciones : "Barcelona por la ruta del caribe,Sevilla y Cádiz por la Ruta del Atlántico y el mar caribe,Potosí por la ruta del manila,Las indias por el pacífico",
    correcta : 1,
    puntuacion : 1
}

var pregunta2 = {
    pregunta : "2.¿Cuándo empezó y cuando termino la época colonial?",
    opciones : "1550-1810,2007-2019,1550-1811",
    correcta : 0,
    puntuacion : 1
}

var pregunta3 = {
  pregunta : "3.¿Qué es la real audiencia?",
  opciones : "Un sistema de gobierno que juzgaba a los indígenas norteamericanos,Máximo tribunal de la colonia española,La que se encargaba de extraer petróleo y carbón de los territorios colombianos,Una institución que tenía como propósito derrocar al rey español",
  correcta : 1,
  puntuacion : 1
}

var pregunta4 = {
  pregunta : "4.¿Quiénes vendrán en América las Reformas Borbónicas?",
  opciones : "La dinastía Habsburgo,Los Borbones,La dinastía mormónica,Los Barceloneses",
  correcta : 1,
  puntuacion : 1
}

var pregunta5 = {
  pregunta : "5.¿En qué año fue el descubrimiento de América?",
  opciones : "1910,1492,1914,1810",
  correcta : 1,
  puntuacion : 1
}

var pregunta6 = {
  pregunta : "6.¿Hechos de gran influencia para la Independencia de Colombia en el año 1810 (Siglo XIX)?",
  opciones : "Revolución Industrial y Revolución Francesa,La Independencia de los Estados Unidos y la Revolución Francesa,Revolución comunera y Revolución industrial,Revolución Industrial y Revolución Agrícola",
  correcta : 1,
  puntuacion : 1
}

var pregunta7 = {
  pregunta : "7.¿La expedición botánica comenzó en:?",
  opciones : "1789,1783,1779,1785",
  correcta : 1,
  puntuacion : 1
}

var pregunta8 = {
  pregunta : "8. Cual de los siguientes participó en los albores de la independencia del Virreinato de Nueva Granada.",
  opciones : "José Celestino Mutis,Antonio Nariño,Simón Bolívar,Jorge Tadeo Lozano.",
  correcta : 1,
  puntuacion : 1
}

var pregunta9 = {
  pregunta : "9.¿El primer período de la vida independiente, en el surgimiento de la nación colombiana se le llama?",
  opciones : "Estados Unidos de Colombia (1863),Primera República o Patria Boba (1810-1816),La Gran Colombia (1819-1931),La República de la Nueva Granada",
  correcta : 1,
  puntuacion : 1
}

var pregunta10 = {
  pregunta : "10.¿Uno de los hechos que desató la revuelta del 20 de julio de 1810 fue?",
  opciones : "La consolidación de sus deseos de autonomía y participación política,González Llorente se negó e insultó a los criollos quienes se defendieron en forma violenta, despertando el descontento entre las personas presentes en la Plaza Mayor,Las diferencias entre los criollos y los chapetones como se les llamaba a los nacidos en España,La Junta Suprema de Gobierno declaró su delidad al rey Fernando VII",
  correcta : 1,
  puntuacion : 1
}



//Pregunta 1

var trozos = pregunta.opciones.split(",");
document.getElementById("pregunta").innerHTML = "<span class=material-icons>android</span> " +  pregunta.pregunta;
document.getElementById("t_opc1").innerHTML = trozos[0];
document.getElementById("t_opc2").innerHTML = trozos[1];
document.getElementById("t_opc3").innerHTML = trozos[2];
document.getElementById("t_opc4").innerHTML = trozos[3];

document.getElementById("opc1_1").value = "0"
document.getElementById("opc1_2").value = "1"
document.getElementById("opc1_3").value = "2"
document.getElementById("opc1_4").value = "3"

//Pregunta 2

var trozos2 = pregunta2.opciones.split(",");
document.getElementById("pregunta2").innerHTML = "<span class=material-icons>settings</span> " + pregunta2.pregunta;
document.getElementById("t2_opc1").innerHTML = trozos2[0];
document.getElementById("t2_opc2").innerHTML = trozos2[1];
document.getElementById("t2_opc3").innerHTML = trozos2[2];


document.getElementById("opc2_1").value = "0";
document.getElementById("opc2_2").value = "1";
document.getElementById("opc2_3").value = "2";

//Pregunta 3

var trozos3 = pregunta3.opciones.split(",");
document.getElementById("pregunta3").innerHTML = "<span class=material-icons>android</span> " +  pregunta3.pregunta;
document.getElementById("t3_opc1").innerHTML = trozos3[0];
document.getElementById("t3_opc2").innerHTML = trozos3[1];
document.getElementById("t3_opc3").innerHTML = trozos3[2];
document.getElementById("t3_opc4").innerHTML = trozos3[3];

document.getElementById("opc3_1").value = "0"
document.getElementById("opc3_2").value = "1"
document.getElementById("opc3_3").value = "2"
document.getElementById("opc3_4").value = "3"

//Pregunta 4

var trozos4 = pregunta4.opciones.split(",");
document.getElementById("pregunta4").innerHTML = "<span class=material-icons>android</span> " +  pregunta4.pregunta;
document.getElementById("t4_opc1").innerHTML = trozos4[0];
document.getElementById("t4_opc2").innerHTML = trozos4[1];
document.getElementById("t4_opc3").innerHTML = trozos4[2];
document.getElementById("t4_opc4").innerHTML = trozos4[3];

document.getElementById("opc4_1").value = "0"
document.getElementById("opc4_2").value = "1"
document.getElementById("opc4_3").value = "2"
document.getElementById("opc4_4").value = "3"

//Pregunta 5

var trozos5 = pregunta5.opciones.split(",");
document.getElementById("pregunta5").innerHTML = "<span class=material-icons>android</span> " +  pregunta5.pregunta;
document.getElementById("t5_opc1").innerHTML = trozos5[0];
document.getElementById("t5_opc2").innerHTML = trozos5[1];
document.getElementById("t5_opc3").innerHTML = trozos5[2];
document.getElementById("t5_opc4").innerHTML = trozos5[3];

document.getElementById("opc5_1").value = "0"
document.getElementById("opc5_2").value = "1"
document.getElementById("opc5_3").value = "2"
document.getElementById("opc5_4").value = "3"

//Pregunta 6

var trozos6 = pregunta6.opciones.split(",");
document.getElementById("pregunta6").innerHTML = "<span class=material-icons>android</span> " +  pregunta6.pregunta;
document.getElementById("t6_opc1").innerHTML = trozos6[0];
document.getElementById("t6_opc2").innerHTML = trozos6[1];
document.getElementById("t6_opc3").innerHTML = trozos6[2];
document.getElementById("t6_opc4").innerHTML = trozos6[3];

document.getElementById("opc6_1").value = "0"
document.getElementById("opc6_2").value = "1"
document.getElementById("opc6_3").value = "2"
document.getElementById("opc6_4").value = "3"

//Pregunta 7

var trozos7 = pregunta7.opciones.split(",");
document.getElementById("pregunta7").innerHTML = "<span class=material-icons>android</span> " +  pregunta7.pregunta;
document.getElementById("t7_opc1").innerHTML = trozos7[0];
document.getElementById("t7_opc2").innerHTML = trozos7[1];
document.getElementById("t7_opc3").innerHTML = trozos7[2];
document.getElementById("t7_opc4").innerHTML = trozos7[3];

document.getElementById("opc7_1").value = "0"
document.getElementById("opc7_2").value = "1"
document.getElementById("opc7_3").value = "2"
document.getElementById("opc7_4").value = "3"

//Pregunta 8

var trozos8 = pregunta8.opciones.split(",");
document.getElementById("pregunta8").innerHTML = "<span class=material-icons>android</span> " +  pregunta8.pregunta;
document.getElementById("t8_opc1").innerHTML = trozos8[0];
document.getElementById("t8_opc2").innerHTML = trozos8[1];
document.getElementById("t8_opc3").innerHTML = trozos8[2];
document.getElementById("t8_opc4").innerHTML = trozos8[3];

document.getElementById("opc8_1").value = "0"
document.getElementById("opc8_2").value = "1"
document.getElementById("opc8_3").value = "2"
document.getElementById("opc8_4").value = "3"

//Pregunta 9

var trozos9 = pregunta9.opciones.split(",");
document.getElementById("pregunta9").innerHTML = "<span class=material-icons>android</span> " +  pregunta9.pregunta;
document.getElementById("t9_opc1").innerHTML = trozos9[0];
document.getElementById("t9_opc2").innerHTML = trozos9[1];
document.getElementById("t9_opc3").innerHTML = trozos9[2];
document.getElementById("t9_opc4").innerHTML = trozos9[3];

document.getElementById("opc9_1").value = "0"
document.getElementById("opc9_2").value = "1"
document.getElementById("opc9_3").value = "2"
document.getElementById("opc9_4").value = "3"

//Pregunta 10

var trozos10 = pregunta10.opciones.split(",");
document.getElementById("pregunta10").innerHTML = "<span class=material-icons>android</span> " +  pregunta10.pregunta;
document.getElementById("t10_opc1").innerHTML = trozos10[0];
document.getElementById("t10_opc2").innerHTML = trozos10[1];
document.getElementById("t10_opc3").innerHTML = trozos10[2];
document.getElementById("t10_opc4").innerHTML = trozos10[3];

document.getElementById("opc10_1").value = "0"
document.getElementById("opc10_2").value = "1"
document.getElementById("opc10_3").value = "2"
document.getElementById("opc10_4").value = "3"


function evaluar() {
    correctas = 0;
    incorrectas = 0;
    var r_p1 = document.forms["cuestionario"]["p1"].value;
    var r_p2 = document.forms["cuestionario"]["p2"].value;
    var r_p3 = document.forms["cuestionario"]["p3"].value;
    var r_p4 = document.forms["cuestionario"]["p4"].value;
    var r_p5 = document.forms["cuestionario"]["p5"].value;
    var r_p6 = document.forms["cuestionario"]["p6"].value;
    var r_p7 = document.forms["cuestionario"]["p7"].value;
    var r_p8 = document.forms["cuestionario"]["p8"].value;
    var r_p9 = document.forms["cuestionario"]["p9"].value;
    var r_p10 = document.forms["cuestionario"]["p10"].value;
    
    //evaluacion pregunta 1
    if (r_p1 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }
    
   //evaluacion pregunta 2
   if (r_p2 == pregunta2.correcta)
   {
       correctas += 1;
       var element = document.getElementById("img_p2");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
   }
    else
    {
       incorrectas += 1;
       var element = document.getElementById("img_p2");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");

    }

    //evaluacion pregunta 3
    if (r_p3 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 4
    if (r_p4 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 5
    if (r_p5 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 6
    if (r_p6 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 7
    if (r_p7 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 8
    if (r_p8 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 9
    if (r_p9 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }

      //evaluacion pregunta 10
    if (r_p10 == pregunta.correcta)
    {
        correctas += 1;
        var element = document.getElementById("img_p1");
        element.classList.remove("incorrecta");
        element.classList.add("correcta");
    }
    else
     {
       incorrectas += 1;
       var element = document.getElementById("img_p1");
       element.classList.remove("correcta");
       element.classList.add("incorrecta");
     }



    document.getElementById("correctas").innerHTML = correctas;
    document.getElementById("incorrectas").innerHTML = incorrectas;

  }