---
title: "DefaultWallHitPointCalculationModel"
description: "Auto-generated class reference for DefaultWallHitPointCalculationModel."
---
# DefaultWallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWallHitPointCalculationModel : WallHitPointCalculationModel`
**Base:** `WallHitPointCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWallHitPointCalculationModel.cs`

## Overview

`DefaultWallHitPointCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultWallHitPointCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaximumWallHitPoint
`public override float CalculateMaximumWallHitPoint(Town town)`

**Purpose:** Calculates the current value or result of `maximum wall hit point`.

```csharp
// Obtain an instance of DefaultWallHitPointCalculationModel from the subsystem API first
DefaultWallHitPointCalculationModel defaultWallHitPointCalculationModel = ...;
var result = defaultWallHitPointCalculationModel.CalculateMaximumWallHitPoint(town);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel());
```

## See Also

- [Area Index](../)