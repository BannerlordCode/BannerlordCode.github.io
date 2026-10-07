---
title: "ChangeOwnerOfSettlementDetail"
description: "The reason enum threaded through every settlement ownership change — it decides whether the old garrison is destroyed, whether the settlement is left open to be claimed, and what reason listeners see in OnSettlementOwnerChanged."
---

# ChangeOwnerOfSettlementDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ChangeOwnerOfSettlementDetail`
**Base:** `System.Enum` (nested inside `ChangeOwnerOfSettlementAction`)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

## Overview

This enum is the "why" argument carried through every settlement ownership change. It is declared **nested inside** `ChangeOwnerOfSettlementAction` — the containing class at line 9 of that file — so its real name at a call site is `ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`, and the containing class always chooses the value for you: there is no public API anywhere that accepts one. The reason it matters is that the value is not cosmetic. In the containing action's `ApplyInternal`, exactly three behaviours are keyed off it: whether the old garrison is **destroyed** (only `BySiege`), whether the settlement ends up **open to be claimed** (`BySiege`, `ByClanDestruction`, `ByLeaveFaction`, and only for fortifications), and what value reaches `CampaignEventDispatcher.Instance.OnSettlementOwnerChanged` so listeners can tell a conquest from a wedding gift.

The mapping from value to entry point is one-to-one across eight `ApplyByXxx` methods: `Default`, `BySiege`, `ByBarter`, `ByLeaveFaction`, `ByKingDecision`, `ByGift`, `ByRebellion`, `ByClanDestruction`.

## Mental Model

Read it as a tag consumed by three separate subsystems, not as a description for the player's benefit.

