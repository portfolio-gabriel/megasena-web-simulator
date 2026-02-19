from random import sample

from ..core.lottery_features import LotteryFeatures


def draw() -> list[int]:
    lottery_draw: list[int] = sorted(
        sample(LotteryFeatures.DRAW_RANGE, min(LotteryFeatures.DRAW_RANGE))
    )
    lottery_draw = _check_for_duplicates(lottery_draw)
    return lottery_draw


def _check_for_duplicates(lottery_draw: list[int]) -> list[int]:
    unique_numbers: list[int] = list(set(lottery_draw))

    if len(unique_numbers) < len(lottery_draw):
        return draw()

    return lottery_draw
