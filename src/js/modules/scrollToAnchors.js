export const scrollIntoAnchor = () => {
    const anchors = document.querySelectorAll("[data-link]");

    // отримує координати елемента в контексті документа
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset,
        };
    }

    for (let anchor of anchors) {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            // отримати значення атрибута href(там id секції) посилання, по якому відбувся клік
            const blockID = anchor.getAttribute("href");
            // отримати доступ в DOM до елемента по отриманому id
            const ourElem = document.querySelector(blockID);
            // отримати його координати
            const blockIDcoords = getCoords(ourElem);

            window.scrollTo({
                top: blockIDcoords.top,
                behavior: "smooth", // плавний скролл
            });
        });
    }
};
