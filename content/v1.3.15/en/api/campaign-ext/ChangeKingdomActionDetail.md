---
title: "ChangeKingdomActionDetail"
description: "Explains the ChangeKingdomAction reasons for clan entry, departure, rebellion, mercenary conversion, and kingdom destruction, including their campaign event boundary."
---
# ChangeKingdomActionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum ChangeKingdomAction.ChangeKingdomActionDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`

## One-line responsibility

Preserve the business reason for a clan's kingdom transition so logs, map UI, prisoner systems, and diplomacy behaviors can distinguish joining, leaving, rebellion, and cleanup after the ownership change is applied.

## Mental Model

This enum is an event argument produced by the `ChangeKingdomAction` transaction, not a state field that a mod should save or assign to a `Clan`. A public `ApplyBy*` entry first updates kingdom relations, war relations, party visuals, and clan state, then sends the reason through `CampaignEvents.OnClanChangedKingdomEvent`. When a listener receives it, `oldKingdom` and `newKingdom` describe the completed transition.

Choose the Action entry point whose name matches the business cause. Do not construct a reason and call the private `ApplyInternal`, and do not assign `clan.Kingdom` directly. `ApplyByJoinToKingdom` and `ApplyByJoinFactionAsMercenary`, for example, have different service, deadline, influence, and event semantics.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `JoinAsMercenary` | `ApplyByJoinFactionAsMercenary` | The clan starts mercenary service for a kingdom. |
| `JoinKingdom` | `ApplyByJoinToKingdom` | The clan joins a kingdom as a normal vassal. |
| `JoinKingdomByDefection` | `ApplyByJoinToKingdomByDefection` | The clan defects from an old kingdom to a new one. |
| `LeaveKingdom` | `ApplyByLeaveKingdom` | The clan leaves normally, without marking the transition as rebellion. |
| `LeaveWithRebellion` | `ApplyByLeaveWithRebellionAgainstKingdom` | The clan leaves through a rebellion flow that establishes the related hostility. |
| `LeaveAsMercenary` | `ApplyByLeaveKingdomAsMercenary` | Mercenary service ends and its service state is cleared. |
| `LeaveByClanDestruction` | `ApplyByLeaveKingdomByClanDestruction` | A destroyed clan is removed from its kingdom. |
| `CreateKingdom` | `ApplyByCreateKingdom` | The clan creates a new kingdom and leaves its previous affiliation. |
| `LeaveByKingdomDestruction` | `ApplyByLeaveByKingdomDestruction` | The clan's affiliation is cleaned up after its kingdom is destroyed. |

The numeric ordering is not a save contract. Branch on names rather than storing integers such as `0` or `1` in mod data.

## Dependencies

- **Upstream:** [`ChangeKingdomAction`](../ChangeKingdomAction) receives [`Clan`](../../campaign/Clan), old/new [`Kingdom`](../../campaign/Kingdom), and mercenary timing state.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `OnClanChangedKingdomEvent` as `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>`.
- **Downstream:** `DefaultLogsCampaignBehavior`, `SettlementNameplatesVM`, `PrisonerReleaseCampaignBehavior`, and quest listeners consume the event. `FactionManager` performs state updates inside the Action; it is not a downstream event consumer.
- **Related actions:** War and peace must go through [`DeclareWarAction`](../DeclareWarAction) or [`MakePeaceAction`](../MakePeaceAction), not a direct stance write from this event.
- **Save boundary:** Kingdom, clan, and war state are saved; this non-serialized event is not replayed when a save is loaded.

## Risks and Lifetime

- Directly writing the kingdom field skips clan banners, party visuals, war relations, and event dispatch, leaving UI and diplomacy behaviors with stale affiliation.
- The event is part of a synchronous cascade. Starting another kingdom transition for the same clan from the callback can recurse, duplicate logs, or mutate a collection being enumerated by a downstream behavior.
- `LeaveWithRebellion`, `CreateKingdom`, and `JoinKingdomByDefection` depend on upstream political workflows. Do not call the wrong wrapper merely to obtain a desired enum value.
- Loading a save does not replay historical `OnClanChangedKingdomEvent` notifications. Rebuild non-serialized map caches from each clan's current `Kingdom` during campaign initialization.

## Real Usage Example

The built-in `DefaultLogsCampaignBehavior` uses this event registration pattern to distinguish mercenary entry and exit:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class KingdomChangeBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(this, OnClanChangedKingdom);
    }

    private void OnClanChangedKingdom(
        Clan clan,
        Kingdom oldKingdom,
        Kingdom newKingdom,
        ChangeKingdomAction.ChangeKingdomActionDetail detail,
        bool showNotification)
    {
        if (detail == ChangeKingdomAction.ChangeKingdomActionDetail.JoinAsMercenary ||
            detail == ChangeKingdomAction.ChangeKingdomActionDetail.LeaveAsMercenary)
        {
            RefreshMercenaryStatus(clan, oldKingdom, newKingdom, showNotification);
        }
    }

    private void RefreshMercenaryStatus(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, bool showNotification)
    {
        // Refresh mod-owned runtime UI state after the affiliation is updated.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example has no state of its own to save.
    }
}
```

When a mod really changes affiliation, it should call the named entry point inside a valid campaign flow, such as `ChangeKingdomAction.ApplyByJoinToKingdom(clan, kingdom)`. It should not call event receivers to simulate the transition.

## Version Note

v1.3.15 and v1.4.5 expose the same nine reasons and named entry points. The v1.4.5 source is the usage authority; store explicit names rather than raw enum integers in cross-version mod data.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↓ Owner Action: [ChangeKingdomAction](../ChangeKingdomAction)
- ↔ Siblings: [ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [DeclareWarAction](../DeclareWarAction)
