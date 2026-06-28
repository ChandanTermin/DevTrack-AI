import os
import shutil

from fastapi import APIRouter, File, UploadFile

from services.pdf_parser import extract_text
from services.resume_parser import parse_resume
from services.ats_engine import analyze_resume

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

    # Parse resume into sections
    sections = parse_resume(extracted_text)

    # ---------- DEBUG ----------
    print("\n==============================")
    print("PARSED RESUME SECTIONS")
    print("==============================")

    for key, value in sections.items():
        print(f"\n----- {key.upper()} -----")
        print(value[:300] if value else "EMPTY")

    print("\n==============================\n")
    # ---------------------------

    # ATS Analysis
    analysis = analyze_resume(sections)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "analysis": analysis
    }