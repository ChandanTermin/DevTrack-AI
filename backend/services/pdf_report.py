from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph


def create_report(
    filename,
    analysis,
    jd_result=None,
    interview_questions=None,
):
    pdf_name = f"reports/{filename}.pdf"

    doc = SimpleDocTemplate(pdf_name)

    styles = getSampleStyleSheet()

    elements = []

    elements.append(Paragraph("<b>DEVTRACK AI</b>", styles["Title"]))
    elements.append(Paragraph("Resume Analysis Report", styles["Heading2"]))

    elements.append(
        Paragraph(
            f"<b>Overall ATS Score:</b> {analysis['overall_score']}/100",
            styles["BodyText"],
        )
    )

    elements.append(Paragraph("<br/><b>Section Scores</b>", styles["Heading2"]))

    for section, score in analysis["section_scores"].items():
        elements.append(
            Paragraph(
                f"{section.title()} : {score}",
                styles["BodyText"],
            )
        )

    elements.append(Paragraph("<br/><b>Skills Detected</b>", styles["Heading2"]))

    for skill in analysis["skills_found"]:
        elements.append(
            Paragraph(f"• {skill}", styles["BodyText"])
        )

    elements.append(Paragraph("<br/><b>ATS Suggestions</b>", styles["Heading2"]))

    if analysis["suggestions"]:
        for suggestion in analysis["suggestions"]:
            elements.append(
                Paragraph(f"• {suggestion}", styles["BodyText"])
            )
    else:
        elements.append(
            Paragraph("No suggestions.", styles["BodyText"])
        )

    if jd_result:

        elements.append(
            Paragraph("<br/><b>Job Description Match</b>", styles["Heading2"])
        )

        elements.append(
            Paragraph(
                f"Match Score: {jd_result['match_score']}%",
                styles["BodyText"],
            )
        )

        elements.append(
            Paragraph("<b>Matched Skills</b>", styles["Heading3"])
        )

        for skill in jd_result["matched_skills"]:
            elements.append(
                Paragraph(f"• {skill}", styles["BodyText"])
            )

        elements.append(
            Paragraph("<b>Missing Skills</b>", styles["Heading3"])
        )

        for skill in jd_result["missing_skills"]:
            elements.append(
                Paragraph(f"• {skill}", styles["BodyText"])
            )

        if jd_result.get("suggestions"):
            elements.append(
                Paragraph("<b>Resume Improvement Suggestions</b>", styles["Heading3"])
            )

            for suggestion in jd_result["suggestions"]:
                elements.append(
                    Paragraph(f"• {suggestion}", styles["BodyText"])
                )

    if interview_questions:

        elements.append(
            Paragraph("<br/><b>Interview Questions</b>", styles["Heading2"])
        )

        for i, question in enumerate(interview_questions, 1):
            elements.append(
                Paragraph(f"{i}. {question}", styles["BodyText"])
            )

    doc.build(elements)

    return pdf_name