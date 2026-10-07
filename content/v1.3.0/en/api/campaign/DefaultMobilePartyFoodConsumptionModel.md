---
title: "DefaultMobilePartyFoodConsumptionModel"
description: "Auto-generated class reference for DefaultMobilePartyFoodConsumptionModel."
---
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## Overview

`DefaultMobilePartyFoodConsumptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyFoodConsumptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMobilePartyFoodConsumptionModel` is the shipped answer, not the extension point. The abstract `MobilePartyFoodConsumptionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MobilePartyFoodConsumptionModel` is declared `MBGameModel<MobilePartyFoodConsumptionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MobilePartyFoodConsumptionModel>(new DefaultMobilePartyFoodConsumptionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:251`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel
{
    // The method name really does end in a lowercase f — CalculateDailyBaseFoodConsumptionf.
    // Three of the four members on the base are abstract, so delegating covers them.
    private readonly DefaultMobilePartyFoodConsumptionModel _stock = new DefaultMobilePartyFoodConsumptionModel();

    public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)
    {
        return _stock.CalculateDailyBaseFoodConsumptionf(party, includeDescription);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMobilePartyFoodConsumptionModel>(new DefaultMobilePartyFoodConsumptionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMobilePartyFoodConsumptionModel` is an `MBGameModel<MobilePartyFoodConsumptionModel>`, not an `MBGameModel<DefaultMobilePartyFoodConsumptionModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:651`, `GetGameModel<MobilePartyFoodConsumptionModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public override int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
`public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**Purpose:** Calculates the current value or result of daily base food consumptionf.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyBaseFoodConsumptionf(party, false);
```

### CalculateDailyFoodConsumptionf
`public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**Purpose:** Calculates the current value or result of daily food consumptionf.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyFoodConsumptionf(party, baseConsumption);
```

### DoesPartyConsumeFood
`public override bool DoesPartyConsumeFood(MobileParty mobileParty)`

**Purpose:** Returns a boolean answer to whether party consume food is true for the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.DoesPartyConsumeFood(mobileParty);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMobilePartyFoodConsumptionModel` for it at `SandBoxManager.cs:251`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel, so it is already an MBGameModel<MobilePartyFoodConsumptionModel>
        gameStarter.AddModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel());
    }
}
```

## See Also

- [Area Index](../)