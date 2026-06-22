<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultIssueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`

## Overview

`DefaultIssueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public override int IssueOwnerCoolDownInDays { get; }` |

## Key Methods

### GetIssueDifficultyMultiplier
```csharp
public override float GetIssueDifficultyMultiplier()
```

### GetIssueEffectsOfSettlement
```csharp
public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfHero
```csharp
public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfClan
```csharp
public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)
```

### GetCausalityForHero
```csharp
public override ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetFailureRiskForHero
```csharp
public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetDurationOfResolutionForHero
```csharp
public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetTroopsRequiredForHero
```csharp
public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetIssueAlternativeSolutionSkill
```csharp
public override ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)
```

### CanTroopsReturnFromAlternativeSolution
```csharp
public override bool CanTroopsReturnFromAlternativeSolution()
```

## Usage Example

```csharp
// Typical usage of DefaultIssueModel (Model)
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## See Also

- [Complete Class Catalog](../catalog)