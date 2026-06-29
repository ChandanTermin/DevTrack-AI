import os
import shutil
from fastapi.responses import FileResponse
from services.pdf_report import create_report

from fastapi import APIRouter, File, UploadFile, Body
from services.interview_engine import generate_questions
from services.pdf_parser import extract_text
from services.resume_parser import parse_resume
from services.ats_engine import analyze_resume
from services.jd_matcher import match_resume_with_jd
from services.suggestion_engine import generate_suggestions

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    extracted_text = extract_text(file_path)

    # Parse resume
    sections = parse_resume(extracted_text)

    # Debug
    print("\n==============================")
    print("PARSED RESUME SECTIONS")
    print("==============================")

    for key, value in sections.items():
        print(f"\n----- {key.upper()} -----")
        print(value[:300] if value else "EMPTY")

    print("\n==============================\n")

    # ATS Analysis
    analysis = analyze_resume(sections)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "resume_text": extracted_text,
        "analysis": analysis,
    }


@router.post("/match-jd")
async def match_job_description(data: dict = Body(...)):

    resume_text = data.get("resume_text", "")
    jd_text = data.get("job_description", "")

    result = match_resume_with_jd(
        resume_text,
        jd_text
    )

    result["suggestions"] = generate_suggestions(result)

    return result
@router.post("/interview-questions")
async def interview_questions(data: dict = Body(...)):

    resume_text = data.get("resume_text", "")
    jd_text = data.get("job_description", "")

    result = match_resume_with_jd(
        resume_text,
        jd_text
    )

    questions = generate_questions(result)

    return {
        "questions": questions
    }
@router.post("/download-report")
async def download_report(data: dict = Body(...)):

    filename = data.get("filename", "resume")

    analysis = data.get("analysis")

    jd_result = data.get("jd_result")

    interview_questions = data.get("interview_questions")

    pdf_path = create_report(
        filename,
        analysis,
        jd_result,
        interview_questions,
    )

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="DevTrack_AI_Report.pdf",
    )