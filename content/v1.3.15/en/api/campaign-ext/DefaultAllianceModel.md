---
title: "DefaultAllianceModel"
description: "Auto-generated class reference for DefaultAllianceModel."
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## Overview

`DefaultAllianceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAllianceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public override CampaignTime DurationForOffers { get; }` |

## Key Methods

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Reads and returns the `call to war cost` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, out TextObject explanationText, bool includeDescription = false)`

**Purpose:** Reads and returns the `score of starting alliance` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfStartingAlliance(kingdomDeclaresAlliance, kingdomDeclaredAlliance, evaluatingFaction, explanationText, false);
```

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of proposing starting alliance` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the `score of calling to war` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the `score of joining war` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfJoiningWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of calling to war` value held by the current object.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## See Also

- [Area Index](../)