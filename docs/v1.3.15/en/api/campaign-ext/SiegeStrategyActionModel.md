<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeStrategyActionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeStrategyActionModel : MBGameModel<SiegeStrategyActionModel>`
**Base:** `MBGameModel<SiegeStrategyActionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs`

## Overview

`SiegeStrategyActionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SiegeStrategyActionModel>(new MySiegeStrategyActionModel())` to change how it computes.

## Key Methods

### GetLogicalActionForStrategy
```csharp
public abstract void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)
```

## Usage Example

```csharp
// Typical usage of SiegeStrategyActionModel (Model)
Game.Current.ReplaceModel<SiegeStrategyActionModel>(new MySiegeStrategyActionModel());
```

## See Also

- [Complete Class Catalog](../catalog)