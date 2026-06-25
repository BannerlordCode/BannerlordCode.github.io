---
title: "IssueModel"
description: "Auto-generated class reference for IssueModel."
---
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

**Purpose:** Reads and returns the `issue difficulty multiplier` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetIssueDifficultyMultiplier();
```

### GetIssueEffectsOfSettlement
`public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effects of settlement` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
issueModel.GetIssueEffectsOfSettlement(issueEffect, settlement, explainedNumber);
```

### GetIssueEffectOfHero
`public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effect of hero` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
issueModel.GetIssueEffectOfHero(issueEffect, hero, explainedNumber);
```

### GetIssueEffectOfClan
`public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effect of clan` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
issueModel.GetIssueEffectOfClan(issueEffect, clan, explainedNumber);
```

### GetCausalityForHero
`public abstract ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `causality for hero` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetCausalityForHero(alternativeSolutionHero, issue);
```

### GetFailureRiskForHero
`public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `failure risk for hero` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetFailureRiskForHero(alternativeSolutionHero, issue);
```

### GetDurationOfResolutionForHero
`public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `duration of resolution for hero` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetDurationOfResolutionForHero(alternativeSolutionHero, issue);
```

### GetTroopsRequiredForHero
`public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `troops required for hero` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetTroopsRequiredForHero(alternativeSolutionHero, issue);
```

### CanTroopsReturnFromAlternativeSolution
`public abstract bool CanTroopsReturnFromAlternativeSolution()`

**Purpose:** Checks whether the current object meets the preconditions for `troops return from alternative solution`.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.CanTroopsReturnFromAlternativeSolution();
```

### GetIssueAlternativeSolutionSkill
`public abstract ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)`

**Purpose:** Reads and returns the `issue alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of IssueModel from the subsystem API first
IssueModel issueModel = ...;
var result = issueModel.GetIssueAlternativeSolutionSkill(hero, issue);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
IssueModel instance = ...;
```

## See Also

- [Area Index](../)