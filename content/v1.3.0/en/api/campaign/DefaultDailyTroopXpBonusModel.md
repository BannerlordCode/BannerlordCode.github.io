---
title: "DefaultDailyTroopXpBonusModel"
description: "Auto-generated class reference for DefaultDailyTroopXpBonusModel."
---
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## Overview

`DefaultDailyTroopXpBonusModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDailyTroopXpBonusModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultDailyTroopXpBonusModel` is the shipped answer, not the extension point. The abstract `DailyTroopXpBonusModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `DailyTroopXpBonusModel` is declared `MBGameModel<DailyTroopXpBonusModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/DailyTroopXpBonusModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<DailyTroopXpBonusModel>(new DefaultDailyTroopXpBonusModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:316`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDailyTroopXpBonusModel : DailyTroopXpBonusModel
{
    // Both abstract members on the base are covered by the stock implementation.
    private readonly DefaultDailyTroopXpBonusModel _stock = new DefaultDailyTroopXpBonusModel();

    public override int CalculateDailyTroopXpBonus(Town town)
    {
        return _stock.CalculateDailyTroopXpBonus(town);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultDailyTroopXpBonusModel>(new DefaultDailyTroopXpBonusModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultDailyTroopXpBonusModel` is an `MBGameModel<DailyTroopXpBonusModel>`, not an `MBGameModel<DefaultDailyTroopXpBonusModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:706`, `GetGameModel<DailyTroopXpBonusModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### CalculateDailyTroopXpBonus
`public override int CalculateDailyTroopXpBonus(Town town)`

**Purpose:** Calculates the current value or result of daily troop xp bonus.

```csharp
// Obtain an instance of DefaultDailyTroopXpBonusModel from the subsystem API first
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateDailyTroopXpBonus(town);
```

### CalculateGarrisonXpBonusMultiplier
`public override float CalculateGarrisonXpBonusMultiplier(Town town)`

**Purpose:** Calculates the current value or result of garrison xp bonus multiplier.

```csharp
// Obtain an instance of DefaultDailyTroopXpBonusModel from the subsystem API first
DefaultDailyTroopXpBonusModel defaultDailyTroopXpBonusModel = ...;
var result = defaultDailyTroopXpBonusModel.CalculateGarrisonXpBonusMultiplier(town);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultDailyTroopXpBonusModel` for it at `SandBoxManager.cs:316`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyDailyTroopXpBonusModel : DailyTroopXpBonusModel, so it is already an MBGameModel<DailyTroopXpBonusModel>
        gameStarter.AddModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel());
    }
}
```

## See Also

- [Area Index](../)