---
title: "DiplomacyModel"
description: "Scores diplomacy decisions and relation-based costs without applying war, peace, or kingdom membership changes."
---
# DiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`  
**Base:** `MBGameModel<DiplomacyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultDiplomacyModel.cs`

## One-line job

`DiplomacyModel` evaluates war, peace, clan membership, influence costs, relations, and faction value. It supplies scores and eligibility; it never declares war, makes peace, joins a kingdom, or changes a relation by itself.

## Mental Model

Diplomacy is a two-stage pipeline. Decision code asks the model for a score, threshold, cost, or explanation. A decision/Action then applies the chosen result and dispatches campaign events. The same model is read by AI helpers, kingdom-management ViewModels, conversations, and alliance models, so a method may run many times before a decision is accepted. Any side effect in a score method therefore becomes a duplicated world change.

```text
Clan / Kingdom / IFaction state
          |
          v
Campaign.Current.Models.DiplomacyModel
          |
          +--> score, threshold, cost, relation, stance
          |
          v
AI / decision VM / conversation preview
          |
          v
DeclareWarAction / MakePeaceAction / ChangeKingdomAction
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the diplomacy model registry and faction state. |
| [`Clan`](../../campaign/Clan) / [`Kingdom`](../../campaign/Kingdom) | Supply political strength, membership, settlements, and relations. |
| [`Hero`](../../campaign/Hero) | Supplies relation and marriage/value inputs. |
| [`ExplainedNumber`](../ExplainedNumber) | Carries war-progress and score explanations. |

### Downstream

| Type | Relation |
| --- | --- |
| [`ChangeKingdomAction`](../ChangeKingdomAction) | Applies join/leave decisions after scoring. |
| [`DeclareWarAction`](../DeclareWarAction) / [`MakePeaceAction`](../MakePeaceAction) | Apply faction-state changes. |
| `KingdomClanVM` / `KingdomArmyVM` | Display influence costs and options. |
| `DefaultAllianceModel` | Uses war scores and decision thresholds. |

## Key contract

| Member family | Purpose | Timing |
| --- | --- | --- |
| `GetScoreOfDeclaringWar` / `GetScoreOfDeclaringPeace` | Score a proposed faction decision and optional reason. | AI and decision preview |
| `GetWarProgressScore` | Explain relative war progress. | Peace decision UI |
| `GetInfluenceCostOf*` | Return policy costs for kingdom/army decisions. | ViewModel and decision creation |
| `GetScoreOfClanToJoinKingdom` / `GetScoreOfClanToLeaveKingdom` | Evaluate membership changes. | Kingdom diplomacy |
| `GetEffectiveRelation` / `GetBaseRelation` | Resolve relation through effective heroes. | Conversations and AI |
| `GetDefaultDiplomaticStance` | Provide stance when no explicit stance exists. | Faction queries |

## Real access paths

```csharp
public ExplainedNumber ExplainWarProgress(IFaction source, IFaction target)
{
    return Campaign.Current.Models.DiplomacyModel
        .GetWarProgressScore(source, target, includeDescriptions: true);
}
```

`MakePeaceDecisionItemVM` uses this method for both sides before showing a decision. Costs are similarly read-only:

```csharp
int annexCost = Campaign.Current.Models.DiplomacyModel
    .GetInfluenceCostOfAnnexation(Clan.PlayerClan);
bool canGift = Campaign.Current.Models.DiplomacyModel
    .CanSettlementBeGifted(selectedSettlement);
```

The subsequent Action owns list updates, war tables, notifications, and save consistency. A score method must remain safe when called repeatedly for previews.

## Replacement rules

- Keep scores and costs deterministic and bounded; preserve the default relation limits.
- Return a meaningful `out TextObject reason` when `includeReason` is requested.
- Treat `IFaction` inputs as possibly clan, kingdom, minor faction, or null in edge paths.
- Delegate to vanilla first when adding a mod preference; do not recalculate all war rules from a stale version.
- Apply the chosen result with the matching Action, never from a model method.

## Risks and debugging order

1. **Preview side effects:** kingdom screens call cost and score methods repeatedly; mutations here duplicate wars or influence changes.
2. **Faction asymmetry:** `GetScoreOfDeclaringWar` and `GetScoreOfDeclaringPeace` have different argument semantics; do not swap them.
3. **Relation scope:** `GetEffectiveRelation` can resolve a clan/hero proxy; direct relation field edits bypass events.
4. **Missing campaign:** title screen and load phases do not have the registry.
5. **Version drift:** new barter groups or naval stances should be preserved by delegating to the installed default model.

## Navigation

- [Campaign-ext models family](../models/)
- [Clan](../../campaign/Clan)
- [Kingdom](../../campaign/Kingdom)
- [DeclareWarAction](../DeclareWarAction)
- [MakePeaceAction](../MakePeaceAction)
- [ChangeKingdomAction](../ChangeKingdomAction)
