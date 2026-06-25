---
title: "DefaultPartyShipLimitModel"
description: "Auto-generated class reference for DefaultPartyShipLimitModel."
---
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyShipLimitModel.cs`

## Overview

`DefaultPartyShipLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyShipLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIdealShipNumber
`public override int GetIdealShipNumber(MobileParty mobileParty)`

**Purpose:** Reads and returns the ideal ship number value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyShipLimitModel from the subsystem API first
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetIdealShipNumber(mobileParty);
```

### GetIdealShipNumber
`public override int GetIdealShipNumber(Clan clan)`

**Purpose:** Reads and returns the ideal ship number value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyShipLimitModel from the subsystem API first
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetIdealShipNumber(clan);
```

### GetShipPriority
`public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**Purpose:** Reads and returns the ship priority value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyShipLimitModel from the subsystem API first
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetShipPriority(mobileParty, ship, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## See Also

- [Area Index](../)