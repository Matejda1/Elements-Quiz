// This file contains the database of elements and their properties

// Structure of the database

//    question: "",
//    answers: [
//        { text: "", correct: true },
//        { text: "", correct: false },
//        { text: "", correct: false },
//        { text: "", correct: false }
//    ]

// From Words to Elements

// All
const allElements = [
    {
        question: "Vodík",
        answers: [
            { text: "H", correct: true },
            { text: "O", correct: false },
            { text: "N", correct: false },
            { text: "C", correct: false }
        ]
    },
    {
        question: "Kyslík",
        answers: [
            { text: "O", correct: true },
            { text: "F", correct: false },
            { text: "Si", correct: false },
            { text: "At", correct: false }
        ]
    },
    {
        question: "Dusík",
        answers: [
            { text: "N", correct: true },
            { text: "Hg", correct: false },
            { text: "I", correct: false },
            { text: "Ge", correct: false }
        ]
    },
    {
        question: "Fluor",
        answers: [
            { text: "F", correct: true },
            { text: "S", correct: false },
            { text: "Se", correct: false },
            { text: "P", correct: false }
        ]
    },
    {
        question: "Chlor",
        answers: [
            { text: "Cl", correct: true },
            { text: "B", correct: false },
            { text: "P", correct: false },
            { text: "Ge", correct: false }
        ]
    },
    {
        question: "Brom",
        answers: [
            { text: "Br", correct: true },
            { text: "B", correct: false },
            { text: "Sb", correct: false },
            { text: "Te", correct: false }
        ]
    },
    {
        question: "Jód",
        answers: [
            { text: "I", correct: true },
            { text: "An", correct: false },
            { text: "Te", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Uhlík",
        answers: [
            { text: "C", correct: true },
            { text: "Ge", correct: false },
            { text: "Ce", correct: false },
            { text: "Pb", correct: false }
        ]
    },
    {
        question: "Síra",
        answers: [
            { text: "S", correct: true },
            { text: "Sb", correct: false },
            { text: "As", correct: false },
            { text: "A", correct: false }
        ]
    },
    {
        question: "Fosfor",
        answers: [
            { text: "P", correct: true },
            { text: "F", correct: false },
            { text: "Te", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Bor",
        answers: [
            { text: "B", correct: true },
            { text: "Ge", correct: false },
            { text: "C", correct: false },
            { text: "O", correct: false }
        ]
    },
    {
        question: "Křemík",
        answers: [
            { text: "Si", correct: true },
            { text: "S", correct: false },
            { text: "Sb", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Germanium",
        answers: [
            { text: "Ge", correct: true },
            { text: "G", correct: false },
            { text: "E", correct: false },
            { text: "Te", correct: false }
        ]
    },
    {
        question: "Arsen",
        answers: [
            { text: "As", correct: true },
            { text: "An", correct: false },
            { text: "P", correct: false },
            { text: "F", correct: false }
        ]
    },
    {
        question: "Selen",
        answers: [
            { text: "Se", correct: true },
            { text: "H", correct: false },
            { text: "S", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Antimon",
        answers: [
            { text: "Sb", correct: true },
            { text: "A", correct: false },
            { text: "Cl", correct: false },
            { text: "An", correct: false }
        ]
    },
    {
        question: "Tellur",
        answers: [
            { text: "Te", correct: true },
            { text: "F", correct: false },
            { text: "E", correct: false },
            { text: "T", correct: false }
        ]
    },
    {
        question: "Astat",
        answers: [
            { text: "At", correct: true },
            { text: "A", correct: false },
            { text: "As", correct: false },
            { text: "An", correct: false }
        ]
    },
    {
        question: "Hliník",
        answers: [
            { text: "Al", correct: true },
            { text: "H", correct: false },
            { text: "Hg", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Železo",
        answers: [
            { text: "Fe", correct: true },
            { text: "F", correct: false },
            { text: "C", correct: false },
            { text: "Ge", correct: false }
        ]
    },
    {
        question: "Měď",
        answers: [
            { text: "Cu", correct: true },
            { text: "C", correct: false },
            { text: "Hg", correct: false },
            { text: "Ag", correct: false }
        ]
    },
    {
        question: "Zlato",
        answers: [
            { text: "Au", correct: true },
            { text: "An", correct: false },
            { text: "A", correct: false },
            { text: "Se", correct: false }
        ]
    },
    {
        question: "Stříbro",
        answers: [
            { text: "Ag", correct: true },
            { text: "Hg", correct: false },
            { text: "N", correct: false },
            { text: "Br", correct: false }
        ]
    },
    {
        question: "Olovo",
        answers: [
            { text: "Pb", correct: true },
            { text: "O", correct: false },
            { text: "I", correct: false },
            { text: "Br", correct: false }
        ]
    },
    {
        question: "Zinek",
        answers: [
            { text: "Zn", correct: true },
            { text: "Z", correct: false },
            { text: "Te", correct: false },
            { text: "P", correct: false }
        ]
    },
    {
        question: "Rtuť",
        answers: [
            { text: "Hg", correct: true },
            { text: "H", correct: false },
            { text: "Ag", correct: false },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "Lithium",
        answers: [
            { text: "Li", correct: true },
            { text: "L", correct: false },
            { text: "Na", correct: false },
            { text: "K", correct: false }
        ]
    },
    {
        question: "Sodík",
        answers: [
            { text: "Na", correct: true },
            { text: "Li", correct: false },
            { text: "K", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Draslík",
        answers: [
            { text: "K", correct: true },
            { text: "Na", correct: false },
            { text: "Rb", correct: false },
            { text: "Cs", correct: false }
        ]
    },
    {
        question: "Rubidium",
        answers: [
            { text: "Rb", correct: true },
            { text: "K", correct: false },
            { text: "Cs", correct: false },
            { text: "Fr", correct: false }
        ]
    },
    {
        question: "Cesium",
        answers: [
            { text: "Cs", correct: true },
            { text: "Rb", correct: false },
            { text: "Fr", correct: false },
            { text: "Li", correct: false }
        ]
    },
    {
        question: "Francium",
        answers: [
            { text: "Fr", correct: true },
            { text: "Cs", correct: false },
            { text: "Rb", correct: false },
            { text: "K", correct: false }
        ]
    }
]

// 1.A Group
const group1A = [
    {
        question: "Vodík",
        answers: [
            { text: "H", correct: true },
            { text: "O", correct: false },
            { text: "N", correct: false },
            { text: "C", correct: false }
        ]
    },
    {
        question: "Lithium",
        answers: [
            { text: "Li", correct: true },
            { text: "L", correct: false },
            { text: "Na", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Sodík",
        answers: [
            { text: "Na", correct: true },
            { text: "Li", correct: false },
            { text: "K", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Draslík",
        answers: [
            { text: "K", correct: true },
            { text: "Na", correct: false },
            { text: "Rb", correct: false },
            { text: "Cs", correct: false }
        ]
    },
    {
        question: "Rubidium",
        answers: [
            { text: "Rb", correct: true },
            { text: "K", correct: false },
            { text: "Cs", correct: false },
            { text: "B", correct: false }
        ]
    },
    {
        question: "Cesium",
        answers: [
            { text: "Cs", correct: true },
            { text: "Rb", correct: false },
            { text: "Fr", correct: false },
            { text: "Li", correct: false }
        ]
    },
    {
        question: "Francium",
        answers: [
            { text: "Fr", correct: true },
            { text: "Cs", correct: false },
            { text: "Rb", correct: false },
            { text: "A", correct: false }
        ]
    }
]

// From Elements to Words

// All
const allElementsWords = [
    {
        question: "H",
        answers: [
            { text: "Vodík", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Křemík", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "O",
        answers: [
            { text: "Kyslík", correct: true },
            { text: "Dusík", correct: false },
            { text: "Astat", correct: false },
            { text: "Vodík", correct: false }
        ]
    },
    {
        question: "N",
        answers: [
            { text: "Dusík", correct: true },
            { text: "Fluor", correct: false },
            { text: "selen", correct: false },
            { text: "Brom", correct: false }
        ]
    },
    {
        question: "F",
        answers: [
            { text: "Fluor", correct: true },
            { text: "Fosfor", correct: false },
            { text: "Antimon", correct: false },
            { text: "Bor", correct: false }
        ]
    },
    {
        question: "Cl",
        answers: [
            { text: "Chlor", correct: true },
            { text: "Astat", correct: false },
            { text: "Železo", correct: false },
            { text: "Vodík", correct: false }
        ]
    },
    {
        question: "Br",
        answers: [
            { text: "Brom", correct: true },
            { text: "selen", correct: false },
            { text: "Bor", correct: false },
            { text: "Astat", correct: false }
        ]
    },
    {
        question: "I",
        answers: [
            { text: "Jód", correct: true },
            { text: "Fosfor", correct: false },
            { text: "Antimon", correct: false },
            { text: "Kyslík", correct: false }
        ]
    },
    {
        question: "C",
        answers: [
            { text: "Uhlík", correct: true },
            { text: "Síra", correct: false },
            { text: "Astat", correct: false },
            { text: "Tellur", correct: false }
        ]
    },
    {
        question: "S",
        answers: [
            { text: "Síra", correct: true },
            { text: "Arsen", correct: false },
            { text: "Brom", correct: false },
            { text: "Jód", correct: false }
        ]
    },
    {
        question: "P",
        answers: [
            { text: "Fosfor", correct: true },
            { text: "Olovo", correct: false },
            { text: "Zinek", correct: false },
            { text: "Brom", correct: false }
        ]
    },
    {
        question: "B",
        answers: [
            { text: "Bor", correct: true },
            { text: "Brom", correct: false },
            { text: "Tellur", correct: false },
            { text: "Fluor", correct: false }
        ]
    },
    {
        question: "Si",
        answers: [
            { text: "Křemík", correct: true },
            { text: "Síra", correct: false },
            { text: "Selen", correct: false },
            { text: "Astat", correct: false }
        ]
    },
    {
        question: "Ge",
        answers: [
            { text: "Germanium", correct: true },
            { text: "Uhlík", correct: false },
            { text: "Fosfor", correct: false },
            { text: "Arsen", correct: false }
        ]
    },
    {
        question: "As",
        answers: [
            { text: "Arsen", correct: true },
            { text: "Vodík", correct: false },
            { text: "Antimon", correct: false },
            { text: "Zinek", correct: false }
        ]
    },
    {
        question: "Se",
        answers: [
            { text: "Selen", correct: true },
            { text: "Arsen", correct: false },
            { text: "Astat", correct: false },
            { text: "Kyslík", correct: false }
        ]
    },
    {
        question: "Sb",
        answers: [
            { text: "Antimon", correct: true },
            { text: "Arsen", correct: false },
            { text: "Zlato", correct: false },
            { text: "Olovo", correct: false }
        ]
    },
    {
        question: "Te",
        answers: [
            { text: "Tellur", correct: true },
            { text: "Arsen", correct: false },
            { text: "Chlor", correct: false },
            { text: "Germanium", correct: false }
        ]
    },
    {
        question: "At",
        answers: [
            { text: "Astat", correct: true },
            { text: "Měď", correct: false },
            { text: "Železo", correct: false },
            { text: "Olovo", correct: false }
        ]
    },
    {
        question: "Al",
        answers: [
            { text: "Hliník", correct: true },
            { text: "Zinek", correct: false },
            { text: "Vodík", correct: false },
            { text: "Kyslík", correct: false }
        ]
    },
    {
        question: "Fe",
        answers: [
            { text: "Železo", correct: true },
            { text: "Zinek", correct: false },
            { text: "Stříbro", correct: false },
            { text: "Germanium", correct: false }
        ]
    },
    {
        question: "Cu",
        answers: [
            { text: "Měď", correct: true },
            { text: "Tellur", correct: false },
            { text: "Bor", correct: false },
            { text: "Vodík", correct: false }
        ]
    },
    {
        question: "Au",
        answers: [
            { text: "Zlato", correct: true },
            { text: "Olovo", correct: false },
            { text: "Tellur", correct: false },
            { text: "Brom", correct: false }
        ]
    },
    {
        question: "Ag",
        answers: [
            { text: "Stříbro", correct: true },
            { text: "Rtuť", correct: false },
            { text: "Zinek", correct: false },
            { text: "Železo", correct: false }
        ]
    },
    {
        question: "Pb",
        answers: [
            { text: "Olovo", correct: true },
            { text: "Tellur", correct: false },
            { text: "Jód", correct: false },
            { text: "Dusík", correct: false }
        ]
    },
    {
        question: "Zn",
        answers: [
            { text: "Zinek", correct: true },
            { text: "Síra", correct: false },
            { text: "Křemík", correct: false },
            { text: "Chlor", correct: false }
        ]
    },
    {
        question: "Hg",
        answers: [
            { text: "Rtuť", correct: true },
            { text: "Zinek", correct: false },
            { text: "Jód", correct: false },
            { text: "Arsen", correct: false }
        ]
    },
    {
        question: "Li",
        answers: [
            { text: "Lithium", correct: true },
            { text: "Draslík", correct: false },
            { text: "Vodík", correct: false },
            { text: "Cesium", correct: false }
        ]
    },
    {
        question: "Na",
        answers: [
            { text: "Sodík", correct: true },
            { text: "Vodík", correct: false },
            { text: "Draslík", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "K",
        answers: [
            { text: "Draslík", correct: true },
            { text: "Rubidium", correct: false },
            { text: "Zinek", correct: false },
            { text: "Lithium", correct: false }
        ]
    },
    {
        question: "Rb",
        answers: [
            { text: "Rubidium", correct: true },
            { text: "Draslík", correct: false },
            { text: "Cesium", correct: false },
            { text: "Olovo", correct: false }
        ]
    },
    {
        question: "Cs",
        answers: [
            { text: "Cesium", correct: true },
            { text: "Cín", correct: false },
            { text: "Jód", correct: false },
            { text: "Zlato", correct: false }
        ]
    },
    {
        question: "Fr",
        answers: [
            { text: "Francium", correct: true },
            { text: "Kylík", correct: false },
            { text: "Selen", correct: false },
            { text: "Bor", correct: false }
        ]
    }
]

// 1.A Group 
const group1AWords = [
    {
        question: "H",
        answers: [
            { text: "Vodík", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Křemík", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Li",
        answers: [
            { text: "Lithium", correct: true },
            { text: "Sodík", correct: false },
            { text: "Draslík", correct: false },
            { text: "Cesium", correct: false }
        ]
    },
    {
        question: "Na",
        answers: [
            { text: "Sodík", correct: true },
            { text: "Rubidium", correct: false },
            { text: "Olovo", correct: false },
            { text: "Draslík", correct: false }
        ]
    },
    {
        question: "K",
        answers: [
            { text: "Draslík", correct: true },
            { text: "Lithium", correct: false },
            { text: "Francium", correct: false },
            { text: "Vodík", correct: false }
        ]
    },
    {
        question: "Rb",
        answers: [
            { text: "Rubidium", correct: true },
            { text: "Francium", correct: false },
            { text: "Hliník", correct: false },
            { text: "Jód", correct: false }
        ]
    },
    {
        question: "Cs",
        answers: [
            { text: "Cesium", correct: true },
            { text: "Fosfor", correct: false },
            { text: "Dusík", correct: false },
            { text: "Sodík", correct: false }
        ]
    },
    {
        question: "Fr",
        answers: [
            { text: "Francium", correct: true },
            { text: "Draslík", correct: false },
            { text: "Rubidium", correct: false },
            { text: "Germanium", correct: false }
        ]
    }
]