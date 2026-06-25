---
title: "DefaultAllianceModel"
description: "Auto-generated class reference for DefaultAllianceModel."
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAllianceModel.cs`

## Overview

`DefaultAllianceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAllianceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Reads and returns the call to war cost value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom, Kingdom queriedKingdom, out TextObject explanationText, bool includeDescription = false)`

**Purpose:** Reads and returns the score of starting alliance value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfStartingAlliance(querierKingdom, queriedKingdom, explanationText, false);
```

### GetSupportScoreOfStartingAllianceForClan
`public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom, Kingdom queriedKingdom, Clan evaluatingClan, out TextObject explanationText, bool includeDescriptions = false)`

**Purpose:** Reads and returns the support score of starting alliance for clan value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetSupportScoreOfStartingAllianceForClan(querierKingdom, queriedKingdom, evaluatingClan, explanationText, false);
```

### CanMakeAlliance
`public override bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the this instance meets the preconditions for make alliance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.CanMakeAlliance(kingdom, targetKingdom, evaluatingFaction, reason, false);
```

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** Reads and returns the influence cost of proposing starting alliance value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the score of calling to war value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the score of joining war value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfJoiningWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** Reads and returns the influence cost of calling to war value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

### GetAllianceFactorForDeclaringWar
`public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**Purpose:** Reads and returns the alliance factor for declaring war value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetAllianceFactorForDeclaringWar(factionDeclaresWar, factionDeclaredWar);
```

### GetAllianceFactorForDeclaringPeace
`public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Reads and returns the alliance factor for declaring peace value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetAllianceFactorForDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetProposerClanForAllianceDecision
`public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**Purpose:** Reads and returns the proposer clan for alliance decision value held by the this instance.

```csharp
// Obtain an instance of DefaultAllianceModel from the subsystem API first
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetProposerClanForAllianceDecision(proposerKingdom, proposedKingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## See Also

- [Area Index](../)