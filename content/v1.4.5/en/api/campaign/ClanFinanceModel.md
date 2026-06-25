---
title: "ClanFinanceModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs`

## Overview

`ClanFinanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ClanFinanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold { get; }` |

## Key Methods

### CalculateClanGoldChange
`public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan gold change`.

### CalculateClanIncome
`public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan income`.

### CalculateClanExpenses
`public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Handles logic related to `calculate clan expenses`.

### CalculateTownIncomeFromTariffs
`public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**Purpose:** Handles logic related to `calculate town income from tariffs`.

### CalculateTownIncomeFromProjects
`public abstract int CalculateTownIncomeFromProjects(Town town)`

**Purpose:** Handles logic related to `calculate town income from projects`.

### CalculateNotableDailyGoldChange
`public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**Purpose:** Handles logic related to `calculate notable daily gold change`.

### CalculateVillageIncome
`public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**Purpose:** Handles logic related to `calculate village income`.

### CalculateOwnerIncomeFromCaravan
`public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**Purpose:** Handles logic related to `calculate owner income from caravan`.

### CalculateOwnerIncomeFromWorkshop
`public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**Purpose:** Handles logic related to `calculate owner income from workshop`.

### RevenueSmoothenFraction
`public abstract float RevenueSmoothenFraction()`

**Purpose:** Handles logic related to `revenue smoothen fraction`.

## Usage Example

```csharp
var implementation = new CustomClanFinanceModel();
```

## See Also

- [Complete Class Catalog](../catalog)