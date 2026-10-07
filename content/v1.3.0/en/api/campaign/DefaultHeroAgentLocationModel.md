---
title: "DefaultHeroAgentLocationModel"
description: "Auto-generated class reference for DefaultHeroAgentLocationModel."
---
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`

## Overview

`DefaultHeroAgentLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroAgentLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultHeroAgentLocationModel` is the shipped answer, not the extension point. The abstract `HeroAgentLocationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `HeroAgentLocationModel` is declared `MBGameModel<HeroAgentLocationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<HeroAgentLocationModel>(new DefaultHeroAgentLocationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:299`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHeroAgentLocationModel : HeroAgentLocationModel
{
    // Both members on the base are abstract, so delegating covers the whole surface.
    private readonly DefaultHeroAgentLocationModel _stock = new DefaultHeroAgentLocationModel();

    public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)
    {
        return _stock.WillBeListedInOverlay(locationCharacter);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultHeroAgentLocationModel>(new DefaultHeroAgentLocationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultHeroAgentLocationModel` is an `MBGameModel<HeroAgentLocationModel>`, not an `MBGameModel<DefaultHeroAgentLocationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:691`, `GetGameModel<HeroAgentLocationModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### WillBeListedInOverlay
`public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**Purpose:** Executes the WillBeListedInOverlay logic.

```csharp
// Obtain an instance of DefaultHeroAgentLocationModel from the subsystem API first
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.WillBeListedInOverlay(locationCharacter);
```

### GetLocationForHero
`public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)`

**Purpose:** Reads and returns the location for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultHeroAgentLocationModel from the subsystem API first
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.GetLocationForHero(hero, settlement, heroLocationDetail);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultHeroAgentLocationModel` for it at `SandBoxManager.cs:299`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyHeroAgentLocationModel : HeroAgentLocationModel, so it is already an MBGameModel<HeroAgentLocationModel>
        gameStarter.AddModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel());
    }
}
```

## See Also

- [Area Index](../)