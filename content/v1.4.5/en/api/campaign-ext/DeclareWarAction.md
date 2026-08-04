---
title: "DeclareWarAction"
description: "Turns two live Campaign factions into enemies with a reason-specific Action, updating kingdom stagnation, map visibility, and the WarDeclared event."
---
# DeclareWarAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DeclareWarAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DeclareWarAction.cs`

## One-line responsibility

Changes the diplomatic state of two `IFaction` objects to war with an explicit `DeclareWarDetail`, then lets the rest of the campaign observe that same change through the war event.

## Mental model

This is the Campaign-layer **diplomatic state Action**. Each public `ApplyBy*` method maps a cause to the private `ApplyInternal`. The implementation first calls `FactionManager.DeclareWar(faction1, faction2)`, then adjusts a kingdom's `PoliticalStagnation` based on the two sides' fief counts, marks visible enemy Settlements and MobileParties dirty when the war involves the main hero's faction, and finally dispatches `CampaignEvents.WarDeclared` through `CampaignEventDispatcher`.

It does not decide whether war is advisable, calculate political cost, score a target, or pass a kingdom decision. Those are upstream responsibilities of [DiplomacyModel](../../campaign/DiplomacyModel), [GameModelsManager](../../core-extra/GameModelsManager/), [DeclareWarDecision](../../campaign/DeclareWarDecision), or a barterable. Call this Action only when an upstream flow has decided that two live Campaign factions should become enemies immediately.

## Dependencies and event cascade

```text
Campaign.Current
  -> IFaction / Kingdom / Clan
  -> DeclareWarAction.ApplyBy*
      -> FactionManager.DeclareWar
      -> Kingdom.PoliticalStagnation / visible Settlement + MobileParty visuals
      -> CampaignEventDispatcher.OnWarDeclared
          -> CampaignEvents.WarDeclared
          -> KingdomManager / quest and diplomacy listeners
```

- **Upstream state:** [Campaign](../../campaign/Campaign) must have initialized the diplomacy manager and event dispatcher; [Kingdom](../../campaign/Kingdom) and [Clan](../../campaign/Clan) provide the campaign faction semantics behind `IFaction`.
- **State writer:** [FactionManager](../../campaign/FactionManager) updates the war relation; this Action directly updates kingdom `PoliticalStagnation` and the map visual cache for the enemy side of a player war.
- **Downstream event:** [CampaignEvents](../../campaign/CampaignEvents) exposes `WarDeclared` as `IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail>`; [CampaignEventReceiver](../../campaign/CampaignEventReceiver) and [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) receive and route it.
- **Adjacent state Actions:** [ChangeKingdomAction](../ChangeKingdomAction) calls this Action during rebellion or kingdom-destruction cleanup; departure and war resolution may call [MakePeaceAction](../MakePeaceAction) in the opposite direction.
- **Rule calculation:** [FactionHelper](../../system/FactionHelper) helps find possible target kingdoms; `Campaign.Current.Models.DiplomacyModel` provides war scores and constant-war rules. Neither replaces `FactionManager.DeclareWar` as the world-state writer.

## Internal contract and cause enum

`ApplyInternal` is private; there is no public reasonless `Apply`. Every entry executes the same immediate state mutation, while giving listeners a different `DeclareWarDetail`:

| Entry | `DeclareWarDetail` | Real source or meaning |
|---|---|---|
| `ApplyByDefault(IFaction, IFaction)` | `Default` | A system-level declaration with no more specific source; used for post-departure declarations, barterables, and cheat entry points. |
| `ApplyByPlayerHostility(IFaction, IFaction)` | `CausedByPlayerHostility` | War caused by player hostility; used by `BeHostileAction`, conversations, and Issue behaviors. |
| `ApplyByKingdomDecision(IFaction, IFaction)` | `CausedByKingdomDecision` | Used when [DeclareWarDecision](../../campaign/DeclareWarDecision) concludes with war. |
| `ApplyByRebellion(IFaction, IFaction)` | `CausedByRebellion` | Used by rebellion behavior and the rebellion departure branch of [ChangeKingdomAction](../ChangeKingdomAction). |
| `ApplyByCrimeRatingChange(IFaction, IFaction)` | `CausedByCrimeRatingChange` | Used when [ChangeCrimeRatingAction](../ChangeCrimeRatingAction) reaches a war-triggering crime rating. |
| `ApplyByKingdomCreation(IFaction, IFaction)` | `CausedByKingdomCreation` | Used by [KingdomManager](../../campaign/KingdomManager) to declare the new kingdom's existing hostile relations. |
| `ApplyByClaimOnThrone(IFaction, IFaction)` | `CausedByClaimOnThrone` | Marks a war caused by a throne claim so listeners can distinguish it from ordinary war. |
| `ApplyByCallToWarAgreement(IFaction, IFaction)` | `CausedByCallToWarAgreement` | Used by [AllianceCampaignBehavior](../../campaign/AllianceCampaignBehavior) when a call-to-war agreement is fulfilled. |

`faction1` is the declaring side and `faction2` is the side declared against; that direction is passed unchanged to `FactionManager.DeclareWar` and `WarDeclared`. The Action has no success result, rollback object, or notification switch.

## State-change order

The source order determines what listeners can observe:

