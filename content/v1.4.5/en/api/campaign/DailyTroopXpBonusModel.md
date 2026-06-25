---
title: "DailyTroopXpBonusModel"
description: "Auto-generated class reference for DailyTroopXpBonusModel."
---
# DailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DailyTroopXpBonusModel : MBGameModel<DailyTroopXpBonusModel>`
**Base:** `MBGameModel<DailyTroopXpBonusModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DailyTroopXpBonusModel.cs`

## Overview

`DailyTroopXpBonusModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DailyTroopXpBonusModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyTroopXpBonus
`public abstract int CalculateDailyTroopXpBonus(Town town)`

**Purpose:** Calculates the current value or result of daily troop xp bonus.

```csharp
// Obtain an instance of DailyTroopXpBonusModel from the subsystem API first
DailyTroopXpBonusModel dailyTroopXpBonusModel = ...;
var result = dailyTroopXpBonusModel.CalculateDailyTroopXpBonus(town);
```

### CalculateGarrisonXpBonusMultiplier
`public abstract float CalculateGarrisonXpBonusMultiplier(Town town)`

**Purpose:** Calculates the current value or result of garrison xp bonus multiplier.

```csharp
// Obtain an instance of DailyTroopXpBonusModel from the subsystem API first
DailyTroopXpBonusModel dailyTroopXpBonusModel = ...;
var result = dailyTroopXpBonusModel.CalculateGarrisonXpBonusMultiplier(town);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DailyTroopXpBonusModel instance = ...;
```

## See Also

- [Area Index](../)