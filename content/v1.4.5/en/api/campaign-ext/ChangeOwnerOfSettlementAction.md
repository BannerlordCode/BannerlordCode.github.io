---
title: "ChangeOwnerOfSettlementAction"
description: "The reason-specific campaign action that transfers settlement ownership and synchronizes garrison, governor, bound villages, siege state, and ownership events."
---

# ChangeOwnerOfSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeOwnerOfSettlementAction`  
**Base:** None (static class)  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

## Overview

Uses a reason entry already accepted by a siege, rebellion, barter, gift, kingdom decision, or other owner flow to transfer a real Campaign settlement to a new Hero owner, and synchronizes the town/fort, garrison, governor, bound villages, map events, faction visual state, and ownership notification; it commits a complete world-state migration, not a direct setter write to `Settlement.OwnerClan`.

## Mental Model

This is the campaign-layer **world-ownership migration**, not the setter for `Settlement.OwnerClan`. Each `ApplyBy*` entry carries a `ChangeOwnerOfSettlementDetail` so downstream Behaviors can tell apart siege, barter, rebellion, gift, decision, leaving faction, and clan destruction.

The common migration first reads the old owner, clears the town's unassigned flag, and writes `Town.OwnerClan` on the fort. The siege transfer destroys the old garrison using the capturer party; when no garrison exists it creates a new one and removes the governor. Then the settlement and bound-village visual states are marked dirty, which may pause villager parties targeting bound villages, coordinates active sieges/map events, and finally raises `OnSettlementOwnerChanged` with `openToClaim`, old and new owners, capturer, and detail through the dispatcher.

Use the entry that matches the already-accepted upstream reason. `ApplyBySiege` also writes `Town.LastCapturedBy`; `ApplyByRebellion` uses the new owner as capturer as well; `ApplyByGift` and `ApplyByBarter` are not siege transfers but downstream sees different detail. Do not use this Action to decide who wins a siege, whether a barter is accepted, or whether a clan is truly destroyed.

## Dependencies

```text
Kingdom / barter / rebellion / siege owner
  -> ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, capturerHero, settlement)
      -> Town.OwnerClan and owner flags
      -> garrison / governor / bound-village visuals and AI cleanup
      -> active MapEvent and hostile siege party coordination
      -> CampaignEventDispatcher.OnSettlementOwnerChanged
          -> CampaignEvents.OnSettlementOwnerChangedEvent
```

**Upstream:** [KingdomManager](../../campaign/KingdomManager), [ChangeKingdomAction](../ChangeKingdomAction), siege resolution, barter, rebellion, and clan-destruction flows supply the real [Settlement](../../campaign/Settlement) and new [Hero](../../campaign/Hero).  
**Downstream:** [CampaignEvents](../../campaign/CampaignEvents), [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher), [Town](../../campaign/Town), [Village](../../campaign/Village), [Clan](../../campaign/Clan), garrison, siege, issue, and UI Behaviors consume the migrated state.  
**Related Actions:** [DestroyPartyAction](../DestroyPartyAction), [ChangeGovernorAction](../ChangeGovernorAction), [StartBattleAction](../StartBattleAction) and [ChangeKingdomAction](../ChangeKingdomAction).

## Detail & Public Entry Points

### `ChangeOwnerOfSettlementDetail`

```csharp
public enum ChangeOwnerOfSettlementDetail
{
    Default, BySiege, ByBarter, ByLeaveFaction,
    ByKingDecision, ByGift, ByRebellion, ByClanDestruction
}
```

This value is behavior data. Siege post-processing, garrison, issue, and diplomacy code use it to decide whether to run "open to claim" or siege-specific reactions.

### `ApplyBy*` routes

| Entry | Meaning and source-level side effects |
| --- | --- |
| `ApplyByDefault(Hero, Settlement)` | Generic transfer, detail `Default`, no capturer. The vanilla cheat command uses this entry; it is not a normal siege or decision result. |
| `ApplyByKingDecision(Hero, Settlement)` | Kingdom decision result; the common path also clears the town's unassigned flag again afterward. |
| `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement)` | Siege capture; records `LastCapturedBy`, may destroy the old garrison, and puts the fort into claimable semantics. `capturerHero` must own a live party. |
| `ApplyByLeaveFaction(Hero, Settlement)` | Leaving faction; the fort enters claimable semantics and listeners see `ByLeaveFaction`. |
| `ApplyByBarter(Hero, Settlement)` | An accepted fief barter; listeners see `ByBarter`. |
| `ApplyByRebellion(Hero, Settlement)` | Rebellion transfer; the same Hero is both new owner and capturer, detail `ByRebellion`. |
| `ApplyByDestroyClan(Settlement, Hero)` | Reallocation after clan destruction; detail `ByClanDestruction`. |
| `ApplyByGift(Settlement, Hero)` | Gift/transfer path; argument order is settlement first, new owner second. |

