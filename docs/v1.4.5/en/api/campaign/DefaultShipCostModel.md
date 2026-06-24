<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultShipCostModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**Base:** `ShipCostModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultShipCostModel.cs`

## Overview

`DefaultShipCostModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultShipCostModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipTradeValue
`public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)`

**Purpose:** Gets the current value of `ship trade value`.

### GetShipRepairCost
`public override float GetShipRepairCost(Ship ship, PartyBase owner)`

**Purpose:** Gets the current value of `ship repair cost`.

### GetShipUpgradePieceCost
`public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)`

**Purpose:** Gets the current value of `ship upgrade piece cost`.

### GetShipSellingPenalty
`public override float GetShipSellingPenalty()`

**Purpose:** Gets the current value of `ship selling penalty`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel());
```

## See Also

- [Complete Class Catalog](../catalog)