---
title: "ChangeOwnerOfSettlementAction"
description: "Transfers a settlement through a reason-specific Campaign action, reconciling garrison, governor, bound-village, siege, and owner-change event state."
---
# ChangeOwnerOfSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeOwnerOfSettlementAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

## One-line responsibility

Commits a settlement's new Hero owner through the correct cause-specific route and synchronizes the settlement's fortification, garrison, governor, bound villages, map events, and owner-change notification.

## Mental model

This is the Campaign **world-ownership transition**, not a setter for `Settlement.OwnerClan`. Each public `ApplyBy*` entry carries a `ChangeOwnerOfSettlementDetail` value so downstream behaviors can distinguish a siege, barter, rebellion, gift, decision, departure, or clan-destruction transfer.

The private transition first records the old owner, clears the town's unassigned flag, and changes the `Town.OwnerClan` for fortifications. A siege transfer can destroy the existing garrison using the capturer's party; a missing garrison is created, and any governor is removed. Settlement and bound-village visuals are dirtied, villager parties targeting the bound villages may be put on hold, and active siege/map-event parties are reconciled. Only then does the dispatcher publish `OnSettlementOwnerChanged` with `openToClaim`, new owner, old owner, capturer, and detail.

Use the entry that matches the already accepted owner-change cause. `ApplyBySiege` also records `Town.LastCapturedBy`; `ApplyByRebellion` supplies the new owner as capturer; `ApplyByGift` and `ApplyByBarter` carry different event details even though both are non-siege transfers. Do not call this Action to decide who won a siege, whether a barter was accepted, or whether a clan has actually been destroyed.

## Dependency graph

```text
Kingdom / barter / rebellion / siege owner flow
  -> ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, capturerHero, settlement)
      -> Town.OwnerClan and owner flags
      -> garrison / governor / bound-village visual and AI cleanup
      -> active MapEvent and hostile siege-party reconciliation
      -> CampaignEventDispatcher.OnSettlementOwnerChanged
          -> CampaignEvents.OnSettlementOwnerChangedEvent
```

**Upstream:** [KingdomManager](../../campaign/KingdomManager), [ChangeKingdomAction](../ChangeKingdomAction), siege resolution, barter, rebellion, and clan-destruction flows supply a live [Settlement](../../campaign/Settlement) and new [Hero](../../campaign/Hero).  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents), [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher), [Town](../../campaign/Town), [Village](../../campaign/Village), [Clan](../../campaign/Clan), garrison, siege, issue, and UI behaviors consume the post-change state.  
**Related Actions:** [DestroyPartyAction](../DestroyPartyAction), [ChangeGovernorAction](../ChangeGovernorAction), [StartBattleAction](../StartBattleAction), and [ChangeKingdomAction](../ChangeKingdomAction).

## Detail values and public entry points

### `ChangeOwnerOfSettlementDetail`

```csharp
public enum ChangeOwnerOfSettlementDetail
{
    Default, BySiege, ByBarter, ByLeaveFaction,
    ByKingDecision, ByGift, ByRebellion, ByClanDestruction
}
```

The value is behavioral data. Listeners such as siege aftermath, garrison, issues, and diplomacy code use it to decide whether “open to claim” or siege-specific reactions apply.

### `ApplyBy*` routes

| Entry point | Meaning and source-backed side effects |
| --- | --- |
| `ApplyByDefault(Hero, Settlement)` | Generic transfer; uses `Default` and no capturer. The shipped cheat commands use this route; it is not a normal siege or decision result. |
| `ApplyByKingDecision(Hero, Settlement)` | Kingdom decision result; also explicitly clears the town's unassigned flag after the common path. |
| `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement)` | Siege capture; records `LastCapturedBy`, can destroy the old garrison, and marks a fortification as open to claim. `capturerHero` must own a live party. |
| `ApplyByLeaveFaction(Hero, Settlement)` | Faction departure; fortifications are open to claim and listeners see `ByLeaveFaction`. |
| `ApplyByBarter(Hero, Settlement)` | Accepted fief barter; listeners see `ByBarter`. |
| `ApplyByRebellion(Hero, Settlement)` | Rebellion transfer; the same Hero is passed as new owner and capturer, with `ByRebellion`. |
| `ApplyByDestroyClan(Settlement, Hero)` | Clan-destruction redistribution; the settlement is marked `ByClanDestruction`. |
| `ApplyByGift(Settlement, Hero)` | Gift/transfer path; the argument order is settlement first, then new owner. |

