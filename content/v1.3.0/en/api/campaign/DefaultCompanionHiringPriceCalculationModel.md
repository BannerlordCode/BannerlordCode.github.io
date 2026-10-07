---
title: "DefaultCompanionHiringPriceCalculationModel"
description: "Auto-generated class reference for DefaultCompanionHiringPriceCalculationModel."
---
# DefaultCompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel`
**Base:** `CompanionHiringPriceCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCompanionHiringPriceCalculationModel.cs`

## Overview

`DefaultCompanionHiringPriceCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCompanionHiringPriceCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultCompanionHiringPriceCalculationModel` is the shipped answer, not the extension point. The abstract `CompanionHiringPriceCalculationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `CompanionHiringPriceCalculationModel` is declared `MBGameModel<CompanionHiringPriceCalculationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<CompanionHiringPriceCalculationModel>(new DefaultCompanionHiringPriceCalculationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:324`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultCompanionHiringPriceCalculationModel _stock = new DefaultCompanionHiringPriceCalculationModel();

    public override int GetCompanionHiringPrice(Hero companion)
    {
        return _stock.GetCompanionHiringPrice(companion);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultCompanionHiringPriceCalculationModel>(new DefaultCompanionHiringPriceCalculationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultCompanionHiringPriceCalculationModel` is an `MBGameModel<CompanionHiringPriceCalculationModel>`, not an `MBGameModel<DefaultCompanionHiringPriceCalculationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:718`, `GetGameModel<CompanionHiringPriceCalculationModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetCompanionHiringPrice
`public override int GetCompanionHiringPrice(Hero companion)`

**Purpose:** Reads and returns the companion hiring price value held by the this instance.

```csharp
// Obtain an instance of DefaultCompanionHiringPriceCalculationModel from the subsystem API first
DefaultCompanionHiringPriceCalculationModel defaultCompanionHiringPriceCalculationModel = ...;
var result = defaultCompanionHiringPriceCalculationModel.GetCompanionHiringPrice(companion);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultCompanionHiringPriceCalculationModel` for it at `SandBoxManager.cs:324`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel, so it is already an MBGameModel<CompanionHiringPriceCalculationModel>
        gameStarter.AddModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel());
    }
}
```

## See Also

- [Area Index](../)