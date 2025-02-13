import {
    icono, 
    universidad,
    udemy,
    sergio,
    MySQL,
    PowerBI,
    css,
    express,
    git,
    github,
    html,
    javascript,
    nodejs,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
   

    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: PowerBI,
        name: "PowerBI",
        type: "Frontend",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "Desarrollador Web Junior",
        company_name: "Gobernación de Boyacá - Desarrollo Empresarial",
        iconBg: icono,
        date: "Febrero 2025 - Actualidad",
        points: [
        "Análisis y recopilación de datos de empresas en el departamento de Boyacá con PowerBI.",
        "Gestión y mantenimiento de bases de datos empresariales.",
        "Administración y optimización de las páginas web de la sectorial, desarrolladas en Vue.js y WordPress.",
    ],

    },
    {
        title: "Desarrollador Web Junior",
        company_name: "Gobernación de Boyacá - Control Interno Disciplinario",
        iconBg: icono,
        date: "05 de junio 2024 - 15 de diciembre 2024",
        points: [
        "Desarrollé una aplicación interactiva en un entorno 3D utilizando React.js, Three.js y Node.js para la recepción de quejas y denuncias de estudiantes de colegios públicos en todo el departamento. Los objetos 3D en la plataforma fueron creados con Blender, mejorando la visualización y experiencia del usuario.",
        "Diseño y desarrollo de dashboards en Power BI para la gestión y análisis de datos de las quejas y denuncias.",
        "Administración y mantenimiento de la página web de la sectorial, desarrollada en WordPress.",
    ],

    },
    
    
];

export const education = [
    {
        title: "Estudiante de Ingeniería en Sistemas",
        company_name: "CUN ",
        iconBg: universidad,
        date: "Febrero 2023 - Actualidad",
        points: [
            "Estudiante de Ingeniería en Sistemas en la Universidad de CUN (7 semestre)",
            "desarrollo de aplicaciones web con React.js y otras tecnologías relacionadas",
            "Administación de bases de datos SQL ",
        ],
    

    },
    {
        title: "Bootcamp en programación web",
        company_name: "Universidad Sergio Arboleda ",
        iconBg: sergio,
        date: "Abril 2024 - Agosto 2024",
        points: [
            "Estudiante de Ingeniería en Sistemas en la Universidad de CUN (7 semestre)",
            "desarrollo de aplicaciones web con React.js y otras tecnologías relacionadas",
            "Administación de bases de datos SQL ",
        ],
    },
    {
        title: "Bootcamp de Node.js",
        company_name: "Udemy",
        iconBg: udemy,
        date: "Agosto 2024",
        points: [
        "Desarrollo de habilidades en Node.js, incluyendo el manejo de bases de datos con MySQL y la creación de APIs con Express.js.",
        "Implementación de aplicaciones frontend utilizando React.js para una experiencia de usuario dinámica e interactiva.",
        ],


    },
    
    
];
