---
title: "DefaultCutsceneSelectionModel"
description: "Auto-generated class reference for DefaultCutsceneSelectionModel."
---
# DefaultCutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCutsceneSelectionModel.cs`

## Overview

`DefaultCutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultCutsceneSelectionModel` is the shipped answer, not the extension point. The abstract `CutsceneSelectionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `CutsceneSelectionModel` is declared `MBGameModel<CutsceneSelectionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/CutsceneSelectionModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<CutsceneSelectionModel>(new DefaultCutsceneSelectionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:340`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCutsceneSelectionModel : CutsceneSelectionModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultCutsceneSelectionModel _stock = new DefaultCutsceneSelectionModel();

    public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
    {
        return _stock.GetKingdomDestroyedSceneNotification(kingdom);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:105` registers `new StoryModeCutsceneSelectionModel()` against the same `CutsceneSelectionModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultCutsceneSelectionModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultCutsceneSelectionModel` is an `MBGameModel<CutsceneSelectionModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:737`, `GetGameModel<CutsceneSelectionModel>()`).

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Reads and returns the kingdom destroyed scene notification value held by the this instance.

```csharp
// Obtain an instance of DefaultCutsceneSelectionModel from the subsystem API first
DefaultCutsceneSelectionModel defaultCutsceneSelectionModel = ...;
var result = defaultCutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultCutsceneSelectionModel` for it at `SandBoxManager.cs:340`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyCutsceneSelectionModel : CutsceneSelectionModel, so it is already an MBGameModel<CutsceneSelectionModel>
        gameStarter.AddModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel());
    }
}
```

## See Also

- [Area Index](../)