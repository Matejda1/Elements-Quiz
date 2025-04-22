// This file contains the database of elements and their properties

// With Answers

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
    },
    {
        question: "Berylium",
        answers: [
            { text: "Be", correct: true },
            { text: "B", correct: false },
            { text: "C", correct: false },
            { text: "N", correct: false }
        ]
    },
    {
        question: "Hořčík",
        answers: [
            { text: "Mg", correct: true },
            { text: "Al", correct: false },
            { text: "Si", correct: false },
            { text: "S", correct: false }
        ]
    },
    {
        question: "Vápník",
        answers: [
            { text: "Ca", correct: true },
            { text: "K", correct: false },
            { text: "Na", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Stroncium",
        answers: [
            { text: "Sr", correct: true },
            { text: "Ba", correct: false },
            { text: "Ra", correct: false },
            { text: "Cs", correct: false }
        ]
    },
    {
        question: "Baryum",
        answers: [
            { text: "Ba", correct: true },
            { text: "Sr", correct: false },
            { text: "Ra", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Radium",
        answers: [
            { text: "Ra", correct: true },
            { text: "Ba", correct: false },
            { text: "Sr", correct: false },
            { text: "Cs", correct: false }
        ]
    },
    {
        question: "Cín",
        answers: [
            { text: "Sn", correct: true },
            { text: "Pb", correct: false },
            { text: "Ag", correct: false },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "Mangan",
        answers: [
            { text: "Mn", correct: true },
            { text: "Fe", correct: false },
            { text: "Co", correct: false },
            { text: "Ni", correct: false }
        ]
    },
    {
        question: "Chrom",
        answers: [
            { text: "Cr", correct: true },
            { text: "Fe", correct: false },
            { text: "Co", correct: false },
            { text: "Ni", correct: false }
        ]
    },
    {
        question: "Nikl",
        answers: [
            { text: "Ni", correct: true },
            { text: "Fe", correct: false },
            { text: "Co", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Kobalt",
        answers: [
            { text: "Co", correct: true },
            { text: "Fe", correct: false },
            { text: "Ni", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Platina",
        answers: [
            { text: "Pt", correct: true },
            { text: "Ag", correct: false },
            { text: "Au", correct: false },
            { text: "Hg", correct: false }
        ]
    },
    {
        question: "Helium",
        answers: [
            { text: "He", correct: true },
            { text: "H", correct: false },
            { text: "Li", correct: false },
            { text: "Be", correct: false }
        ]
    },
    {
        question: "Neon",
        answers: [
            { text: "Ne", correct: true },
            { text: "N", correct: false },
            { text: "Ar", correct: false },
            { text: "Kr", correct: false }
        ]
    },
    {
        question: "Argon",
        answers: [
            { text: "Ar", correct: true },
            { text: "Kr", correct: false },
            { text: "Xe", correct: false },
            { text: "Rn", correct: false }
        ]
    },
    {
        question: "Krypton",
        answers: [
            { text: "Kr", correct: true },
            { text: "Xe", correct: false },
            { text: "Rn", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Xenon",
        answers: [
            { text: "Xe", correct: true },
            { text: "Rn", correct: false },
            { text: "Kr", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Radon",
        answers: [
            { text: "Rn", correct: true },
            { text: "Xe", correct: false },
            { text: "Kr", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Oganesson",
        answers: [
            { text: "Og", correct: true },
            { text: "Rn", correct: false },
            { text: "Xe", correct: false },
            { text: "Kr", correct: false }
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

// 2.A Group
const group2A = [
    {
        question: "Berylium",
        answers: [
            { text: "Be", correct: true },
            { text: "B", correct: false },
            { text: "C", correct: false },
            { text: "N", correct: false }
        ]
    },
    {
        question: "Hořčík",
        answers: [
            { text: "Mg", correct: true },
            { text: "Al", correct: false },
            { text: "Si", correct: false },
            { text: "S", correct: false }
        ]
    },
    {
        question: "Vápník",
        answers: [
            { text: "Ca", correct: true },
            { text: "K", correct: false },
            { text: "Na", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Stroncium",
        answers: [
            { text: "Sr", correct: true },
            { text: "Ba", correct: false },
            { text: "Ra", correct: false },
            { text: "Cs", correct: false }
        ]
    },
    {
        question: "Baryum",
        answers: [
            { text: "Ba", correct: true },
            { text: "Sr", correct: false },
            { text: "Ra", correct: false },
            { text: "Rb", correct: false }
        ]
    },
    {
        question: "Radium",
        answers: [
            { text: "Ra", correct: true },
            { text: "Ba", correct: false },
            { text: "Sr", correct: false },
            { text: "Cs", correct: false }
        ]
    }
]

// 8.A Group
const group8A = [
    {
        question: "Helium",
        answers: [
            { text: "He", correct: true },
            { text: "H", correct: false },
            { text: "Li", correct: false },
            { text: "Be", correct: false }
        ]
    },
    {
        question: "Neon",
        answers: [
            { text: "Ne", correct: true },
            { text: "N", correct: false },
            { text: "Ar", correct: false },
            { text: "Kr", correct: false }
        ]
    },
    {
        question: "Argon",
        answers: [
            { text: "Ar", correct: true },
            { text: "Kr", correct: false },
            { text: "Xe", correct: false },
            { text: "Rn", correct: false }
        ]
    },
    {
        question: "Krypton",
        answers: [
            { text: "Kr", correct: true },
            { text: "Xe", correct: false },
            { text: "Rn", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Xenon",
        answers: [
            { text: "Xe", correct: true },
            { text: "Rn", correct: false },
            { text: "Kr", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Radon",
        answers: [
            { text: "Rn", correct: true },
            { text: "Xe", correct: false },
            { text: "Kr", correct: false },
            { text: "Ar", correct: false }
        ]
    },
    {
        question: "Oganesson",
        answers: [
            { text: "Og", correct: true },
            { text: "Rn", correct: false },
            { text: "Xe", correct: false },
            { text: "Kr", correct: false }
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
    },
    {
        question: "Be",
        answers: [
            { text: "Berylium", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Mg",
        answers: [
            { text: "Hořčík", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ca",
        answers: [
            { text: "Vápník", correct: true },
            { text: "Hořčík", correct: false },
            { text: "Brom", correct: false },
            { text: "Kyslík", correct: false }
        ]
    },
    {
        question: "Sr",
        answers: [
            { text: "Stroncium", correct: true },
            { text: "Brom", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ba",
        answers: [
            { text: "Baryum", correct: true },
            { text: "Hořčík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ra",
        answers: [
            { text: "Radium", correct: true },
            { text: "Brom", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Sn",
        answers: [
            { text: "Cín", correct: true },
            { text: "Olovo", correct: false },
            { text: "Zlato", correct: false },
            { text: "Stříbro", correct: false }
        ]
    },
    {
        question: "Mn",
        answers: [
            { text: "Mangan", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Cr",
        answers: [
            { text: "Chrom", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ni",
        answers: [
            { text: "Nikl", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Co",
        answers: [
            { text: "Kobalt", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Pt",
        answers: [
            { text: "Platina", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "He",
        answers: [
            { text: "Helium", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ne",
        answers: [
            { text: "Neon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ar",
        answers: [
            { text: "Argon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Kr",
        answers: [
            { text: "Krypton", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Xe",
        answers: [
            { text: "Xenon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Rn",
        answers: [
            { text: "Radon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Og",
        answers: [
            { text: "Oganesson", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
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

// 2.A Group
const group2AWords = [
    {
        question: "Be",
        answers: [
            { text: "Berylium", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Mg",
        answers: [
            { text: "Hořčík", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ca",
        answers: [
            { text: "Vápník", correct: true },
            { text: "Hořčík", correct: false },
            { text: "Brom", correct: false },
            { text: "Kyslík", correct: false }
        ]
    },
    {
        question: "Sr",
        answers: [
            { text: "Stroncium", correct: true },
            { text: "Brom", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ba",
        answers: [
            { text: "Baryum", correct: true },
            { text: "Hořčík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ra",
        answers: [
            { text: "Radium", correct: true },
            { text: "Brom", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    }
]

// 8.A Group
const group8AWords = [
    {
        question: "He",
        answers: [
            { text: "Helium", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ne",
        answers: [
            { text: "Neon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Ar",
        answers: [
            { text: "Argon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Kr",
        answers: [
            { text: "Krypton", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Xe",
        answers: [
            { text: "Xenon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Rn",
        answers: [
            { text: "Radon", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    },
    {
        question: "Og",
        answers: [
            { text: "Oganesson", correct: true },
            { text: "Kyslík", correct: false },
            { text: "Síra", correct: false },
            { text: "Uhlík", correct: false }
        ]
    }
]
// With Inputs

// Structure of the database
//    question: "",
//    answer: "",

// From Words to Elements

// All 

const allElementsInputs = [
    {
        question: "Vodík",
        answer: "H",
    },
    {
        question: "Kyslík",
        answer: "O",
    },
    {
        question: "Dusík",
        answer: "N",
    },
    {
        question: "Fluor",
        answer: "F",
    },
    {
        question: "Chlor",
        answer: "Cl",
    },
    {
        question: "Brom",
        answer: "Br",
    },
    {
        question: "Jód",
        answer: "I",
    },
    {
        question: "Uhlík",
        answer: "C",
    },
    {
        question: "Síra",
        answer: "S",
    },
    {
        question: "Fosfor",
        answer: "P",
    },
    {
        question: "Bor",
        answer: "B",
    },
    {
        question: "Křemík",
        answer: "Si",
    },
    {
        question: "Germanium",
        answer: "Ge",
    },
    {
        question: "Arsen",
        answer: "As",
    },
    {
        question: "Selen",
        answer: "Se",
    },
    {
        question: "Antimon",
        answer: "Sb",
    },
    {
        question: "Tellur",
        answer: "Te",
    },
    {
        question: "Astat",
        answer: "At",
    },
    {
        question: "Hliník",
        answer: "Al",
    },
    {
        question: "Železo",
        answer: "Fe",
    },
    {
        question: "Měď",
        answer: "Cu",
    },
    {
        question: "Zlato",
        answer: "Au",
    },
    {
        question: "Stříbro",
        answer: "Ag",
    },
    {
        question: "Olovo",
        answer: "Pb",
    },
    {
        question: "Zinek",
        answer: "Zn",
    },
    {
        question: "Rtuť",
        answer: "Hg",
    },
    {
        question: "Lithium",
        answer: "Li",
    },
    {
        question: "Sodík",
        answer: "Na",
    },
    {
        question: "Draslík",
        answer: "K",
    },
    {
        question: "Rubidium",
        answer: "Rb",
    },
    {
        question: "Cesium",
        answer: "Cs",
    },
    {
        question: "Francium",
        answer: "Fr",
    },
    {
        question: "Berylium",
        answer: "Be",
    },
    {
        question: "Hořčík",
        answer: "Mg",
    },
    {
        question: "Vápník",
        answer: "Ca",
    },
    {
        question: "Stroncium",
        answer: "Sr",
    },
    {
        question: "Baryum",
        answer: "Ba",
    },
    {
        question: "Radium",
        answer: "Ra",
    },
    {
        question: "Cín",
        answer: "Sn",
    },
    {
        question: "Mangan",
        answer: "Mn",
    },
    {
        question: "Chrom",
        answer: "Cr",
    },
    {
        question: "Nikl",
        answer: "Ni",
    },
    {
        question: "Kobalt",
        answer: "Co",
    },
    {
        question: "Platina",
        answer: "Pt",
    },
    {
        question: "Helium",
        answer: "He",
    },
    {
        question: "Neon",
        answer: "Ne",
    },
    {
        question: "Argon",
        answer: "Ar",
    },
    {
        question: "Krypton",
        answer: "Kr",
    },
    {
        question: "Xenon",
        answer: "Xe",
    },
    {
        question: "Radon",
        answer: "Rn",
    },
    {
        question: "Oganesson",
        answer: "Og",
    },
]

// 1.A Group

const group1AInputs = [
    {
        question: "Vodík",
        answer: "H",
    },
    {
        question: "Lithium",
        answer: "Li",
    },
    {
        question: "Sodík",
        answer: "Na",
    },
    {
        question: "Draslík",
        answer: "K",
    },
    {
        question: "Rubidium",
        answer: "Rb",
    },
    {
        question: "Cesium",
        answer: "Cs",
    },
    {
        question: "Francium",
        answer: "Fr",
    }
]

// 2.A Group
const group2AInputs = [
    {
        question: "Berylium",
        answer: "Be",
    },
    {
        question: "Hořčík",
        answer: "Mg",
    },
    {
        question: "Vápník",
        answer: "Ca",
    },
    {
        question: "Stroncium",
        answer: "Sr",
    },
    {
        question: "Baryum",
        answer: "Ba",
    },
    {
        question: "Radium",
        answer: "Ra",
    }
]

// 8.A Group
const group8AInputs = [
    {
        question: "Helium",
        answer: "He",
    },
    {
        question: "Neon",
        answer: "Ne",
    },
    {
        question: "Argon",
        answer: "Ar",
    },
    {
        question: "Krypton",
        answer: "Kr",
    },
    {
        question: "Xenon",
        answer: "Xe",
    },
    {
        question: "Radon",
        answer: "Rn",
    },
    {
        question: "Oganesson",
        answer: "Og",
    }
]

// From Elements to Words

// All

const allElementsWordsInputs = [
    {
        question: "H",
        answer: "Vodík",
    },
    {
        question: "O",
        answer: "Kyslík",
    },
    {
        question: "N",
        answer: "Dusík",
    },
    {
        question: "F",
        answer: "Fluor",
    },
    {
        question: "Cl",
        answer: "Chlor",
    },
    {
        question: "Br",
        answer: "Brom",
    },
    {
        question: "I",
        answer: "Jód",
    },
    {
        question: "C",
        answer: "Uhlík",
    },
    {
        question: "S",
        answer: "Síra",
    },
    {
        question: "P",
        answer: "Fosfor",
    },
    {
        question: "B",
        answer: "Bor",
    },
    {
        question: "Si",
        answer: "Křemík",
    },
    {
        question: "Ge",
        answer: "Germanium",
    },
    {
        question: "As",
        answer: "Arsen",
    },
    {
        question: "Se",
        answer: "Selen",
    },
    {
        question: "Sb",
        answer: "Antimon",
    },
    {
        question: "Te",
        answer: "Tellur",
    },
    {
        question: "At",
        answer: "Astat",
    },
    {
        question: "Al",
        answer: "Hliník",
    },
    {
        question: "Fe",
        answer: "Železo",
    },
    {
        question: "Cu",
        answer: "Měď",
    },
    {
        question: "Au",
        answer: "Zlato",
    },
    {
        question: "Ag",
        answer: "Stříbro",
    },
    {
        question: "Pb",
        answer: "Olovo",
    },
    {
        question: "Zn",
        answer: "Zinek",
    },
    {
        question: "Hg",
        answer: "Rtuť",
    },
    {
        question: "Li",
        answer: "Lithium",
    },
    {
        question: "Na",
        answer: "Sodík",
    },
    {
        question: "K",
        answer: "Draslík",
    },
    {
        question: "Rb",
        answer: "Rubidium",
    },
    {
        question: "Cs",
        answer: "Cesium",
    },
    {
        question: "Fr",
        answer: "Francium",
    },
    {
        question: "Be",
        answer: "Berylium",
    },
    {
        question: "Mg",
        answer: "Hořčík",
    },
    {
        question: "Ca",
        answer: "Vápník",
    },
    {
        question: "Sr",
        answer: "Stroncium",
    },
    {
        question: "Ba",
        answer: "Baryum",
    },
    {
        question: "Ra",
        answer: "Radium",
    },
    {
        question: "Sn",
        answer: "Cín",
    },
    {
        question: "Mn",
        answer: "Mangan",
    },
    {
        question: "Cr",
        answer: "Chrom",
    },
    {
        question: "Ni",
        answer: "Nikl",
    },
    {
        question: "Co",
        answer: "Kobalt",
    },
    {
        question: "Pt",
        answer: "Platina",
    },
    {
        question: "He",
        answer: "Helium",
    },
    {
        question: "Ne",
        answer: "Neon",
    },
    {
        question: "Ar",
        answer: "Argon",
    },
    {
        question: "Kr",
        answer: "Krypton",
    },
    {
        question: "Xe",
        answer: "Xenon",
    },
    {
        question: "Rn",
        answer: "Radon",
    },
    {
        question: "Og",
        answer: "Oganesson",
    },
]

// 1.A Group

const group1AWordsInputs = [
    {
        question: "H",
        answer: "Vodík",
    },
    {
        question: "Li",
        answer: "Lithium",
    },
    {
        question: "Na",
        answer: "Sodík",
    },
    {
        question: "K",
        answer: "Draslík",
    },
    {
        question: "Rb",
        answer: "Rubidium",
    },
    {
        question: "Cs",
        answer: "Cesium",
    },
    {
        question: "Fr",
        answer: "Francium",
    }
]

// 2.A Group
const group2AWordsInputs = [
    {
        question: "Be",
        answer: "Berylium",
    },
    {
        question: "Mg",
        answer: "Hořčík",
    },
    {
        question: "Ca",
        answer: "Vápník",
    },
    {
        question: "Sr",
        answer: "Stroncium",
    },
    {
        question: "Ba",
        answer: "Baryum",
    },
    {
        question: "Ra",
        answer: "Radium",
    }
]   

// 8.A Group
const group8AWordsInputs = [
    {
        question: "He",
        answer: "Helium",
    },
    {
        question: "Ne",
        answer: "Neon",
    },
    {
        question: "Ar",
        answer: "Argon",
    },
    {
        question: "Kr",
        answer: "Krypton",
    },
    {
        question: "Xe",
        answer: "Xenon",
    },
    {
        question: "Rn",
        answer: "Radon",
    },
    {
        question: "Og",
        answer: "Oganesson",
    }
]