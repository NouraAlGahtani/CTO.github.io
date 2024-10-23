const questions = [
    {
        question: "Do you enjoy solving puzzles?",
        options: ["Yes", "No"],
        category: "Penetration Testing"
    },
    {
        question: "Are you comfortable with cloud platforms?",
        options: ["Yes", "No"],
        category: "Cloud Security"
    },
    {
        question: "Do you like working with security software?",
        options: ["Yes", "No"],
        category: "Application Security"
    },
    {
        question: "Are you detail-oriented?",
        options: ["Yes", "No"],
        category: "Operational Security"
    },
    {
        question: "Do you enjoy researching new technologies?",
        options: ["Yes", "No"],
        category: "Bug Hunter"
    },
    {
        question: "Are you familiar with coding?",
        options: ["Yes", "No"],
        category: "Penetration Testing"
    },
    {
        question: "Do you enjoy working in a team?",
        options: ["Yes", "No"],
        category: "Cloud Security"
    },
    {
        question: "Are you comfortable with public speaking?",
        options: ["Yes", "No"],
        category: "Application Security"
    },
    {
        question: "Do you like analyzing data?",
        options: ["Yes", "No"],
        category: "Operational Security"
    },
    {
        question: "Do you prefer remote work?",
        options: ["Yes", "No"],
        category: "Bug Hunter"
    }
];

let currentQuestion = 0;
let scores = {};

function showQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const question = questions[currentQuestion];

    questionDiv.innerHTML = question.question;
    optionsDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerHTML = option;
        btn.className = 'option-button'; // Adding a class for styling if needed
        btn.onclick = () => saveAnswer(question.category, index);
        optionsDiv.appendChild(btn);
    });
}

function saveAnswer(category, answerIndex) {
    if (answerIndex === 0) {
        scores[category] = (scores[category] || 0) + 1;
    }
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

//  showResults function

function showResults() {
    const resultDiv = document.getElementById('result');
    const maxCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    

    // Redirect based on the maxCategory
    let redirectPage;
    switch (maxCategory) {
        case "Penetration Testing":
            redirectPage = "Pt.html"; //  HTML page for Penetration Testing
            break;
        case "Cloud Security":
            redirectPage = "cs.html"; //  HTML page for Cloud Security
            break;
        case "Application Security":
            redirectPage = "as.html"; //  HTML page for Application Security
            break;
        case "Operational Security":
            redirectPage = "os.html"; //  HTML page for Operational Security
            break;
        case "Bug Hunter":
            redirectPage = "BugBounty.html"; //  HTML page for Bug Hunter
            break;
        default:
            redirectPage = "default.html"; // Fallback page
    }

    // Redirect after a brief display
    setTimeout(() => {
        window.location.href = redirectPage; // Redirect to the corresponding page
    }, 1000); // Redirect after 3 seconds
}

showQuestion();
