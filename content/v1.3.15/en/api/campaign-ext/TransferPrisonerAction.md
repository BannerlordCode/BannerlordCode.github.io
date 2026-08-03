---
title: "TransferPrisonerAction"
description: "Moves a hero or ordinary prisoner between PartyBase prison rosters, including the Main Hero captivity branch and its lifecycle risks."
---
# TransferPrisonerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TransferPrisonerAction`  
**Base:** None (static class)  
**Source:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TransferPrisonerAction.cs`

## One-line responsibility

Moves one `CharacterObject` from one `PartyBase` prisoner owner to another; the Main Hero is not placed in an ordinary prison roster and instead updates `PlayerCaptivity.CaptorParty`.

## Mental model

This is a low-level Campaign state-transfer Action, not a sale, ransom, release, or capture workflow. The caller has already decided who should hold the prisoner. `Apply` only performs that ownership change: for ordinary prisoners it subtracts one from `prisonerOwnerParty.PrisonRoster`, then calls `newParty.AddPrisoner(prisonerTroop, 1)`; heroes use the same roster path.

The only branch is `prisonerTroop.HeroObject == Hero.MainHero`. When the Main Hero is captured, the source does not touch either `PrisonRoster`; it only sets `PlayerCaptivity.CaptorParty = newParty`. The caller therefore owns the lifecycle contract: the source roster must really contain the character, the target Party must still be valid, and the call must happen after campaign objects exist and while it is safe to mutate them.

## When to use and when not to

Use this Action when an established campaign workflow has already decided that a prisoner changes hands: a hero prisoner entering a settlement with a patrol, a disbanded party donating prisoners to a related settlement, a deserter party merging, or an enemy prisoner transferred through barter. Pass real `PartyBase` paths such as `MobileParty.Party` or `Settlement.Party`; do not construct a Party from a string or temporary placeholder.

Do not use it as a substitute for:

- [`SellPrisonersAction`](../SellPrisonersAction/) when ransom, gold, skill experience, and sale events are required;
- [`EndCaptivityAction`](../EndCaptivityAction/) when a hero must be released for a specific reason;
- [`TakePrisonerAction`](../TakePrisonerAction/) when the operation is the initial capture;
- [`DestroyPartyAction`](../DestroyPartyAction/) or [`DisbandPartyAction`](../DisbandPartyAction/) when the operation is party destruction or disbanding.

It does not check war status, roster quantity, null arguments, map-event state, or party activity. It also does not broadcast sale or donation events. The caller must enforce those parts of the higher-level contract.

## Public entry point and actual side effects

### `Apply`

```csharp
public static void Apply(CharacterObject prisonerTroop, PartyBase prisonerOwnerParty, PartyBase newParty)
```

The source performs these steps:

1. If `prisonerTroop.HeroObject == Hero.MainHero`, set `PlayerCaptivity.CaptorParty` and return immediately; no source-roster subtraction and no `AddPrisoner` call occur.
2. Otherwise call `prisonerOwnerParty.PrisonRoster.AddToCounts(prisonerTroop, -1)`.
3. Then call `newParty.AddPrisoner(prisonerTroop, 1)` to add one character to the target prison roster.

There is no count parameter, so each call moves exactly one character. If more than one copy must move, take a stable roster snapshot and repeat for the intended count. Do not freely mutate the same roster while iterating its `GetTroopRoster()` result.

## Dependencies and downstream effects

| Direction | Type / system | Relationship |
|---|---|---|
| Upstream | [`PartyBase`](../../campaign/PartyBase/) | Supplies source and target `PrisonRoster`, `MapFaction`, and the `MobileParty.Party` / `Settlement.Party` access paths. |
| Upstream | [`Hero`](../../campaign/Hero/) / `CharacterObject` | `HeroObject` selects the Main Hero branch; ordinary heroes are still transferred as `CharacterObject` values. |
| Special state | `PlayerCaptivity.CaptorParty` | Stores the current captor for Main Hero captivity; this is not an ordinary `PrisonRoster` member. |
| Caller | [`SellPrisonersAction`](../SellPrisonersAction/) | Uses this Action for a hero sale when the buyer remains at war with the hero's faction; sale money, models, and events belong to the higher-level action. |
| Caller | [`TransferPrisonerBarterable`](../TransferPrisonerBarterable/) | Calls it after a barter succeeds and only when the target faction is at war with the prisoner's faction. |
| Callers | `PatrolPartiesCampaignBehavior`, `DisbandPartyCampaignBehavior`, `DesertersCampaignBehavior` | Send hero prisoners to a settlement, a related settlement, or a merged party; each behavior then continues its own roster and event handling. |
| Related action | [`EndCaptivityAction`](../EndCaptivityAction/) | Releases or redeems a hero; this is not implicit in the transfer. |

The Action itself emits no events and performs no ransom calculation or save transaction. When UI, relation, influence, or ransom systems must observe a sale or donation, call the higher-level Action or behavior that owns that event chain; this entry point alone does not create those notifications.

## Real call paths

### Patrol party entering its home settlement

`PatrolPartiesCampaignBehavior.SettlementEntered` walks the patrol's `party.PrisonRoster.GetTroopRoster()` and moves each hero prisoner to the settlement:

```csharp
private void SettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    if (party == null || !party.IsPatrolParty || settlement != party.HomeSettlement)
        return;

    foreach (TroopRosterElement item in party.PrisonRoster.GetTroopRoster())
    {
        if (item.Character.HeroObject != null)
            TransferPrisonerAction.Apply(item.Character, party.Party, settlement.Party);
    }

    if (party.PrisonRoster.Count > 0)
        SellPrisonersAction.ApplyForAllPrisoners(party.Party, settlement.Party);
}
```

`party.Party` and `settlement.Party` are real `PartyBase` acquisition paths. After hero transfers, the behavior sends remaining ordinary prisoners through the sale workflow; do not collapse these responsibilities into a raw roster edit.

### Transfer after barter

`TransferPrisonerBarterable.Apply` uses its saved `base.OriginalParty` and `_otherParty`, and calls the Action only if the target is at war with the prisoner's faction:

```csharp
public override void Apply()
{
    if (_otherParty != null &&
        _otherParty.MapFaction.IsAtWarWith(_prisonerCharacter.MapFaction))
    {
        TransferPrisonerAction.Apply(
            _prisonerCharacter.CharacterObject,
            base.OriginalParty,
            _otherParty);
    }
}
```

This shows that war validation belongs to the caller, not to `TransferPrisonerAction.Apply`. When the `TransferPrisonerBarterable` precondition fails, its source emits a failed assertion; do not bypass that contract by transferring the prisoner to a friendly party.

### Transfer during party disbanding

`DisbandPartyCampaignBehavior` transfers only hero prisoners still at war with the related settlement to `relatedSettlement.Party`. A hero that fails that war check goes through `EndCaptivityAction.ApplyByEscape`, not this Action:

```csharp
foreach (TroopRosterElement item in disbandParty.PrisonRoster.GetTroopRoster())
{
    if (item.Character.HeroObject == null)
        continue;

    if (item.Character.HeroObject.MapFaction.IsAtWarWith(relatedSettlement.MapFaction))
    {
        TransferPrisonerAction.Apply(item.Character, disbandParty.Party, relatedSettlement.Party);
        troopRoster.Add(item);
    }
    else
    {
        EndCaptivityAction.ApplyByEscape(item.Character.HeroObject);
    }
}
```

After the transfers, the behavior reports the donated heroes through `OnPrisonerDonatedToSettlement`, then sends remaining ordinary prisoners through `SellPrisonersAction.ApplyForAllPrisoners`; a bare call does not create those downstream events.

### Deserter-party merge

`DesertersCampaignBehavior.MergeParties` moves each hero prisoner from `nearbyParty.Party` to the receiving `party.Party`, then merges ordinary prisoners, items, and gold before destroying the source party:

```csharp
foreach (TroopRosterElement item in nearbyParty.PrisonRoster.GetTroopRoster())
{
    if (item.Character.HeroObject != null)
        TransferPrisonerAction.Apply(item.Character, nearbyParty.Party, party.Party);
}

