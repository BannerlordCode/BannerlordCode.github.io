<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanFinanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## Overview

`DefaultClanFinanceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold { get; }` |

## Key Methods

### CalculateClanGoldChange
```csharp
public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanIncome
```csharp
public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpensesInternal
```csharp
public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpenses
```csharp
public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateTownIncomeFromTariffs
```csharp
public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)
```

### CalculateTownIncomeFromProjects
```csharp
public override int CalculateTownIncomeFromProjects(Town town)
```

### CalculateVillageIncome
```csharp
public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)
```

### CalculateOwnerIncomeFromCaravan
```csharp
public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)
```

### CalculateOwnerIncomeFromWorkshop
```csharp
public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)
```

### RevenueSmoothenFraction
```csharp
public override float RevenueSmoothenFraction()
```

### CalculateNotableDailyGoldChange
```csharp
public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)
```

## Usage Example

```csharp
// Typical usage of DefaultClanFinanceModel (Model)
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)