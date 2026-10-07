---
title: "DefaultInventoryCapacityModel"
description: "Auto-generated class reference for DefaultInventoryCapacityModel."
---
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`

## Overview

`DefaultInventoryCapacityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultInventoryCapacityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultInventoryCapacityModel` is the shipped answer, not the extension point. The abstract `InventoryCapacityModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `InventoryCapacityModel` is declared `MBGameModel<InventoryCapacityModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<InventoryCapacityModel>(new DefaultInventoryCapacityModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:286`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyInventoryCapacityModel : InventoryCapacityModel
{
    // All four members on the base are abstract, so delegating is the whole job. Every
    // one of the seven parameters changes the number, including the three defaults, so
    // they must be forwarded rather than dropped.
    private readonly DefaultInventoryCapacityModel _stock = new DefaultInventoryCapacityModel();

    public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)
    {
        return _stock.CalculateInventoryCapacity(mobileParty, isCurrentlyAtSea, includeDescriptions, additionalManOnFoot, additionalSpareMounts, additionalPackAnimals, includeFollowers);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<InventoryCapacityModel>(new MyInventoryCapacityModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultInventoryCapacityModel>(new DefaultInventoryCapacityModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultInventoryCapacityModel` is an `MBGameModel<InventoryCapacityModel>`, not an `MBGameModel<DefaultInventoryCapacityModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:680`, `GetGameModel<InventoryCapacityModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetItemAverageWeight
`public override int GetItemAverageWeight()`

**Purpose:** Reads and returns the item average weight value held by the this instance.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemAverageWeight();
```

### GetItemEffectiveWeight
`public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, out TextObject description)`

**Purpose:** Reads and returns the item effective weight value held by the this instance.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemEffectiveWeight(equipmentElement, mobileParty, description);
```

### CalculateInventoryCapacity
`public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**Purpose:** Calculates the current value or result of inventory capacity.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateInventoryCapacity(mobileParty, false, false, 0, 0, 0, false);
```

### CalculateTotalWeightCarried
`public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of total weight carried.

```csharp
// Obtain an instance of DefaultInventoryCapacityModel from the subsystem API first
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateTotalWeightCarried(mobileParty, false, false);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultInventoryCapacityModel` for it at `SandBoxManager.cs:286`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyInventoryCapacityModel : InventoryCapacityModel, so it is already an MBGameModel<InventoryCapacityModel>
        gameStarter.AddModel<InventoryCapacityModel>(new MyInventoryCapacityModel());
    }
}
```

## See Also

- [Area Index](../)