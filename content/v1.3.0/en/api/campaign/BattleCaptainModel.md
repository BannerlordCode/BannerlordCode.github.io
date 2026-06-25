---
title: "BattleCaptainModel"
description: "Auto-generated class reference for BattleCaptainModel."
---
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleCaptainModel.cs`

## Overview

`BattleCaptainModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleCaptainModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCaptainRatingForTroopUsages
`public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**Purpose:** Reads and returns the captain rating for troop usages value held by the this instance.

```csharp
// Obtain an instance of BattleCaptainModel from the subsystem API first
BattleCaptainModel battleCaptainModel = ...;
var result = battleCaptainModel.GetCaptainRatingForTroopUsages(hero, flag, compatiblePerks);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleCaptainModel instance = ...;
```

## See Also

- [Area Index](../)