 window.onload = oppstart;
            
        function oppstart() {
            
            document.getElementById("btnReg").onclick = registrer;       
                
        }
            
        var list = [];

        function registrer() {
            
            var navn = document.getElementById("txtNavn").value;
            var sted = document.getElementById("txtSted").value;
            var info = document.getElementById("txtInfo").value;
            
            if (navn === "") { //Hvis navn mangler
                document.getElementById("utskrift").innerHTML = "Mangler navn på arangement! :P";
            }
            
            else if (sted === "") { //Hvis sted mangler
                document.getElementById("utskrift").innerHTML = "Mangler sted! :P";
            }

            else { //Hvis navn og sted er fylt inn

                document.getElementById("utskrift").innerHTML = "Arangementet er registrert!! :)";
                
                list.push(" Arangement: " + navn + " | " + " Sted: " + sted + " | " + " Info: "  + info + "</br>"); //Legger brukerinputet inn i en array
                document.getElementById("oversikt").innerHTML = list.join(""); //Fjerner " , " fra utskriften av arrayen

            }
            
        }

        function testRegistrer() {
            
            var list = []; //En tom array

            var navn = "Fotball Cup";  //Hvis verdiene her endres vil testen feile
            var sted = "Østmarka";
            var info = "Gøy for alle mellom 10-15 år";
            
            if (navn === "") { //Hvis navn mangler
                return false;
            }
            
            else if (sted === "") { //Hvis sted mangler
                return false;
            }

            else { //Hvis navn og sted har en verdi

                list.push("Arangement: " + navn + " | " + "Sted: " + sted + " | " + "Info: "  + info + "</br>"); //Legger til setningen i arrayen
                return list;

            }
            
        }

        module.exports = testRegistrer; //Eksporterer funksjonen slik at den kan brukes til å teste