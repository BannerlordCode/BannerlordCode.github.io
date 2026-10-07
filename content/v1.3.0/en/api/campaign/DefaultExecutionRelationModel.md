---
title: "DefaultExecutionRelationModel"
description: "Auto-generated class reference for DefaultExecutionRelationModel."
---
# DefaultExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultExecutionRelationModel : ExecutionRelationModel`
**Base:** `ExecutionRelationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs`

## Overview

`DefaultExecutionRelationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultExecutionRelationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultExecutionRelationModel` is the shipped answer, not the extension point. The abstract `ExecutionRelationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `ExecutionRelationModel` is declared `MBGameModel<ExecutionRelationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<ExecutionRelationModel>(new DefaultExecutionRelationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:336`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyExecutionRelationModel : ExecutionRelationModel
{
    // DefaultExecutionRelationModel is public and concrete, so hold one and call through
    // to it. The out parameter decides whether the caller raises a toast, so it has to be
    // forwarded rather than set to a local default.
    private readonly DefaultExecutionRelationModel _stock = new DefaultExecutionRelationModel();

    public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)
    {
        return _stock.GetRelationChangeForExecutingHero(victim, hero, out showQuickNotification);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<ExecutionRelationModel>(new MyExecutionRelationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultExecutionRelationModel>(new DefaultExecutionRelationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultExecutionRelationModel` is an `MBGameModel<ExecutionRelationModel>`, not an `MBGameModel<DefaultExecutionRelationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:733`, `GetGameModel<ExecutionRelationModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroKillingHeroClanRelationPenalty` | `public override int HeroKillingHeroClanRelationPenalty { get; }` |
| `HeroKillingHeroFriendRelationPenalty` | `public override int HeroKillingHeroFriendRelationPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFactionRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroClanRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFriendRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroHonorPenalty` | `public override int PlayerExecutingHeroHonorPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenalty` | `public override int PlayerExecutingHeroFactionRelationPenalty { get; }` |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public override int PlayerExecutingHeroHonorableNobleRelationPenalty { get; }` |
| `PlayerExecutingHeroClanRelationPenalty` | `public override int PlayerExecutingHeroClanRelationPenalty { get; }` |
| `PlayerExecutingHeroFriendRelationPenalty` | `public override int PlayerExecutingHeroFriendRelationPenalty { get; }` |

## Key Methods

### GetRelationChangeForExecutingHero
`public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**Purpose:** Reads and returns the relation change for executing hero value held by the this instance.

```csharp
// Obtain an instance of DefaultExecutionRelationModel from the subsystem API first
DefaultExecutionRelationModel defaultExecutionRelationModel = ...;
var result = defaultExecutionRelationModel.GetRelationChangeForExecutingHero(victim, hero, showQuickNotification);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultExecutionRelationModel` for it at `SandBoxManager.cs:336`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyExecutionRelationModel : ExecutionRelationModel, so it is already an MBGameModel<ExecutionRelationModel>
        gameStarter.AddModel<ExecutionRelationModel>(new MyExecutionRelationModel());
    }
}
```

## See Also

- [Area Index](../)