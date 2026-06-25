---
title: "DefaultSiegeStrategyActionModel"
description: "Auto-generated class reference for DefaultSiegeStrategyActionModel."
---
# DefaultSiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeStrategyActionModel : SiegeStrategyActionModel`
**Base:** `SiegeStrategyActionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeStrategyActionModel.cs`

## Overview

`DefaultSiegeStrategyActionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeStrategyActionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLogicalActionForStrategy
`public override void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)`

**Purpose:** **Purpose:** Reads and returns the logical action for strategy value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeStrategyActionModel from the subsystem API first
DefaultSiegeStrategyActionModel defaultSiegeStrategyActionModel = ...;
defaultSiegeStrategyActionModel.GetLogicalActionForStrategy(side, siegeAction, siegeEngineType, deploymentIndex, reserveIndex);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel());
```

## See Also

- [Area Index](../)