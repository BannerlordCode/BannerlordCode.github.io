<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignShipDamageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`

## Overview

`DefaultCampaignShipDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCampaignShipDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHourlyShipDamage
`public override int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**Purpose:** Gets the current value of `hourly ship damage`.

### GetEstimatedSafeSailDuration
`public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**Purpose:** Gets the current value of `estimated safe sail duration`.

### GetShipDamage
`public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)`

**Purpose:** Gets the current value of `ship damage`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)