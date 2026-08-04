---
title: "ChangeOwnerOfWorkshopAction"
description: "Transfers workshop ownership through the purchase, sale, bankruptcy, death, or war workflow while applying capital, cost, gold, and owner-change events."
---
# ChangeOwnerOfWorkshopAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeOwnerOfWorkshopAction`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs`

## Overview

`ChangeOwnerOfWorkshopAction` is the ownership boundary for a workshop. Its public wrappers choose the business cause, set the new owner, workshop type, and capital, settle player-related gold through `GiveGoldAction`, and then publish the old owner to `WorkshopOwnerChangedEvent`.

## Mental Model

All wrappers converge on one internal transaction. The transaction captures the old owner before calling `Workshop.ChangeOwnerOfWorkshop`, chooses capital and cost according to the cause, applies gold only when the old or new owner is `Hero.MainHero`, and finally dispatches the owner-change event.

The event supplies the workshop and old owner; read `workshop.Owner` after the callback to obtain the new owner. The wrapper, not a mod-side assignment, owns the ordering between ownership, financial settlement, and listener notification.

## When to Use

Use the wrapper that matches the source of the change: player purchase, player sale, bankruptcy, death, or war. The native workshop characters and workshops behaviors use these paths for dialogue, bankruptcy, inheritance, and war cleanup.

Do not set `Workshop.Owner`, type, capital, or hero gold independently. Do not pre-charge the player before `ApplyByPlayerBuying`; that wrapper computes the model cost and the Action applies the player transfer itself.

## Entry Points and Timing

| Entry point | Model and financial policy |
| --- | --- |
| `ApplyByPlayerBuying(Workshop workshop)` | Uses `WorkshopModel.GetCostForPlayer`, player as new owner, and initial capital. |
| `ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | Uses `WorkshopModel.GetCostForNotable`, initial capital, and the selected new owner/type. |
| `ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)` | Uses initial capital and the caller-supplied new owner/type/cost. |
| `ApplyByDeath(Workshop workshop, Hero newOwner)` | Preserves the workshop type and capital and performs no purchase cost. |
| `ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | Uses initial capital and no purchase cost for war transfer. |

Every path captures the old owner, mutates the workshop, settles applicable gold, and emits `WorkshopOwnerChangedEvent(Workshop, Hero oldOwner)`.

## Dependencies and Event Consumers

- **State:** [`Workshop`](../../campaign/Workshop) owns the current owner, type, and capital; [`Hero`](../../campaign/Hero) identifies old and new owners.
- **Model:** `Campaign.Current.Models.WorkshopModel` supplies initial capital and player/notable costs.
- **Financial action:** [`GiveGoldAction`](../GiveGoldAction) settles player-related transfers inside the transaction.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `WorkshopOwnerChangedEvent` as `IMbEvent<Workshop, Hero>`; the `Hero` argument is the old owner.
- **Consumers:** `WorkshopsCampaignBehavior`, `WorkshopsCharactersCampaignBehavior`, inheritance, bankruptcy, war, and UI/notification code refresh their state from the event.
- **Save boundary:** Workshop ownership, type, capital, and hero gold are campaign state; the event is not replayed after load.

## Risks and Lifetime

- A purchase wrapper computes cost from the active model. Manually charging gold first can double-charge the player.
- The old owner can be `null` in a system transfer. Do not assume the event's old-owner argument is always a live hero.
- Listeners run after the workshop mutation and gold settlement. Read the new state from `workshop` rather than caching pre-action values.
- Direct workshop mutation skips `WorkshopOwnerChangedEvent`, leaving workshops behavior, economy, and UI caches stale; a wrong capital or type can also persist into the save.
- Do not transfer a workshop while its owner or target hero is being destroyed, loaded, or synchronously changed by another workshop event.

**Save boundary:** Persist mod-owned workshop metadata through a campaign behavior's `SyncData`, re-register non-serialized event listeners on load, and rebuild caches from the saved workshop collection.

## Real Usage Example

The stable observation boundary is the real campaign event. A mod can reacquire the new owner from the mutated workshop and avoid duplicating the transfer:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.SaveSystem;

public sealed class WorkshopOwnerObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WorkshopOwnerChangedEvent.AddNonSerializedListener(this, OnWorkshopOwnerChanged);
    }

    private void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)
    {
        Hero newOwner = workshop.Owner;
        RecordOwnerChange(workshop, oldOwner, newOwner);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

For a player purchase, the real entry is `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying(workshop)`, where `workshop` came from the active settlement's workshop collection. Do not call `GiveGoldAction` separately for that purchase.

## Version Note

The five wrapper signatures, model policies, owner-change event shape, and player-gold conditions match 1.3.15 and 1.4.5. The 1.4.5 workshop behaviors are the authority for the purchase, sale, bankruptcy, death, and war call paths.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [GiveGoldAction](../GiveGoldAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related:** [Workshop](../../campaign/Workshop) · [CampaignEvents](../CampaignEvents) · [Hero](../../campaign/Hero)