All entries are immediate `void` operations with no preview, transaction, or rollback object.

## State & Event Order

For a fort, the common path completes these linked updates before the event:

1. Read `settlement.OwnerClan?.Leader` as `oldOwner` and clear `Town.IsOwnerUnassigned`.
2. Write `Town.OwnerClan` as `newOwner.Clan`.
3. On siege, destroy the old garrison via [DestroyPartyAction](../DestroyPartyAction); when the garrison is missing, create a new garrison and remove the governor.
4. Mark the settlement and bound-village parties dirty; set hold on villager parties that target a bound village and meet the condition.
5. Compute `openToClaim` for fort transfers on siege, clan destruction, or leaving faction.
6. End conflicting unfinished map events when the new faction is not hostile, stop incompatible garrison/raid AI, and update map events.
7. Dispatch the old and new owner and `detail` via `CampaignEvents.OnSettlementOwnerChangedEvent`.

The source reads `newOwner.Clan` on the fort path, and the siege wrapper reads `capturerHero.Clan` and its party; these are caller contracts, not optional extras. A village is not written a new village owner by this Action, yet may still receive an ownership event, so do not treat the event itself as proof that "the village owner changed".

## Real Current-Campaign Examples

### Apply an already-accepted gift transfer

The vanilla Clan and Kingdom flow calls `ApplyByGift` after completing the transfer decision at a higher layer. A mod's own transfer should also use the current live settlement and Hero, and must not use this code as a barter or siege decider:

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

Call it only after the mod itself has completed permission, cost, and ownership decisions. Siege resolution should use `ApplyBySiege(newOwner, capturerHero, settlement)` instead, preserving the correct detail and capture record.

### Observe the migrated owner and reason

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

The callback receives the migrated owner and the reason used at call time. Listeners should not write `Town.OwnerClan` again.

## Risks & Save Boundaries

- **The reason value affects behavior.** Substituting `ApplyByDefault` for a siege or rebellion entry may indeed change the owner yet lose the semantic detail used by siege post-processing, quests, and UI.
- **Call arguments must be mutually consistent live objects.** The fort path reads `newOwner.Clan`; the siege path reads `capturerHero.Clan` and may read `capturerHero.PartyBelongedTo.Party` when destroying the garrison. A capturer without a party calling `ApplyBySiege` may fail during cleanup.
- **Do not write fields directly.** Assigning `Town.OwnerClan` directly skips garrison creation/destruction, governor removal, bound-village visuals, map-event diplomacy, AI hold, and the ownership event; the inconsistency may not surface until save/load.
- **Events come after broad cleanup.** Listeners may see stopped parties, recreated garrisons, or diplomatically ended map events. Copy ids and re-query live objects; do not keep using the old siege reference.
- **A null owner is not a generic "ownerless" entry.** Some internal conditions allow a later null check, but the fort still accesses `newOwner.Clan`. When there is no legitimate owner, use a real owner-removal/destruction flow.
- **Village boundary.** This Action writes `Town.OwnerClan` only when `IsFortification` is true; calling it on a village may only raise an event without a corresponding ownership write.
- **Save boundary:** in the callback, save stable ids and the mod's accepted reason, do not serialize transient `Settlement`/`Hero` references. Re-acquire objects from the current Campaign after a load.

## Navigation

- **Parent:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **Siblings:** [ChangeKingdomAction](../ChangeKingdomAction) · [ChangeRelationAction](../ChangeRelationAction) · [StartBattleAction](../StartBattleAction)
- **Related entities:** [Settlement](../../campaign/Settlement) · [Town](../../campaign/Town) · [Village](../../campaign/Village) · [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan)
- **Events & cleanup:** [CampaignEvents](../../campaign/CampaignEvents) · [DestroyPartyAction](../DestroyPartyAction) · [ChangeGovernorAction](../ChangeGovernorAction) · [KingdomManager](../../campaign/KingdomManager)
