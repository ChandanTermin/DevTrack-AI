def generate_questions(jd_result):

    questions = []

    question_bank = {
        "java": [
            "Explain JVM, JDK and JRE.",
            "What is the difference between Abstract Class and Interface?"
        ],

        "python": [
            "What are Python decorators?",
            "Explain *args and **kwargs."
        ],

        "react": [
            "What are React Hooks?",
            "Difference between State and Props?"
        ],

        "javascript": [
            "Explain closures in JavaScript.",
            "What is event bubbling?"
        ],

        "node": [
            "What is the Event Loop in Node.js?",
            "Why is Node.js asynchronous?"
        ],

        "sql": [
            "Difference between DELETE, TRUNCATE and DROP.",
            "Explain SQL JOINs."
        ],

        "mongodb": [
            "Difference between SQL and MongoDB?",
            "What is a document in MongoDB?"
        ],

        "docker": [
            "What is Docker?",
            "Difference between Docker Image and Container?"
        ],

        "aws": [
            "What is EC2?",
            "Difference between EC2 and S3?"
        ],

        "fastapi": [
            "Why FastAPI is faster than Flask?",
            "Explain path parameters."
        ],

        "spring": [
            "What is Dependency Injection?",
            "Explain Spring Bean."
        ],

        "spring boot": [
            "What are Spring Boot starters?",
            "Explain Spring Boot architecture."
        ],

        "rest": [
            "What is REST?",
            "Difference between GET and POST?"
        ]
    }

    for skill in jd_result["matched_skills"]:
        if skill in question_bank:
            questions.extend(question_bank[skill])

    questions.extend([
        "Explain one challenging project from your resume.",
        "What was your biggest technical challenge?",
        "Why should we hire you for this role?"
    ])

    return questions