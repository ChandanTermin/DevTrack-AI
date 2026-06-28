from services.scoring import (
    score_contact,
    score_summary,
    score_skills,
    score_projects,
    score_education,
)


def analyze_resume(sections):

    contact = sections.get("contact", "")
    summary = sections.get("summary", "")
    skills = sections.get("skills", "")
    projects = sections.get("projects", "")
    education = sections.get("education", "")

    contact_score, contact_suggestions = score_contact(contact)

    summary_score, summary_suggestions = score_summary(summary)

    skills_score, skills_found, skills_suggestions = score_skills(skills)

    projects_score, project_suggestions = score_projects(projects)

    education_score, education_suggestions = score_education(education)

    total_score = (
        contact_score
        + summary_score
        + skills_score
        + projects_score
        + education_score
    )

    return {
        "overall_score": round(total_score),
        "section_scores": {
            "contact": contact_score,
            "summary": summary_score,
            "skills": skills_score,
            "projects": projects_score,
            "education": education_score,
        },
        "skills_found": skills_found,
        "suggestions": (
            contact_suggestions
            + summary_suggestions
            + skills_suggestions
            + project_suggestions
            + education_suggestions
        ),
    }