---
title: "CrimeModel"
description: "Auto-generated class reference for CrimeModel."
---
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CrimeModel.cs`

## Overview

`CrimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CrimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

**Purpose:** Reads and returns the max crime rating value held by the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.GetMaxCrimeRating();
```

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

**Purpose:** Reads and returns the min acceptable crime rating value held by the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.GetMinAcceptableCrimeRating(faction);
```

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

**Purpose:** Reads and returns the crime rating after punishment value held by the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.GetCrimeRatingAfterPunishment();
```

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**Purpose:** Returns a boolean answer to whether player have any crime rating is true for the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.DoesPlayerHaveAnyCrimeRating(faction);
```

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating severe state or condition.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingSevere(faction);
```

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating moderate state or condition.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingModerate(faction);
```

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating mild state or condition.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingMild(faction);
```

### GetCost
`public abstract float GetCost(IFaction faction, PaymentMethod paymentMethod, float minimumCrimeRating)`

**Purpose:** Reads and returns the cost value held by the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.GetCost(faction, paymentMethod, 0);
```

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily crime rating change value held by the this instance.

```csharp
// Obtain an instance of CrimeModel from the subsystem API first
CrimeModel crimeModel = ...;
var result = crimeModel.GetDailyCrimeRatingChange(faction, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CrimeModel instance = ...;
```

## See Also

- [Area Index](../)