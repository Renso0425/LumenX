const quizQuest = [
    {
        question: "Depression is world wide?",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Depression is...",
        options: ["Temporary", "Long Term", "Occasional"],
        answer: "Long Term"
    },
    {
        question: "Depression is a(n)...",
        options: ["Emotion", "Medical Illness", "Phase"],
        answer: "Medical Illness"
    },
    {
        question: "Depression can be caused by...",
        options: ["Failing an assignment", "Getting fired", "Getting an injury", "Losing a loved one"],
        answer: "Getting fired"
    },
    {
        question: "Which emotions are not part of depression?",
        options: ["Hopelessness", "Disappointment", "Sadness", "Discouragement"],
        answer: "Disappointment"
    },
    {
        question: "Depression is also known as...",
        options: ["Depressive Illness Disorder", "Medical Depression Disorder", "Major Depressive Disorder", "Medical Depressive Disorder"],
        answer: "Major Depressive Disorder"
    },
    {
        question: "Which is not an intervention strategy for depression?",
        options: ["Having a good sleep schedule", "Eating healthy", "Being kind", "Avoiding stress"],
        answer: "Avoiding stress",
    },
];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");

    let currQ = 0;
    let score = 0;

    function showQuestion() {
        const question = quizQuest[currQ];
        questionElement.innerText = question.question;
        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.style.fontSize = '15px';
            button.innerText = option;
            optionsElement.appendChild(button);
            button.addEventListener("click", selectAnswer);
        });
    }
    function selectAnswer(e) {
        const selectedButton = e.target;
        const answer = quizQuest[currQ].answer;
        if (selectedButton.innerText === answer) {
            score++;
        }
        currQ++;
        if (currQ < quizQuest.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
    function showResult() {
        quiz.innerHTML = `
            <h1 style="font-size:40px">Quiz Completed!</h1>
            <p style="font-size:30px">Your score: ${score}/${quizQuest.length}</p>
        `;
    }
    showQuestion();