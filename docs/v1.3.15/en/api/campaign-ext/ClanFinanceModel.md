<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`

## Overview

`ClanFinanceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ClanFinanceModel>(new MyClanFinanceModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold { get; }` |

## Key Methods

### CalculateClanGoldChange
```csharp
public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanIncome
```csharp
public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpenses
```csharp
public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateTownIncomeFromTariffs
```csharp
public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)
```

### CalculateTownIncomeFromProjects
```csharp
public abstract int CalculateTownIncomeFromProjects(Town town)
```

### CalculateNotableDailyGoldChange
```csharp
public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)
```

### CalculateVillageIncome
```csharp
public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)
```

### CalculateOwnerIncomeFromCaravan
```csharp
public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)
```

### CalculateOwnerIncomeFromWorkshop
```csharp
public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)
```

### RevenueSmoothenFraction
```csharp
public abstract float RevenueSmoothenFraction()
```

## Usage Example

```csharp
// Typical usage of ClanFinanceModel (Model)
Game.Current.ReplaceModel<ClanFinanceModel>(new MyClanFinanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)