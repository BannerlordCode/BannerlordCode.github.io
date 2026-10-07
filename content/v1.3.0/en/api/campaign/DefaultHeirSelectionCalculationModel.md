---
title: "DefaultHeirSelectionCalculationModel"
description: "Auto-generated class reference for DefaultHeirSelectionCalculationModel."
---
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs`

## Overview

`DefaultHeirSelectionCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeirSelectionCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultHeirSelectionCalculationModel` is the shipped answer, not the extension point. The abstract `HeirSelectionCalculationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `HeirSelectionCalculationModel` is declared `MBGameModel<HeirSelectionCalculationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<HeirSelectionCalculationModel>(new DefaultHeirSelectionCalculationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:308`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHeirSelectionCalculationModel : HeirSelectionCalculationModel
{
    // The ref parameter carries state across candidates within one selection pass, so it
    // has to be forwarded. Dropping it and passing a fresh Hero would reset the running
    // maximum on every call and change which heir the engine settles on.
    private readonly DefaultHeirSelectionCalculationModel _stock = new DefaultHeirSelectionCalculationModel();

    public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)
    {
        return _stock.CalculateHeirSelectionPoint(candidateHeir, deadHero, ref maxSkillHero);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultHeirSelectionCalculationModel>(new DefaultHeirSelectionCalculationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultHeirSelectionCalculationModel` is an `MBGameModel<HeirSelectionCalculationModel>`, not an `MBGameModel<DefaultHeirSelectionCalculationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:699`, `GetGameModel<HeirSelectionCalculationModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public override int HighestSkillPoint { get; }` |

## Key Methods

### CalculateHeirSelectionPoint
`public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**Purpose:** Calculates the current value or result of heir selection point.

```csharp
// Obtain an instance of DefaultHeirSelectionCalculationModel from the subsystem API first
DefaultHeirSelectionCalculationModel defaultHeirSelectionCalculationModel = ...;
var result = defaultHeirSelectionCalculationModel.CalculateHeirSelectionPoint(candidateHeir, deadHero, maxSkillHero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultHeirSelectionCalculationModel` for it at `SandBoxManager.cs:308`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyHeirSelectionCalculationModel : HeirSelectionCalculationModel, so it is already an MBGameModel<HeirSelectionCalculationModel>
        gameStarter.AddModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel());
    }
}
```

## See Also

- [Area Index](../)