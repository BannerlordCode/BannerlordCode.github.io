<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignShipDamageModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipDamageModel : MBGameModel<CampaignShipDamageModel>`
**Base:** `MBGameModel<CampaignShipDamageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipDamageModel.cs`

## Overview

`CampaignShipDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CampaignShipDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHourlyShipDamage
`public abstract int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**Purpose:** Gets the current value of `hourly ship damage`.

### GetEstimatedSafeSailDuration
`public abstract float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**Purpose:** Gets the current value of `estimated safe sail duration`.

### GetShipDamage
`public abstract float GetShipDamage(Ship ship, float rawDamage)`

**Purpose:** Gets the current value of `ship damage`.

## Usage Example

```csharp
var implementation = new CustomCampaignShipDamageModel();
```

## See Also

- [Complete Class Catalog](../catalog)