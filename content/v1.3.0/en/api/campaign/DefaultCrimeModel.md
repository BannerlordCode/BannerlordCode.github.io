---
title: "DefaultCrimeModel"
description: "Auto-generated class reference for DefaultCrimeModel."
---
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## Overview

`DefaultCrimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCrimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**Purpose:** Returns a boolean answer to whether player have any crime rating is true for the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.DoesPlayerHaveAnyCrimeRating(faction);
```

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating severe state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingSevere(faction);
```

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating moderate state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingModerate(faction);
```

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating mild state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingMild(faction);
```

### GetCost
`public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**Purpose:** Reads and returns the cost value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCost(faction, paymentMethod, 0);
```

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily crime rating change value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetDailyCrimeRatingChange(faction, false);
```

### GetMaxCrimeRating
`public override float GetMaxCrimeRating()`

**Purpose:** Reads and returns the max crime rating value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMaxCrimeRating();
```

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction)`

**Purpose:** Reads and returns the min acceptable crime rating value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMinAcceptableCrimeRating(faction);
```

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment()`

**Purpose:** Reads and returns the crime rating after punishment value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCrimeRatingAfterPunishment();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## See Also

- [Area Index](../)