---
title: "LocationModel"
description: "Auto-generated class reference for LocationModel."
---
# LocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**Base:** `MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`

## Overview

`LocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `LocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSettlementUpgradeLevel
`public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**Purpose:** Reads and returns the settlement upgrade level value held by the this instance.

```csharp
// Obtain an instance of LocationModel from the subsystem API first
LocationModel locationModel = ...;
var result = locationModel.GetSettlementUpgradeLevel(locationEncounter);
```

### GetCivilianSceneLevel
`public abstract string GetCivilianSceneLevel(Settlement settlement)`

**Purpose:** Reads and returns the civilian scene level value held by the this instance.

```csharp
// Obtain an instance of LocationModel from the subsystem API first
LocationModel locationModel = ...;
var result = locationModel.GetCivilianSceneLevel(settlement);
```

### GetCivilianUpgradeLevelTag
`public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Reads and returns the civilian upgrade level tag value held by the this instance.

```csharp
// Obtain an instance of LocationModel from the subsystem API first
LocationModel locationModel = ...;
var result = locationModel.GetCivilianUpgradeLevelTag(0);
```

### GetUpgradeLevelTag
`public abstract string GetUpgradeLevelTag(int upgradeLevel)`

**Purpose:** Reads and returns the upgrade level tag value held by the this instance.

```csharp
// Obtain an instance of LocationModel from the subsystem API first
LocationModel locationModel = ...;
var result = locationModel.GetUpgradeLevelTag(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
LocationModel instance = ...;
```

## See Also

- [Area Index](../)