---
title: "ChangeRelationDetail"
description: "Distinguishes ordinary relation changes from emissary changes and explains how ChangeRelationAction carries the reason to its event."
---
# ChangeRelationDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum ChangeRelationAction.ChangeRelationDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs`

## One-line responsibility

Mark whether a hero relation change is an ordinary interaction or an emissary action, allowing relation behaviors, notifications, and quests to see both effective and original heroes.

## Mental Model

This enum is produced only by the public entry points of [`ChangeRelationAction`](../ChangeRelationAction). The Action asks `DiplomacyModel.GetHeroesForEffectiveRelation` for the heroes whose relation is actually stored, clamps the resulting value to `-100..100`, writes it through `CharacterRelationManager`, and then publishes `CampaignEvents.HeroRelationChanged` with `ChangeRelationDetail`.

The detail identifies the source, not the relation value, and should not be written into a hero. Ordinary player or hero interactions use `ApplyPlayerRelation` or `ApplyRelationChangeBetweenHeroes`; emissary flows use `ApplyEmissaryRelation`. Do not bypass the model or manually publish a notification.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Default` | `ApplyPlayerRelation`, `ApplyRelationChangeBetweenHeroes` | An ordinary dialogue, quest, reward, or aftermath relation change. |
| `Emissary` | `ApplyEmissaryRelation` | A relation change performed by an emissary; downstream code can distinguish it from direct interaction. |

Positive changes may be scaled and randomized by the diplomacy model, so `detail` does not guarantee that the final `relationChange` equals the caller's input.

## Dependencies and Event Consumers

- **Upstream:** [`ChangeRelationAction`](../ChangeRelationAction), [`Hero`](../../campaign/Hero), and `Campaign.Current.Models.DiplomacyModel`.
- **State:** `CharacterRelationManager` writes personal relation for the effective heroes; the original heroes remain available in the event arguments.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `HeroRelationChanged` as `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero>`.
- **Downstream:** [`CampaignEventReceiver`](../CampaignEventReceiver), relation behaviors, notifications, and quests consume the detail and both hero pairs.
- **Save boundary:** Relation values are campaign state; the event is not replayed after a save load.

## Risks and Lifetime

- Direct relation writes skip effective-hero mapping, the `-100..100` clamp, and `OnHeroRelationChanged`, leaving UI and quests out of sync.
- `ApplyInternal` writes and dispatches only when the effective relation change is nonzero. Calling the Action does not guarantee an event.
- `showQuickNotification` controls notification behavior, not the relation transaction. Use the event's effective delta rather than recomputing the original request.
- The relation event is synchronous. Applying another change to the same pair from inside the callback can recurse and trigger duplicate quest effects.

## Real Usage Example

`DefaultNotificationsCampaignBehavior` registers the same event signature:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class RelationReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroRelationChanged.AddNonSerializedListener(this, OnRelationChanged);
    }

    private void OnRelationChanged(
        Hero effectiveHero,
        Hero effectiveHeroGainedRelationWith,
        int relationChange,
        bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero,
        Hero originalGainedRelationWith)
    {
        if (detail == ChangeRelationAction.ChangeRelationDetail.Emissary && relationChange != 0)
        {
            RecordEmissaryChange(effectiveHero, effectiveHeroGainedRelationWith, originalHero, originalGainedRelationWith);
        }
    }

    private void RecordEmissaryChange(Hero effectiveHero, Hero effectiveGained, Hero originalHero, Hero originalGained)
    {
        // Update mod-owned runtime state without applying another relation change.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example has no state of its own to save.
    }
}
```

When a mod needs to change a relation, it should use a public entry such as `ChangeRelationAction.ApplyEmissaryRelation(emissary, target, 5)` and let the Action own model scaling, bounds, and event delivery.

## Version Note

v1.3.15 and v1.4.5 expose only `Default` and `Emissary`, with the same event argument order. The v1.4.5 diplomacy model and effective-hero mapping are the current semantic reference.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [ChangeRelationAction](../ChangeRelationAction) · [ChangeKingdomActionDetail](../ChangeKingdomActionDetail)
- ↓ Owner and event: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Hero](../../campaign/Hero) · [DiplomacyModel](../DiplomacyModel)

