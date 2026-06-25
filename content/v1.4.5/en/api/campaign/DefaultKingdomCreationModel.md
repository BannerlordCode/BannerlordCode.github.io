---
title: "DefaultKingdomCreationModel"
description: "Auto-generated class reference for DefaultKingdomCreationModel."
---
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultKingdomCreationModel.cs`

## Overview

`DefaultKingdomCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPlayerKingdomCreationPossible
`public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player kingdom creation possible state or condition.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomCreationPossible(explanations);
```

### IsPlayerKingdomAbdicationPossible
`public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player kingdom abdication possible state or condition.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomAbdicationPossible(explanations);
```

### GetAvailablePlayerKingdomCultures
`public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**Purpose:** **Purpose:** Reads and returns the available player kingdom cultures value held by the this instance.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.GetAvailablePlayerKingdomCultures();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel());
```

## See Also

- [Area Index](../)