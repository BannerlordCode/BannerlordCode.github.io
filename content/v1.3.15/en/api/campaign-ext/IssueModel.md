---
title: "IssueModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**Base:** `MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`

## Overview

`IssueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `IssueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays { get; }` |

## Key Methods

### GetIssueDifficultyMultiplier
`public abstract float GetIssueDifficultyMultiplier()`

**Purpose:** Gets the current value of `issue difficulty multiplier`.

### GetIssueEffectsOfSettlement
`public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effects of settlement`.

### GetIssueEffectOfHero
`public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effect of hero`.

### GetIssueEffectOfClan
`public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `issue effect of clan`.

### GetCausalityForHero
`public abstract ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `causality for hero`.

### GetFailureRiskForHero
`public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `failure risk for hero`.

### GetDurationOfResolutionForHero
`public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `duration of resolution for hero`.

### GetTroopsRequiredForHero
`public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Gets the current value of `troops required for hero`.

### CanTroopsReturnFromAlternativeSolution
`public abstract bool CanTroopsReturnFromAlternativeSolution()`

**Purpose:** Checks whether the current object can `troops return from alternative solution`.

### GetIssueAlternativeSolutionSkill
`public abstract ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)`

**Purpose:** Gets the current value of `issue alternative solution skill`.

## Usage Example

```csharp
var implementation = new CustomIssueModel();
```

## See Also

- [Complete Class Catalog](../catalog)