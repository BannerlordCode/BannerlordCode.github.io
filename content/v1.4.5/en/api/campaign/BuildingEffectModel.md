---
title: "BuildingEffectModel"
description: "Auto-generated class reference for BuildingEffectModel."
---
# BuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>`
**Base:** `MBGameModel<BuildingEffectModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingEffectModel.cs`

## Overview

`BuildingEffectModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingEffectModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBuildingEffect
`public abstract ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)`

**Purpose:** Reads and returns the building effect value held by the this instance.

```csharp
// Obtain an instance of BuildingEffectModel from the subsystem API first
BuildingEffectModel buildingEffectModel = ...;
var result = buildingEffectModel.GetBuildingEffect(building, effect);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BuildingEffectModel instance = ...;
```

## See Also

- [Area Index](../)