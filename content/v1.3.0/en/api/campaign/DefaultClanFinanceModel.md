---
title: "DefaultClanFinanceModel"
description: "Auto-generated class reference for DefaultClanFinanceModel."
---
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

**Purpose:** Calculates the current value or result of clan gold change.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanGoldChange(clan, false, false, false);
```

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Calculates the current value or result of clan income.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanIncome(clan, false, false, false);
```

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Calculates the current value or result of clan expenses internal.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
defaultClanFinanceModel.CalculateClanExpensesInternal(clan, goldChange, false, false);
```

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Calculates the current value or result of clan expenses.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanExpenses(clan, false, false, false);
```

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**Purpose:** Calculates the current value or result of town income from tariffs.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateTownIncomeFromTariffs(clan, town, false);
```

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town)`

**Purpose:** Calculates the current value or result of town income from projects.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateTownIncomeFromProjects(town);
```

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**Purpose:** Calculates the current value or result of village income.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateVillageIncome(clan, village, false);
```

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**Purpose:** Calculates the current value or result of owner income from caravan.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateOwnerIncomeFromCaravan(caravan);
```

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**Purpose:** Calculates the current value or result of owner income from workshop.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateOwnerIncomeFromWorkshop(workshop);
```

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction()`

**Purpose:** Executes the RevenueSmoothenFraction logic.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.RevenueSmoothenFraction();
```

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**Purpose:** Calculates the current value or result of notable daily gold change.

```csharp
// Obtain an instance of DefaultClanFinanceModel from the subsystem API first
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateNotableDailyGoldChange(hero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## See Also

- [Area Index](../)