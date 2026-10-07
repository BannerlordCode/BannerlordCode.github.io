---
title: "DefaultDelayedTeleportationModel"
description: "Auto-generated class reference for DefaultDelayedTeleportationModel."
---
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## Overview

`DefaultDelayedTeleportationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDelayedTeleportationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultDelayedTeleportationModel` is the shipped answer, not the extension point. The abstract `DelayedTeleportationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `DelayedTeleportationModel` is declared `MBGameModel<DelayedTeleportationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<DelayedTeleportationModel>(new DefaultDelayedTeleportationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:338`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDelayedTeleportationModel : DelayedTeleportationModel
{
    // DefaultDelayedTeleportationModel is public and concrete, so hold one and call through
    // to it instead of reimplementing the other abstract member.
    private readonly DefaultDelayedTeleportationModel _stock = new DefaultDelayedTeleportationModel();

    public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)
    {
        return _stock.GetTeleportationDelayAsHours(teleportingHero, target);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultDelayedTeleportationModel>(new DefaultDelayedTeleportationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultDelayedTeleportationModel` is an `MBGameModel<DelayedTeleportationModel>`, not an `MBGameModel<DefaultDelayedTeleportationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:735`, `GetGameModel<DelayedTeleportationModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
`public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**Purpose:** Reads and returns the teleportation delay as hours value held by the this instance.

```csharp
// Obtain an instance of DefaultDelayedTeleportationModel from the subsystem API first
DefaultDelayedTeleportationModel defaultDelayedTeleportationModel = ...;
var result = defaultDelayedTeleportationModel.GetTeleportationDelayAsHours(teleportingHero, target);
```

### CanPerformImmediateTeleport
`public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**Purpose:** Checks whether the this instance meets the preconditions for perform immediate teleport.

```csharp
// Obtain an instance of DefaultDelayedTeleportationModel from the subsystem API first
DefaultDelayedTeleportationModel defaultDelayedTeleportationModel = ...;
var result = defaultDelayedTeleportationModel.CanPerformImmediateTeleport(hero, targetMobileParty, targetSettlement);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultDelayedTeleportationModel` for it at `SandBoxManager.cs:338`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyDelayedTeleportationModel : DelayedTeleportationModel, so it is already an MBGameModel<DelayedTeleportationModel>
        gameStarter.AddModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel());
    }
}
```

## See Also

- [Area Index](../)