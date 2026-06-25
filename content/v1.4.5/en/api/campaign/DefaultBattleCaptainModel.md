---
title: "DefaultBattleCaptainModel"
description: "Auto-generated class reference for DefaultBattleCaptainModel."
---
# DefaultBattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**Base:** `BattleCaptainModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBattleCaptainModel.cs`

## Overview

`DefaultBattleCaptainModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBattleCaptainModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCaptainRatingForTroopUsages
`public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**Purpose:** Reads and returns the captain rating for troop usages value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleCaptainModel from the subsystem API first
DefaultBattleCaptainModel defaultBattleCaptainModel = ...;
var result = defaultBattleCaptainModel.GetCaptainRatingForTroopUsages(hero, flag, compatiblePerks);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel());
```

## See Also

- [Area Index](../)