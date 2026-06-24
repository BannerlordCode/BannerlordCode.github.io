<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanFinanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## Overview

`DefaultClanFinanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanFinanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold { get; }` |

## Key Methods

### CalculateClanGoldChange
`public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan gold change`.

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan income`.

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan expenses internal`.

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan expenses`.

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**Purpose:** Handles logic related to `calculate town income from tariffs`.

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town)`

**Purpose:** Handles logic related to `calculate town income from projects`.

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**Purpose:** Handles logic related to `calculate village income`.

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**Purpose:** Handles logic related to `calculate owner income from caravan`.

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**Purpose:** Handles logic related to `calculate owner income from workshop`.

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction()`

**Purpose:** Handles logic related to `revenue smoothen fraction`.

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**Purpose:** Handles logic related to `calculate notable daily gold change`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)