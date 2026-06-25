---
title: "ClanFinanceModel"
description: "Auto-generated class reference for ClanFinanceModel."
---
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs`

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

**Purpose:** Calculates the current value or result of `clan gold change`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanGoldChange(clan, false, false, false);
```

### CalculateClanIncome
`public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Calculates the current value or result of `clan income`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanIncome(clan, false, false, false);
```

### CalculateClanExpenses
`public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**Purpose:** Calculates the current value or result of `clan expenses`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanExpenses(clan, false, false, false);
```

### CalculateTownIncomeFromTariffs
`public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**Purpose:** Calculates the current value or result of `town income from tariffs`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateTownIncomeFromTariffs(clan, town, false);
```

### CalculateTownIncomeFromProjects
`public abstract int CalculateTownIncomeFromProjects(Town town)`

**Purpose:** Calculates the current value or result of `town income from projects`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateTownIncomeFromProjects(town);
```

### CalculateNotableDailyGoldChange
`public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**Purpose:** Calculates the current value or result of `notable daily gold change`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateNotableDailyGoldChange(hero, false);
```

### CalculateVillageIncome
`public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**Purpose:** Calculates the current value or result of `village income`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateVillageIncome(clan, village, false);
```

### CalculateOwnerIncomeFromCaravan
`public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**Purpose:** Calculates the current value or result of `owner income from caravan`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateOwnerIncomeFromCaravan(caravan);
```

### CalculateOwnerIncomeFromWorkshop
`public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**Purpose:** Calculates the current value or result of `owner income from workshop`.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateOwnerIncomeFromWorkshop(workshop);
```

### RevenueSmoothenFraction
`public abstract float RevenueSmoothenFraction()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanFinanceModel from the subsystem API first
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.RevenueSmoothenFraction();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ClanFinanceModel instance = ...;
```

## See Also

- [Area Index](../)