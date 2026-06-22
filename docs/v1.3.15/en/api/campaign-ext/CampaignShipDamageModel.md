<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignShipDamageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipDamageModel : MBGameModel<CampaignShipDamageModel>`
**Base:** `MBGameModel<CampaignShipDamageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipDamageModel.cs`

## Overview

`CampaignShipDamageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CampaignShipDamageModel>(new MyCampaignShipDamageModel())` to change how it computes.

## Key Methods

### GetHourlyShipDamage
```csharp
public abstract int GetHourlyShipDamage(MobileParty owner, Ship ship)
```

### GetEstimatedSafeSailDuration
```csharp
public abstract float GetEstimatedSafeSailDuration(MobileParty mobileParty)
```

### GetShipDamage
```csharp
public abstract float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)
```

## Usage Example

```csharp
// Typical usage of CampaignShipDamageModel (Model)
Game.Current.ReplaceModel<CampaignShipDamageModel>(new MyCampaignShipDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)