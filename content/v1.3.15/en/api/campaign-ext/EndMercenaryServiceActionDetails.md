---
title: "EndMercenaryServiceActionDetails"
description: "Distinguishes ordinary mercenary termination, leaving a kingdom, and becoming a vassal while the campaign clears the mercenary flag and raises its end event."
---
# EndMercenaryServiceActionDetails

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum EndMercenaryServiceActionDetails` nested in `EndMercenaryServiceAction`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

## Overview

**One-line responsibility:** Tell event consumers why a clan's mercenary service ended after the action cleared its mercenary state.

The enum has no clan reference and is not the kingdom-membership state machine. Three public `EndMercenaryServiceAction.EndBy*` wrappers select a reason, the private `Apply` calls `Clan.EndMercenaryService`, and `CampaignEventDispatcher` then publishes `OnMercenaryServiceEnded`. The surrounding `ChangeKingdomAction`, conversation, or renewal flow remains responsible for kingdom membership, war, fief, reward, and notification work.

## Mental Model

This is a reason tag attached to a small but observable campaign transaction. In the 1.4.5 source, `EndMercenaryServiceAction.Apply` passes only one boolean to `Clan.EndMercenaryService`: it is `true` for `ApplyByLeavingKingdom` and `false` for the other two values. The clan's mercenary flag is cleared before the event is dispatched.

That implementation detail is an important boundary. `EndByLeavingKingdom` does not itself set `Clan.Kingdom` to null, end wars, transfer fiefs, or finish all membership cleanup. `ChangeKingdomAction` coordinates those larger steps and calls this action inside that transaction. If a mod wants a clan to leave a kingdom, it should call `ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary`, not clear or reassign `Clan.Kingdom` around an isolated end-service call.

The event is synchronous. A listener sees `clan.IsUnderMercenaryService == false`, but the surrounding kingdom transaction may still be completing other state changes. Treat the enum as the reason for the current event, not as proof that every upstream workflow has finished.

## Transaction and Event Flow

```text
Upstream kingdom or conversation flow
  -> EndMercenaryServiceAction.EndBy*(clan)
       -> Apply(clan, details)
            -> clan.EndMercenaryService(details == ApplyByLeavingKingdom)
                 -> mercenary flag becomes false
            -> OnMercenaryServiceEnded(clan, details)
  -> upstream continues kingdom, war, reward, or UI work
