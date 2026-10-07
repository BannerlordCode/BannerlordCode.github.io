---
title: "DefaultMinorFactionsModel"
description: "Auto-generated class reference for DefaultMinorFactionsModel."
---
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`

## Overview

`DefaultMinorFactionsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMinorFactionsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMinorFactionsModel` is the shipped answer, not the extension point. The abstract `MinorFactionsModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MinorFactionsModel` is declared `MBGameModel<MinorFactionsModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MinorFactionsModel>(new DefaultMinorFactionsModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:303`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMinorFactionsModel : MinorFactionsModel
{
    // The trailing flag is not decorative: it switches the calculation between the award
    // actually granted and the amount the clan would need to justify joining, so it must
    // be forwarded rather than hardcoded.
    private readonly DefaultMinorFactionsModel _stock = new DefaultMinorFactionsModel();

    public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)
    {
        return _stock.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, neededAmountForClanToJoinCalculation);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MinorFactionsModel>(new MyMinorFactionsModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMinorFactionsModel>(new DefaultMinorFactionsModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMinorFactionsModel` is an `MBGameModel<MinorFactionsModel>`, not an `MBGameModel<DefaultMinorFactionsModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:660`, `GetGameModel<MinorFactionsModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public override float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public override int MinorFactionHeroLimit { get; }` |

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
`public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**Purpose:** Reads and returns the mercenary award factor to join kingdom value held by the this instance.

```csharp
// Obtain an instance of DefaultMinorFactionsModel from the subsystem API first
DefaultMinorFactionsModel defaultMinorFactionsModel = ...;
var result = defaultMinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, false);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMinorFactionsModel` for it at `SandBoxManager.cs:303`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMinorFactionsModel : MinorFactionsModel, so it is already an MBGameModel<MinorFactionsModel>
        gameStarter.AddModel<MinorFactionsModel>(new MyMinorFactionsModel());
    }
}
```

## See Also

- [Area Index](../)