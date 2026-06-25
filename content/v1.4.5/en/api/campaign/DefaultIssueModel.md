---
title: "DefaultIssueModel"
description: "Auto-generated class reference for DefaultIssueModel."
---
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultIssueModel.cs`

## Overview

`DefaultIssueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultIssueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIssueDifficultyMultiplier
`public override float GetIssueDifficultyMultiplier()`

**Purpose:** Reads and returns the `issue difficulty multiplier` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetIssueDifficultyMultiplier();
```

### GetIssueEffectsOfSettlement
`public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effects of settlement` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectsOfSettlement(issueEffect, settlement, explainedNumber);
```

### GetIssueEffectOfHero
`public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effect of hero` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectOfHero(issueEffect, hero, explainedNumber);
```

### GetIssueEffectOfClan
`public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `issue effect of clan` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
defaultIssueModel.GetIssueEffectOfClan(issueEffect, clan, explainedNumber);
```

### GetFailureRiskForHero
`public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `failure risk for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetFailureRiskForHero(alternativeSolutionHero, issue);
```

### GetDurationOfResolutionForHero
`public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `duration of resolution for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetDurationOfResolutionForHero(alternativeSolutionHero, issue);
```

### GetTroopsRequiredForHero
`public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**Purpose:** Reads and returns the `troops required for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.GetTroopsRequiredForHero(alternativeSolutionHero, issue);
```

### CanTroopsReturnFromAlternativeSolution
`public override bool CanTroopsReturnFromAlternativeSolution()`

**Purpose:** Checks whether the current object meets the preconditions for `troops return from alternative solution`.

```csharp
// Obtain an instance of DefaultIssueModel from the subsystem API first
DefaultIssueModel defaultIssueModel = ...;
var result = defaultIssueModel.CanTroopsReturnFromAlternativeSolution();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## See Also

- [Area Index](../)