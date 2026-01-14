from fastapi import APIRouter
from app.models.schemas import HealthResponse
from datetime import datetime
from app.config import get_settings

router = APIRouter()
settings = get_settings()


@router.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""

    return HealthResponse(
        status="ok",
        timestamp=datetime.now().isoformat(),
        version=settings.VERSION,
    )
