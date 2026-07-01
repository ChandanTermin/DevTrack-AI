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
    projects = sections.get("projects", "")
    education = sections.get("education", "")

    # Use the complete resume text for analysis
    full_resume_text = "\n".join(sections.values())

    # Contact
    contact_score, contact_suggestions = score_contact(full_resume_text)

    # Summary
    summary_score, summary_suggestions = score_summary(summary)

    # Skills
    skills_score, skills_found, skills_suggestions = score_skills(full_resume_text)

    # Projects
    projects_score, project_suggestions = score_projects(full_resume_text)

    # Education
    education_score, education_suggestions = score_education(full_resume_text)

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