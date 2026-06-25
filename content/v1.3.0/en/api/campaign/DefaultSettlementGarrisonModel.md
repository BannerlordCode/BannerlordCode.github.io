---
title: "DefaultSettlementGarrisonModel"
description: "Auto-generated class reference for DefaultSettlementGarrisonModel."
---
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## Overview

`DefaultSettlementGarrisonModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementGarrisonModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
`public override int GetMaximumDailyAutoRecruitmentCount(Town town)`

**Purpose:** **Purpose:** Reads and returns the maximum daily auto recruitment count value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementGarrisonModel from the subsystem API first
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.GetMaximumDailyAutoRecruitmentCount(town);
```

### CalculateBaseGarrisonChange
`public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of base garrison change.

```csharp
// Obtain an instance of DefaultSettlementGarrisonModel from the subsystem API first
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.CalculateBaseGarrisonChange(settlement, false);
```

### FindNumberOfTroopsToTakeFromGarrison
`public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)`

**Purpose:** **Purpose:** Looks up the matching number of troops to take from garrison in the current collection or scope.

```csharp
// Obtain an instance of DefaultSettlementGarrisonModel from the subsystem API first
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, 0);
```

### FindNumberOfTroopsToLeaveToGarrison
`public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**Purpose:** **Purpose:** Looks up the matching number of troops to leave to garrison in the current collection or scope.

```csharp
// Obtain an instance of DefaultSettlementGarrisonModel from the subsystem API first
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);
```

### GetMaximumDailyRepairAmount
`public override float GetMaximumDailyRepairAmount(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the maximum daily repair amount value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementGarrisonModel from the subsystem API first
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.GetMaximumDailyRepairAmount(settlement);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## See Also

- [Area Index](../)