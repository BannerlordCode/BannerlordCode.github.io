<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultIssueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`

## Overview

`DefaultIssueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultIssueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public override int IssueOwnerCoolDownInDays { get; }` |

## Key Methods

### GetIssueDifficultyMultiplier
`public override float GetIssueDifficultyMultiplier()`

**Purpose:** Gets the current value of `issue difficulty multiplier`.

### GetIssueEffectsOfSettlement
`public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effects of settlement`.

### GetIssueEffectOfHero
`public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effect of hero`.

### GetIssueEffectOfClan
`public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effect of clan`.

### GetCausalityForHero
`public override ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `causality for hero`.

### GetFailureRiskForHero
`public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `failure risk for hero`.

### GetDurationOfResolutionForHero
`public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `duration of resolution for hero`.

### GetTroopsRequiredForHero
`public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `troops required for hero`.

### GetIssueAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)`

**Purpose:** Gets the current value of `issue alternative solution skill`.

### CanTroopsReturnFromAlternativeSolution
`public override bool CanTroopsReturnFromAlternativeSolution()`

**Purpose:** Checks whether the current object can `troops return from alternative solution`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## See Also

- [Complete Class Catalog](../catalog)