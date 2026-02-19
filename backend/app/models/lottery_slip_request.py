from enum import StrEnum
from typing import Optional

from pydantic import BaseModel, Field

from backend.app.core.lottery_features import LotteryFeatures


class BetType(StrEnum):
    MANUAL = "Manual"
    SURPRESINHA = "Surpresinha"
    TEIMOSINHA = "Teimosinha"


class LotterySlipRequest(BaseModel):
    amount_of_chosen_numbers: int = Field(
        ...,
        ge=min(LotteryFeatures.RANGE_AMOUNT_OF_NUMBERS_PER_BET),
        le=max(LotteryFeatures.RANGE_AMOUNT_OF_NUMBERS_PER_BET),
        description="The amount of numbers to be chosen for each bet.",
    )

    bet_type: list[BetType] = Field(
        default_factory=list,
        description="The types of bets to be made \
        in the lottey slip.",
    )

    manual_bets: list[list[int]] = Field(
        default_factory=list,
        ge=min(LotteryFeatures.RANGE_AMOUNT_MANUAL_BETS),
        le=max(LotteryFeatures.RANGE_AMOUNT_MANUAL_BETS),
        description=f"List of manual bets, each bet has a list of numbers from \
            {min(LotteryFeatures.RANGE_AMOUNT_OF_NUMBERS_PER_BET)} to \
            {max(LotteryFeatures.RANGE_AMOUNT_OF_NUMBERS_PER_BET)}.",
    )

    surprise_bets: Optional[int] = Field(
        None,
        ge=min(LotteryFeatures.RANGE_AMOUNT_OF_SURPRISE_BETS),
        le=max(LotteryFeatures.RANGE_AMOUNT_OF_SURPRISE_BETS),
        description="The amount of surprise bets to be generated. Only required if the bet type includes 'Surpresinha'.",
    )

    repetion_bets: Optional[int] = Field(
        None,
        ge=min(LotteryFeatures.RANGE_AMOUNT_OF_BET_REPETITIONS),
        le=max(LotteryFeatures.RANGE_AMOUNT_OF_BET_REPETITIONS),
        description="The amount of bet repetitions to be generated. \
            Only required if the bet type includes 'Teimosinha'.",
    )
