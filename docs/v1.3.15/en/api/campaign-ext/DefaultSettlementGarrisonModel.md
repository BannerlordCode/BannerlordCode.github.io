<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementGarrisonModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## Overview

`DefaultSettlementGarrisonModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel())` to change how it computes.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
```csharp
public override int GetMaximumDailyAutoRecruitmentCount(Town town)
```

### CalculateBaseGarrisonChange
```csharp
public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
```

### FindNumberOfTroopsToTakeFromGarrison
```csharp
public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)
```

### FindNumberOfTroopsToLeaveToGarrison
```csharp
public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
```

### GetMaximumDailyRepairAmount
```csharp
public override float GetMaximumDailyRepairAmount(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementGarrisonModel (Model)
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## See Also

- [Complete Class Catalog](../catalog)