import re


def score_contact(text):
    score = 0
    suggestions = []

    text = text.lower()

    email = re.search(
        r"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}",
        text,
    )

    phone = re.search(
        r"(\+91[\s-]?)?\d{10}",
        text,
    )

    github = re.search(
        r"github\.com/[a-z0-9_-]+",
        text,
    )

    linkedin = re.search(
        r"linkedin\.com/in/[a-z0-9_-]+",
        text,
    )

    if email:
        score += 3
    else:
        suggestions.append("Add a valid email address.")

    if phone:
        score += 2
    else:
        suggestions.append("Add a valid phone number.")

    if github:
        score += 2.5
    else:
        suggestions.append("Add your GitHub profile URL.")

    if linkedin:
        score += 2.5
    else:
        suggestions.append("Add your LinkedIn profile URL.")

    return score, suggestions


def score_summary(summary):
    score = 0
    suggestions = []

    words = len(summary.split())

    if words >= 40:
        score = 10
    elif words >= 20:
        score = 7
        suggestions.append("Expand your professional summary.")
    else:
        score = 3
        suggestions.append("Write a stronger professional summary.")

    return score, suggestions


def score_skills(skills):
    suggestions = []

    tech_stack = [
        "java", "python", "c", "c++", "javascript",
        "react", "node", "sql", "mysql", "mongodb",
        "git", "github", "docker", "aws",
        "spring", "fastapi", "html", "css"
    ]

    skills_lower = skills.lower()
    found = []

    for tech in tech_stack:
        if tech in skills_lower:
            found.append(tech)

    score = min(len(found), 20)

    if len(found) < 8:
        suggestions.append("Add more relevant technical skills.")

    return score, found, suggestions


def score_projects(text):
    score = 0
    suggestions = []

    text_lower = text.lower()

    project_keywords = [
        "developed",
        "built",
        "created",
        "implemented",
        "designed",
        "optimized",
        "integrated",
    ]

    count = sum(
        1
        for word in project_keywords
        if word in text_lower
    )

    score = min(count * 2, 20)

    if score < 10:
        suggestions.append(
            "Add more detailed project descriptions."
        )

    return score, suggestions


def score_education(text):
    score = 0
    suggestions = []

    text = text.lower()

    keywords = [
        "cgpa",
        "college",
        "engineering",
        "b.e",
        "bachelor",
        "12th",
        "10th",
    ]

    found = sum(
        1
        for word in keywords
        if word in text
    )

    score = min(found * 2, 10)

    if score < 8:
        suggestions.append(
            "Add complete education details."
        )

    return score, suggestions