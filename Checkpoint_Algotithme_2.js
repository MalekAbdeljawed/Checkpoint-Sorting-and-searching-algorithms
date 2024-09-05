//Exemple 1: Utilisation de la fonction sort pour une intégration simple

function insertionSort(arr) {
    const sortedArray = arr.slice(); // Copie du tableau pour éviter la modification de l'original
    for (let i = 1; i < sortedArray.length; i++) {
        let key = sortedArray[i];
        let j = i - 1;

        // Déplace les éléments de sortedArray[0..i-1] qui sont plus grands que key
        while (j >= 0 && sortedArray[j] > key) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }
        sortedArray[j + 1] = key;
    }
    return sortedArray;
}

// Exemple d'utilisation
const numbers = [12, 11, 13, 5, 6]; // Renommé pour éviter le conflit
const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers); // Affiche [5, 6, 11, 12, 13]
console.log(numbers); // Affiche [12, 11, 13, 5, 6] (tableau original non modifié)



// Exemple 2
function insertionSort(arr) {
    console.log("Initial Array:", arr);
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Déplace les éléments de arr[0..i-1] qui sont plus grands que key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;

        console.log(`Array after inserting ${key}:`, arr);
    }
    return arr;
}

// Exemple d'utilisation
const exampleArray = [12, 11, 13, 5, 6]; // Renommé pour éviter le conflit
insertionSort(exampleArray); // Affiche l'état du tableau à chaque étape
