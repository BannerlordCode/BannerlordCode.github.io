---
title: "CampaignShipDamageModel"
description: "Auto-generated class reference for CampaignShipDamageModel."
---
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

**Purpose:** Reads and returns the `hourly ship damage` value held by the current object.

```csharp
// Obtain an instance of CampaignShipDamageModel from the subsystem API first
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetHourlyShipDamage(owner, ship);
```

### GetEstimatedSafeSailDuration
`public abstract float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**Purpose:** Reads and returns the `estimated safe sail duration` value held by the current object.

```csharp
// Obtain an instance of CampaignShipDamageModel from the subsystem API first
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
```

### GetShipDamage
`public abstract float GetShipDamage(Ship ship, float rawDamage)`

**Purpose:** Reads and returns the `ship damage` value held by the current object.

```csharp
// Obtain an instance of CampaignShipDamageModel from the subsystem API first
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetShipDamage(ship, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CampaignShipDamageModel instance = ...;
```

## See Also

- [Area Index](../)