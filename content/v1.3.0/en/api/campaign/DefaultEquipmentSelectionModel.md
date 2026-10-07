---
title: "DefaultEquipmentSelectionModel"
description: "Auto-generated class reference for DefaultEquipmentSelectionModel."
---
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

`DefaultEquipmentSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEquipmentSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultEquipmentSelectionModel` is the shipped answer, not the extension point. The abstract `EquipmentSelectionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `EquipmentSelectionModel` is declared `MBGameModel<EquipmentSelectionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<EquipmentSelectionModel>(new DefaultEquipmentSelectionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:341`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyEquipmentSelectionModel : EquipmentSelectionModel
{
    // DefaultEquipmentSelectionModel is public and concrete, so hold one and call through
    // to it instead of reimplementing the other four abstract members.
    private readonly DefaultEquipmentSelectionModel _stock = new DefaultEquipmentSelectionModel();

    public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)
    {
        return _stock.GetEquipmentRostersForHeroComeOfAge(hero, isCivilian);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultEquipmentSelectionModel>(new DefaultEquipmentSelectionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultEquipmentSelectionModel` is an `MBGameModel<EquipmentSelectionModel>`, not an `MBGameModel<DefaultEquipmentSelectionModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:738`, `GetGameModel<EquipmentSelectionModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetEquipmentRostersForHeroComeOfAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**Purpose:** Reads and returns the equipment rosters for hero come of age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false);
```

### GetEquipmentRostersForHeroReachesTeenAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for hero reaches teen age value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero);
```

### GetEquipmentRostersForInitialChildrenGeneration
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for initial children generation value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForInitialChildrenGeneration(hero);
```

### GetEquipmentRostersForDeliveredOffspring
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**Purpose:** Reads and returns the equipment rosters for delivered offspring value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForDeliveredOffspring(hero);
```

### GetEquipmentRostersForCompanion
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero hero, bool isCivilian)`

**Purpose:** Reads and returns the equipment rosters for companion value held by the this instance.

```csharp
// Obtain an instance of DefaultEquipmentSelectionModel from the subsystem API first
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForCompanion(hero, false);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultEquipmentSelectionModel` for it at `SandBoxManager.cs:341`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyEquipmentSelectionModel : EquipmentSelectionModel, so it is already an MBGameModel<EquipmentSelectionModel>
        gameStarter.AddModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel());
    }
}
```

## See Also

- [Area Index](../)