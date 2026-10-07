---
title: "BreakInOutBesiegedSettlementAction"
description: "Resolves breaking into or out of a besieged settlement: it asks the TroopSacrificeModel for a casualty count, removes that many troops one at a time, and reports them back through out parameters — plus a relation penalty for abandoning your army leader."
---

# BreakInOutBesiegedSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BreakInOutBesiegedSettlementAction`
**Base:** none (static class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BreakInOutBesiegedSettlementAction.cs`

## Overview

Besieged settlements are a deadlock the player has to break somehow, and this action is the mechanism. Whether you are assaulting the gates or slipping out at night, the game charges you a price in men: the `TroopSacrificeModel` decides how many troops die, the action removes exactly that many from the relevant roster, and hands the tally back to the caller through two `out` parameters so the dialogue or menu that triggered it can render the cost.

The two public entry points differ only in that boolean handed to the private `ApplyInternal`: `ApplyBreakIn` passes `breakIn: true`, `ApplyBreakOut` passes `false`. Everything else — the casualty count, the roster shuffling, the army relation penalties — is shared.

## Mental Model

Start from the two `out` parameters, because they are not symmetric and they carry the whole contract:

```
public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

`casualties` is always a fresh `TroopRoster.CreateDummyTroopRoster()` and always counts **only the main party's** losses. `armyCasualtiesCount` is initialised to `-1` as a sentinel meaning "not applicable", and only becomes a real number when the main party happens to be the army's leader. Read `-1` as "the army path did not run", not "zero dead".

The cost itself comes from the model, and the two directions have different signatures:

- `breakIn` → `GetLostTroopCountForBreakingInBesiegedSettlement(mainParty, siegeEvent)`. Note it takes **no** `isFromPort`.
- `breakOut` → `GetLostTroopCountForBreakingOutOfBesiegedSettlement(mainParty, siegeEvent, isFromPort).RoundedResultNumber`. The `isFromPort` flag reaches the model here and only here, and the model returns a non-int that is explicitly rounded.

Both come back as an `int` named `num` and both are consumed by a `for` loop that removes one troop per iteration.

**The solo/leader path.** If the main party is not in an army, or is in one but is not its leader, the removal loop is the simple one: pick `MBRandom.RandomInt(memberRoster.Count)`, get the character at that index, and — if that character is a hero-troop or the stack is empty — decrement `i` and retry rather than burning the iteration. Only non-hero troops with a non-zero count are removed. Casualties go into `casualties`. After the loop there is a second guard: if the party *is* in someone else's army, it applies `ChangeRelationAction.ApplyPlayerRelation` with `BreakOutArmyLeaderRelationPenalty` against the army leader and `BreakOutArmyMemberRelationPenalty` against every attached party leader that is not the main party, then **detaches by setting `MobileParty.MainParty.Army = null`** and returns. That penalty block runs for `breakIn` too — the flag only changed which casualty model was consulted.

**The army-leader path.** Only reached when `mainParty.Army != null && mainParty.Army.LeaderParty == mainParty`. Here `armyCasualtiesCount` is set to `0` and the losses are drawn proportionally across *all* parties in the army. It first totals `num2` as the sum of `TotalManCount - TotalHeroes` over `army.Parties`, so heroes are excluded from the pool entirely. Then, per casualty, it picks a random float in `[0, num2)`, walks the parties subtracting their non-hero counts until the remainder goes negative (which selects a party with probability proportional to its non-hero strength), and within that party walks the roster entries subtracting `GetElementNumber(k) + GetElementWoundedNumber(k)` until the remainder goes negative — which is why **wounded troops count toward the pool but the removal itself decrements the healthy count**. Losses on the main party go to `casualties`; losses on any other party increment `armyCasualtiesCount`. No relation penalty is applied on this path, because the leader *is* the player.

The `TroopRoster` out-parameter must be disposed or reused by the caller — it is a dummy roster allocated per call, and it is not owned by the campaign.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `ApplyBreakIn` | `public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)` | Charges the price of storming into the settlement. Uses `GetLostTroopCountForBreakingInBesiegedSettlement`, which takes no port flag, then removes troops by the same two-path logic. Note that the army-abandonment relation penalty still applies on this path when the main party is attached to someone else's army. |
| `ApplyBreakOut` | `public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)` | Charges the price of slipping out of the siege. Uses `GetLostTroopCountForBreakingOutOfBesiegedSettlement(..., isFromPort).RoundedResultNumber`, so this is the only place the `isFromPort` argument reaches the model — it distinguishes coming out by the docks from coming out over the walls. |

`ApplyInternal(breakIn, out casualties, out armyCasualtiesCount, isFromPort)` is private and holds the entire cost/removal/penalty cascade described above.

## Real Example

Price an escape and inspect both out-parameters, remembering that `-1` is a sentinel:

```csharp
TroopRoster dead;
int armyDead;

BreakInOutBesiegedSettlementAction.ApplyBreakOut(out dead, out armyDead, false);

Debug.Print("main party losses = " + dead.TotalManCount, 0);
if (armyDead >= 0)
{
    Debug.Print("army losses = " + armyDead, 0);
}
else
{
    Debug.Print("main party was not leading an army", 0);
}
```

Quote the cost to the player *before* committing, by reading the same model the action will use:

```csharp
SiegeEvent siege = Settlement.CurrentSettlement.SiegeEvent;

int costOut = Campaign.Current.Models.TroopSacrificeModel
    .GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty.MainParty, siege, true)
    .RoundedResultNumber;

Debug.Print("escaping by port costs about " + costOut + " men", 0);
Debug.Print("party strength = " + MobileParty.MainParty.MemberRoster.TotalManCount, 0);
```

Make the break-in path and read the roster afterwards to see which troop types actually died:

```csharp
TroopRoster casualties;
int armyCasualtiesCount;

BreakInOutBesiegedSettlementAction.ApplyBreakIn(out casualties, out armyCasualtiesCount, false);

for (int i = 0; i < casualties.Count; i++)
{
    CharacterObject trooper = casualties.GetCharacterAtIndex(i);
    Debug.Print("lost " + casualties.GetElementNumber(i) + "x " + trooper.Tier, 0);
}
```

## Risks and Boundaries

- **`armyCasualtiesCount == -1` means "not computed".** It is only assigned a real value on the army-leader path. Reading it as "zero dead" produces a wrong casualty dialog.
- **`casualties` counts the main party only.** On the army-leader path, losses to other parties are folded into the integer count and never appear in the roster.
- **The casualty count is decided by the model, not by this action.** `TroopSacrificeModel` is the moddable seam; the action just executes whatever number comes back.
- **Two different model signatures for the two directions.** `GetLostTroopCountForBreakingInBesiegedSettlement` has no `isFromPort`; only the break-out variant takes it. Passing the flag to the wrong one will not compile, which is the only guard you get.
- **Wounded troops widen the pool but only healthy counts are decremented.** The army path subtracts `GetElementNumber + GetElementWoundedNumber` while selecting but calls `AddToCountsAtIndex(-1)` when removing, so the selection is not a strict conservation law.
- **Abandoning an army costs relations with everyone.** Leaving someone else's army applies both `BreakOutArmyLeaderRelationPenalty` and `BreakOutArmyMemberRelationPenalty` — and this fires on `ApplyBreakIn` too, not just `ApplyBreakOut`.
- **The party is detached from the army as a side effect.** `MobileParty.MainParty.Army = null` is set directly inside this action. There is no "leave the army but stay" option.
- **`Settlement.CurrentSettlement` must be the besieged settlement.** Both entries read `Settlement.CurrentSettlement.SiegeEvent` without a null check, so calling them anywhere else is unsafe.
- **The returned `TroopRoster` is a fresh dummy roster.** It is allocated per call, holds references the caller owns, and is never inserted into the campaign.
- **Non-deterministic.** Both removal loops use `MBRandom`, so the exact composition of the losses differs between runs with identical inputs.

## Cross-version note

The v1.4.5 file is 109 lines and exposes exactly the two public static entry points. The `breakIn` / `breakOut` boolean split, the `-1` sentinel, and the two distinct casualty-model signatures are all present in this version; there is no third entry point such as a "surrender instead" variant.

## Dependencies

- Trigger context: [Settlement](../../campaign/Settlement) supplies `CurrentSettlement` and its `SiegeEvent`, both read without a null guard.
- Cost policy: [TroopSacrificeModel](../../campaign/TroopSacrificeModel) returns the casualty count for each direction and is the only moddable input.
- Troop bookkeeping: [TroopRoster](../../campaign/TroopRoster) is both the input roster and the `out` dummy roster that receives the tally.
- Army context: [Army](../../campaign/Army) supplies `LeaderParty`, `Parties`, and the membership test that selects between the two removal paths.
- Relation side effect: [ChangeRelationAction](../ChangeRelationAction) applies the army-leader and army-member abandonment penalties.
- Bucket index: [campaign-ext API section](../)
