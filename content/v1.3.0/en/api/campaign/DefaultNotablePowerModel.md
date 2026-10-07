---
title: "DefaultNotablePowerModel"
description: "Auto-generated class reference for DefaultNotablePowerModel."
---
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## Overview

`DefaultNotablePowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultNotablePowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultNotablePowerModel` is the shipped answer, not the extension point. The abstract `NotablePowerModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `NotablePowerModel` is declared `MBGameModel<NotablePowerModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<NotablePowerModel>(new DefaultNotablePowerModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:318`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyNotablePowerModel : NotablePowerModel
{
    // Five of the seven members on the base are abstract, so delegating is the whole job.
    private readonly DefaultNotablePowerModel _stock = new DefaultNotablePowerModel();

    public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)
    {
        return _stock.CalculateDailyPowerChangeForHero(hero, includeDescriptions);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<NotablePowerModel>(new MyNotablePowerModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultNotablePowerModel>(new DefaultNotablePowerModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultNotablePowerModel` is an `MBGameModel<NotablePowerModel>`, not an `MBGameModel<DefaultNotablePowerModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:708`, `GetGameModel<NotablePowerModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit { get; }` |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel { get; }` |

## Key Methods

### CalculateDailyPowerChangeForHero
`public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of daily power change for hero.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.CalculateDailyPowerChangeForHero(hero, false);
```

### GetPowerRankName
`public override TextObject GetPowerRankName(Hero hero)`

**Purpose:** Reads and returns the power rank name value held by the this instance.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetPowerRankName(hero);
```

### GetInfluenceBonusToClan
`public override float GetInfluenceBonusToClan(Hero hero)`

**Purpose:** Reads and returns the influence bonus to clan value held by the this instance.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInfluenceBonusToClan(hero);
```

### GetInitialPower
`public override int GetInitialPower(Hero hero)`

**Purpose:** Reads and returns the initial power value held by the this instance.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialPower(hero);
```

### GetInitialNotableSupporterCost
`public override int GetInitialNotableSupporterCost(Hero hero)`

**Purpose:** Reads and returns the initial notable supporter cost value held by the this instance.

```csharp
// Obtain an instance of DefaultNotablePowerModel from the subsystem API first
DefaultNotablePowerModel defaultNotablePowerModel = ...;
var result = defaultNotablePowerModel.GetInitialNotableSupporterCost(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultNotablePowerModel` for it at `SandBoxManager.cs:318`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyNotablePowerModel : NotablePowerModel, so it is already an MBGameModel<NotablePowerModel>
        gameStarter.AddModel<NotablePowerModel>(new MyNotablePowerModel());
    }
}
```

## See Also

- [Area Index](../)