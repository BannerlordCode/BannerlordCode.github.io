---
title: "DefaultVillageTradeModel"
description: "Auto-generated class reference for DefaultVillageTradeModel."
---
# DefaultVillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTradeModel : VillageTradeModel`
**Base:** `VillageTradeModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVillageTradeModel.cs`

## Overview

`DefaultVillageTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVillageTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TradeBoundDistanceLimitAsDays
`public override float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Executes the TradeBoundDistanceLimitAsDays logic.

```csharp
// Obtain an instance of DefaultVillageTradeModel from the subsystem API first
DefaultVillageTradeModel defaultVillageTradeModel = ...;
var result = defaultVillageTradeModel.TradeBoundDistanceLimitAsDays(navigationType);
```

### GetTradeBoundToAssignForVillage
`public override Settlement GetTradeBoundToAssignForVillage(Village village)`

**Purpose:** **Purpose:** Reads and returns the trade bound to assign for village value held by the this instance.

```csharp
// Obtain an instance of DefaultVillageTradeModel from the subsystem API first
DefaultVillageTradeModel defaultVillageTradeModel = ...;
var result = defaultVillageTradeModel.GetTradeBoundToAssignForVillage(village);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel());
```

## See Also

- [Area Index](../)