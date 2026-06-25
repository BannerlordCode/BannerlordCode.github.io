---
title: "DifficultyModel"
description: "Auto-generated class reference for DifficultyModel."
---
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## Overview

`DifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
`public abstract float GetPlayerTroopsReceivedDamageMultiplier()`

**Purpose:** Reads and returns the player troops received damage multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerTroopsReceivedDamageMultiplier();
```

### GetDamageToPlayerMultiplier
`public abstract float GetDamageToPlayerMultiplier()`

**Purpose:** Reads and returns the damage to player multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetDamageToPlayerMultiplier();
```

### GetPlayerRecruitSlotBonus
`public abstract int GetPlayerRecruitSlotBonus()`

**Purpose:** Reads and returns the player recruit slot bonus value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerRecruitSlotBonus();
```

### GetPlayerMapMovementSpeedBonusMultiplier
`public abstract float GetPlayerMapMovementSpeedBonusMultiplier()`

**Purpose:** Reads and returns the player map movement speed bonus multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
```

### GetCombatAIDifficultyMultiplier
`public abstract float GetCombatAIDifficultyMultiplier()`

**Purpose:** Reads and returns the combat a i difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetCombatAIDifficultyMultiplier();
```

### GetPersuasionBonusChance
`public abstract float GetPersuasionBonusChance()`

**Purpose:** Reads and returns the persuasion bonus chance value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetPersuasionBonusChance();
```

### GetClanMemberDeathChanceMultiplier
`public abstract float GetClanMemberDeathChanceMultiplier()`

**Purpose:** Reads and returns the clan member death chance multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetClanMemberDeathChanceMultiplier();
```

### GetStealthDifficultyMultiplier
`public abstract float GetStealthDifficultyMultiplier()`

**Purpose:** Reads and returns the stealth difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetStealthDifficultyMultiplier();
```

### GetDisguiseDifficultyMultiplier
`public abstract float GetDisguiseDifficultyMultiplier()`

**Purpose:** Reads and returns the disguise difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DifficultyModel from the subsystem API first
DifficultyModel difficultyModel = ...;
var result = difficultyModel.GetDisguiseDifficultyMultiplier();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DifficultyModel instance = ...;
```

## See Also

- [Area Index](../)