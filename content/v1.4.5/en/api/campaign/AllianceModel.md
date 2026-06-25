---
title: "AllianceModel"
description: "Auto-generated class reference for AllianceModel."
---
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs`

## Overview

`AllianceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AllianceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## Key Methods

### GetCallToWarCost
`public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** **Purpose:** Reads and returns the call to war cost value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false)`

**Purpose:** **Purpose:** Reads and returns the score of starting alliance value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfStartingAlliance(kingdomDeclaresAlliance, kingdomDeclaredAlliance, explanation, false);
```

### GetSupportScoreOfStartingAllianceForClan
`public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false)`

**Purpose:** **Purpose:** Reads and returns the support score of starting alliance for clan value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetSupportScoreOfStartingAllianceForClan(kingdomDeclaresAlliance, kingdomDeclaredAlliance, evaluatingClan, explanation, false);
```

### GetScoreOfCallingToWar
`public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** **Purpose:** Reads and returns the score of calling to war value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** **Purpose:** Reads and returns the score of joining war value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfJoiningWar(offeringKingdom, kingdomToOfferToJoinWarWith, kingdomToOfferToJoinWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfProposingStartingAlliance
`public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** **Purpose:** Reads and returns the influence cost of proposing starting alliance value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetInfluenceCostOfCallingToWar
`public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** **Purpose:** Reads and returns the influence cost of calling to war value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

### CanMakeAlliance
`public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for make alliance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.CanMakeAlliance(kingdom, targetKingdom, evaluatingFaction, reason, false);
```

### GetAllianceFactorForDeclaringWar
`public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**Purpose:** **Purpose:** Reads and returns the alliance factor for declaring war value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetAllianceFactorForDeclaringWar(factionDeclaresWar, factionDeclaredWar);
```

### GetAllianceFactorForDeclaringPeace
`public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** **Purpose:** Reads and returns the alliance factor for declaring peace value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetAllianceFactorForDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetProposerClanForAllianceDecision
`public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**Purpose:** **Purpose:** Reads and returns the proposer clan for alliance decision value held by the this instance.

```csharp
// Obtain an instance of AllianceModel from the subsystem API first
AllianceModel allianceModel = ...;
var result = allianceModel.GetProposerClanForAllianceDecision(proposerKingdom, proposedKingdom);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AllianceModel instance = ...;
```

## See Also

- [Area Index](../)