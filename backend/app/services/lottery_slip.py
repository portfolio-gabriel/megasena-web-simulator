from ..core.lottery_features import LotteryFeatures


class LotterySlip:
    def __init__(self, bet: dict[int, list[int]]) -> None:
        for bet_numbers in bet.values():
            if not _is_bet_valid(bet_numbers):
                raise ValueError(
                    f"Invalid bet. Please provide valid unique numbers \
                        between 0{min(LotteryFeatures.DRAW_RANGE)} and {max(LotteryFeatures.DRAW_RANGE)}."
                )
        self.bet = sorted(bet)


def _is_bet_valid(bet: list[int]) -> bool:
    numbers_to_draw: int = min(LotteryFeatures.DRAW_RANGE)
    set_non_duplicate_numbers: set[int] = set(bet)

    if len(set_non_duplicate_numbers) < numbers_to_draw:
        return False

    return all(
        min(LotteryFeatures.DRAW_RANGE) <= number <= max(LotteryFeatures.DRAW_RANGE)
        for number in bet
    )
