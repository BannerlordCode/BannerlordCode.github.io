<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipStatModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipStatModel : MBGameModel<ShipStatModel>`
**Base:** `MBGameModel<ShipStatModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipStatModel.cs`

## Overview

`ShipStatModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ShipStatModel>(new MyShipStatModel())` to change how it computes.

## Key Methods

### GetShipFlagshipScore
```csharp
public abstract float GetShipFlagshipScore(Ship ship)
```

## Usage Example

```csharp
// Typical usage of ShipStatModel (Model)
Game.Current.ReplaceModel<ShipStatModel>(new MyShipStatModel());
```

## See Also

- [Complete Class Catalog](../catalog)