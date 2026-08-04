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

This enum is produced only by the public entry points of [`ChangeRelationAction`](../ChangeRelationAction). The Action first scales and randomly rounds a positive request, asks `DiplomacyModel.GetHeroesForEffectiveRelation` for the heroes whose relation is actually stored, reads the old value with `CharacterRelationManager.GetHeroRelation`, clamps "old relation + scaled `relationChange`" to `-100..100`, and writes the result with `effectiveHero.SetPersonalRelation(effectiveHero2, value)`. It then publishes the same pre-clamp `relationChange` with `ChangeRelationDetail` through `CampaignEvents.HeroRelationChanged`.

The detail identifies the source, not the relation value, and should not be written into a hero. Ordinary player or hero interactions use `ApplyPlayerRelation` or `ApplyRelationChangeBetweenHeroes`; emissary flows use `ApplyEmissaryRelation`. Do not bypass the model or manually publish a notification.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Default` | `ApplyPlayerRelation`, `ApplyRelationChangeBetweenHeroes` | An ordinary dialogue, quest, reward, or aftermath relation change. |
| `Emissary` | `ApplyEmissaryRelation` | A relation change performed by an emissary; downstream code can distinguish it from direct interaction. |

Positive changes may be scaled and randomized by the diplomacy model. The event's `relationChange` is the scaled value before the storage clamp; the actual stored delta is "clamped new relation - old relation", so the two can differ at `-100` or `100`, including an actual delta of zero.

## Dependencies and Event Consumers

- **Upstream:** [`ChangeRelationAction`](../ChangeRelationAction), [`Hero`](../../campaign/Hero), and `Campaign.Current.Models.DiplomacyModel`.
- **State:** `CharacterRelationManager.GetHeroRelation` reads the old relation; `effectiveHero.SetPersonalRelation(...)` writes the clamped value for the effective heroes. The original heroes remain available in the event arguments.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `HeroRelationChanged` as `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero>`.
- **Downstream:** [`CampaignEventReceiver`](../CampaignEventReceiver), relation behaviors, notifications, and quests consume the detail and both hero pairs.
- **Save boundary:** Relation values are campaign state; the event is not replayed after a save load.

## Risks and Lifetime

- Direct relation writes skip effective-hero mapping, the `-100..100` clamp, and `OnHeroRelationChanged`, leaving UI and quests out of sync.
- `ApplyInternal` skips the write and event only when the scaled `relationChange` is zero. When it is nonzero, the event still carries that pre-clamp value even if the clamp leaves stored relation unchanged.
- `showQuickNotification` controls notification behavior, not the relation transaction. A listener that needs the actual stored delta must track the relation around the callback; it cannot treat the event's `relationChange` as the clamped delta.
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
        int eventRelationChange,
        bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero,
        Hero originalGainedRelationWith)
    {
        if (detail == ChangeRelationAction.ChangeRelationDetail.Emissary && eventRelationChange != 0)
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
- ↓ Owner Action: [ChangeRelationAction](../ChangeRelationAction)
- ↔ Siblings: [ChangeKingdomActionDetail](../ChangeKingdomActionDetail)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Hero](../../campaign/Hero) · [DiplomacyModel](../DiplomacyModel)
