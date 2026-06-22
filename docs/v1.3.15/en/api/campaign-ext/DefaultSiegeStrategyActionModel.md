<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeStrategyActionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeStrategyActionModel : SiegeStrategyActionModel`
**Base:** `SiegeStrategyActionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeStrategyActionModel.cs`

## Overview

`DefaultSiegeStrategyActionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel())` to change how it computes.

## Key Methods

### GetLogicalActionForStrategy
```csharp
public override void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)
```

## Usage Example

```csharp
// Typical usage of DefaultSiegeStrategyActionModel (Model)
Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel());
```

## See Also

- [Complete Class Catalog](../catalog)