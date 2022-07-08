// Tabs
function tabs() {
    const getTabItems = document.querySelectorAll('.js-tabItem');
    console.log(getTabItems);

    // Logika za sadrzaj
    getTabItems.forEach(tab => {

        tab.addEventListener('click', () => {
            // Loguj u konzoli kliknuti tab
            console.log(tab);
            // Ukloni aktivnu klasu sa tabova ako je prethodno postojala
            const currentActiveTab = document.querySelector('.js-tabItem.-active');
            if (currentActiveTab != null || currentActiveTab != undefined) {
                currentActiveTab.classList.remove('-active');
            }
            tab.classList.add('-active');
            // Kada kliknem tab, uzmi mu data id vrednost
            const getClickedId = tab.attributes['data-id'].value;
            // Imamo data id, sada nadji content koji mu odgovara
            const getContentWithId = document.querySelector(`.js-tabContent[data-id='${getClickedId}']`);
            // Dodeli aktivnu klasu, a obrisi istu prethodnim ako su postojale
            // Prvo nadji ako postoji trenutno aktivna klasa
            const currentActiveContent = document.querySelector('.js-tabContent.-active');
            console.log(currentActiveContent);
            // Ukloni aktivnu klasu sa tabova ako je prethodno postojala
            if (currentActiveContent != null || currentActiveContent != undefined) {
                currentActiveContent.classList.remove('-active');
            }
            getContentWithId.classList.add('-active');
        });
    });
}

// Inicijalizuj funkciju - pokreni
tabs();