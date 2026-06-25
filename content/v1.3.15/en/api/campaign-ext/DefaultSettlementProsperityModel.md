---
title: "DefaultSettlementProsperityModel"
description: "Auto-generated class reference for DefaultSettlementProsperityModel."
---
# DefaultSettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**Base:** `SettlementProsperityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs`

## Overview

`DefaultSettlementProsperityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementProsperityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateProsperityChange
`public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of prosperity change.

```csharp
// Obtain an instance of DefaultSettlementProsperityModel from the subsystem API first
DefaultSettlementProsperityModel defaultSettlementProsperityModel = ...;
var result = defaultSettlementProsperityModel.CalculateProsperityChange(fortification, false);
```

### CalculateHearthChange
`public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of hearth change.

```csharp
// Obtain an instance of DefaultSettlementProsperityModel from the subsystem API first
DefaultSettlementProsperityModel defaultSettlementProsperityModel = ...;
var result = defaultSettlementProsperityModel.CalculateHearthChange(village, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel());
```

## See Also

- [Area Index](../)