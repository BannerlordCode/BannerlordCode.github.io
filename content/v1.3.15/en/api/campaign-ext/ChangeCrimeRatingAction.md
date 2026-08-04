---
title: "ChangeCrimeRatingAction"
description: "Changes a faction's main-hero crime rating through the campaign model, including clamping, notifications, war escalation, and the final change event."
---
# ChangeCrimeRatingAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeCrimeRatingAction`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

## Overview

`ChangeCrimeRatingAction.Apply(IFaction, float, bool)` applies a requested crime-rating delta through the active `CrimeModel`, clamps the result, optionally shows a notification, and publishes the effective delta after related diplomacy consequences have run.

## Mental Model

The requested value is not the value that listeners necessarily receive. The Action computes a new rating between `0` and `Campaign.Current.Models.CrimeModel.GetMaxCrimeRating()`, converts it back into an effective delta, and uses that delta for notification and event dispatch.

After assigning the clamped rating, a player-kingdom leader crossing `DeclareWarCrimeRatingThreshold` can trigger a `ChangeRelationAction.ApplyPlayerRelation` call and `DeclareWarAction.ApplyByCrimeRatingChange` before `CampaignEvents.CrimeRatingChanged` is delivered. A small positive delta can therefore change diplomacy synchronously.

## When to Use

Use this Action when a campaign rule has a real `IFaction` target and the change should participate in the native crime, notification, diplomacy, and event pipeline. Core `CrimeCampaignBehavior` uses it for daily decay and `PayForCrimeAction` uses it for payment flows.

Do not write `IFaction.MainHeroCrimeRating` directly, assume the requested delta is effective, or use it as a general relation API. Use [`ChangeRelationAction`](../ChangeRelationAction), [`DeclareWarAction`](../DeclareWarAction), or [`MakePeaceAction`](../MakePeaceAction) for their respective state transitions.

## Entry Point and Timing

| Entry point | Timing and side effects |
| --- | --- |
| `Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)` | Clamps the rating, optionally notifies, writes the new rating, may change relation and declare war at the threshold, then emits `CrimeRatingChanged(IFaction, float)` with the effective delta. |

The internal method is not mod-visible. An effective delta of zero does not produce the normal notification or useful state change, so a call is not a guarantee that listeners will observe a meaningful change.

## Dependencies and Event Consumers

- **Target:** [`IFaction`](../IFaction) supplies `MainHeroCrimeRating`, `Name`, `Leader`, and war state.
- **Model:** `Campaign.Current.Models.CrimeModel` supplies the maximum rating and `DeclareWarCrimeRatingThreshold`.
- **Related Actions:** [`ChangeRelationAction`](../ChangeRelationAction) and [`DeclareWarAction`](../DeclareWarAction) can run synchronously at the threshold.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `CrimeRatingChanged` as `IMbEvent<IFaction, float>`; the float is the effective delta.
- **Consumers:** `CrimeCampaignBehavior`, payment and hostility actions, notifications, and diplomacy behaviors consume the resulting state.
- **Save boundary:** The faction rating is campaign state; the runtime event is not replayed after load.

## Risks and Lifetime

- A delta that crosses the crime threshold can start a war and lower a relation before the crime event callback. Do not perform irreversible work in the callback without checking current faction state.
- The event's delta can be smaller than the requested value after clamping. Read the event argument rather than recomputing from the request.
- Notification is produced before the rating assignment. Do not treat the notification call as confirmation that all downstream diplomacy work has completed.
- Direct field mutation skips clamping, war escalation, and `CrimeRatingChanged`, leaving the crime behavior and diplomacy state inconsistent.
- Do not call this from save synchronization or repeatedly from its own event callback; synchronous re-entry can create a feedback loop.

## Real Usage Example

A campaign behavior can acquire the effective change through the real event boundary:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public sealed class CrimeObserverBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CrimeRatingChanged.AddNonSerializedListener(this, OnCrimeRatingChanged);
    }

    private void OnCrimeRatingChanged(IFaction faction, float effectiveDelta)
    {
        if (faction == Hero.MainHero.MapFaction && effectiveDelta != 0f)
        {
            RecordCrimeChange(faction, effectiveDelta, faction.MainHeroCrimeRating);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

The daily campaign path calls `ChangeCrimeRatingAction.Apply(faction, faction.DailyCrimeRatingChange, showNotification: false)`. A mod should use an equivalent real faction and let the Action calculate the effective delta.

## Version Note

The `Apply(IFaction, float, bool)` signature, clamp boundary, threshold checks, and `CrimeRatingChanged` event shape match 1.3.15 and 1.4.5. The 1.4.5 campaign behavior is the authority for the daily-decay call path described here.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [ChangeRelationAction](../ChangeRelationAction) · [DeclareWarAction](../DeclareWarAction)
- **Related:** [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Hero](../../campaign/Hero)
