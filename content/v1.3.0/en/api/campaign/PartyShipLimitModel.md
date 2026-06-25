---
title: "PartyShipLimitModel"
description: "Auto-generated class reference for PartyShipLimitModel."
---
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## Overview

`PartyShipLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyShipLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(MobileParty mobileParty)`

**Purpose:** **Purpose:** Reads and returns the ideal ship number value held by the this instance.

```csharp
// Obtain an instance of PartyShipLimitModel from the subsystem API first
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetIdealShipNumber(mobileParty);
```

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(Clan clan)`

**Purpose:** **Purpose:** Reads and returns the ideal ship number value held by the this instance.

```csharp
// Obtain an instance of PartyShipLimitModel from the subsystem API first
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetIdealShipNumber(clan);
```

### GetShipPriority
`public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**Purpose:** **Purpose:** Reads and returns the ship priority value held by the this instance.

```csharp
// Obtain an instance of PartyShipLimitModel from the subsystem API first
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetShipPriority(mobileParty, ship, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyShipLimitModel instance = ...;
```

## See Also

- [Area Index](../)