All entries are immediate `void` operations without preview, transaction, or rollback.

## State and event order

For a fortification, the common path performs these coupled operations before the event:

1. Read `settlement.OwnerClan?.Leader` as `oldOwner` and clear `Town.IsOwnerUnassigned`.
2. Set `Town.OwnerClan` to `newOwner.Clan`.
3. On a siege, destroy the existing garrison through [DestroyPartyAction](../DestroyPartyAction); create a garrison if none remains, and remove the governor.
4. Mark the settlement and bound-village parties dirty; stop eligible villager parties that were targeting a bound village.
5. Compute `openToClaim` for siege, clan destruction, or faction departure fortification transfers.
6. Finish a conflicting unfinished map event when the new faction is not hostile, stop incompatible defender/raider AI, and update the map event.
7. Dispatch `CampaignEvents.OnSettlementOwnerChangedEvent` with the old/new owner and `detail`; `ApplyByKingDecision` then repeats the unassigned-flag write after this dispatch.

The common path reads `newOwner.Clan` for a fortification and the siege wrapper reads `capturerHero.Clan`; these are caller contracts, not optional metadata. Village calls can still dispatch the owner-change event even though the common path does not assign a village owner.

## Real current-Campaign examples

### Apply an already accepted gift transfer

The stock clan and kingdom flows call `ApplyByGift` after their higher-level transfer decision. A mod-owned transfer should use a live current settlement and Hero, and should not present this snippet as a barter or siege resolver:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public static void GrantCurrentSettlementAsGift()
{
    if (Campaign.Current == null)
        return;

    Settlement settlement = Settlement.CurrentSettlement;
    Hero newOwner = Hero.MainHero;
    if (settlement == null || newOwner == null || !settlement.IsFortification ||
        settlement.OwnerClan == newOwner.Clan)
        return;

    ChangeOwnerOfSettlementAction.ApplyByGift(settlement, newOwner);
}
```

Use this only after the mod has completed its own permission, cost, and ownership decision. For a siege result, call `ApplyBySiege(newOwner, capturerHero, settlement)` instead so the detail and capture bookkeeping are correct.

### Observe the post-change owner and cause

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

private void RegisterEvents()
{
    CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
        this, OnSettlementOwnerChanged);
}

private void OnSettlementOwnerChanged(
    Settlement settlement,
    bool openToClaim,
    Hero newOwner,
    Hero oldOwner,
    Hero capturerHero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
{
    RecordOwnerChange(settlement.StringId, newOwner?.StringId, detail, openToClaim);
}
```

The callback receives the post-mutation owner and the cause used by the Action. A listener should not write `Town.OwnerClan` again.

## Risks and save boundaries

- **Reason values affect behavior.** Replacing a siege or rebellion route with `ApplyByDefault` may transfer ownership but suppress the semantic detail that siege aftermath, quests, and UI use.
- **Caller arguments must be live and coherent.** Fortification paths read `newOwner.Clan`; siege paths read `capturerHero.Clan` and may dereference `capturerHero.PartyBelongedTo.Party` while destroying the garrison. Passing a Hero with no party to `ApplyBySiege` can fail during cleanup.
- **Do not use direct field writes.** Assigning `Town.OwnerClan` skips garrison creation/destruction, governor removal, bound-village visuals, map-event diplomacy, AI holds, and the owner-change event, leaving a state that may only break after a save/load.
- **The event is after broad cleanup.** A listener can observe parties already stopped, a garrison recreated, or a map event diplomatically finished. Copy IDs and re-query live objects rather than continuing an old siege reference.
- **Null new owners are not a generic “unassigned” route.** Some internal branches tolerate `newOwner == null` for later checks, but a fortification still accesses `newOwner.Clan`. Use the dedicated owner-removal/destruction flow when no owner is valid.
- **Save boundary:** do not serialize a transient `Settlement` or `Hero` reference from the callback. Persist stable IDs and the mod's accepted cause, then reacquire current Campaign objects after load.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [ChangeKingdomAction](../ChangeKingdomAction) · [ChangeRelationAction](../ChangeRelationAction) · [StartBattleAction](../StartBattleAction)
- **Related entities:** [Settlement](../../campaign/Settlement) · [Town](../../campaign/Town) · [Village](../../campaign/Village) · [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan)
- **Events and cleanup:** [CampaignEvents](../../campaign/CampaignEvents) · [DestroyPartyAction](../DestroyPartyAction) · [ChangeGovernorAction](../ChangeGovernorAction) · [KingdomManager](../../campaign/KingdomManager)
