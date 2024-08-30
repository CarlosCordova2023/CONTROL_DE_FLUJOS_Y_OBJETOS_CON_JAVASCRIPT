let option = 0;

while (option !== 5) {
    option = parseInt(prompt(`Seleccione una opción:
    1. Opción 1
    2. Opción 2
    3. Opción 3
    4. Opción 4
    5. Salir`));

    switch (option) {
        case 1:
            alert("Has seleccionado la Opción 1");
            break;
        case 2:
            alert("Has seleccionado la Opción 2");
            break;
        case 3:
            alert("Has seleccionado la Opción 3");
            break;
        case 4:
            alert("Has seleccionado la Opción 4");
            break;
        case 5:
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida, por favor intente de nuevo.");
    }
}
