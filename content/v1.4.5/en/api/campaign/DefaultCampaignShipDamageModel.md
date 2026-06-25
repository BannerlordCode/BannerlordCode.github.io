---
title: "DefaultCampaignShipDamageModel"
description: "Auto-generated class reference for DefaultCampaignShipDamageModel."
---
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCampaignShipDamageModel.cs`

## Overview

`DefaultCampaignShipDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCampaignShipDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHourlyShipDamage
`public override int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**Purpose:** Reads and returns the hourly ship damage value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipDamageModel from the subsystem API first
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetHourlyShipDamage(owner, ship);
```

### GetEstimatedSafeSailDuration
`public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**Purpose:** Reads and returns the estimated safe sail duration value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipDamageModel from the subsystem API first
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
```

### GetShipDamage
`public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)`

**Purpose:** Reads and returns the ship damage value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignShipDamageModel from the subsystem API first
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetShipDamage(ship, rammingShip, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## See Also

- [Area Index](../)