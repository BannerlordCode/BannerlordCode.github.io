<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipCostModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**Base:** `MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`

## Overview

`ShipCostModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ShipCostModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipTradeValue
`public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**Purpose:** Gets the current value of `ship trade value`.

### GetShipRepairCost
`public abstract float GetShipRepairCost(Ship ship)`

**Purpose:** Gets the current value of `ship repair cost`.

### GetShipUpgradeCost
`public abstract int GetShipUpgradeCost(Hero owner, Ship ship, ShipUpgradePiece piece)`

**Purpose:** Gets the current value of `ship upgrade cost`.

## Usage Example

```csharp
var implementation = new CustomShipCostModel();
```

## See Also

- [Complete Class Catalog](../catalog)