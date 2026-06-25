---
title: "SettlementProsperityModel"
description: "Auto-generated class reference for SettlementProsperityModel."
---
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementProsperityModel.cs`

## Overview

`SettlementProsperityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementProsperityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateProsperityChange
`public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of prosperity change.

```csharp
// Obtain an instance of SettlementProsperityModel from the subsystem API first
SettlementProsperityModel settlementProsperityModel = ...;
var result = settlementProsperityModel.CalculateProsperityChange(fortification, false);
```

### CalculateHearthChange
`public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of hearth change.

```csharp
// Obtain an instance of SettlementProsperityModel from the subsystem API first
SettlementProsperityModel settlementProsperityModel = ...;
var result = settlementProsperityModel.CalculateHearthChange(village, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementProsperityModel instance = ...;
```

## See Also

- [Area Index](../)