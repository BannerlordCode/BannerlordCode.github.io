---
title: "DefaultCharacterStatsModel"
description: "Auto-generated class reference for DefaultCharacterStatsModel."
---
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## Overview

`DefaultCharacterStatsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCharacterStatsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## Key Methods

### WoundedHitPointLimit
`public override int WoundedHitPointLimit(Hero hero)`

**Purpose:** Executes the WoundedHitPointLimit logic.

```csharp
// Obtain an instance of DefaultCharacterStatsModel from the subsystem API first
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.WoundedHitPointLimit(hero);
```

### GetTier
`public override int GetTier(CharacterObject character)`

**Purpose:** Reads and returns the tier value held by the this instance.

```csharp
// Obtain an instance of DefaultCharacterStatsModel from the subsystem API first
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.GetTier(character);
```

### MaxHitpoints
`public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**Purpose:** Executes the MaxHitpoints logic.

```csharp
// Obtain an instance of DefaultCharacterStatsModel from the subsystem API first
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.MaxHitpoints(character, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel());
```

## See Also

- [Area Index](../)