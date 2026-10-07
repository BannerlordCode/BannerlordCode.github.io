---
title: "DefaultDisguiseDetectionModel"
description: "Auto-generated class reference for DefaultDisguiseDetectionModel."
---
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDisguiseDetectionModel.cs`

## Overview

`DefaultDisguiseDetectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDisguiseDetectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultDisguiseDetectionModel` is the shipped answer, not the extension point. The abstract `DisguiseDetectionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `DisguiseDetectionModel` is declared `MBGameModel<DisguiseDetectionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/DisguiseDetectionModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<DisguiseDetectionModel>(new DefaultDisguiseDetectionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:272`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDisguiseDetectionModel : DisguiseDetectionModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultDisguiseDetectionModel _stock = new DefaultDisguiseDetectionModel();

    public override float CalculateDisguiseDetectionProbability(Settlement settlement)
    {
        return _stock.CalculateDisguiseDetectionProbability(settlement);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultDisguiseDetectionModel>(new DefaultDisguiseDetectionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultDisguiseDetectionModel` is an `MBGameModel<DisguiseDetectionModel>`, not an `MBGameModel<DefaultDisguiseDetectionModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:716`, `GetGameModel<DisguiseDetectionModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### CalculateDisguiseDetectionProbability
`public override float CalculateDisguiseDetectionProbability(Settlement settlement)`

**Purpose:** Calculates the current value or result of disguise detection probability.

```csharp
// Obtain an instance of DefaultDisguiseDetectionModel from the subsystem API first
DefaultDisguiseDetectionModel defaultDisguiseDetectionModel = ...;
var result = defaultDisguiseDetectionModel.CalculateDisguiseDetectionProbability(settlement);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultDisguiseDetectionModel` for it at `SandBoxManager.cs:272`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyDisguiseDetectionModel : DisguiseDetectionModel, so it is already an MBGameModel<DisguiseDetectionModel>
        gameStarter.AddModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel());
    }
}
```

## See Also

- [Area Index](../)