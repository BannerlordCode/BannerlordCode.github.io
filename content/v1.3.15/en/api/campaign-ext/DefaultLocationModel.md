---
title: "DefaultLocationModel"
description: "Auto-generated class reference for DefaultLocationModel."
---
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`

## Overview

`DefaultLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSettlementUpgradeLevel
`public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**Purpose:** Reads and returns the settlement upgrade level value held by the this instance.

```csharp
// Obtain an instance of DefaultLocationModel from the subsystem API first
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetSettlementUpgradeLevel(locationEncounter);
```

### GetCivilianSceneLevel
`public override string GetCivilianSceneLevel(Settlement settlement)`

**Purpose:** Reads and returns the civilian scene level value held by the this instance.

```csharp
// Obtain an instance of DefaultLocationModel from the subsystem API first
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetCivilianSceneLevel(settlement);
```

### GetCivilianUpgradeLevelTag
`public override string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Reads and returns the civilian upgrade level tag value held by the this instance.

```csharp
// Obtain an instance of DefaultLocationModel from the subsystem API first
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetCivilianUpgradeLevelTag(0);
```

### GetUpgradeLevelTag
`public override string GetUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Reads and returns the upgrade level tag value held by the this instance.

```csharp
// Obtain an instance of DefaultLocationModel from the subsystem API first
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetUpgradeLevelTag(0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## See Also

- [Area Index](../)