---
title: "DefaultPartyFoodBuyingModel"
description: "Auto-generated class reference for DefaultPartyFoodBuyingModel."
---
# DefaultPartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**Base:** `PartyFoodBuyingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`

## Overview

`DefaultPartyFoodBuyingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyFoodBuyingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultPartyFoodBuyingModel` is the shipped answer, not the extension point. The abstract `PartyFoodBuyingModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `PartyFoodBuyingModel` is declared `MBGameModel<PartyFoodBuyingModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<PartyFoodBuyingModel>(new DefaultPartyFoodBuyingModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:253`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyPartyFoodBuyingModel : PartyFoodBuyingModel
{
    // The method returns void and speaks only through its two out parameters: which item
    // and at what price. Declaring local copies and forgetting the out keywords leaves
    // the caller buying nothing.
    private readonly DefaultPartyFoodBuyingModel _stock = new DefaultPartyFoodBuyingModel();

    public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice)
    {
        _stock.FindItemToBuy(mobileParty, settlement, out itemRosterElement, out itemElementsPrice);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<PartyFoodBuyingModel>(new MyPartyFoodBuyingModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultPartyFoodBuyingModel>(new DefaultPartyFoodBuyingModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultPartyFoodBuyingModel` is an `MBGameModel<PartyFoodBuyingModel>`, not an `MBGameModel<DefaultPartyFoodBuyingModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:653`, `GetGameModel<PartyFoodBuyingModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage { get; }` |

## Key Methods

### FindItemToBuy
`public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)`

**Purpose:** Looks up the matching item to buy in the current collection or scope.

```csharp
// Obtain an instance of DefaultPartyFoodBuyingModel from the subsystem API first
DefaultPartyFoodBuyingModel defaultPartyFoodBuyingModel = ...;
defaultPartyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemElement, itemElementsPrice);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultPartyFoodBuyingModel` for it at `SandBoxManager.cs:253`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyPartyFoodBuyingModel : PartyFoodBuyingModel, so it is already an MBGameModel<PartyFoodBuyingModel>
        gameStarter.AddModel<PartyFoodBuyingModel>(new MyPartyFoodBuyingModel());
    }
}
```

## See Also

- [Area Index](../)