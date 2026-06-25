---
title: "DefaultBuildingEffectModel"
description: "Auto-generated class reference for DefaultBuildingEffectModel."
---
# DefaultBuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**Base:** `BuildingEffectModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingEffectModel.cs`

## Overview

`DefaultBuildingEffectModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBuildingEffectModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBuildingEffect
`public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)`

**Purpose:** Reads and returns the `building effect` value held by the current object.

```csharp
// Obtain an instance of DefaultBuildingEffectModel from the subsystem API first
DefaultBuildingEffectModel defaultBuildingEffectModel = ...;
var result = defaultBuildingEffectModel.GetBuildingEffect(building, effect);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel());
```

## See Also

- [Area Index](../)