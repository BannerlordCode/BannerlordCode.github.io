<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementGarrisonModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Base:** `MBGameModel<SettlementGarrisonModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## Overview

`SettlementGarrisonModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementGarrisonModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
`public abstract int GetMaximumDailyAutoRecruitmentCount(Town town)`

**Purpose:** Gets the current value of `maximum daily auto recruitment count`.

### CalculateBaseGarrisonChange
`public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate base garrison change`.

### FindNumberOfTroopsToTakeFromGarrison
`public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)`

**Purpose:** Handles logic related to `find number of troops to take from garrison`.

### FindNumberOfTroopsToLeaveToGarrison
`public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Handles logic related to `find number of troops to leave to garrison`.

### GetMaximumDailyRepairAmount
`public abstract float GetMaximumDailyRepairAmount(Settlement settlement)`

**Purpose:** Gets the current value of `maximum daily repair amount`.

## Usage Example

```csharp
var implementation = new CustomSettlementGarrisonModel();
```

## See Also

- [Complete Class Catalog](../catalog)