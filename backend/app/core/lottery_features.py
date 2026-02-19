from dataclasses import dataclass


@dataclass(frozen=True)
class LotteryFeatures:
    DRAW_RANGE: list[int] = list(range(1, 61))
    RANGE_AMOUNT_OF_NUMBERS_PER_BET: list[int] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    RANGE_AMOUNT_OF_SURPRISE_BETS: list[int] = [0, 1, 2, 3, 4, 5, 6, 7]
    RANGE_AMOUNT_OF_BET_REPETITIONS: list[int] = [0, 2, 4, 8]
    RANGE_AMOUNT_MANUAL_BETS: list[int] = [1, 2, 3]