1. `FactionManager.DeclareWar(faction1, faction2)` establishes the war relation.
2. If a side is a kingdom and the other side's fief count exceeds the source threshold, the relevant kingdom's `PoliticalStagnation` is changed by `0.85 * current - 3` and clamped at zero.
3. If either side is `Hero.MainHero.MapFaction`, visible Settlements and MobileParties belonging to the other side receive `SetVisualAsDirty()`.
4. `CampaignEventDispatcher.Instance.OnWarDeclared` dispatches `WarDeclared` with both factions and the cause enum.

Consequently, a `WarDeclared` listener can already read the new war relation and the updated stagnation. For example, [KingdomManager](../../campaign/KingdomManager) increases the declaring faction's `Aggressiveness`, while Issue and Quest behaviors use `DeclareWarDetail` to cancel or fail related quests.

## Model versus Action

When the question is “can or should this faction declare war?”, use the Model or helper first:

- `Campaign.Current.Models.DiplomacyModel.GetScoreOfDeclaringWar` calculates a score and explanation; the real `DeclareWarBarterable.GetUnitValueForFaction` implementation obtains this score.
- `FactionHelper.GetPossibleKingdomsToDeclareWar(kingdom)` obtains candidate kingdoms; the result still needs the current diplomatic and gameplay checks.
- `DeclareWarDecision.ApplyChosenOutcome` calls `ApplyByKingdomDecision` only after the decision outcome is confirmed.

When the question is “make these two factions enemies now”, call this Action. Do not call it to change a score, and do not write a `StanceLink`, war list, or `Kingdom.PoliticalStagnation` directly; direct writes bypass events, map visual refresh, and downstream behaviors.

## Real acquisition paths

### Declare war from the current Campaign factions

`Clan.PlayerClan.MapFaction`, `Kingdom.All`, and `IsAtWarWith` are real campaign acquisition paths. Exclude invalid and already hostile targets before selecting the cause-specific entry:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void DeclareWarForPlayerHostility()
{
    if (Campaign.Current == null)
    {
        return;
    }

    IFaction declaringFaction = Clan.PlayerClan.MapFaction;
    IFaction targetFaction = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != declaringFaction && !kingdom.IsEliminated);

    if (targetFaction != null && !declaringFaction.IsAtWarWith(targetFaction))
    {
        DeclareWarAction.ApplyByPlayerHostility(
            declaringFaction, targetFaction);
    }
}
```

This call does not replace the player-hostility, kingdom-decision, or diplomacy-scoring flow. The example assumes those upstream checks are complete and only demonstrates how to obtain live factions from the current Campaign.

### Receive the cause from a Behavior

Long-lived mod logic should subscribe to static `CampaignEvents` instead of constructing a `CampaignEventReceiver` directly:

```csharp
using TaleWorlds.Library;

public override void RegisterEvents()
{
    CampaignEvents.WarDeclared.AddNonSerializedListener(
        this, OnWarDeclared);
}

private void OnWarDeclared(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail)
{
    if (detail == DeclareWarAction.DeclareWarDetail.CausedByKingdomDecision)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("A kingdom decision started a war."));
    }
}
```

`RegisterEvents()` must be called by a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) inside the campaign lifecycle; listener relationships are not save fields, and Behavior removal should follow the owner's lifecycle.

## Risks and consistency boundaries

- **Do not write the war relation directly:** Hand-editing a stance or list outside `FactionManager.DeclareWar` omits PoliticalStagnation, the player-side enemy visual cache, and `WarDeclared`, leaving Campaign, map, and UI with different states.
- **Check the relationship first:** The source Action has no result and no protection against an already active war. Ensure both inputs are live `IFaction` objects from the current Campaign, are not the same faction, and are not already at war; otherwise repeated events or unsupported downstream assumptions may result.
- **Events cascade:** `WarDeclared` reaches [KingdomManager](../../campaign/KingdomManager), Quest, Issue, and other Behaviors. Do not unconditionally declare another war or trigger the inverse diplomacy action from a listener, or relations can re-enter and oscillate.
- **The cause is behavioral data:** `DeclareWarDetail` is consumed by quests, logs, and diplomacy behaviors. Choosing the wrong `ApplyBy*` may still start a war while making later systems misread player hostility as a decision, or rebellion as a default war.
- **A Model is not a transaction:** A Model returns a score or rule explanation; it does not write the relation. Conversely, do not use the Action to probe a score. Finish the decision first, then call the Action once.
- **Timing and saves:** `FactionManager`, `CampaignEventDispatcher`, and the faction objects must be initialized. Do not call during incomplete loading, save writing, or the middle of kingdom/clan destruction; war relations, stagnation, and event results can all influence saved state.
- **Map events and visuals:** This Action only marks visible enemy Settlements and MobileParties dirty; it does not finish an active MapEvent. It is not a battle-resolution or peace substitute; use [MakePeaceAction](../MakePeaceAction) to end a war.

## Navigation

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [ChangeKingdomAction](../ChangeKingdomAction) · [MakePeaceAction](../MakePeaceAction) · [ChangeCrimeRatingAction](../ChangeCrimeRatingAction)
- **Related leaves:** [Campaign](../../campaign/Campaign) · [FactionManager](../../campaign/FactionManager) · [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [CampaignEvents](../../campaign/CampaignEvents) · [DiplomacyModel](../../campaign/DiplomacyModel) · [DeclareWarDecision](../../campaign/DeclareWarDecision) · [MakePeaceAction](../MakePeaceAction)
