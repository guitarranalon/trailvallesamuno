class Ranking {
    #results = [];
    #mainBlock = document.querySelector("#content-block");

    #generateTable(data) {
        const tabla = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        let referenceAthlete = data[0];
        let athleteIndex = 1;

        const encabezado = document.createElement('tr');
        encabezado.appendChild(document.createElement('th')).textContent = '';
        encabezado.appendChild(document.createElement('th')).textContent = 'Atleta';
        encabezado.appendChild(document.createElement('th')).textContent = 'Oro';
        encabezado.appendChild(document.createElement('th')).textContent = 'Plata';
        encabezado.appendChild(document.createElement('th')).textContent = 'Bronce';

        thead.appendChild(encabezado);

        data.forEach((athlete, index) => {
            const fila = document.createElement('tr');
            if (this.#sortData(athlete, referenceAthlete) !== 0) {
                referenceAthlete = athlete;
                athleteIndex = index + 1;
            }
            fila.appendChild(document.createElement('td')).textContent = athleteIndex;

            for (const clave in athlete) {
                const celda = document.createElement('td');
                celda.textContent = athlete[clave];
                fila.appendChild(celda);
            }
            tbody.appendChild(fila);
        });

        tabla.appendChild(thead);
        tabla.appendChild(tbody);

        this.#mainBlock.appendChild(tabla);
    }

    #addResult(athlete, pos) {
        if (athlete !== '' && athlete !== '-') {
            let athleteResult = this.#results.find((res) => res.name === athlete);

            if (!athleteResult) {
                athleteResult = { 
                    name: athlete, 
                    gold: pos === 1 ? 1 : 0,
                    silver: pos === 2 ? 1 : 0,
                    bronze: pos === 3 ? 1 : 0,
                };

                this.#results.push(athleteResult);
            } else {
                athleteResult.gold += pos === 1 ? 1 : 0;
                athleteResult.silver += pos === 2 ? 1 : 0;
                athleteResult.bronze += pos === 3 ? 1 : 0;
            }
        }
    }

    #getData() {
        document.querySelectorAll("table tr").forEach((row) => {
            row.querySelectorAll("td").forEach((el, index) => {
                const athlete = el.innerHTML.trim();
                this.#addResult(athlete, index + 1);
            });
        });
    }

    #sortData(a, b) {
        if (b.gold !== a.gold) return b.gold - a.gold;
        if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
    }

    generateRanking() {
        this.#getData();
        this.#results = this.#results.sort(this.#sortData);
        this.#mainBlock.appendChild(document.createElement('h3')).textContent = 'Ranking histórico';
        this.#generateTable(this.#results);
    }
}
