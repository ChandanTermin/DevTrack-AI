from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

from ai import ask_ai

router = APIRouter()


class AIRequest(BaseModel):
    message: str
    resume_text: Optional[str] = ""
    analysis: Optional[dict] = None
    jd_result: Optional[dict] = None


@router.post("/ai-chat")
def ai_chat(request: AIRequest):
    try:
        response = ask_ai(
            request.message,
            request.resume_text,
            request.analysis,
            request.jd_result,
        )

        return {
            "response": response
        }

    except Exception as e:
        return {
            "error": str(e)
        }