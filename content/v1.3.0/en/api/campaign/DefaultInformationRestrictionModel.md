---
title: "DefaultInformationRestrictionModel"
description: "Auto-generated class reference for DefaultInformationRestrictionModel."
---
# DefaultInformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInformationRestrictionModel : InformationRestrictionModel`
**Base:** `InformationRestrictionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInformationRestrictionModel.cs`

## Overview

`DefaultInformationRestrictionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultInformationRestrictionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultInformationRestrictionModel` is the shipped answer, not the extension point. The abstract `InformationRestrictionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `InformationRestrictionModel` is declared `MBGameModel<InformationRestrictionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<InformationRestrictionModel>(new DefaultInformationRestrictionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:233`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyInformationRestrictionModel : InformationRestrictionModel
{
    // Both members on the base are abstract, so delegating covers the whole surface.
    private readonly DefaultInformationRestrictionModel _stock = new DefaultInformationRestrictionModel();

    public override bool DoesPlayerKnowDetailsOf(Settlement settlement)
    {
        return _stock.DoesPlayerKnowDetailsOf(settlement);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<InformationRestrictionModel>(new MyInformationRestrictionModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultInformationRestrictionModel>(new DefaultInformationRestrictionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultInformationRestrictionModel` is an `MBGameModel<InformationRestrictionModel>`, not an `MBGameModel<DefaultInformationRestrictionModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:638`, `GetGameModel<InformationRestrictionModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### DoesPlayerKnowDetailsOf
`public override bool DoesPlayerKnowDetailsOf(Settlement settlement)`

**Purpose:** Returns a boolean answer to whether player know details of is true for the this instance.

```csharp
// Obtain an instance of DefaultInformationRestrictionModel from the subsystem API first
DefaultInformationRestrictionModel defaultInformationRestrictionModel = ...;
var result = defaultInformationRestrictionModel.DoesPlayerKnowDetailsOf(settlement);
```

### DoesPlayerKnowDetailsOf
`public override bool DoesPlayerKnowDetailsOf(Hero hero)`

**Purpose:** Returns a boolean answer to whether player know details of is true for the this instance.

```csharp
// Obtain an instance of DefaultInformationRestrictionModel from the subsystem API first
DefaultInformationRestrictionModel defaultInformationRestrictionModel = ...;
var result = defaultInformationRestrictionModel.DoesPlayerKnowDetailsOf(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultInformationRestrictionModel` for it at `SandBoxManager.cs:233`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyInformationRestrictionModel : InformationRestrictionModel, so it is already an MBGameModel<InformationRestrictionModel>
        gameStarter.AddModel<InformationRestrictionModel>(new MyInformationRestrictionModel());
    }
}
```

## See Also

- [Area Index](../)