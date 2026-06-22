<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultShipCostModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**Base:** `ShipCostModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs`

## Overview

`DefaultShipCostModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel())` to change how it computes.

## Key Methods

### GetShipTradeValue
```csharp
public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)
```

### GetShipRepairCost
```csharp
public override float GetShipRepairCost(Ship ship, PartyBase owner)
```

### GetShipUpgradePieceCost
```csharp
public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)
```

### GetShipSellingPenalty
```csharp
public override float GetShipSellingPenalty()
```

## Usage Example

```csharp
// Typical usage of DefaultShipCostModel (Model)
Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel());
```

## See Also

- [Complete Class Catalog](../catalog)