- **`Default`** — the unlabelled path (`ApplyByDefault`). It is the *only* value that is neither a capture nor a claim-window, so a change made through it produces no garrison destruction and `openToClaim == false`.
- **`BySiege`** — the heavy one, and the **only** value that destroys the old garrison (`DestroyPartyAction.Apply` on the capturer's party against `settlement.Town.GarrisonParty`). It is one of only three that set `openToClaim`. `ApplyBySiege` also pre-writes `settlement.Town.LastCapturedBy = capturerHero.Clan` before the internal call, so the conqueror is remembered even though the enum carries no hero.
- **`ByBarter`, `ByKingDecision`, `ByGift`, `ByRebellion`** — the political paths. Behaviourally identical: no garrison destruction, `openToClaim == false`. They differ only in the tag listeners see, which is what drives the distinct journal line. `ApplyByRebellion` is the one entry point that passes the hero itself as `capturerHero` even though no capture occurred.
- **`ByLeaveFaction`** and **`ByClanDestruction`** — the abandonment paths. Both set `openToClaim` for fortifications on the theory that an ownerless fortification should be claimable. Neither destroys the garrison.

Two things to internalize. The values are **ordinal integers** passed straight through to the event; serializing them or comparing numerically depends on declaration order, which is an implementation detail. And because you cannot construct one from outside without naming the nested type, custom reasons are not a supported extension point — if your mod needs a distinguishable reason, raise your own event alongside `OnSettlementOwnerChanged` rather than smuggling a value into this one.

## Key Members

| Member | Value | What it is for |
| --- | --- | --- |
| `Default` | 0 | The neutral transfer used by `ApplyByDefault`. Skips the garrison destruction and leaves `openToClaim` false, so the settlement changes hands with no conquest semantics and no claim window. This is what to expect when a mod moved ownership through the action without wanting siege side effects. |
| `BySiege` | 1 | Set by `ApplyBySiege`, and the **only** value that destroys the existing `GarrisonParty` via `DestroyPartyAction.Apply`. Also one of three values marking a fortification `openToClaim`. `ApplyBySiege` additionally records `Town.LastCapturedBy` before the internal call, so the conqueror survives even though the enum carries no hero. |
| `ByBarter` | 2 | Marks a negotiated trade of the settlement. No garrison loss and no claim window — the difference from `Default` is purely the tag listeners see in `OnSettlementOwnerChanged`, which is what drives the distinct "traded away" journal entry. |
| `ByLeaveFaction` | 3 | Set when a clan leaves the kingdom and the settlement is released. Like `BySiege` and `ByClanDestruction` it marks a fortification `openToClaim`, on the grounds that a settlement with no faction owner should be up for grabs. Does not destroy the garrison. |
| `ByKingDecision` | 4 | Set by `ApplyByKingDecision`, which also clears `settlement.Town.IsOwnerUnassigned` a second time *after* the internal call — redundant, because the internal call already clears it for every town. No garrison loss, no claim window. |
| `ByGift` | 5 | Marks a settlement handed over as a gift, reachable only through `ApplyByGift`. Behaviourally identical to `ByBarter`; it exists so the journal and any listener can distinguish a gift from a trade. |
| `ByRebellion` | 6 | Set by `ApplyByRebellion`, the only public entry point that passes the hero as `capturerHero` even though no capture occurred. No garrison destruction and no claim window, despite the name. |
| `ByClanDestruction` | 7 | Set by `ApplyByDestroyClan` when a clan's holdings are redistributed after that clan is wiped out. Marks a fortification `openToClaim` so the vacated fort can be claimed, and does not destroy the garrison. |

## Real Example

Map each public entry point on the containing action to the reason it produces:

```csharp
using TaleWorlds.CampaignSystem.Actions;

ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail byGift =
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByGift;
ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail bySiege =
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege;

Debug.Print("gift ordinal = " + (int)byGift, 0);
Debug.Print("siege ordinal = " + (int)bySiege, 0);
```

Trigger each path from your own code and read back the settlement state the reason governs:

```csharp
ChangeOwnerOfSettlementAction.ApplyBySiege(Hero.MainHero, Hero.MainHero, settlement);
Debug.Print("captured by = " + settlement.Town.LastCapturedBy.Name, 0);
Debug.Print("garrison = " + settlement.Town.GarrisonParty, 0);

ChangeOwnerOfSettlementAction.ApplyByGift(settlement, Hero.MainHero.Clan.Leader);
Debug.Print("owner now = " + settlement.OwnerClan.Name, 0);
```

Branch on the reason inside a listener, which is the only place the enum actually surfaces:

```csharp
CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
    this,
    (changedSettlement, openToClaim, newOwner, oldOwner, capturerHero, detail) =>
    {
        if (detail == ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege)
        {
            Debug.Print("conquered " + changedSettlement.Name + " by " + capturerHero.Name, 0);
        }
        else if (openToClaim)
        {
            Debug.Print(changedSettlement.Name + " is open to be claimed", 0);
        }
    });
```

## Risks and Boundaries

- **Nested type.** The compile-time name is `ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`; importing the namespace alone is not enough.
- **You cannot supply a custom value.** Every `ApplyByXxx` hard-codes its own reason, so "ownership changed for reason X" is not extensible. Raise your own event if you need a distinguishable reason.
- **Only `BySiege` destroys a garrison.** Every other path, including `ByRebellion`, leaves `settlement.Town.GarrisonParty` in place. A mod that assumed conquest semantics from the method name is wrong for five of the eight values.
- **`openToClaim` is fortifications-only.** The flag is computed as `(... || ...) && settlement.IsFortification`, so a castle or keep can be left claimable but a village or town never through this path.
- **Ordinal values are an implementation detail.** They reach the event as ints; never persist or compare them numerically.
- **The enum carries no payload.** `BySiege` does not hold the capturer — `ApplyBySiege` smuggles it in via `Town.LastCapturedBy` and via the separate `capturerHero` argument on the internal method. The enum says *why*, never *who*.
- **Not serializable on its own.** It is a transient tag; `Settlement` persists the owner, not the reason it changed.

## Cross-version note

In v1.4.5 the enum has exactly these eight values in this order, declared at `ChangeOwnerOfSettlementAction.cs:10-18`. `ApplyInternal` keys behaviour off only three of them; the remaining five are pure event tags.

## Dependencies

- Container: the enum is declared inside the static action class `ChangeOwnerOfSettlementAction` — its eight `ApplyByXxx` methods are the only way to produce a value, and that page documents the full ownership cascade.
- Host object: [Settlement](../../campaign/Settlement) holds the ownership pointer whose change this tag annotates, and exposes `AddGarrisonParty` for the replacement garrison.
- Sub-object: `Town` is the only settlement with a garrison and an `IsOwnerUnassigned` flag; `GarrisonParty` is declared on the `Fief` base, not on `Town`.
- Event consumer: [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) passes the value into `OnSettlementOwnerChanged`, where quest and journal logic branches on it.
- Bucket index: [campaign-ext API section](../)
