---
title: "CharacterStatsModel"
description: "Auto-generated class reference for CharacterStatsModel."
---
# CharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**Base:** `MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## Overview

`CharacterStatsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CharacterStatsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public abstract int MaxCharacterTier { get; }` |

## Key Methods

### MaxHitpoints
`public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterStatsModel from the subsystem API first
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.MaxHitpoints(character, false);
```

### GetTier
`public abstract int GetTier(CharacterObject character)`

**Purpose:** Reads and returns the `tier` value held by the current object.

```csharp
// Obtain an instance of CharacterStatsModel from the subsystem API first
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.GetTier(character);
```

### WoundedHitPointLimit
`public abstract int WoundedHitPointLimit(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterStatsModel from the subsystem API first
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.WoundedHitPointLimit(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CharacterStatsModel instance = ...;
```

## See Also

- [Area Index](../)