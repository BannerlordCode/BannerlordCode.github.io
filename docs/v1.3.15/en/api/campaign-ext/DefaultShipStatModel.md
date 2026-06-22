<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultShipStatModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipStatModel : ShipStatModel`
**Base:** `ShipStatModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipStatModel.cs`

## Overview

`DefaultShipStatModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel())` to change how it computes.

## Key Methods

### GetShipFlagshipScore
```csharp
public override float GetShipFlagshipScore(Ship ship)
```

## Usage Example

```csharp
// Typical usage of DefaultShipStatModel (Model)
Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel());
```

## See Also

- [Complete Class Catalog](../catalog)