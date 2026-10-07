---
title: "DefaultGenericXpModel"
description: "Auto-generated class reference for DefaultGenericXpModel."
---
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultGenericXpModel.cs`

## Overview

`DefaultGenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultGenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultGenericXpModel` is the shipped answer, not the extension point. The abstract `GenericXpModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `GenericXpModel` is declared `MBGameModel<GenericXpModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/GenericXpModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<GenericXpModel>(new DefaultGenericXpModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:244`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyGenericXpModel : GenericXpModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultGenericXpModel _stock = new DefaultGenericXpModel();

    public override float GetXpMultiplier(Hero hero)
    {
        return _stock.GetXpMultiplier(hero);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<GenericXpModel>(new MyGenericXpModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:97` registers `new StoryModeGenericXpModel()` against the same `GenericXpModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultGenericXpModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultGenericXpModel` is an `MBGameModel<GenericXpModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:648`, `GetGameModel<GenericXpModel>()`).

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** Reads and returns the xp multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultGenericXpModel from the subsystem API first
DefaultGenericXpModel defaultGenericXpModel = ...;
var result = defaultGenericXpModel.GetXpMultiplier(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultGenericXpModel` for it at `SandBoxManager.cs:244`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyGenericXpModel : GenericXpModel, so it is already an MBGameModel<GenericXpModel>
        gameStarter.AddModel<GenericXpModel>(new MyGenericXpModel());
    }
}
```

## See Also

- [Area Index](../)