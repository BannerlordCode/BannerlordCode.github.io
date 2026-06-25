---
title: "DefaultSettlementGarrisonModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementGarrisonModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`

## Overview

`DefaultSettlementGarrisonModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementGarrisonModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
`public override int GetMaximumDailyAutoRecruitmentCount(Town town)`

**Purpose:** Gets the current value of `maximum daily auto recruitment count`.

### CalculateBaseGarrisonChange
`public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate base garrison change`.

### FindNumberOfTroopsToTakeFromGarrison
`public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)`

**Purpose:** Handles logic related to `find number of troops to take from garrison`.

### FindNumberOfTroopsToLeaveToGarrison
`public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Handles logic related to `find number of troops to leave to garrison`.

### GetMaximumDailyRepairAmount
`public override float GetMaximumDailyRepairAmount(Settlement settlement)`

**Purpose:** Gets the current value of `maximum daily repair amount`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## See Also

- [Complete Class Catalog](../catalog)