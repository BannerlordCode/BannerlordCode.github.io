---
title: "BribeGuardsAction"
description: "Pays a settlement's guards to let you through: the gold leaves the player's purse unconditionally, but the chance of the skill notification scales with the amount and BribePaid still climbs even when nothing happens."
---

# BribeGuardsAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BribeGuardsAction`
**Base:** none (static class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BribeGuardsAction.cs`

## Overview

This is the whole of the bribing-a-gate mechanic, and it is genuinely small: ten lines of `ApplyInternal` behind one public method. For any positive `gold` amount it rolls once against `MBRandom.RandomFloat`, fires the skill-leveling hook with probability `gold / 1000f`, unconditionally moves the gold out of the player's purse, and unconditionally adds it to `settlement.BribePaid`. That last asymmetry — the notification is a dice roll, the money is not — is the single thing most worth understanding about this type, because it means "I did not get the persuasion skill point" and "I was not charged" are entirely independent outcomes.

## Mental Model

The order of operations is:

```
if (gold > 0)
{
    if (MBRandom.RandomFloat < gold / 1000f) SkillLevelingManager.OnBribeGiven(gold);
    GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, gold);
    settlement.BribePaid += gold;
}
```

Three rules fall out of it. **The `gold > 0` guard is on everything.** A zero or negative amount short-circuits the entire body — no roll, no payment, no `BribePaid` change. So `Apply(settlement, 0)` is a genuine no-op and cannot be used to "trigger" the mechanic. **The roll happens before the payment** and drives only the skill notification. `OnBribeGiven` is the hook that lets the game's progression model award the persuasion/leadership point; at `gold = 1000` the threshold is `1.0f`, which `RandomFloat` can never reach, so the roll is a formality. **The gold always leaves.** `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, gold)` sends to `null` — meaning the money goes to nobody in particular, i.e. it is burned rather than transferred to a named hero — and it runs outside the roll, so a failed roll still costs you.

`BribePaid` is a settlement-level running total of everything ever paid here. It is read by the settlement's permission/gate logic to decide whether the party is on the gate's good side; since it is incremented unconditionally, repeated small bribes accumulate toward that threshold exactly the same as one large one. Note that this action does **not** itself grant entry — it only moves the money and records it. Whatever reads `BribePaid` to unlock the gate is outside this class.

There is no confirmation, no target-gate parameter, and no failure branch. Whoever is driving the interaction — an encounter, a menu option, your own conversation condition — owns the "can the player afford this and do they want to" question, and must check `Hero.MainHero.Gold` before calling.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Apply` | `public static void Apply(Settlement settlement, int gold)` | The single public entry point. Charges the main hero `gold`, adds the same amount to `settlement.BribePaid`, and rolls `gold / 1000f` against `MBRandom.RandomFloat` to decide whether `SkillLevelingManager.OnBribeGiven(gold)` fires for the skill model. Call it only after you have already validated affordability and player intent — it has no guard for either, and it never signals success or failure back to you. |

`ApplyInternal(settlement, gold)` is private and holds the entire `gold > 0` guarded body described above.

## Real Example

Charge for entry only when the player can actually pay, and confirm the settlement's running total moved:

```csharp
int price = 250;
if (Hero.MainHero.Gold >= price)
{
    int paidBefore = settlement.BribePaid;
    BribeGuardsAction.Apply(settlement, price);
    Debug.Print("bribe total " + paidBefore + " -> " + settlement.BribePaid, 0);
    Debug.Print("remaining gold = " + Hero.MainHero.Gold, 0);
}
```

A zero amount is a genuine no-op — no roll, no charge, no `BribePaid` change:

```csharp
BribeGuardsAction.Apply(settlement, 0);
Debug.Print("unchanged total = " + settlement.BribePaid, 0);
```

Read `BribePaid` afterwards to decide whether the gate should now let the party in, because that decision is *not* part of this action:

```csharp
if (settlement.BribePaid >= 500)
{
    Debug.Print("gate should now allow entry", 0);
}
```

## Risks and Boundaries

- **No affordability check.** The action does not verify `Hero.MainHero.Gold`. Calling it with more gold than the player has runs `GiveGoldAction` with a deficit; do the check yourself.
- **The skill roll is a dice roll, the payment is not.** `OnBribeGiven` fires with probability `gold / 1000f` and the gold is taken either way. "No skill point" never means "no charge".
- **Zero or negative amounts do nothing at all.** The `gold > 0` guard wraps the whole body, so there is no event, no roll, and no state change.
- **The money is burned, not given to a hero.** The receiver argument is `null`, so nothing lands in another hero's treasury. Mods that expect a bribe to enrich a specific guard NPC will find the gold simply gone.
- **It does not open the gate.** `BribePaid` is only a counter; whatever consults it is outside this class.
- **`BribePaid` is cumulative and never resets here.** Repeated bribes stack permanently on the settlement.
- **Uses `MBRandom`.** The notification is non-deterministic by design — never write tests or gameplay logic that assume a roll succeeded.

## Cross-version note

The v1.4.5 file is 26 lines and its entire behaviour is the one guarded block quoted above. There is no overload taking a gate or an `ItemObject`, no success callback, and no failure event; the skill notification is the only "did it work" signal the game exposes through this type.

## Dependencies

- Host object: [Settlement](../campaign/Settlement) owns the `BribePaid` counter that the gate logic reads.
- Money movement: [GiveGoldAction](GiveGoldAction) removes the gold from `Hero.MainHero`; passing `null` as the receiver burns it.
- Skill hook: `SkillLevelingManager.OnBribeGiven` is the only progression-side callback, invoked with the paid amount when the roll succeeds.
- Budget side: [Hero](../campaign/Hero) supplies the purse you must check before calling.
- Bucket index: [campaign-ext API section](../)
