---
title: "VillageTradeModel"
description: "Auto-generated class reference for VillageTradeModel."
---
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VillageTradeModel.cs`

## Overview

`VillageTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VillageTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TradeBoundDistanceLimitAsDays
`public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**Purpose:** Executes the TradeBoundDistanceLimitAsDays logic.

```csharp
// Obtain an instance of VillageTradeModel from the subsystem API first
VillageTradeModel villageTradeModel = ...;
var result = villageTradeModel.TradeBoundDistanceLimitAsDays(navigationType);
```

### GetTradeBoundToAssignForVillage
`public abstract Settlement GetTradeBoundToAssignForVillage(Village village)`

**Purpose:** Reads and returns the trade bound to assign for village value held by the this instance.

```csharp
// Obtain an instance of VillageTradeModel from the subsystem API first
VillageTradeModel villageTradeModel = ...;
var result = villageTradeModel.GetTradeBoundToAssignForVillage(village);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VillageTradeModel instance = ...;
```

## See Also

- [Area Index](../)