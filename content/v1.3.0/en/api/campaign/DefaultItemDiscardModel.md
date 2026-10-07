---
title: "DefaultItemDiscardModel"
description: "Auto-generated class reference for DefaultItemDiscardModel."
---
# DefaultItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**Base:** `ItemDiscardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs`

## Overview

`DefaultItemDiscardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultItemDiscardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultItemDiscardModel` is the shipped answer, not the extension point. The abstract `ItemDiscardModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `ItemDiscardModel` is declared `MBGameModel<ItemDiscardModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/ItemDiscardModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<ItemDiscardModel>(new DefaultItemDiscardModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:231`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyItemDiscardModel : ItemDiscardModel
{
    // All three members on the base are abstract, so delegating is the whole job.
    private readonly DefaultItemDiscardModel _stock = new DefaultItemDiscardModel();

    public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)
    {
        return _stock.GetXpBonusForDiscardingItems(itemRoster);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<ItemDiscardModel>(new MyItemDiscardModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultItemDiscardModel>(new DefaultItemDiscardModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultItemDiscardModel` is an `MBGameModel<ItemDiscardModel>`, not an `MBGameModel<DefaultItemDiscardModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:635`, `GetGameModel<ItemDiscardModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### PlayerCanDonateItem
`public override bool PlayerCanDonateItem(ItemObject item)`

**Purpose:** Executes the PlayerCanDonateItem logic.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.PlayerCanDonateItem(item);
```

### GetXpBonusForDiscardingItem
`public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**Purpose:** Reads and returns the xp bonus for discarding item value held by the this instance.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItem(item, 0);
```

### GetXpBonusForDiscardingItems
`public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**Purpose:** Reads and returns the xp bonus for discarding items value held by the this instance.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItems(itemRoster);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultItemDiscardModel` for it at `SandBoxManager.cs:231`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyItemDiscardModel : ItemDiscardModel, so it is already an MBGameModel<ItemDiscardModel>
        gameStarter.AddModel<ItemDiscardModel>(new MyItemDiscardModel());
    }
}
```

## See Also

- [Area Index](../)