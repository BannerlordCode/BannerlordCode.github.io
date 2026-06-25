---
title: "DefaultSettlementLoyaltyModel"
description: "Auto-generated class reference for DefaultSettlementLoyaltyModel."
---
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## Overview

`DefaultSettlementLoyaltyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementLoyaltyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateLoyaltyChange
`public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of loyalty change.

```csharp
// Obtain an instance of DefaultSettlementLoyaltyModel from the subsystem API first
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
var result = defaultSettlementLoyaltyModel.CalculateLoyaltyChange(town, false);
```

### CalculateGoldGainDueToHighLoyalty
`public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** **Purpose:** Calculates the current value or result of gold gain due to high loyalty.

```csharp
// Obtain an instance of DefaultSettlementLoyaltyModel from the subsystem API first
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
defaultSettlementLoyaltyModel.CalculateGoldGainDueToHighLoyalty(town, explainedNumber);
```

### CalculateGoldCutDueToLowLoyalty
`public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** **Purpose:** Calculates the current value or result of gold cut due to low loyalty.

```csharp
// Obtain an instance of DefaultSettlementLoyaltyModel from the subsystem API first
DefaultSettlementLoyaltyModel defaultSettlementLoyaltyModel = ...;
defaultSettlementLoyaltyModel.CalculateGoldCutDueToLowLoyalty(town, explainedNumber);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel());
```

## See Also

- [Area Index](../)