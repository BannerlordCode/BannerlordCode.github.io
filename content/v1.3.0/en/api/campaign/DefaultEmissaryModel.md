---
title: "DefaultEmissaryModel"
description: "Auto-generated class reference for DefaultEmissaryModel."
---
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## Overview

`DefaultEmissaryModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEmissaryModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultEmissaryModel` is the shipped answer, not the extension point. The abstract `EmissaryModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `EmissaryModel` is declared `MBGameModel<EmissaryModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/EmissaryModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<EmissaryModel>(new DefaultEmissaryModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:277`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyEmissaryModel : EmissaryModel
{
    // DefaultEmissaryModel is public and concrete, so hold one and call through to it
    // rather than reimplementing the other member.
    private readonly DefaultEmissaryModel _stock = new DefaultEmissaryModel();

    public override bool IsEmissary(Hero hero)
    {
        return _stock.IsEmissary(hero);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<EmissaryModel>(new MyEmissaryModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultEmissaryModel>(new DefaultEmissaryModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultEmissaryModel` is an `MBGameModel<EmissaryModel>`, not an `MBGameModel<DefaultEmissaryModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:662`, `GetGameModel<EmissaryModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
`public override bool IsEmissary(Hero hero)`

**Purpose:** Determines whether the this instance is in the emissary state or condition.

```csharp
// Obtain an instance of DefaultEmissaryModel from the subsystem API first
DefaultEmissaryModel defaultEmissaryModel = ...;
var result = defaultEmissaryModel.IsEmissary(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultEmissaryModel` for it at `SandBoxManager.cs:277`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyEmissaryModel : EmissaryModel, so it is already an MBGameModel<EmissaryModel>
        gameStarter.AddModel<EmissaryModel>(new MyEmissaryModel());
    }
}
```

## See Also

- [Area Index](../)