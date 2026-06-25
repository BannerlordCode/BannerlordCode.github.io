---
title: "SiegeStrategyActionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeStrategyActionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `logical action for strategy`.

## Usage Example

```csharp
var implementation = new CustomSiegeStrategyActionModel();
```

## See Also

- [Complete Class Catalog](../catalog)