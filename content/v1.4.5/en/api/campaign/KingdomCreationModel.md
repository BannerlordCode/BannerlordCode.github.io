---
title: "KingdomCreationModel"
description: "Auto-generated class reference for KingdomCreationModel."
---
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/KingdomCreationModel.cs`

## Overview

`KingdomCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `KingdomCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## Key Methods

### IsPlayerKingdomCreationPossible
`public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**Purpose:** Determines whether the this instance is in the player kingdom creation possible state or condition.

```csharp
// Obtain an instance of KingdomCreationModel from the subsystem API first
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.IsPlayerKingdomCreationPossible(explanations);
```

### IsPlayerKingdomAbdicationPossible
`public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**Purpose:** Determines whether the this instance is in the player kingdom abdication possible state or condition.

```csharp
// Obtain an instance of KingdomCreationModel from the subsystem API first
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.IsPlayerKingdomAbdicationPossible(explanations);
```

### GetAvailablePlayerKingdomCultures
`public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**Purpose:** Reads and returns the available player kingdom cultures value held by the this instance.

```csharp
// Obtain an instance of KingdomCreationModel from the subsystem API first
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.GetAvailablePlayerKingdomCultures();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KingdomCreationModel instance = ...;
```

## See Also

- [Area Index](../)