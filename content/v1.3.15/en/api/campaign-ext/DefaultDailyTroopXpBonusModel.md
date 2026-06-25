---
title: "DefaultDailyTroopXpBonusModel"
description: "Auto-generated class reference for DefaultDailyTroopXpBonusModel."
---
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## Overview

`DefaultDailyTroopXpBonusModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDailyTroopXpBonusModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyTroopXpBonus
`public override int CalculateDailyTroopXpBonus(Town town)`

**Purpose:** Calculates the current value or result of daily troop xp bonus.

```csharp
// Obtain an instance of DefaultDailyTroopXpBonusModel from the subsystem API first
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateDailyTroopXpBonus(town);
```

### CalculateGarrisonXpBonusMultiplier
`public override float CalculateGarrisonXpBonusMultiplier(Town town)`

**Purpose:** Calculates the current value or result of garrison xp bonus multiplier.

```csharp
// Obtain an instance of DefaultDailyTroopXpBonusModel from the subsystem API first
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateGarrisonXpBonusMultiplier(town);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## See Also

- [Area Index](../)