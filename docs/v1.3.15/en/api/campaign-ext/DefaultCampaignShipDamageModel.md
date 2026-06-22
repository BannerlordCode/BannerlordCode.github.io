<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignShipDamageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`

## Overview

`DefaultCampaignShipDamageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel())` to change how it computes.

## Key Methods

### GetHourlyShipDamage
```csharp
public override int GetHourlyShipDamage(MobileParty owner, Ship ship)
```

### GetEstimatedSafeSailDuration
```csharp
public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)
```

### GetShipDamage
```csharp
public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)
```

## Usage Example

```csharp
// Typical usage of DefaultCampaignShipDamageModel (Model)
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)