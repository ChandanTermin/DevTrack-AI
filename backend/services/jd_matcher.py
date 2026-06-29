import re


TECH_SKILLS = [
    "java",
    "python",
    "c",
    "c++",
    "javascript",
    "react",
    "node",
    "node.js",
    "express",
    "express.js",
    "html",
    "css",
    "sql",
    "mysql",
    "mongodb",
    "git",
    "github",
    "docker",
    "aws",
    "spring",
    "spring boot",
    "fastapi",
    "flask",
    "linux",
    "rest api",
    "rest",
]


def extract_skills(text):
    text = text.lower()
    found = set()

    for skill in TECH_SKILLS:
        if skill == "c":
            pattern = r"\bc\b"
        elif skill == "c++":
            pattern = r"\bc\+\+\b"
        else:
            pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text):
            found.add(skill)

    return sorted(found)

def match_resume_with_jd(resume_text, jd_text):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    matched = sorted(set(resume_skills) & set(jd_skills))
    missing = sorted(set(jd_skills) - set(resume_skills))

    score = (
        round((len(matched) / len(jd_skills)) * 100)
        if jd_skills
        else 0
    )

    return {
        "match_score": score,
        "matched_skills": matched,
        "missing_skills": missing,
        "resume_skills": resume_skills,
        "jd_skills": jd_skills,
    }