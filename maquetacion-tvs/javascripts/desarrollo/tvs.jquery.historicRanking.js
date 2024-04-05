+function( $ ) {
    let results = [];
    const mainBlock = document.querySelector("#content-block");

    const generateTable = (data) => {
            const tabla = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const encabezado = document.createElement('tr');
            encabezado.appendChild(document.createElement('th')).textContent = '';
            encabezado.appendChild(document.createElement('th')).textContent = 'Atleta';
            encabezado.appendChild(document.createElement('th')).textContent = 'Oro';
            encabezado.appendChild(document.createElement('th')).textContent = 'Plata';
            encabezado.appendChild(document.createElement('th')).textContent = 'Bronce';

            thead.appendChild(encabezado);

            // Crear las filas de datos
            data.forEach((objeto, index) => {
                const fila = document.createElement('tr');
                fila.appendChild(document.createElement('td')).textContent = index + 1;
                for (const clave in objeto) {
                    const celda = document.createElement('td');
                    celda.textContent = objeto[clave];
                    fila.appendChild(celda);
                }
                tbody.appendChild(fila);
            });

            tabla.appendChild(thead);
            tabla.appendChild(tbody);

            mainBlock.appendChild(tabla);
        }

    
    const addResult = (athlete, pos) => {
        if (athlete !== '' && athlete !== '-') {
            let athleteResult = results.find((res) => res.name === athlete);

            if (!athleteResult) {
                athleteResult = { 
                    name: athlete, 
                    gold: pos === 1 ? 1 : 0,
                    silver: pos === 2 ? 1 : 0,
                    bronze: pos === 3 ? 1 : 0,
                };

                results.push(athleteResult);
            } else {
                athleteResult.gold += pos === 1 ? 1 : 0;
                athleteResult.silver += pos === 2 ? 1 : 0;
                athleteResult.bronze += pos === 3 ? 1 : 0;
            }
        }
    };

    document.querySelectorAll("table tr").forEach((row) => {
        row.querySelectorAll("td").forEach((el, index) => {
            const athlete = el.innerHTML.trim();
            addResult(athlete, index + 1);
        });
    });

    results = (results.sort((a, b) => {
        if (b.gold !== a.gold) return b.gold - a.gold;
        if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
    }));

    mainBlock.appendChild(document.createElement('h3')).textContent = 'Ranking histórico';
    generateTable(results);
}( jQuery );