        window.onload = oppstart;
            
        function oppstart() {
            
            document.getElementById("btnReg").onclick = registrer;       
                
        }
            
        function registrer() { //Funksjonen gir forskjellige utskrifter basert på eventuele mangler fra brukeren input og vil dermed gi en "illusjon" av en vellykket eller feilaktig påmelding
            
            var brukernavn = document.getElementById("txtBrukernavn").value;

            var passord = document.getElementById("txtPassord").value;

            var bekreftPassord = document.getElementById("txtBekreft").value;
            
            if (passord !== bekreftPassord) { //Hvis passordene ikke er like
                document.getElementById("utskrift").innerHTML = "Passordene er ikke like!";
            }

            else if (passord == "" || brukernavn == "") { //Hvis passord eller brukernavn mangler
                document.getElementById("utskrift").innerHTML = "Mangler passord og/eller brukernavn!";
            }

            else { //Hvis ingenting mangler
                document.getElementById("utskrift").innerHTML = "Du er nå registrert!! :)";
            }
            
        }

        function testRegistrer() { //Kopi av funksjon med statiske verdier slik at testene kan kjøres
            
            var brukernavn = "testBruker"; //Endre verdi her til "" for å skjekke om testen feiler når brukernavn mangler

            var passord = "123"; //Endre verdi til "" for å teste at testen feiler når passord = "" selv om bekreftPassord også er ""

            var bekreftPassord = "123"; //Endre verdi her for å skjekke at testen feiler dersom passordene ikke er like
            
            if (passord !== bekreftPassord) { //Hvis passordene ikke er like returner funksjonen false
                return false;
            }

            else if (passord == "" || brukernavn == "") { //Hvis passord eller brukernavn mangler returner funksjonen false
                return false;
            }

            else { //Hvis ingen av if-testene over kjøres vil funksjonen returnere true
                return true;
            }
            
        }

        module.exports = testRegistrer; //Eksporterer funksjonen slik at den kan testes