if (party.PrisonRoster.Count > 0)
    party.PrisonRoster.Add(nearbyParty.PrisonRoster);

DestroyPartyAction.Apply(null, nearbyParty);
```

The order matters: the source Party must not be destroyed before its hero prisoners, ordinary prisoners, and other inventories have been processed.

## Risks, saves, and lifecycle

- The source validates neither `prisonerOwnerParty`, `newParty`, nor `prisonerTroop`, and does not verify that the source roster contains the character. A wrong source can create negative counts, null failures, or a mismatch between hero state and actual prison ownership.
- `Apply` does not check whether the target party is in a map event, disbanding, destruction, or save synchronization. Do not re-enter it while iterating the same roster or during `SyncData`; take a snapshot and transfer during a stable campaign callback.
- The Main Hero branch only writes `PlayerCaptivity.CaptorParty`. Do not then subtract `Hero.MainHero.CharacterObject` from a normal `PrisonRoster`, and do not destroy `newParty` without first ending Main Hero captivity. Otherwise later captivity ticks, map movement, or loading can retain an invalid captor.
- A normal hero roster change does not release the hero, calculate ransom, record donation relations, or complete other hero lifecycle work. Use [`EndCaptivityAction`](../EndCaptivityAction/) for release, or [`SellPrisonersAction`](../SellPrisonersAction/) for sale.
- This Action does not persist a pending transfer or replay one during loading. Do not save old `PartyBase` references or a pending `CharacterObject` list and invoke them blindly after loading; persist stable IDs and intent, then resolve live parties and characters again.
- After a successful call, both rosters have changed. Discard cached `TroopRosterElement`, count, and ownership decisions made before the call; subsequent behavior should read the new state.

## Version note

In v1.3.15 the public surface and core semantics are the single `Apply` entry point, the Main Hero `PlayerCaptivity.CaptorParty` branch, and source subtraction followed by target `AddPrisoner` for ordinary characters. The v1.4.5 authoritative source keeps the same order and branch; its call sites likewise leave precondition checks to sale, barter, patrol, disband, and party-merge workflows. The type remains in the `TaleWorlds.CampaignSystem` core assembly and is not a SandBox-only API.

## Navigation

- ↑ Parent: [Campaign extension API](../)
- ↔ Sibling: [SellPrisonersAction](../SellPrisonersAction/) · [EndCaptivityAction](../EndCaptivityAction/) · [TransferPrisonerBarterable](../TransferPrisonerBarterable/)
- ↓ Children: None; the Main Hero and ordinary-prisoner branches are both covered here
- Related: [PartyBase](../../campaign/PartyBase/) · [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/) · [Settlement](../../campaign/Settlement/) · [TakePrisonerAction](../TakePrisonerAction/)
