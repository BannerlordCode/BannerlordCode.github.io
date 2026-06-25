---
title: "WallHitPointCalculationModel"
description: "Auto-generated class reference for WallHitPointCalculationModel."
---
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/WallHitPointCalculationModel.cs`

## Overview

`WallHitPointCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `WallHitPointCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMaximumWallHitPoint
`public abstract float CalculateMaximumWallHitPoint(Town town)`

**Purpose:** **Purpose:** Calculates the current value or result of maximum wall hit point.

```csharp
// Obtain an instance of WallHitPointCalculationModel from the subsystem API first
WallHitPointCalculationModel wallHitPointCalculationModel = ...;
var result = wallHitPointCalculationModel.CalculateMaximumWallHitPoint(town);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WallHitPointCalculationModel instance = ...;
```

## See Also

- [Area Index](../)