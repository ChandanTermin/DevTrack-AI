def generate_suggestions(jd_result):

    suggestions = []

    skill_tips = {
        "react": "Add React.js to your resume if you have worked on React projects.",
        "sql": "Mention SQL/MySQL experience and database-related projects.",
        "docker": "Include Docker if you've used containers in any project.",
        "aws": "Mention AWS services or cloud projects if applicable.",
        "spring": "Add Spring Framework experience if you know it.",
        "spring boot": "Mention Spring Boot projects or coursework.",
        "mongodb": "Include MongoDB if you've built NoSQL applications.",
        "fastapi": "Mention FastAPI if you've built backend APIs.",
        "rest": "Highlight REST API development experience."
    }

    for skill in jd_result["missing_skills"]:
        if skill in skill_tips:
            suggestions.append(skill_tips[skill])

    return suggestions