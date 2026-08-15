---
title: "AddCompanionAction"
description: "Adds a hero to a clan's companion relationship, cleans up any previous companion owner, and publishes the campaign event that downstream behaviors use."
---
# AddCompanionAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AddCompanionAction`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/AddCompanionAction.cs`

## Overview

`AddCompanionAction` establishes the `Hero.CompanionOf` relationship for a clan and announces the completed change to campaign behaviors. It is a state transition with cleanup, not a convenience setter for a hero's clan membership.

## Mental Model

The public `Apply(Clan, Hero)` method enters the campaign action boundary. If the hero already belongs to another clan as a companion, the action first calls `RemoveCompanionAction.ApplyByFire` for that old relationship. It then assigns the new `CompanionOf` clan and dispatches `CampaignEvents.NewCompanionAdded`.

The event is therefore observed after the relationship has changed. A listener should refresh its own tracking or UI state and should not assign `CompanionOf` again. The action does not create a hero, recruit a party member, or complete the conversation or quest that decided the recruitment.

## When to Use

Use this action when a campaign workflow has already selected a real `Hero` as a companion and the clan relationship must be changed through the normal action/event boundary. The built-in lord conversation flow uses this boundary after its recruitment decisions.

Do not use it to change an ordinary clan member into a companion, to transfer a governor, or to add a hero to a party roster. Those workflows have separate ownership, role, and roster side effects.

## Entry Point and Timing

| Entry point | Timing and side effects |
| --- | --- |
| `Apply(Clan clan, Hero companion)` | Removes an existing companion relationship with the `Fire` reason when necessary, assigns `companion.CompanionOf`, then emits `NewCompanionAdded(Hero)`. |

The private `ApplyInternal` method is not a mod entry point. The order above matters: observers see the new relationship, and an old owner may already have received a removal event.

## Dependencies

- **Inputs:** [`Clan`](../../campaign/Clan) owns the relationship and [`Hero`](../../campaign/Hero) is the companion being attached.
- **Previous owner:** [`RemoveCompanionAction`](../RemoveCompanionAction) is used with `RemoveCompanionDetail.Fire` if `companion.CompanionOf` is already set.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `NewCompanionAdded` as `IMbEvent<Hero>`; the dispatcher forwards the completed hero to campaign receivers.
- **Downstream:** [`CampaignBehaviorBase`](../CampaignBehaviorBase), companion-role behaviors, player tracking, party placement, and quest/conversation code may react to the event.
- **Persistence:** The clan relationship is campaign state. The event is a runtime notification and is not replayed after a save is loaded.

## Risks and Lifetime

- Calling `Apply` with a hero already owned by another clan can synchronously run the full `Fire` cleanup first, including captivity, fugitive, governor, party, and equipment handling.
- Directly writing `CompanionOf` skips the old-owner cleanup and `NewCompanionAdded`, leaving party roles and tracking behaviors stale.
- The event is synchronous. Starting another recruitment or removing the same hero from inside the callback can recurse through the companion event chain.
- A companion may have no active party at the moment of registration. Do not assume that the event means the hero is already present in `MobileParty.MainParty`.

**Save boundary:** Save the mod's own persistent companion metadata through its behavior's `SyncData`. Register the non-serialized listener again during campaign initialization; do not serialize this action or expect the event to replay during load.

## Real Usage Example

A mod can observe the actual recruitment boundary through the same event receiver pattern used by campaign behaviors:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public sealed class CompanionTrackingBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.NewCompanionAdded.AddNonSerializedListener(this, OnNewCompanionAdded);
    }

    private void OnNewCompanionAdded(Hero companion)
    {
        if (companion.CompanionOf == Clan.PlayerClan)
        {
            RefreshCompanionMarker(companion);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

When a mod owns the recruitment decision, it should call `AddCompanionAction.Apply(targetClan, selectedHero)` only after obtaining `selectedHero` from that real campaign workflow. The action itself is not a replacement for the conversation, quest, or party setup.

## Version Note

The `Apply(Clan, Hero)` signature and the cleanup-then-event order match the 1.3.15 and 1.4.5 sources. The 1.4.5 source is the authority for the downstream event timing described here.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [RemoveCompanionAction](../RemoveCompanionAction) · [ChangeGovernorAction](../ChangeGovernorAction)
- **Related:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
