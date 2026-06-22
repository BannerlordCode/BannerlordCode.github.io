<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipCostModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**Base:** `MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`

## Overview

`ShipCostModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ShipCostModel>(new MyShipCostModel())` to change how it computes.

## Key Methods

### GetShipTradeValue
```csharp
public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)
```

### GetShipRepairCost
```csharp
public abstract float GetShipRepairCost(Ship ship, PartyBase owner)
```

### GetShipUpgradePieceCost
```csharp
public abstract int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)
```

### GetShipSellingPenalty
```csharp
public abstract float GetShipSellingPenalty()
```

## Usage Example

```csharp
// Typical usage of ShipCostModel (Model)
Game.Current.ReplaceModel<ShipCostModel>(new MyShipCostModel());
```

## See Also

- [Complete Class Catalog](../catalog)