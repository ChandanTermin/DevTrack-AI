def parse_resume(text):
    sections = {
        "contact": "",
        "summary": "",
        "skills": "",
        "projects": "",
        "education": ""
    }

    lines = text.splitlines()

    current_section = "contact"

    headings = {
        "professional summary": "summary",
        "technical skills": "skills",
        "projects": "projects",
        "education": "education"
    }

    for line in lines:
        clean_line = line.strip()

        if not clean_line:
            continue

        lower = clean_line.lower()

        if lower in headings:
            current_section = headings[lower]
            continue

        sections[current_section] += clean_line + "\n"

    return sections