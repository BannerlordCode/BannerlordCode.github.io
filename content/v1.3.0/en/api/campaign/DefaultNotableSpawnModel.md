---
title: "DefaultNotableSpawnModel"
description: "Auto-generated class reference for DefaultNotableSpawnModel."
---
# DefaultNotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotableSpawnModel.cs`

## Overview

`DefaultNotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultNotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultNotableSpawnModel` is the shipped answer, not the extension point. The abstract `NotableSpawnModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `NotableSpawnModel` is declared `MBGameModel<NotableSpawnModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<NotableSpawnModel>(new DefaultNotableSpawnModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:263`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyNotableSpawnModel : NotableSpawnModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    // Both parameters select the target: which settlement, and for which occupation.
    private readonly DefaultNotableSpawnModel _stock = new DefaultNotableSpawnModel();

    public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
    {
        return _stock.GetTargetNotableCountForSettlement(settlement, occupation);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<NotableSpawnModel>(new MyNotableSpawnModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:98` registers `new StoryModeNotableSpawnModel()` against the same `NotableSpawnModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultNotableSpawnModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultNotableSpawnModel` is an `MBGameModel<NotableSpawnModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:709`, `GetGameModel<NotableSpawnModel>()`).

## Key Methods

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Reads and returns the target notable count for settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultNotableSpawnModel from the subsystem API first
DefaultNotableSpawnModel defaultNotableSpawnModel = ...;
var result = defaultNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultNotableSpawnModel` for it at `SandBoxManager.cs:263`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyNotableSpawnModel : NotableSpawnModel, so it is already an MBGameModel<NotableSpawnModel>
        gameStarter.AddModel<NotableSpawnModel>(new MyNotableSpawnModel());
    }
}
```

## See Also

- [Area Index](../)