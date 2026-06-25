---
title: "DefaultDifficultyModel"
description: "Auto-generated class reference for DefaultDifficultyModel."
---
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## Overview

`DefaultDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
`public override float GetPlayerTroopsReceivedDamageMultiplier()`

**Purpose:** **Purpose:** Reads and returns the player troops received damage multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerTroopsReceivedDamageMultiplier();
```

### GetDamageToPlayerMultiplier
`public override float GetDamageToPlayerMultiplier()`

**Purpose:** **Purpose:** Reads and returns the damage to player multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetDamageToPlayerMultiplier();
```

### GetPlayerRecruitSlotBonus
`public override int GetPlayerRecruitSlotBonus()`

**Purpose:** **Purpose:** Reads and returns the player recruit slot bonus value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerRecruitSlotBonus();
```

### GetPlayerMapMovementSpeedBonusMultiplier
`public override float GetPlayerMapMovementSpeedBonusMultiplier()`

**Purpose:** **Purpose:** Reads and returns the player map movement speed bonus multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
```

### GetStealthDifficultyMultiplier
`public override float GetStealthDifficultyMultiplier()`

**Purpose:** **Purpose:** Reads and returns the stealth difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetStealthDifficultyMultiplier();
```

### GetDisguiseDifficultyMultiplier
`public override float GetDisguiseDifficultyMultiplier()`

**Purpose:** **Purpose:** Reads and returns the disguise difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetDisguiseDifficultyMultiplier();
```

### GetCombatAIDifficultyMultiplier
`public override float GetCombatAIDifficultyMultiplier()`

**Purpose:** **Purpose:** Reads and returns the combat a i difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetCombatAIDifficultyMultiplier();
```

### GetPersuasionBonusChance
`public override float GetPersuasionBonusChance()`

**Purpose:** **Purpose:** Reads and returns the persuasion bonus chance value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPersuasionBonusChance();
```

### GetClanMemberDeathChanceMultiplier
`public override float GetClanMemberDeathChanceMultiplier()`

**Purpose:** **Purpose:** Reads and returns the clan member death chance multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetClanMemberDeathChanceMultiplier();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## See Also

- [Area Index](../)