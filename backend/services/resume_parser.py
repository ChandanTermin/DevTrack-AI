import re


def parse_resume(text):

    sections = {
        "contact": "",
        "summary": "",
        "skills": "",
        "projects": "",
        "education": "",
    }

    lower_text = text.lower()

    patterns = {
        "summary": [
            "professional summary",
            "profile summary",
            "summary",
        ],
        "skills": [
            "technical skills",
            "skills",
            "technologies",
        ],
        "projects": [
            "projects",
            "project",
        ],
        "education": [
            "education",
            "academic",
            "qualification",
        ],
    }

    positions = []

    for section, keywords in patterns.items():

        earliest = None

        for keyword in keywords:

            match = re.search(re.escape(keyword), lower_text)

            if match:

                if earliest is None or match.start() < earliest:
                    earliest = match.start()

        if earliest is not None:
            positions.append((earliest, section))

    positions.sort()

    if not positions:
        sections["contact"] = text
        return sections

    # Contact is everything before the first detected section
    first_start = positions[0][0]
    sections["contact"] = text[:first_start].strip()

    for i in range(len(positions)):

        start, section = positions[i]

        if i < len(positions) - 1:
            end = positions[i + 1][0]
        else:
            end = len(text)

        content = text[start:end]

        first_newline = content.find("\n")

        if first_newline != -1:
            content = content[first_newline + 1 :]

        sections[section] = content.strip()

    return sections