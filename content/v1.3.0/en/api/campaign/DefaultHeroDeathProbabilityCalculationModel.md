---
title: "DefaultHeroDeathProbabilityCalculationModel"
description: "Auto-generated class reference for DefaultHeroDeathProbabilityCalculationModel."
---
# DefaultHeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroDeathProbabilityCalculationModel.cs`

## Overview

`DefaultHeroDeathProbabilityCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroDeathProbabilityCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultHeroDeathProbabilityCalculationModel` is the shipped answer, not the extension point. The abstract `HeroDeathProbabilityCalculationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `HeroDeathProbabilityCalculationModel` is declared `MBGameModel<HeroDeathProbabilityCalculationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<HeroDeathProbabilityCalculationModel>(new DefaultHeroDeathProbabilityCalculationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:309`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultHeroDeathProbabilityCalculationModel _stock = new DefaultHeroDeathProbabilityCalculationModel();

    public override float CalculateHeroDeathProbability(Hero hero)
    {
        return _stock.CalculateHeroDeathProbability(hero);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:99` registers `new StoryModeHeroDeathProbabilityCalculationModel()` against the same `HeroDeathProbabilityCalculationModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultHeroDeathProbabilityCalculationModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultHeroDeathProbabilityCalculationModel` is an `MBGameModel<HeroDeathProbabilityCalculationModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:700`, `GetGameModel<HeroDeathProbabilityCalculationModel>()`).

## Key Methods

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**Purpose:** Calculates the current value or result of hero death probability.

```csharp
// Obtain an instance of DefaultHeroDeathProbabilityCalculationModel from the subsystem API first
DefaultHeroDeathProbabilityCalculationModel defaultHeroDeathProbabilityCalculationModel = ...;
var result = defaultHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultHeroDeathProbabilityCalculationModel` for it at `SandBoxManager.cs:309`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel, so it is already an MBGameModel<HeroDeathProbabilityCalculationModel>
        gameStarter.AddModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel());
    }
}
```

## See Also

- [Area Index](../)