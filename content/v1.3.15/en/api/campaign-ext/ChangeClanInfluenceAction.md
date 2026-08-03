---
title: "ChangeClanInfluenceAction"
description: "The campaign-state entry point for changing a clan's influence while notifying every campaign event receiver of the exact delta."
---
# ChangeClanInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ChangeClanInfluenceAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeClanInfluenceAction.cs`

## Responsibility

Apply one influence delta to a [Clan](../../campaign/Clan) and publish that same delta through the campaign event dispatcher. It is the normal state-transition boundary for an influence reward or cost, not a policy or affordability system.

## Mental model

`Apply` is deliberately small: it adds `amount` to `clan.Influence`, then immediately calls `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)`. Positive and negative values use the same path; the class neither clamps the result nor asks a model whether a cost is affordable. Vanilla callers first calculate or validate a cost in their owning behavior or model, then commit the already-decided delta here. For example, the army UI debits the player clan after its army-management work, while the siege-aftermath behavior debits the attacker clan only after it has calculated an aftermath cost.

Use this action when a campaign feature has decided that influence must change and listeners must observe it. Do not use it to decide the amount, to transfer gold, or as a substitute for the kingdom-decision and army workflows that own their own prerequisites.

## Dependencies and execution order

| Role | Connection | Why it matters |
|---|---|---|
| Target | [Clan](../../campaign/Clan) | Owns the persistent `Influence` value changed by the action. |
| Downstream event | [CampaignEventReceiver](.././CampaignEventReceiver) | Receivers are notified synchronously through `OnClanInfluenceChanged`; UI and campaign behavior reactions see the new value. |
| Upstream calculations | [Campaign](../../campaign/Campaign) | Vanilla callers obtain costs from `Campaign.Current.Models` before applying the delta. |
| Related action boundary | [DisbandArmyAction](.././DisbandArmyAction) | Army disband and cohesion flows are examples of a higher-level workflow that may charge influence. |

The observable order is fixed: mutate the clan first, then dispatch. A receiver must therefore treat `clan.Influence` as already updated and use the supplied `amount` to identify the change made by this call.

## Member timing

`Apply(Clan clan, float amount)` is the only public entry. Call it on the campaign thread after the feature has chosen a valid delta. It performs no null checks and no balance check, so callers must have a live clan and must avoid applying the same reward or charge twice when a menu callback or event can be re-entered.

## Risk boundary

Writing `clan.Influence` directly produces the number but skips `OnClanInfluenceChanged`; cached presentation or campaign behaviors that react to the dispatcher can then observe an unexplained state change. Conversely, calling this action from an event receiver that is itself responding to an influence change can recursively apply another delta. Keep cost calculation and the decision to apply it outside listeners, and make the commit idempotent at the owning workflow boundary.

This is not a save-registration operation. The danger is logical persistence: an unbalanced or duplicated mutation becomes part of the campaign save even though no exception occurred.

## Real acquisition-path example

This follows the same target acquisition used by vanilla player-clan costs. The model supplies a real cost; the action is called only after the campaign exists.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

if (Campaign.Current != null && Clan.PlayerClan != null)
{
    float cost = Campaign.Current.Models.DiplomacyModel
        .GetInfluenceCostOfAbandoningArmy();
    ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -cost);
}
```

## Navigation

- ↑ [Campaign extension API](../)
- ↔ [ChangeClanLeaderAction](.././ChangeClanLeaderAction) · [ChangeGovernorAction](.././ChangeGovernorAction)
- Related: [Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign) · [DisbandArmyAction](.././DisbandArmyAction)
