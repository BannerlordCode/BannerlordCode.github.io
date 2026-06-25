---
title: "SettlementGarrisonModel"
description: "Auto-generated class reference for SettlementGarrisonModel."
---
# SettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Base:** `MBGameModel<SettlementGarrisonModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementGarrisonModel.cs`

## Overview

`SettlementGarrisonModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementGarrisonModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
`public abstract int GetMaximumDailyAutoRecruitmentCount(Town town)`

**Purpose:** Reads and returns the `maximum daily auto recruitment count` value held by the current object.

```csharp
// Obtain an instance of SettlementGarrisonModel from the subsystem API first
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.GetMaximumDailyAutoRecruitmentCount(town);
```

### CalculateBaseGarrisonChange
`public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `base garrison change`.

```csharp
// Obtain an instance of SettlementGarrisonModel from the subsystem API first
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.CalculateBaseGarrisonChange(settlement, false);
```

### FindNumberOfTroopsToTakeFromGarrison
`public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)`

**Purpose:** Looks up the matching `number of troops to take from garrison` in the current collection or scope.

```csharp
// Obtain an instance of SettlementGarrisonModel from the subsystem API first
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, 0);
```

### FindNumberOfTroopsToLeaveToGarrison
`public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Looks up the matching `number of troops to leave to garrison` in the current collection or scope.

```csharp
// Obtain an instance of SettlementGarrisonModel from the subsystem API first
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);
```

### GetMaximumDailyRepairAmount
`public abstract float GetMaximumDailyRepairAmount(Settlement settlement)`

**Purpose:** Reads and returns the `maximum daily repair amount` value held by the current object.

```csharp
// Obtain an instance of SettlementGarrisonModel from the subsystem API first
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.GetMaximumDailyRepairAmount(settlement);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementGarrisonModel instance = ...;
```

## See Also

- [Area Index](../)