<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**Base:** `MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`

## Overview

`IssueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<IssueModel>(new MyIssueModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays { get; }` |

## Key Methods

### GetIssueDifficultyMultiplier
```csharp
public abstract float GetIssueDifficultyMultiplier()
```

### GetIssueEffectsOfSettlement
```csharp
public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfHero
```csharp
public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfClan
```csharp
public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)
```

### GetCausalityForHero
```csharp
public abstract ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetFailureRiskForHero
```csharp
public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetDurationOfResolutionForHero
```csharp
public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetTroopsRequiredForHero
```csharp
public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### CanTroopsReturnFromAlternativeSolution
```csharp
public abstract bool CanTroopsReturnFromAlternativeSolution()
```

### GetIssueAlternativeSolutionSkill
```csharp
public abstract ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)
```

## Usage Example

```csharp
// Typical usage of IssueModel (Model)
Game.Current.ReplaceModel<IssueModel>(new MyIssueModel());
```

## See Also

- [Complete Class Catalog](../catalog)