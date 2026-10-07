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

## How to use

`DefaultClanFinanceModel` is the shipped answer, not the extension point. The abstract `ClanFinanceModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `ClanFinanceModel` is declared `MBGameModel<ClanFinanceModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs:10`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<ClanFinanceModel>(new DefaultClanFinanceModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:307`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyClanFinanceModel : ClanFinanceModel
{
    // DefaultClanFinanceModel is public and concrete, so hold one and call through to it
    // instead of reimplementing the other ten members.
    private readonly DefaultClanFinanceModel _stock = new DefaultClanFinanceModel();

    public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
    {
        return _stock.CalculateClanGoldChange(clan, includeDescriptions, applyWithdrawals, includeDetails);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<ClanFinanceModel>(new MyClanFinanceModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultClanFinanceModel>(new DefaultClanFinanceModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultClanFinanceModel` is an `MBGameModel<ClanFinanceModel>`, not an `MBGameModel<DefaultClanFinanceModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:698`, `GetGameModel<ClanFinanceModel>()`), so nothing would ever look up a type you invented.

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

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultClanFinanceModel` for it at `SandBoxManager.cs:307`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyClanFinanceModel : ClanFinanceModel, so it is already an MBGameModel<ClanFinanceModel>
        gameStarter.AddModel<ClanFinanceModel>(new MyClanFinanceModel());
    }
}
```

## See Also

- [Area Index](../)