```

The built-in call points show the three boundaries: `ChangeKingdomAction` uses `EndByDefault` while switching a clan into a normal kingdom role and `EndByLeavingKingdom` while removing it; `LordConversationsCampaignBehavior` uses `EndByBecomingVassal` when the player accepts vassalage; and `DefaultCutscenesCampaignBehavior` consumes the event to show a scene notification.

## Enum Values and Typical Call Timing

| Value | Public entry point | Meaning and typical timing |
|---|---|---|
| `ApplyByDefault` | `EndByDefault(clan)` | Ends the current mercenary flag without the “leaving kingdom” boolean. `ChangeKingdomAction` uses it when a clan joins or switches into a normal kingdom role. |
| `ApplyByLeavingKingdom` | `EndByLeavingKingdom(clan)` | Marks the end as part of leaving the current kingdom. `ChangeKingdomAction` calls it after clearing the kingdom membership in its leave branches; clan state and diplomacy cleanup remain the caller's responsibility. |
| `ApplyByBecomingVassal` | `EndByBecomingVassal(clan)` | Marks an explicit conversion from mercenary service to vassalage. `LordConversationsCampaignBehavior` calls it when the player's accepted-vassal consequence keeps the clan in the same kingdom. |

All three values currently clear the same mercenary flag and raise the same event shape. Do not collapse them in a mod's event handler: SandBox cutscene logic and other consumers can use the reason to distinguish a vassal conversion from a departure.

## Dependencies and Boundary Map

| Direction | Type or subsystem | Contract |
|---|---|---|
| Larger state machine | [`ChangeKingdomAction`](../ChangeKingdomAction) | Correct entry point for joining, leaving, rebelling, changing kingdom, and the associated diplomacy/fief work. |
| Paired start flow | [`StartMercenaryServiceAction`](../StartMercenaryServiceAction) | Establishes the mercenary relationship and emits the corresponding start event. |
| Core state | [`Clan`](../../campaign/Clan) | Stores `Kingdom`, `IsUnderMercenaryService`, debt, and reward-related fields. This action directly delegates the flag change to the clan. |
| Downstream event | [`CampaignEvents`](../CampaignEvents) and [`CampaignEventReceiver`](../CampaignEventReceiver) | Expose `OnMercenaryServiceEndedEvent` with `(Clan, EndMercenaryServiceActionDetails)`. |
| Consumer | `DefaultCutscenesCampaignBehavior` | Uses the reason to decide when a join-kingdom scene notification should be shown. |
| Save boundary | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) | Clan state is persisted; the non-serialized end event is not replayed after loading. |

## Risks, Save State, and Lifetime

- Do not write `Clan.IsUnderMercenaryService` directly. That bypasses the end event and leaves behaviors with stale contract caches.
- Do not treat `EndByLeavingKingdom` as a complete leave-kingdom API. An isolated call can leave the clan with a `Kingdom` reference while its mercenary flag is already false, producing contradictory diplomacy, wage, and conversation checks.
- The source does not validate that the clan is non-null or currently a mercenary. Repeating an end call can dispatch duplicate events even after the flag is false; check the current state before invoking it.
- `OnMercenaryServiceEndedEvent` is a non-serialized runtime event. Read data in `SyncData`, then rebuild or reconcile mod-owned contract caches from current clan state; a load will not replay the historical event.
- Avoid calling the isolated action during save construction or while iterating kingdom/clan collections. For a full membership transition, delegate to the higher-level `ChangeKingdomAction` so its order and collection updates remain intact.

## Real Usage Example

For a mod that wants to observe all contract endings, register the same event used by the built-in campaign behaviors:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class MercenaryEndObserver : CampaignBehaviorBase
{
    private EndMercenaryServiceAction.EndMercenaryServiceActionDetails _lastReason;

    public override void RegisterEvents()
    {
        CampaignEvents.OnMercenaryServiceEndedEvent.AddNonSerializedListener(this, OnMercenaryServiceEnded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMercenaryServiceEnded(
        Clan mercenaryClan,
        EndMercenaryServiceAction.EndMercenaryServiceActionDetails detail)
    {
        if (mercenaryClan == Clan.PlayerClan)
        {
            _lastReason = detail;
        }
    }
}
```

When the intended operation is actually leaving the kingdom, use the real upstream acquisition path so the clan membership and diplomacy transaction stays ordered:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Clan playerClan = Hero.MainHero.Clan;

if (playerClan != null &&
    playerClan.Kingdom != null &&
    playerClan.IsUnderMercenaryService)
{
    ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary(playerClan);
}
```

If the player is converting to a vassal in the same kingdom, let the conversation or kingdom flow call `EndByBecomingVassal`; do not emulate it by leaving and then assigning `Clan.Kingdom` manually.

## Version Note

The v1.3.15 and v1.4.5 routes expose the same three enum values, three public end wrappers, and the same observable order: clear the mercenary flag, then dispatch `OnMercenaryServiceEnded`. In both versions the visible `Clan.EndMercenaryService(bool)` implementation only clears the flag, but mods should keep the reason-specific entry points because callers and future implementations can depend on their semantics.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [EndMercenaryServiceAction](../EndMercenaryServiceAction) · [StartMercenaryServiceAction](../StartMercenaryServiceAction)
- ↓ Children: no separate child page; the enum is owned by [EndMercenaryServiceAction](../EndMercenaryServiceAction)
- Related: [ChangeKingdomAction](../ChangeKingdomAction) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
