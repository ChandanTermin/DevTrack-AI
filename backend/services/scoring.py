import re


def score_contact(contact):
    score = 0
    suggestions = []

    email = re.search(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", contact)
    phone = re.search(r"\b\d{10}\b", contact)
    github = re.search(r"github\.com/[A-Za-z0-9_-]+", contact.lower())
    linkedin = re.search(r"linkedin\.com/in/[A-Za-z0-9_-]+", contact.lower())

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


def score_projects(projects):
    score = 0
    suggestions = []

    project_count = projects.count("•")

    action_verbs = [
        "developed",
        "built",
        "designed",
        "implemented",
        "created",
        "optimized",
        "integrated"
    ]

    verbs_found = sum(
        1 for verb in action_verbs
        if verb in projects.lower()
    )

    if project_count >= 6:
        score += 10
    elif project_count >= 3:
        score += 7
    else:
        score += 4
        suggestions.append("Add more detailed project descriptions.")

    score += min(verbs_found, 10)

    return score, suggestions


def score_education(education):
    score = 0
    suggestions = []

    if education.strip():
        score = 10
    else:
        suggestions.append("Add your education details.")

    return score, suggestions