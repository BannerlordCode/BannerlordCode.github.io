---
title: "SiegeStrategyActionModel"
description: "Auto-generated class reference for SiegeStrategyActionModel."
---
# SiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeStrategyActionModel : MBGameModel<SiegeStrategyActionModel>`
**Base:** `MBGameModel<SiegeStrategyActionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs`

## Overview

`SiegeStrategyActionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeStrategyActionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLogicalActionForStrategy
`public abstract void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)`

**Purpose:** Reads and returns the `logical action for strategy` value held by the current object.

```csharp
// Obtain an instance of SiegeStrategyActionModel from the subsystem API first
SiegeStrategyActionModel siegeStrategyActionModel = ...;
siegeStrategyActionModel.GetLogicalActionForStrategy(side, siegeAction, siegeEngineType, deploymentIndex, reserveIndex);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SiegeStrategyActionModel instance = ...;
```

## See Also

- [Area Index](../)