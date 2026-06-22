<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementGarrisonModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Base:** `MBGameModel<SettlementGarrisonModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## Overview

`SettlementGarrisonModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementGarrisonModel>(new MySettlementGarrisonModel())` to change how it computes.

## Key Methods

### GetMaximumDailyAutoRecruitmentCount
```csharp
public abstract int GetMaximumDailyAutoRecruitmentCount(Town town)
```

### CalculateBaseGarrisonChange
```csharp
public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
```

### FindNumberOfTroopsToTakeFromGarrison
```csharp
public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)
```

### FindNumberOfTroopsToLeaveToGarrison
```csharp
public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
```

### GetMaximumDailyRepairAmount
```csharp
public abstract float GetMaximumDailyRepairAmount(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of SettlementGarrisonModel (Model)
Game.Current.ReplaceModel<SettlementGarrisonModel>(new MySettlementGarrisonModel());
```

## See Also

- [Complete Class Catalog](../catalog)