---
title: "DefaultHideoutModel"
description: "Auto-generated class reference for DefaultHideoutModel."
---
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`

## Overview

`DefaultHideoutModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHideoutModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultHideoutModel` is the shipped answer, not the extension point. The abstract `HideoutModel` is what the engine resolves and what you subclass — and it is the smallest surface in this namespace: two abstract properties and no methods at all.

**Getting one.** You do not reach for it directly. `HideoutModel` is declared `MBGameModel<HideoutModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<HideoutModel>(new DefaultHideoutModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:257`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHideoutModel : HideoutModel
{
    // DefaultHideoutModel is public and concrete, so hold one and read both windows off it.
    // The stock values are CampaignTime.SunSet + 1 and CampaignTime.SunRise
    // (DefaultHideoutModel.cs:15 and :25).
    private readonly DefaultHideoutModel _stock = new DefaultHideoutModel();

    public override int CanAttackHideoutStartTime => _stock.CanAttackHideoutStartTime;

    public override int CanAttackHideoutEndTime => _stock.CanAttackHideoutEndTime;
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<HideoutModel>(new MyHideoutModel());
        }
    }
}
```

**Most common mistake:** overriding only one of the two properties because you copied the shape of a sibling page and stopped at the first. `HideoutModel` declares `CanAttackHideoutStartTime` (`HideoutModel.cs:11`) and `CanAttackHideoutEndTime` (`HideoutModel.cs:15`) as *both* abstract, so a subclass that implements only one stays abstract and will not compile — and the failure names the property you forgot, not the model you were thinking of. The same applies to the type argument: `AddModel<DefaultHideoutModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultHideoutModel` is an `MBGameModel<HideoutModel>`, not an `MBGameModel<DefaultHideoutModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:656`, `GetGameModel<HideoutModel>()`).

## Key Properties

| Name | Signature |
|------|-----------|
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime { get; }` |

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultHideoutModel` for it at `SandBoxManager.cs:257`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyHideoutModel : HideoutModel, so it is already an MBGameModel<HideoutModel>
        gameStarter.AddModel<HideoutModel>(new MyHideoutModel());
    }
}
```

## See Also

- [Area Index](../)